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
      'session.stamp': 'Try this one',
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
      'bo.sub': 'Eight steps, in order — four before you touch a computer',

      'bar.play': 'Play!',
      'play.skip': 'Skip to the games',
      'play.eyebrow': 'Play · Vetted',
      'play.title': 'Games to play',
      'play.head': 'Games to play',
      'play.stamp': '3 games',
      'play.intro': 'Three Bitsy games, played through before they were listed here. Look at how each one is built, not only at what happens in it. Every link opens on itch.io in a new tab.',
      'play.carousel': 'Vetted Bitsy games',
      'play.prev': 'Previous game',
      'play.next': 'Next game',
      'play.count': '{n} of {t}',
      'play.dot': 'Game {n} of {t}',
      'play.btn': 'Play',
      'play.newtab': ' (opens itch.io in a new tab)',
      'play.noscript': 'The arrows need JavaScript. Without it all three games are still on this page — scroll sideways.',
      'play.hub.head': 'Games to play',
      'play.hub.lead': 'Three Bitsy games worth playing, and what to look at in each one.',
      'play.hub.btn': 'Open the games',

      'play.mods.head': 'What a mod changes',
      'play.mods.text': 'Two of these three run on Bitsy HD, a community extension that gives a tile more pixels than Bitsy gives you. The third is base Bitsy with nothing added. Play that one and you know exactly what the tool does on its own — everything past that is somebody having extended it.',
      'play.mods.why': 'Worth knowing before you copy something you saw. If a game does a thing your Bitsy will not do, the mod is usually the reason, not you.',
      'play.vet.head': 'Teacher\u2019s note',
      'play.vet.text': 'Every game here was played through and checked for age-appropriate content before it was added. The tags say whether a game uses mods, so you can tell what standard Bitsy can and cannot do on its own.',
      'play.vet.solo': 'itch.io is a public site and the rest of it is not vetted. These three links are.',

      'tag.mod': 'Bitsy HD mod',
      'tag.base': 'standard Bitsy',
      'tag.mobile': 'mobile + swipe',
      'tag.silent': 'no audio',
      'tag.audio': 'has music',
      'tag.jam': 'jam entry',
      'tag.favourite': 'community favourite',
      'tag.dino': 'official Bitsy Jam — Dinosaur theme',

      'mod.hd.before': 'Uses',
      'mod.hd.after': 'by Fred Bednarski — higher resolution tiles than standard Bitsy.',
      'mod.base': 'Made with base Bitsy by Adam Le Doux — no hacks or mods. The official Dinosaur Bitsy Jam was hosted by Adam Le Doux himself.',

      'g0.creator': 'by cottonsprout',
      'g0.rating': '4.9 out of 5, from 146 ratings',
      'g0.desc': 'You have a train to catch in Tomato Town — but there is a 50% off sale. Walk around, talk to residents, complete small tasks, and maybe do some shopping. A gentle world full of animal characters and hidden details.',
      'g0.look': 'Look at how the palette and the tile patterns work together. The whole world runs on three colours per room.',
      'g1.creator': 'by dreamingamaris',
      'g1.rating': '4.7 out of 5, from 380 ratings',
      'g1.desc': 'After midnight, strange customers visit a city bakery. Serve cakes to witches, vampires, ghosts, and stranger folk. Your choices matter — there are 21 possible outcomes. Made for JamCraft 3.',
      'g1.look': 'Notice how the dialogue branches work. Every customer teaches you something about what dialogue can do in a tiny game.',
      'g2.creator': 'by AK',
      'g2.rating': '4.8 out of 5, from 59 ratings',
      'g2.desc': 'You are on a mission to take selfies with all the dinosaur skeletons at the museum. You are not allowed to climb on them. This is a game about what counts as a rule and how far you will go for a good photo.',
      'g2.look': 'This was made in standard Bitsy — no mods. Everything you see is what the base tool can do. A good reference point before you start building.'
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
      'session.stamp': 'Prøv denne',
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
      'bo.sub': 'Otte trin i rækkefølge — fire før du rører en computer',

      'bar.play': 'Spil!',
      'play.skip': 'Gå til spillene',
      'play.eyebrow': 'Spil · Gennemset',
      'play.title': 'Spil du kan spille',
      'play.head': 'Spil du kan spille',
      'play.stamp': '3 spil',
      'play.intro': 'Tre Bitsy-spil, spillet igennem før de kom på listen. Se på hvordan hvert enkelt er bygget, ikke kun hvad der sker i det. Alle links åbner på itch.io i en ny fane.',
      'play.carousel': 'Gennemsete Bitsy-spil',
      'play.prev': 'Forrige spil',
      'play.next': 'Næste spil',
      'play.count': '{n} af {t}',
      'play.dot': 'Spil {n} af {t}',
      'play.btn': 'Spil',
      'play.newtab': ' (åbner itch.io i en ny fane)',
      'play.noscript': 'Pilene kræver JavaScript. Uden det ligger alle tre spil stadig på siden — rul til siden.',
      'play.hub.head': 'Spil du kan spille',
      'play.hub.lead': 'Tre Bitsy-spil, der er værd at spille, og hvad du skal kigge efter i hvert af dem.',
      'play.hub.btn': 'Åbn spillene',

      'play.mods.head': 'Hvad en mod ændrer',
      'play.mods.text': 'To af de tre kører på Bitsy HD, en udvidelse lavet af fællesskabet, som giver en flise flere pixels end Bitsy selv giver dig. Det tredje er ren Bitsy uden noget tilføjet. Spiller du det, ved du præcis hvad værktøjet kan i sig selv — alt derudover er nogen, der har bygget videre.',
      'play.mods.why': 'Værd at vide, før du kopierer noget, du har set. Hvis et spil gør noget, din Bitsy ikke vil gøre, er modden som regel grunden, ikke dig.',
      'play.vet.head': 'Lærerens note',
      'play.vet.text': 'Alle spil her er spillet igennem og tjekket for alderssvarende indhold, før de blev sat på. Mærkaterne siger, om et spil bruger mods, så du kan se hvad standard-Bitsy kan og ikke kan i sig selv.',
      'play.vet.solo': 'itch.io er en offentlig side, og resten af den er ikke gennemset. Det er de tre links her.',

      'tag.mod': 'Bitsy HD-mod',
      'tag.base': 'standard-Bitsy',
      'tag.mobile': 'mobil + swipe',
      'tag.silent': 'ingen lyd',
      'tag.audio': 'har musik',
      'tag.jam': 'jam-bidrag',
      'tag.favourite': 'fællesskabets favorit',
      'tag.dino': 'officiel Bitsy Jam — dinosaurtema',

      'mod.hd.before': 'Bruger',
      'mod.hd.after': 'af Fred Bednarski — fliser med højere opløsning end standard-Bitsy.',
      'mod.base': 'Lavet i ren Bitsy af Adam Le Doux — ingen hacks eller mods. Den officielle Dinosaur Bitsy Jam blev afholdt af Adam Le Doux selv.',

      'g0.creator': 'af cottonsprout',
      'g0.rating': '4,9 ud af 5, fra 146 bedømmelser',
      'g0.desc': 'Du skal nå et tog i Tomato Town — men der er 50% udsalg. Gå rundt, snak med beboerne, løs små opgaver, og shop måske lidt. En rolig verden fuld af dyrefigurer og skjulte detaljer.',
      'g0.look': 'Se på hvordan paletten og flisemønstrene arbejder sammen. Hele verden kører på tre farver pr. rum.',
      'g1.creator': 'af dreamingamaris',
      'g1.rating': '4,7 ud af 5, fra 380 bedømmelser',
      'g1.desc': 'Efter midnat kommer der mærkelige kunder i et bageri i byen. Servér kager for hekse, vampyrer, spøgelser og endnu mærkeligere væsner. Dine valg betyder noget — der er 21 mulige slutninger. Lavet til JamCraft 3.',
      'g1.look': 'Læg mærke til hvordan dialogen forgrener sig. Hver kunde viser dig noget om, hvad dialog kan i et lille spil.',
      'g2.creator': 'af AK',
      'g2.rating': '4,8 ud af 5, fra 59 bedømmelser',
      'g2.desc': 'Du er på en mission for at tage selfies med alle dinosaurskeletterne på museet. Du må ikke kravle op på dem. Det her er et spil om, hvad der tæller som en regel, og hvor langt du vil gå for et godt billede.',
      'g2.look': 'Det her er lavet i standard-Bitsy — ingen mods. Alt du ser, er hvad grundværktøjet kan. Et godt pejlemærke, før du selv går i gang.'
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

    /* Anything built in JS — the carousel's dots and counter — cannot carry a
       data-i18n attribute, so it relabels itself off this. */
    try {
      document.dispatchEvent(new CustomEvent('bitsy:lang', { detail: { lang: lang } }));
    } catch (e) {}
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
