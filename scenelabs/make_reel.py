#!/usr/bin/env python3
"""Assemble the O'Space vertical reel from 5 clips + voiceover + music.

Usage:
  python3 make_reel.py OUT.mp4 CLIP1 CLIP2 CLIP3 CLIP4 CLIP5 VOICEOVER MUSIC
"""
import json
import subprocess
import sys

W, H, FPS = 1080, 1920, 30
XF = 0.6  # crossfade length between clips (seconds)
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"

# One title per clip: (main line, small line)
TITLES = [
    ("Natural light.", "Clean space."),
    ("O'Space", "Production City, Dubai"),
    ("55 m²  ·  3 daylight windows", "Cyclorama 5.9 × 4.6 m"),
    ("Shoots  ·  Events", "Celebrations"),
    ("Book your shoot", "Film by SceneLabs  ·  @scenelabs"),
]


def duration(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "json", path], capture_output=True, text=True, check=True)
    return float(json.loads(out.stdout)["format"]["duration"])


def esc(text):
    return text.replace("\\", "\\\\").replace(":", "\\:").replace("'", "’")


def main():
    if len(sys.argv) != 9:
        sys.exit(__doc__)
    out, clips, vo, music = sys.argv[1], sys.argv[2:7], sys.argv[7], sys.argv[8]

    durs = [min(duration(c), 6.0) for c in clips]
    filters = []
    for i, d in enumerate(durs):
        main_t, sub_t = TITLES[i]
        t_in, t_out = 0.4, d - XF - 0.2
        alpha = (f"if(lt(t,{t_in}),0,if(lt(t,{t_in + 0.5}),(t-{t_in})/0.5,"
                 f"if(lt(t,{t_out - 0.5}),1,if(lt(t,{t_out}),({t_out}-t)/0.5,0))))")
        big = 92 if i in (1, 4) else 70
        filters.append(
            f"[{i}:v]trim=0:{d},setpts=PTS-STARTPTS,fps={FPS},"
            f"scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},"
            f"setsar=1,format=yuv420p,"
            f"drawbox=x=0:y=ih*0.62:w=iw:h=ih*0.22:color=black@0.10:t=fill,"
            f"drawtext=fontfile={FONT}:text='{esc(main_t)}':fontsize={big}:"
            f"fontcolor=white:x=(w-tw)/2:y=h*0.67:alpha='{alpha}':"
            f"shadowcolor=black@0.35:shadowx=2:shadowy=2,"
            f"drawtext=fontfile={FONT}:text='{esc(sub_t)}':fontsize=44:"
            f"fontcolor=white@0.9:x=(w-tw)/2:y=h*0.67+{big + 30}:alpha='{alpha}':"
            f"shadowcolor=black@0.35:shadowx=2:shadowy=2[v{i}]")

    # Chain crossfades
    prev, offset = "v0", 0.0
    for i in range(1, len(durs)):
        offset += durs[i - 1] - XF
        filters.append(f"[{prev}][v{i}]xfade=transition=fade:duration={XF}:"
                       f"offset={offset:.3f}[x{i}]")
        prev = f"x{i}"
    total = sum(durs) - XF * (len(durs) - 1)
    filters.append(f"[{prev}]fade=t=in:st=0:d=0.5,fade=t=out:st={total - 0.8:.3f}:d=0.8[vout]")

    # Audio: voiceover on top, music low underneath, both faded out at the end
    filters.append(f"[5:a]adelay=400|400,volume=1.0,apad[voa]")
    filters.append(f"[6:a]volume=0.22,afade=t=in:st=0:d=1,"
                   f"afade=t=out:st={total - 1.5:.3f}:d=1.5,apad[mua]")
    filters.append(f"[voa][mua]amix=inputs=2:duration=longest:normalize=0,"
                   f"atrim=0:{total:.3f}[aout]")

    cmd = ["ffmpeg", "-y"]
    for c in clips:
        cmd += ["-i", c]
    cmd += ["-i", vo, "-i", music, "-filter_complex", ";".join(filters),
            "-map", "[vout]", "-map", "[aout]", "-c:v", "libx264", "-preset", "medium",
            "-crf", "18", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k",
            "-movflags", "+faststart", "-t", f"{total:.3f}", out]
    subprocess.run(cmd, check=True)
    print(f"Done: {out} ({total:.1f}s, {W}x{H})")


if __name__ == "__main__":
    main()
