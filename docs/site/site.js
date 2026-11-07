/* ORVIK site: page switcher, and the download links follow the latest release when GitHub answers. */
(function () {
  var sw = document.querySelector('[data-switcher]');
  if (sw) {
    var tabs = Array.prototype.slice.call(sw.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t, false); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
        if (n === null) return;
        e.preventDefault();
        select(tabs[(n + tabs.length) % tabs.length], true);
      });
    });
    select(tabs[0], false);
  }

  if (!window.fetch) return;
  fetch('https://api.github.com/repos/Zesminseok/ORVIK/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (rel) {
      if (!rel || !rel.tag_name || !rel.assets) return;
      var pick = function (suffix) { return rel.assets.filter(function (a) { return a.name.slice(-suffix.length) === suffix; })[0]; };
      var files = { mac: pick('mac-arm64.dmg'), win: pick('win-x64.exe') };
      if (!files.mac || !files.win) return;
      Object.keys(files).forEach(function (k) {
        var a = files[k];
        document.querySelectorAll('[data-asset="' + k + '"]').forEach(function (el) { el.href = a.browser_download_url; });
        document.querySelectorAll('[data-size="' + k + '"]').forEach(function (el) { el.textContent = (a.size / 1e6).toFixed(1) + ' MB'; });
      });
      var v = rel.tag_name.replace(/^v/, '');
      document.querySelectorAll('[data-version]').forEach(function (el) { el.textContent = v; });
      document.querySelectorAll('[data-notes]').forEach(function (el) { el.href = rel.html_url; });
    })
    .catch(function () {});
})();

/* ORVIK site: motion that follows the scroll (GSAP ScrollTrigger from cdnjs). On wide screens the DECKS screen rises and
   its camera moves into deck 1's waveform and over to deck 2's readouts, the pages switch as their section scrolls past, and
   the CUE CALL board pushes into its Lighting tile while it counts. At every width the screens switch on once and the spec
   rows arrive. Reduced motion, no script or no GSAP: the page stays still and complete. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (reduce || !window.gsap || !window.ScrollTrigger) { reveals.forEach(function (el) { el.classList.add('on'); }); return; }
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.hero .container', { yPercent: -14, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  /* the camera on a screen: point (fx, fy) of the 2x screenshot to the frame's centre at scale s */
  var focus = function (fx, fy, s) { return { scale: s, xPercent: (0.5 - fx * s) * 100, yPercent: (0.5 - fy * s) * 100 }; };
  var mm = gsap.matchMedia();
  mm.add('(min-width: 60rem)', function () {
    var screen = document.querySelector('[data-zoom]');
    if (screen) {
      screen.classList.add('is-zoom');
      var zoom = screen.querySelector('.live-zoom'), caps = screen.querySelectorAll('.zoom-cap'), plate = screen.querySelector('.plate');
      var tl = gsap.timeline({ defaults: { ease: 'power2.inOut' }, scrollTrigger: { trigger: screen, start: 'top top', end: '+=220%', pin: true, scrub: 0.6 } });
      tl.fromTo(plate, { scale: 0.9, y: 30 }, { scale: 1, y: 0, duration: 1, ease: 'power2.out' }, 0)
        .fromTo(caps[0], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
        .to(caps[0], { opacity: 0, y: -16, duration: 0.4 }, 1.4)
        .fromTo(zoom, focus(0.5, 0.5, 1), Object.assign(focus(810 / 2880, 400 / 1540, 2.2), { duration: 1.2 }), 1.3)
        .fromTo(caps[1], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 1.7)
        .to(caps[1], { opacity: 0, y: -16, duration: 0.4 }, 3.0)
        .to(zoom, Object.assign(focus(1700 / 2880, 680 / 1540, 2.4), { duration: 1.2 }), 2.9)
        .fromTo(caps[2], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 3.3)
        .to(zoom, Object.assign(focus(0.5, 0.5, 1), { duration: 1.1 }), 4.6)
        .to(caps[2], { opacity: 0.0, duration: 0.4 }, 5.3);
    }
    /* the pages: one stage, the tabs follow the scroll, a tab click scrolls to its page */
    var sw = document.querySelector('[data-switcher]'), st = null;
    if (sw) {
      var tabs = Array.prototype.slice.call(sw.querySelectorAll('[role="tab"]')), panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
      var on = -1, show = function (i) {
        if (i === on) return; on = i;
        tabs.forEach(function (t, k) { t.setAttribute('aria-selected', k === i ? 'true' : 'false'); t.tabIndex = k === i ? 0 : -1; });
        panels.forEach(function (p, k) { p.classList.toggle('is-on', k === i); p.setAttribute('aria-hidden', k === i ? 'false' : 'true'); });
      };
      sw.classList.add('is-scroll'); panels.forEach(function (p) { p.hidden = false; }); show(0);
      st = ScrollTrigger.create({ trigger: sw, start: 'top 12%', end: '+=' + (tabs.length * 70) + '%', pin: true, onUpdate: function (s) { show(Math.min(tabs.length - 1, Math.floor(s.progress * tabs.length))); } });
      var go = function (e) { var i = tabs.indexOf(e.currentTarget); if (i < 0) return; e.preventDefault(); e.stopImmediatePropagation(); window.scrollTo({ top: st.start + (st.end - st.start) * (i + 0.5) / tabs.length, behavior: 'smooth' }); };
      tabs.forEach(function (t) { t.addEventListener('click', go, true); });
    }
    /* the cue call board counts while the camera pushes into its Lighting tile */
    var cue = document.querySelector('.cuecall [data-live] .live-zoom');
    if (cue) gsap.timeline({ scrollTrigger: { trigger: '.cuecall', start: 'center center', end: '+=140%', pin: true, scrub: 0.6 } })
      .fromTo(cue, focus(0.5, 0.5, 1), Object.assign(focus(722 / 2880, 514 / 1540, 1.85), { duration: 1, ease: 'power2.inOut' }), 0.15)
      .to(cue, { duration: 0.6 });
    return function () {
      if (screen) screen.classList.remove('is-zoom');
      if (sw) {
        sw.classList.remove('is-scroll');
        var tabsNow = Array.prototype.slice.call(sw.querySelectorAll('[role="tab"]'));
        tabsNow.forEach(function (t) { t.removeEventListener('click', go, true); var p = document.getElementById(t.getAttribute('aria-controls')); p.classList.remove('is-on'); p.removeAttribute('aria-hidden'); p.hidden = t.getAttribute('aria-selected') !== 'true'; });
      }
    };
  });
  /* created after the pins, so their positions count the pinned scroll above them */
  reveals.forEach(function (el) { ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: function () { el.classList.add('on'); } }); });
  gsap.from('.specs .row', { opacity: 0, y: 18, duration: 0.6, ease: 'power3.out', stagger: 0.07, scrollTrigger: { trigger: '.specs', start: 'top 75%', once: true } });
  /* fonts and images change the heights the pins measured: measure again once they are in */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
