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

/* ORVIK site: the live screens play only while on screen and can be paused; reduced motion starts them paused.
   Screens switch on once when they first come into view. */
(function () {
  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var ko = document.documentElement.lang === 'ko';
  var L = ko ? { pause: '일시정지', play: '재생' } : { pause: 'Pause', play: 'Play' };
  var vids = Array.prototype.slice.call(document.querySelectorAll('video.live'));
  var sync = function (v) {
    if (v._vis && !v._held) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause();
  };
  var label = function (v) { if (!v._btn) return; v._btn.textContent = v._held ? L.play : L.pause; v._btn.setAttribute('aria-pressed', v._held ? 'true' : 'false'); };
  vids.forEach(function (v) {
    v._held = !!reduce.matches; v._vis = false;
    var cap = v.parentNode.querySelector('figcaption');
    if (cap) {
      var span = document.createElement('span'); span.className = 'cap';
      while (cap.firstChild) span.appendChild(cap.firstChild);
      cap.appendChild(span);
      var b = document.createElement('button'); b.type = 'button'; b.className = 'vctl';
      b.addEventListener('click', function () { v._held = !v._held; label(v); sync(v); });
      cap.appendChild(b); v._btn = b; label(v);
    }
  });
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('on'); });
    vids.forEach(function (v) { v._vis = true; sync(v); });
    return;
  }
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); seen.unobserve(e.target); } });
  }, { threshold: 0.15 });
  reveals.forEach(function (el) { seen.observe(el); });
  var watch = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target._vis = e.isIntersecting; sync(e.target); });
  }, { threshold: 0.2 });
  vids.forEach(function (v) { watch.observe(v); });
})();
