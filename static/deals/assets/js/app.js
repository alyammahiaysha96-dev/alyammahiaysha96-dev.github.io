(function () {
  const STORAGE = "tue-lang";

  function getLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "ar" || q === "en") return q;
    try { return localStorage.getItem(STORAGE) === "ar" ? "ar" : "en"; } catch (e) { return "en"; }
  }

  function setLang(lang, push) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem(STORAGE, lang); } catch (e) {}

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = el.getAttribute(lang === "ar" ? "data-ar" : "data-en");
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const val = el.getAttribute(lang === "ar" ? "data-ar" : "data-en");
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-lang-block]").forEach((el) => {
      el.hidden = el.getAttribute("data-lang-block") !== lang;
    });

    const title = html.getAttribute(lang === "ar" ? "data-title-ar" : "data-title-en");
    const desc = html.getAttribute(lang === "ar" ? "data-desc-ar" : "data-desc-en");
    if (title) document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && desc) meta.setAttribute("content", desc);

    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.setAttribute("aria-label", lang === "ar" ? "التبديل إلى الإنجليزية" : "Switch to Arabic");
      const label = toggle.querySelector("span");
      if (label) label.textContent = lang === "ar" ? "EN" : "عربي";
    }

    document.querySelectorAll("a[data-lang-href]").forEach((a) => {
      const href = a.getAttribute("href") || a.getAttribute("data-base-href") || "";
      if (!a.hasAttribute("data-base-href")) a.setAttribute("data-base-href", href);
      const base = a.getAttribute("data-base-href");
      a.setAttribute("href", withLang(base, lang));
    });

    if (push) {
      const url = new URL(location.href);
      if (lang === "ar") url.searchParams.set("lang", "ar");
      else url.searchParams.delete("lang");
      history.replaceState({}, "", url);
    }

    document.querySelectorAll("[data-ph-en]").forEach((el) => {
      const ph = el.getAttribute(lang === "ar" ? "data-ph-ar" : "data-ph-en");
      if (ph != null) el.setAttribute("placeholder", ph);
    });

    const ld = document.getElementById("faq-ld");
    const faq = html.getAttribute(lang === "ar" ? "data-faq-ar" : "data-faq-en");
    if (ld && faq) ld.textContent = faq;
  }

  function withLang(href, lang) {
    try {
      const url = new URL(href, location.href);
      if (lang === "ar") url.searchParams.set("lang", "ar");
      else url.searchParams.delete("lang");
      return url.pathname + url.search + url.hash;
    } catch (e) {
      return href;
    }
  }

  function initNav() {
    const btn = document.getElementById("navToggle");
    const nav = document.getElementById("siteNav");
    if (!btn || !nav) return;
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function initToggle() {
    const toggle = document.getElementById("langToggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const next = document.documentElement.lang === "ar" ? "en" : "ar";
      setLang(next, true);
    });
  }

  function initCopy() {
    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const code = btn.getAttribute("data-copy");
        try { await navigator.clipboard.writeText(code); } catch (e) {}
        btn.classList.add("is-done");
        const prevEn = btn.getAttribute("data-en");
        const prevAr = btn.getAttribute("data-ar");
        btn.setAttribute("data-en", "Copied");
        btn.setAttribute("data-ar", "تم النسخ");
        btn.textContent = document.documentElement.lang === "ar" ? "تم النسخ" : "Copied";
        setTimeout(() => {
          btn.classList.remove("is-done");
          if (prevEn) btn.setAttribute("data-en", prevEn);
          if (prevAr) btn.setAttribute("data-ar", prevAr);
          btn.textContent = document.documentElement.lang === "ar" ? (prevAr || "نسخ") : (prevEn || "Copy");
        }, 1600);
      });
    });
  }

  function initFilter() {
    const search = document.getElementById("storeSearch");
    const chips = document.getElementById("catChips");
    const grid = document.getElementById("storeGrid");
    const empty = document.getElementById("emptyState");
    if (!grid) return;
    let cat = "all";

    function apply() {
      const q = (search ? search.value : "").trim().toLowerCase();
      let shown = 0;
      grid.querySelectorAll("[data-store]").forEach((card) => {
        const hay = (card.getAttribute("data-search") || "").toLowerCase();
        const c = card.getAttribute("data-cat") || "";
        const okCat = cat === "all" || c === cat;
        const okQ = !q || hay.includes(q);
        const on = okCat && okQ;
        card.hidden = !on;
        if (on) shown += 1;
      });
      if (empty) empty.classList.toggle("is-on", shown === 0);
    }

    if (search) search.addEventListener("input", apply);
    if (chips) {
      chips.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-cat]");
        if (!btn) return;
        cat = btn.getAttribute("data-cat");
        chips.querySelectorAll("[data-cat]").forEach((c) => {
          c.classList.toggle("is-on", c === btn);
          c.setAttribute("aria-pressed", c === btn ? "true" : "false");
        });
        apply();
      });
    }
    apply();
  }

  const lang = getLang();
  setLang(lang, true);
  initNav();
  initToggle();
  initCopy();
  initFilter();
})();
