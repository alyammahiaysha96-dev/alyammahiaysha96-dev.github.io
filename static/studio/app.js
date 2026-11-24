(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- real content (public counts, 24 Nov 2026) ---------- */
  const tiktok = [
    { k: 'ig', id: 'DgBky_dgJ4z', img: 'assets/tt/blender.jpg', v: '234,012', u: 'reached', uAr: 'حساب وصل له', l: '', en: 'Never Scrub Your Blender Again', ar: 'لا تفركين الخلاط بعد اليوم' },
    { id: '7707528041836170518', v: '7,795', l: '72', en: 'How Dentists Fix a Cavity in 8 Steps', ar: 'كيف يعالج طبيب الأسنان التسوس' },
    { id: '7649830890411085088', v: '5,766', l: '62', en: 'Every Product Has a Story', ar: 'كل منتج عنده حكاية' },
    { id: '7649827835141459232', v: '3,659', l: '33', en: 'What If Ads Didn\u2019t Need Words?', ar: 'لو الإعلان ما يحتاج كلام؟' },
    { id: '7707593994121022742', v: '2,892', l: '15', en: 'Your Lint Screen Is Suffocating', ar: 'فلتر النشافة يختنق' },
    { id: '7649850768945581345', v: '2,529', l: '39', en: 'Pepper City', ar: 'مدينة الفلفل' },
    { id: '7707578543919598870', v: '2,283', l: '39', en: 'Your Spinach Is Losing Its Iron', ar: 'السبانخ يخسر الحديد' },
    { id: '7708567857650535702', v: '2,108', l: '23', en: 'These Noodles Cooked Themselves', ar: 'نودلز طبخت نفسها' },
    { id: '7707238113088867607', v: '2,084', l: '28', en: 'Red Wine Stain Panic? Salt Saves It', ar: 'بقعة على القميص؟ الملح ينقذها' },
    { id: '7706701075444731158', v: '2,077', l: '41', en: 'We Made Popcorn in a Volcano', ar: 'فشار في بركان' },
    { id: '7706342300389018882', v: '1,619', l: '22', en: 'A Paper Bag Saves the Tablecloth', ar: 'كيس ورق ينقذ المفرش' },
    { id: '7709681243662699798', v: '1,035', l: '18', en: 'The Sponge in Your Sink Is Alive', ar: 'إسفنجة المطبخ حيّة' }
  ];
  const rail = [
    { t: 'ig', id: 'DfpWs8HgWwF', img: 'assets/ig/DfpWs8HgWwF.jpg', stat: '60K reached', statAr: 'وصل ٦٠ ألف حساب', en: 'How Dentists Fix a Cavity in 8 Steps', ar: 'كيف يعالج طبيب الأسنان التسوس' },
    { t: 'yt', id: 'zeTdwPatYuU', img: 'assets/yt/zeTdwPatYuU.jpg', stat: '2.7K views', statAr: '٢٫٧ ألف مشاهدة', en: 'Red Wine Stain Panic? Salt Saves It', ar: 'بقعة على القميص؟ الملح ينقذها' },
    { t: 'yt', id: 'RjcT8-HzYA8', img: 'assets/yt/RjcT8-HzYA8.jpg', stat: '1.6K views', statAr: '١٫٦ ألف مشاهدة', en: 'Your Spinach Is Losing Its Iron', ar: 'السبانخ يخسر الحديد' },
    { t: 'yt', id: 'dWuF3TtaJxM', img: 'assets/yt/dWuF3TtaJxM.jpg', stat: '1.5K views', statAr: '١٫٥ ألف مشاهدة', en: 'This Jar Would NOT Open', ar: 'المرطبان اللي ما ينفتح' },
    { t: 'yt', id: 'aXmNAsU7IL4', img: 'assets/yt/aXmNAsU7IL4.jpg', stat: '1.4K views', statAr: '١٫٤ ألف مشاهدة', en: 'Garlic Begs: Don\u2019t Cook Me Yet!', ar: 'الثوم يترجاك: لا تطبخني الحين' },
    { t: 'yt', id: 'JuUBdbuSskU', img: 'assets/yt/JuUBdbuSskU.jpg', stat: '1.4K views', statAr: '١٫٤ ألف مشاهدة', en: 'Her Cabinet EXPLODED', ar: 'الكبت انفجر' },
    { t: 'yt', id: '8ylLmBi8MzA', img: 'assets/yt/8ylLmBi8MzA.jpg', stat: '1.3K views', statAr: '١٫٣ ألف مشاهدة', en: 'Is Salt Wearing Out Your Kidneys?', ar: 'هل الملح يتعب كليتك؟' }
  ];

  /* ---------- Arabic copy ---------- */
  const AR = {
    skip: 'انتقل إلى المحتوى', intro: 'من إنتاج SceneLabs',
    navStory: 'الحكاية', navWork: 'الأعمال', navNumbers: 'الأرقام', navServices: 'الخدمات', navContact: 'تواصل',
    heroEyebrow: 'استوديو فيديو بالذكاء الاصطناعي · دبي، الإمارات',
    heroL1: 'الأشياء اليومية،', heroL2: 'صار لها صوت.',
    heroSub: 'نحوّل الفراولة، والكبد، والمرطبان اللي ما ينفتح إلى شخصيات لها حكاية، ونخلّي منتجك بطل الحكاية.',
    ctaWork: 'شاهد الأعمال', ctaTalk: 'ابدأ مشروعك', scroll: 'انزل',
    tkFollowers: 'متابع على تيك توك', tkLikes: 'إعجاب على تيك توك', tkTop: 'مشاهدة لفيلم واحد', tkMillion: 'فيديوهات تخطّت المليون مشاهدة', tkReach: 'حساب وصلنا له على إنستغرام في ٣٠ يوم', tkLang: 'لغتين، استوديو واحد',
    c1Eye: 'الفصل الأول · الفكرة', c1Title: 'كل شيء حولك عنده سرّ يتمنى يقوله.',
    c1Text: 'مروحة مغبّرة تتنهّد. كبد يرتبك من المشروبات الغازية. مرطبان يرفض ينفتح. بدأت SceneLabs في دبي بسؤال واحد: ماذا لو الأشياء حولنا قدرت تتكلم؟ بدون مقدّم وبدون وجوه أمام الكاميرا. الأشياء نفسها هي الأبطال.',
    c2Eye: 'الفصل الثاني · المشهد', c2Title: 'بعدها نبني العالم حولها.',
    c2Text: 'إضاءة، ديكور، شخصية، صوت. كل لقطة نكتبها ونسجّل صوتها ونحرّكها ونمونتجها عندنا، بخط إنتاج حديث بالذكاء الاصطناعي، فيبقى الشكل فاخر والإيقاع سريع مثل السوشال ميديا.',
    stripEye: 'من داخل الاستوديو',
    s1: 'كبدك مع المشروبات الغازية', s2: 'مخك الساعة ١ الفجر', s3: 'كليتك ضد الملح الزايد', s4: 'زجاج الشاور الضبابي', s5: 'مروحة السقف المغبّرة', s6: 'أكلات تكره الثلاجة', s7: 'أكلات تحبها معدتك', s8: 'السلك اللي دايمًا يطيح',
    c3Eye: 'الفصل الثالث · الدراما', c3Title: 'شدّة من أول ثانية. ومفاجأة قبل ما يعيد المقطع.',
    c3Text: 'قصتنا المعروفة: شدّة، مشكلة حقيقية، لحظة مشاعر، وحل سريع. خلاط يخاف من المغسلة، فلتر نشافة يلهث، وإسفنجة طلعت حيّة. دراما صغيرة في أقل من دقيقة، يشاركها الناس ويحفظونها.',
    wEye: 'الفصل الرابع · الانتشار', wTitle: 'أفلام مصممة توقف التمرير.',
    wText: 'أكثر أفلامنا الإنجليزية مشاهدة على تيك توك وإنستغرام. اضغط على أي فيلم وشغّله هنا.',
    wNote: 'أرقام تيك توك هي المشاهدات والإعجابات العامة، ورقم إنستغرام هو عدد الحسابات اللي وصل لها الريل حسب لوحة النشر، بتاريخ ٢٤ نوفمبر ٢٠٢٦.',
    rEye: 'الشوريل ٢٠٢٦', rTitle: 'أربعين ثانية. عشر شخصيات. صوت واحد.',
    rText: 'مقتطفات من سلسلة «أشياء تتكلم»: أعضاء الجسم والأكل وأغراض البيت، كل واحد عنده مشكلة وحل. شغّل الصوت.',
    rPlay: 'شغّل مع الصوت',
    nEye: 'الجمهور', nTitle: 'أرقام حقيقية، مقروءة اليوم.',
    nFollowers: 'متابع', nLikes: 'إجمالي الإعجابات', nViews: 'مشاهدة على ١٣٨ فيديو عام', nTop: 'مشاهدة و١٦٠ ألف إعجاب لحلقة واحدة',
    nIgReach: 'حساب وصلنا له في آخر ٣٠ يوم', nIgReel: 'حساب وصل له ريل واحد (الخلاط)', nYt: 'مشاهدة للقناة على ٤٨ فيديو', nLangPlat: 'اللغات', nLang: 'كل سلسلة بالعربي والإنجليزي',
    nNote: 'المصادر: بيانات حسابات تيك توك وإنستغرام من لوحة النشر، وصفحات تيك توك ويوتيوب العامة، بتاريخ ٢٤ نوفمبر ٢٠٢٦ (بتوقيت دبي). فترة إنستغرام: من ٢٦ أكتوبر إلى ٢٤ نوفمبر ٢٠٢٦.',
    mEye: 'أشياء تتكلم · شورتس وريلز', mTitle: 'مشكلة. ارتباك. حل. وإعادة.',
    svEye: 'للعلامات التجارية', svTitle: 'منتجك، بطل الحكاية.',
    sv1t: 'إعلانات UGC بالذكاء الاصطناعي', sv1: 'إعلانات عمودية طبيعية توقف التمرير، تحسّها محتوى مو إعلان. مصممة لتيك توك والريلز والشورتس.',
    sv2t: 'مشاهد المنتج البطل', sv2: 'علبتك أو جهازك أو سناكك يصير شخصية لها طبع، ومشكلة يحلّها، ولحظة يلمع فيها.',
    sv3t: 'شروحات تعلق في الذاكرة', sv3: 'معلومات الصحة والأكل والطرق العملية، يحكيها العضو أو الغرض بنفسه، فتوصل الفكرة في أقل من دقيقة.',
    sv4t: 'سلاسل ونسخ عربية', sv4: 'شخصيات متكررة وسلاسل بحلقات، بالعربي والإنجليزي من خط إنتاج واحد.',
    p1t: 'الفكرة', p1: 'منتجك والشي الوحيد اللي لازم الناس تتذكره.',
    p2t: 'السكربت', p2: 'شدّة من أول ثانية، مشكلة حقيقية، وحل سريع.',
    p3t: 'المشهد', p3: 'شخصيات وديكور وإضاءة مصممة على هوية علامتك.',
    p4t: 'الصوت', p4: 'تسجيل ومونتاج بالعربي أو الإنجليزي أو الاثنين.',
    p5t: 'الإطلاق', p5: 'نسلّمه عمودي، جاهز لقنواتك أو قنواتنا.',
    svSafe: 'آمن للعلامات من الأساس: بدون وجوه، بدون عقود ممثلين، وبدون لحظات خارج هويتك.',
    ctEye: 'الفصل الأخير · فصلك', ctL1: 'لو منتجك يقدر يتكلم،', ctL2: 'شو بيقول؟',
    ctText: 'تعاون مع العلامات، منصات صناع المحتوى، والشراكات: راسلنا ونرد عليك بأفكار.',
    ctBtn: 'راسل SceneLabs', foot: 'أسستها عائشة اليماحي', lbOut: 'افتح على المنصة ↗'
  };
  const EN = {};
  $$('[data-i18n]').forEach(el => { EN[el.dataset.i18n] = el.textContent; });

  /* ---------- build TikTok wall ---------- */
  const wall = $('#tiktokWall');
  tiktok.forEach((x, i) => {
    const k = x.k || 'tt';
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tile reveal' + (i === 0 ? ' tile--hero' : '');
    b.dataset.kind = k; b.dataset.id = x.id;
    const unitEn = x.u || 'views', unitAr = x.uAr || 'مشاهدة';
    b.innerHTML = `<img src="${x.img || 'assets/tt/' + x.id + '.jpg'}" alt="" loading="lazy" decoding="async">
      <span class="tile__rank">${String(i + 1).padStart(2, '0')}</span>
      <span class="chip">${k === 'ig' ? 'Instagram' : 'TikTok'}</span>
      <span class="tile__play" aria-hidden="true"></span>
      <span class="tile__meta"><span class="tile__views">${x.v}<small class="lbl-unit" data-en="${unitEn}" data-ar="${unitAr}">${unitEn}</small></span>
      <span class="tile__title" data-en="${x.en}" data-ar="${x.ar}">${x.en}</span>
      ${x.l ? `<span class="tile__likes">♥ ${x.l}</span>` : ''}</span>`;
    b.setAttribute('aria-label', `Play ${k === 'ig' ? 'Instagram reel' : 'TikTok'}: ${x.en}, ${x.v} ${unitEn}`);
    wall.appendChild(b);
  });
  const railEl = $('#rail');
  rail.forEach(x => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'tile reveal';
    b.dataset.kind = x.t; b.dataset.id = x.id;
    b.innerHTML = `<img src="${x.img}" alt="" loading="lazy" decoding="async">
      <span class="chip">${x.t === 'ig' ? 'Instagram' : 'YouTube'}</span>
      <span class="tile__play" aria-hidden="true"></span>
      <span class="tile__meta"><span class="tile__title" data-en="${x.en}" data-ar="${x.ar}">${x.en}</span>
      <span class="tile__likes" data-en="${x.stat}" data-ar="${x.statAr}">${x.stat}</span></span>`;
    b.setAttribute('aria-label', `Play: ${x.en}`);
    railEl.appendChild(b);
  });

  /* ---------- language toggle ---------- */
  const setLang = (lang) => {
    const ar = lang === 'ar';
    document.documentElement.lang = ar ? 'ar' : 'en';
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; el.textContent = ar ? (AR[k] || EN[k]) : EN[k]; });
    $$('[data-en]').forEach(el => { el.textContent = ar ? el.dataset.ar : el.dataset.en; });
    $('#langToggle').setAttribute('aria-label', ar ? 'Switch language to English' : 'Switch language to Arabic');
    $('#mailBtn').href = 'mailto:alyammahi.aysha96@gmail.com?subject=' + encodeURIComponent(ar ? 'تعاون مع SceneLabs' : 'Collaboration with SceneLabs');
    try { localStorage.setItem('sl-lang', lang); } catch (e) {}
    onScroll();
  };
  $('#langToggle').addEventListener('click', () => setLang(document.documentElement.lang === 'ar' ? 'en' : 'ar'));

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  const stagger = () => $$('.reveal:not(.in)').forEach((el, i) => {
    const sib = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
    el.style.transitionDelay = Math.min(sib, 6) * 70 + 'ms';
    io.observe(el);
  });
  stagger();

  /* ---------- counters ---------- */
  const fmt = (n, dec) => dec ? n.toFixed(dec) : Math.round(n).toLocaleString('en-US');
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, to = parseFloat(el.dataset.to), dec = +el.dataset.dec || 0;
    cio.unobserve(el);
    if (reduce) { el.textContent = fmt(to, dec); return; }
    const t0 = performance.now(), d = 1800;
    const step = t => { const p = Math.min((t - t0) / d, 1), k = 1 - Math.pow(1 - p, 4); el.textContent = fmt(to * k, dec); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: .4 });
  $$('.count').forEach(el => cio.observe(el));

  /* ---------- scroll-driven: progress, nav, hero, strip ---------- */
  const nav = $('.nav'), bar = $('.progress span'), phone = $('.hero__phone'), title = $('.hero__title');
  const strip = $('#strip'), track = $('#stripTrack'), idx = $('#stripIdx');
  let ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = scrollY, h = innerHeight, max = document.documentElement.scrollHeight - h;
      bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      nav.classList.toggle('is-solid', y > 40);
      if (!reduce && y < h * 1.2) {
        const p = y / h;
        phone.style.transform = `translateY(${p * -60}px) rotate(${-3 + p * 6}deg) scale(${1 + p * .25})`;
        title.style.transform = `translateY(${p * 120}px)`; title.style.opacity = 1 - p * 1.1;
      }
      if (!reduce && strip) {
        const r = strip.getBoundingClientRect(), total = strip.offsetHeight - h;
        const p = Math.min(Math.max(-r.top / total, 0), 1);
        const dist = track.scrollWidth - innerWidth;
        track.style.transform = `translate3d(${-1 * p * Math.max(dist, 0)}px,0,0)`;
        idx.textContent = String(Math.min(8, Math.floor(p * 8) + 1)).padStart(2, '0');
      }
    });
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  /* ---------- cursor glow + card spotlight (desktop) ---------- */
  if (matchMedia('(pointer:fine)').matches && !reduce) {
    const g = $('.glow');
    addEventListener('pointermove', e => { g.style.opacity = 1; g.style.transform = `translate(${e.clientX - 260}px,${e.clientY - 260}px)`; }, { passive: true });
    $$('.card').forEach(c => c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }));
  }

  /* ---------- lightbox with official embeds ---------- */
  const lb = $('#lightbox'), stage = $('#lbStage'), out = $('#lbOut');
  let lastFocus = null;
  const open = (kind, id) => {
    let src = '', href = '';
    if (kind === 'tt') { src = `https://www.tiktok.com/player/v1/${id}?autoplay=1&loop=1&rel=0&description=1&music_info=1`; href = `https://www.tiktok.com/@scenelabs/video/${id}`; }
    if (kind === 'yt') { src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`; href = `https://www.youtube.com/shorts/${id}`; }
    if (kind === 'ig') { src = `https://www.instagram.com/reel/${id}/embed/`; href = `https://www.instagram.com/reel/${id}/`; }
    stage.innerHTML = `<iframe src="${src}" title="SceneLabs video" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="eager"></iframe>`;
    out.href = href; lastFocus = document.activeElement;
    lb.hidden = false; document.body.style.overflow = 'hidden';
    $('#reelVideo').pause();
    $('#lbClose').focus();
  };
  const close = () => { lb.hidden = true; stage.innerHTML = ''; document.body.style.overflow = ''; lastFocus && lastFocus.focus(); };
  document.addEventListener('click', e => {
    const t = e.target.closest('.tile[data-kind]');
    if (t) open(t.dataset.kind, t.dataset.id);
  });
  $('#lbClose').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) close(); });

  /* ---------- showreel with sound ---------- */
  $('#reelPlay').addEventListener('click', () => { const v = $('#reelVideo'); v.muted = false; v.currentTime = 0; v.play(); });

  /* restore language */
  let saved = null; try { saved = localStorage.getItem('sl-lang'); } catch (e) {}
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'ar' || q === 'en') saved = q;
  if (saved === 'ar') setLang('ar'); else onScroll();
})();
