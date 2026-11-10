/* ORVIK site language. The English pages are the default address, so a first visit there goes to the page in the
   browser's language when that page exists. A language picked from the menu is remembered and wins over the browser's.
   A page reached from inside the site never moves, so the menu still works when the browser blocks storage. */
(function () {
  var KEY = 'orvik-lang', me = document.currentScript;
  var stored = function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  var code = function (tag) {
    tag = String(tag).toLowerCase();
    /* only Traditional Chinese has a page; Simplified readers stay on their next language */
    if (tag.slice(0, 2) === 'zh') return /^zh-(tw|hk|mo|hant)/.test(tag) ? 'zh-tw' : null;
    return tag.split('-')[0];
  };
  if (me && me.hasAttribute('data-auto')) {
    var pages = {};
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(function (l) { pages[l.getAttribute('hreflang').toLowerCase()] = l.href; });
    var want = stored(), site = me.src.replace(/site\/lang\.js.*$/, '');
    if (!want && document.referrer.indexOf(site) !== 0) {
      var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
      for (var i = 0; i < list.length && !want; i++) { var c = code(list[i]); if (c === 'en' || pages[c]) want = c; }
    }
    if (want && want !== 'en' && pages[want]) { location.replace(pages[want] + location.search + location.hash); return; }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('.langs a[hreflang]') : null;
    if (a) { try { localStorage.setItem(KEY, a.getAttribute('hreflang').toLowerCase()); } catch (x) {} }
    document.querySelectorAll('details.langs[open]').forEach(function (d) { if (!d.contains(e.target)) d.removeAttribute('open'); });
  });
})();
