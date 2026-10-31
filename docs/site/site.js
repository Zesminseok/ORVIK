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
