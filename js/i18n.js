/* Bitsy Jam portal — language toggle.
   Danish is a locale, not a page: one set of markup, strings swapped in place.

   Markup:
     <span data-i18n="hub.title">Bitsy Jam</span>
     <button data-i18n-aria="lang.switch" ...>
   Add a key to STRINGS.da for every key used on a page.

   NOTE FOR LIZ: the Danish below needs a native read-through before this goes
   in front of pupils. Keep it dry — a line that reads deadpan in English and
   enthusiastic in Danish is a different character. */

(function () {
  var STORE = 'bj-lang';

  var STRINGS = {
    en: {
      'lang.other': 'DA',
      'lang.switch': 'Switch to Danish',

      'hub.eyebrow': 'Art unit · Texture',
      'hub.title': 'Bitsy Jam',

      'nav.art': 'Art',
      'nav.design': 'Design',
      'nav.tools': 'Tools',
      'nav.exercises': 'Exercises',
      'nav.sheets4': '4 sheets',
      'nav.sheets2': '2 sheets',
      'nav.sheets3': '3 sheets',
      'nav.steps8': '8 steps',
      'nav.pending': 'Not written yet',

      'session.head': 'Snapshot from our session',
      'activity.title': 'Textures in 8×8',
      'pair.reject': '✕ The lines do not meet',
      'pair.keeper': '✓ Grass carries across',
      'pair.note': 'Both are four copies of one tile. A straight line has to land exactly on the edge or your eye finds the join before it finds the surface. Scattered marks forgive you.',

      'constraint.label': 'The constraint',
      'constraint.text': 'Eight by eight squares. Two colours. Filled or empty, nothing between.',
      'selfcheck.label': 'The self-check',
      'selfcheck.text': 'Copy your tile four times and tape it into a square. If your eye lands on the join before it lands on the surface, it is not finished.',
      'selfcheck.solo': 'On your own: hold the taped square at arm\u2019s length instead of asking someone.',

      'action.print': 'Print the sheet · PDF not committed yet',
      'action.dive': 'Deeper dive',
      'bar.art': 'Art unit',

      'gloss.head': 'Ordliste · Glossary',
      'gloss.tile': 'tile',
      'gloss.tile.da': 'flise',
      'gloss.seam': 'seam',
      'gloss.seam.da': 'søm',
      'gloss.readatsize': 'read at size',
      'gloss.notcollected': '— not collected yet',
      'gloss.searchable': 'Searchable',
      'gloss.ours': 'Ours',
      'gloss.decoy.before': 'Searching',
      'gloss.decoy.term': 'point of view',
      'gloss.decoy.middle': 'returns camera tutorials. Type',
      'gloss.decoy.instead': 'avatar',
      'gloss.decoy.after': 'instead.',
      'gloss.all': 'All 34 words · glossary page next',

      'spots.head': 'Co-discovery spots',
      'spots.stamp': 'Empty until taught',
      'spots.lead': 'Nothing here yet. Nobody has made anything.',
      'spots.sub': 'A Spot opens after a session runs. Disagreement goes at the top, names stay off, and the viewing instruction is the same self-check the maker used.',
      'pix.spots': 'Pix waits beside the empty Spots list',

      'bar.sheets': 'Hub',
      'bar.exercises': 'Exercises',
      'bar.gloss': 'Ordliste',
      'skip': 'Skip to sheet index',

      'bo.eyebrow': 'Exercises · Build order',
      'bo.title': 'Textures: build order',
      'bo.sub': 'Eight steps, in order — four before you touch a computer'
    },

    da: {
      'lang.other': 'EN',
      'lang.switch': 'Skift til engelsk',

      'hub.eyebrow': 'Kunstforløb · Struktur',
      'hub.title': 'Bitsy Jam',

      'nav.art': 'Kunst',
      'nav.design': 'Design',
      'nav.tools': 'Værktøj',
      'nav.exercises': 'Øvelser',
      'nav.sheets4': '4 ark',
      'nav.sheets2': '2 ark',
      'nav.sheets3': '3 ark',
      'nav.steps8': '8 trin',
      'nav.pending': 'Ikke skrevet endnu',

      'session.head': 'Øjebliksbillede fra timen',
      'activity.title': 'Strukturer i 8×8',
      'pair.reject': '✕ Linjerne mødes ikke',
      'pair.keeper': '✓ Græsset fortsætter',
      'pair.note': 'Begge er fire kopier af én flise. En lige linje skal ramme kanten præcist, ellers finder øjet samlingen før overfladen. Spredte streger er mere tilgivende.',

      'constraint.label': 'Reglen',
      'constraint.text': 'Otte gange otte felter. To farver. Fyldt eller tomt, intet derimellem.',
      'selfcheck.label': 'Selvtjek',
      'selfcheck.text': 'Kopiér din flise fire gange og tape den sammen til et kvadrat. Hvis øjet lander på samlingen før overfladen, er den ikke færdig.',
      'selfcheck.solo': 'Alene: hold kvadratet ud i strakt arm i stedet for at spørge nogen.',

      'action.print': 'Print arket · PDF mangler endnu',
      'action.dive': 'Gå dybere',
      'bar.art': 'Kunstforløb',

      'gloss.head': 'Ordliste · Glossary',
      'gloss.tile': 'flise',
      'gloss.tile.da': 'tile',
      'gloss.seam': 'søm',
      'gloss.seam.da': 'seam',
      'gloss.readatsize': 'læses i størrelsen',
      'gloss.notcollected': '— ikke indsamlet endnu',
      'gloss.searchable': 'Kan søges',
      'gloss.ours': 'Vores',
      'gloss.decoy.before': 'En søgning på',
      'gloss.decoy.term': 'point of view',
      'gloss.decoy.middle': 'giver kameravejledninger. Skriv',
      'gloss.decoy.instead': 'avatar',
      'gloss.decoy.after': 'i stedet.',
      'gloss.all': 'Alle 34 ord · ordlistesiden kommer',

      'spots.head': 'Fælles opdagelser',
      'spots.stamp': 'Tom indtil undervist',
      'spots.lead': 'Der er intet her endnu. Ingen har lavet noget.',
      'spots.sub': 'En side åbner efter en lektion. Uenighed står øverst, navne bliver væk, og læseinstruktionen er det samme selvtjek, som eleven brugte.',
      'pix.spots': 'Pix venter ved den tomme liste',

      'bar.sheets': 'Forside',
      'bar.exercises': 'Øvelser',
      'bar.gloss': 'Ordliste',
      'skip': 'Gå til arkoversigt',

      'bo.eyebrow': 'Øvelser · Byggerækkefølge',
      'bo.title': 'Strukturer: byggerækkefølge',
      'bo.sub': 'Otte trin i rækkefølge — fire før du rører en computer'
    }
  };

  function current() {
    try { return localStorage.getItem(STORE) === 'da' ? 'da' : 'en'; } catch (e) { return 'en'; }
  }

  function apply(lang) {
    var dict = STRINGS[lang] || STRINGS.en;
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) nodes[i].textContent = dict[key];
    }

    var aria = document.querySelectorAll('[data-i18n-aria]');
    for (var j = 0; j < aria.length; j++) {
      var akey = aria[j].getAttribute('data-i18n-aria');
      if (dict[akey] !== undefined) aria[j].setAttribute('aria-label', dict[akey]);
    }

    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) toggle.setAttribute('data-lang-next', lang === 'en' ? 'da' : 'en');
  }

  function init() {
    apply(current());
    var toggle = document.querySelector('[data-lang-toggle]');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var next = current() === 'en' ? 'da' : 'en';
      try { localStorage.setItem(STORE, next); } catch (e) {}
      apply(next);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.BitsyI18n = { apply: apply, strings: STRINGS };
})();
