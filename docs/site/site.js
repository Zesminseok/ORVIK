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

/* ORVIK site: the story. With motion, the story section holds one stage under a bar (the name, the six chapters, the
   downloads) while six chapters pass. One app window carries them: it settles from under the hero into the first
   chapter, the camera moves in on what each chapter is about (the frame turns orange while it is in), the line lights
   up word by word, then the window travels to where the next chapter's screen rests and switches page on the way. The
   line sits over or under the screen and to either side, chapter by chapter (CSS). The spec rows and the download band
   arrive once. Reduced motion, no script or no GSAP: the chapters stay a still list. GSAP 3.12.5 is served from this site. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var story = document.querySelector('[data-story]');
  if (reduce || !story || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  /* top to bottom, as ScrollTrigger refreshes them: the hero, the story pin, then what follows it */
  gsap.to('.hero .container', { yPercent: -14, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  var chapters = Array.prototype.slice.call(story.querySelectorAll('.chapter'));
  /* each title as words, so the line can light up one word at a time */
  chapters.forEach(function (c) {
    var t = c.querySelector('.ch-title'); if (!t || t.querySelector('.w')) return;
    var words = t.textContent.trim().split(/\s+/); t.setAttribute('aria-label', t.textContent.trim()); t.textContent = '';
    words.forEach(function (w, i) { var s = document.createElement('span'); s.className = 'w'; s.setAttribute('aria-hidden', 'true'); s.textContent = w; t.appendChild(s); if (i < words.length - 1) t.appendChild(document.createTextNode(' ')); });
  });
  /* the camera, in pixels of the frame each screen sits in: point (fx, fy) of the screenshot to the frame's centre at scale
     s, kept inside the screen. s counts from the screenshot fitted to the frame's width; on a phone the story draws the
     screenshot to the frame's height (already larger), so the camera only zooms past that and otherwise pans. Values are
     read again on every refresh (resize, rotation). */
  var geo = function (zoom) { var host = zoom.parentNode, fw = host.clientWidth, fh = host.clientHeight, cw = zoom.offsetWidth, ch = zoom.offsetHeight; return { fw: fw, fh: fh, cw: cw, ch: ch, base: cw / fw }; };
  var at = function (zoom, fx, fy, s) {
    var rel = function () { var g = geo(zoom); return Math.max(1, s / g.base); };
    return {
      scale: rel, transformOrigin: '0 0',
      x: function () { var g = geo(zoom), r = rel(); return Math.min(0, Math.max(g.fw - g.cw * r, g.fw / 2 - fx * g.cw * r)); },
      y: function () { var g = geo(zoom), r = rel(); return Math.min(0, Math.max(g.fh - g.ch * r, g.fh / 2 - fy * g.ch * r)); }
    };
  };
  var SHOTS = {
    decks: [[810 / 2880, 400 / 1540, 2.2], [1700 / 2880, 680 / 1540, 2.4]],
    smpte: [[2406 / 2880, 1331 / 1540, 2.0]],
    output: [[0.46, 0.42, 1.6]],
    setlist: [[0.56, 0.68, 1.6]],
    mixer: [[0.42, 0.55, 1.45]],
    cuecall: [[722 / 2880, 514 / 1540, 1.85]]
  };
  story.classList.add('is-story'); document.documentElement.classList.add('story-on');
  var inner = story.querySelector('.story-inner'), bar = document.querySelector('[data-bar]');
  var rail = bar ? Array.prototype.slice.call(bar.querySelectorAll('[data-ch]')) : [], line = bar && bar.querySelector('.bar-line span');
  var barH = function () { return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bar-h')) || 0; };
  /* where a screen rests in its own chapter: its frame with the screen's own transform cleared */
  var rest = function (plate) { var keep = plate.style.transform; plate.style.transform = 'none'; var r = plate.querySelector('.live-host').getBoundingClientRect(); plate.style.transform = keep; return r; };
  /* the move that lays screen a over where screen b rests; every screen has the app's shape, so one scale does it */
  var onto = function (a, b) {
    var m = function () { var ra = rest(a), rb = rest(b); return { s: rb.width / ra.width, x: rb.left - ra.left, y: rb.top - ra.top }; };
    return { scale: function () { return m().s; }, x: function () { return m().x; }, y: function () { return m().y; } };
  };
  /* the first screen is already there under the name, as wide as the page and running, so the first view is never
     empty; the scroll then settles it into the first chapter under the bar */
  var heroAt = function (plate) {
    var m = function () {
      var cs = getComputedStyle(inner), ir = inner.getBoundingClientRect(), pl = parseFloat(cs.paddingLeft) || 0, pr = parseFloat(cs.paddingRight) || 0;
      var cl = ir.left + pl, cw = inner.clientWidth - pl - pr, top = ir.top + barH(), r = rest(plate);
      var s = Math.max(1, Math.min(cw / r.width, (inner.clientHeight - barH()) / r.height));
      return { s: s, x: cl + (cw - r.width * s) / 2 - r.left, y: top - r.top };
    };
    return { scale: function () { return m().s; }, x: function () { return m().x; }, y: function () { return m().y; } };
  };
  /* the line comes in from the side away from its screen (from above when it sits over it, from below under it) and
     leaves the same way */
  /* wide, short windows put the line beside its screen (CSS, same query): it comes in from its outer side then */
  var besideQ = window.matchMedia('(min-width: 60.01rem) and (min-aspect-ratio: 19/10)');
  var side = function (c) {
    var l = c.getAttribute('data-layout') || '', top = /^top/.test(l), flip = /flip$/.test(l);
    return { x: function () { return besideQ.matches ? (flip ? 28 : -28) : 0; }, y: function () { return besideQ.matches ? 0 : (top ? -28 : 28); } };
  };
  var shown = null, setBar = function (on) {
    on = !!on; if (!bar || on === shown) return; shown = on;
    bar.hidden = false; bar.classList.toggle('is-shown', on); bar.inert = !on; bar.setAttribute('aria-hidden', on ? 'false' : 'true');
  };
  var current = -1, mark = function (i) {
    if (i === current) return; current = i;
    rail.forEach(function (a, k) { if (k === i) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current'); });
  };
  var land = [];
  var tl = gsap.timeline({ defaults: { ease: 'power2.inOut' }, scrollTrigger: {
    trigger: story, start: 'top top', end: '+=' + (chapters.length * 110) + '%', pin: inner, scrub: 0.7, invalidateOnRefresh: true,
    onToggle: function (self) { setBar(self.isActive); },
    onUpdate: function (self) {
      setBar(self.isActive);
      if (line) line.style.transform = 'scaleX(' + self.progress.toFixed(4) + ')';
      mark(Math.max(0, Math.min(chapters.length - 1, Math.floor((self.progress * tl.duration() + 1) / 10))));
    }
  } });
  gsap.set(story.querySelectorAll('.ch-plate'), { transformOrigin: '0 0' });
  chapters.forEach(function (c, i) {
    var t0 = i * 10, last = i === chapters.length - 1, copy = c.querySelector('.ch-copy'), plate = c.querySelector('.ch-plate');
    var host = plate.querySelector('.live-host'), zoom = plate.querySelector('.live-zoom'), words = c.querySelectorAll('.ch-title .w'), text = c.querySelector('.ch-text');
    var id = c.id.replace('ch-', ''), shots = SHOTS[id] || [], from = side(c);
    var next = last ? null : chapters[i + 1], nextPlate = next && next.querySelector('.ch-plate');
    /* the chapter's resting view: the whole screen where it fits, else (a phone) the screen at full height around the chapter's subject */
    var full = at(zoom, shots.length ? shots[0][0] : 0.5, 0.5, 1);
    if (i === 0) {
      tl.set(zoom, full, 0);
      tl.fromTo(plate, Object.assign({ opacity: 1 }, heroAt(plate)), { opacity: 1, scale: 1, x: 0, y: 0, duration: 2.4 }, 0);
    } else tl.set(zoom, full, t0 - 1.05);
    var c0 = t0 + (i === 0 ? 1.4 : 0.3);
    land.push(c0 + 1.4);
    tl.fromTo(copy, { opacity: 0, x: from.x, y: from.y }, { opacity: 1, x: 0, y: 0, duration: 1, ease: 'power3.out' }, c0)
      .fromTo(words, { opacity: 0.12 }, { opacity: 1, duration: 0.6, stagger: 0.35, ease: 'none' }, c0 + 0.4)
      .fromTo(text, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, c0 + 1.6);
    /* the camera moves in on the chapter's subject; while it is in, the frame shows the app's orange edge */
    var span = 4.8 / Math.max(1, shots.length);
    shots.forEach(function (sh, k) { tl.to(zoom, Object.assign(at(zoom, sh[0], sh[1], sh[2]), { duration: span * 0.8 }), t0 + 3.1 + k * span); });
    if (shots.length) {
      tl.fromTo(host, { '--fa': 0 }, { '--fa': 1, duration: 0.8, ease: 'power1.out', immediateRender: false }, t0 + 3.1)
        .to(zoom, Object.assign({}, full, { duration: 1.2 }), t0 + 8)
        .fromTo(host, { '--fa': 1 }, { '--fa': 0, duration: 0.8, ease: 'power1.in', immediateRender: false }, t0 + 8.2);
    }
    if (last) { tl.to({}, { duration: 1.5 }, t0 + 9.5); return; }
    /* to the next chapter: the line leaves, and the screen travels to where the next one rests while the next page
       takes its place inside it, so it reads as one window moving and switching pages */
    var T = t0 + 9;
    tl.fromTo(copy, { opacity: 1, x: 0, y: 0 }, { opacity: 0, x: from.x, y: from.y, duration: 0.7, ease: 'power2.in', immediateRender: false }, T - 0.3)
      .fromTo(plate, { x: 0, y: 0, scale: 1 }, Object.assign(onto(plate, nextPlate), { duration: 1.4, immediateRender: false }), T)
      .fromTo(nextPlate, onto(nextPlate, plate), { x: 0, y: 0, scale: 1, duration: 1.4, immediateRender: false }, T)
      .fromTo(nextPlate, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'power1.out', immediateRender: false }, T + 0.2)
      .fromTo(plate, { opacity: 1 }, { opacity: 0, duration: 0.3, ease: 'none', immediateRender: false }, T + 1.0);
  });
  /* the bar's chapters jump to where each chapter's line has arrived */
  rail.forEach(function (a, k) {
    a.addEventListener('click', function (e) {
      var st = tl.scrollTrigger; if (!st) return;
      e.preventDefault();
      window.scrollTo({ top: Math.round(st.start + (land[k] / tl.duration()) * (st.end - st.start)), behavior: 'smooth' });
    });
  });
  var top = bar && bar.querySelector('.bar-mark');
  if (top) top.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  gsap.from('.specs .row', { opacity: 0, y: 18, duration: 0.6, ease: 'power3.out', stagger: 0.07, scrollTrigger: { trigger: '.specs', start: 'top 75%', once: true } });
  gsap.from('.get .split-text > *, .get .split-visual', { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: '.get', start: 'top 70%', once: true } });
  /* fonts and images change the heights the pins measured: measure again once they are in */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
