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
      'priv.skip': 'Skip to the short version',
      'priv.title': 'What this site knows about you',
      'priv.lead': 'Short answer: almost nothing. This page says exactly what, in plain words, because a site that collects nothing should be able to show its working.',
      'priv.short.head': 'The short version',
      'priv.short.text': 'No accounts. No cookies. No analytics. No tracking. Nothing you click here is sent to anyone who runs this site.',
      'priv.short.solo': 'There is no form anywhere on this site. There is nothing here to fill in.',
      'priv.dev.head': 'What is kept on your device',
      'priv.dev.text': 'One thing. When you press the language button, your browser remembers which language you chose, under the name bj-lang. It holds either en or da and nothing else. It never leaves your browser.',
      'priv.dev.clear': 'To get rid of it: press the language button again, or clear this site\u2019s data in your browser settings. Nothing on the site breaks if you do.',
      'priv.out.head': 'What leaves your device',
      'priv.out.lead': 'Three things, none of them chosen by you, so they are listed here rather than buried.',
      'priv.out.font.t': 'The typeface.',
      'priv.out.font.d': 'Every page loads the Nunito font from Google\u2019s font service. That request tells Google your IP address and roughly which browser you are using. It happens as the page opens, before you click anything, and Google is outside the EU. The site still reads fine without it \u2014 your device falls back to its own font.',
      'priv.out.host.t': 'The host.',
      'priv.out.host.d': 'The site is served by GitHub Pages, and GitHub records visitors\u2019 IP addresses in its own server logs. That is GitHub\u2019s processing, not ours, and it cannot be turned off on a site hosted this way.',
      'priv.out.links.t': 'Links out.',
      'priv.out.links.d': 'The Play page links to games on itch.io. Nothing is sent to itch.io until you click one, and once you do you are on their site under their rules, not ours.',
      'priv.work.head': 'Pupil work',
      'priv.work.stamp': 'Nothing published yet',
      'priv.work.lead': 'No pupil work is on this site. The Co-discovery Spots are empty because no session has run. These are the rules for when they are not, and they are written down now so they cannot quietly become something else later.',
      'priv.work.a.t': 'Names stay off.',
      'priv.work.a.d': 'Work goes up under a handle you pick, not your name.',
      'priv.work.b.t': 'Nothing goes up by default.',
      'priv.work.b.d': 'Making something does not publish it. It appears only if it is deliberately added, and that step is where consent is given.',
      'priv.work.c.t': 'Thirteen is the age.',
      'priv.work.c.d': 'Under Danish law you can agree to this yourself from thirteen. Below that, a parent decides.',
      'priv.work.d.t': 'Anything comes down on request.',
      'priv.work.d.d': 'You do not have to give a reason, and you do not have to have been the one who put it up.',
      'priv.work.repo': 'One thing worth knowing: the site is a public repository, so anything published here can be read by anyone, and its edit history is public too. That is why the rules above are strict.',
      'priv.who.head': 'Who is responsible, and how to ask',
      'priv.who.stamp': 'Being settled',
      'priv.who.text': 'Who formally answers for this site \u2014 the school or the teacher personally \u2014 is still being settled, and a contact address goes here once there is one. Saying so is better than putting a name here that turns out to be the wrong one.',
      'priv.who.now': 'Until then, ask in class, or have a parent ask. Nothing will be refused for having been asked the wrong way.',
      'priv.when.head': 'When this page changes',
      'priv.when.text': 'Last checked 29 August 2026. If what the site does changes, this page changes with it.',
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
      'priv.skip': 'Gå til den korte version',
      'priv.title': 'Hvad siden ved om dig',
      'priv.lead': 'Det korte svar: næsten ingenting. Siden her siger præcis hvad, i almindelige ord, for en side, der ikke samler noget, bør kunne vise regnestykket.',
      'priv.short.head': 'Den korte version',
      'priv.short.text': 'Ingen konti. Ingen cookies. Ingen statistik. Ingen sporing. Intet af det, du klikker på her, bliver sendt til dem, der driver siden.',
      'priv.short.solo': 'Der er ingen formularer nogen steder på siden. Der er ikke noget at udfylde.',
      'priv.dev.head': 'Hvad der bliver gemt på din enhed',
      'priv.dev.text': 'Én ting. Når du trykker på sprogknappen, husker din browser hvilket sprog du valgte, under navnet bj-lang. Den indeholder enten en eller da og intet andet. Den forlader aldrig din browser.',
      'priv.dev.clear': 'Sådan slipper du af med den: tryk på sprogknappen igen, eller ryd sidens data i din browsers indstillinger. Der går ikke noget i stykker af det.',
      'priv.out.head': 'Hvad der forlader din enhed',
      'priv.out.lead': 'Tre ting, som du ikke selv har valgt, og derfor står de her i stedet for at være gemt væk.',
      'priv.out.font.t': 'Skrifttypen.',
      'priv.out.font.d': 'Hver side henter skrifttypen Nunito fra Googles skrifttypetjeneste. Den forespørgsel fortæller Google din IP-adresse og cirka hvilken browser du bruger. Det sker når siden åbner, før du klikker på noget, og Google ligger uden for EU. Siden kan sagtens læses uden \u2014 din enhed falder tilbage på sin egen skrift.',
      'priv.out.host.t': 'Serveren.',
      'priv.out.host.d': 'Siden ligger på GitHub Pages, og GitHub gemmer besøgendes IP-adresser i sine egne logfiler. Det er GitHubs behandling, ikke vores, og den kan ikke slås fra på en side, der ligger sådan her.',
      'priv.out.links.t': 'Links ud.',
      'priv.out.links.d': 'Spil-siden linker til spil på itch.io. Der bliver ikke sendt noget til itch.io, før du klikker på et link, og derefter er du på deres side under deres regler, ikke vores.',
      'priv.work.head': 'Elevarbejde',
      'priv.work.stamp': 'Intet offentliggjort endnu',
      'priv.work.lead': 'Der ligger intet elevarbejde på siden. Fælles opdagelser er tomme, fordi der ikke har været en lektion endnu. Det her er reglerne for, når de ikke er tomme, og de bliver skrevet ned nu, så de ikke stille og roligt kan blive til noget andet senere.',
      'priv.work.a.t': 'Navne bliver væk.',
      'priv.work.a.d': 'Arbejde bliver lagt op under et kaldenavn, du selv vælger, ikke dit rigtige navn.',
      'priv.work.b.t': 'Intet bliver lagt op af sig selv.',
      'priv.work.b.d': 'At lave noget offentliggør det ikke. Det kommer kun op, hvis nogen bevidst lægger det op, og det er dér, samtykket bliver givet.',
      'priv.work.c.t': 'Tretten er aldersgrænsen.',
      'priv.work.c.d': 'Efter dansk lov kan du selv sige ja til det her, fra du er tretten. Er du yngre, bestemmer en forælder.',
      'priv.work.d.t': 'Alt kan tages ned igen.',
      'priv.work.d.d': 'Du behøver ikke give en grund, og du behøver ikke være den, der lagde det op.',
      'priv.work.repo': 'Én ting er værd at vide: siden ligger i et offentligt arkiv, så alt hvad der bliver lagt op, kan læses af alle, og redigeringshistorikken er også offentlig. Det er derfor reglerne ovenfor er stramme.',
      'priv.who.head': 'Hvem er ansvarlig, og hvordan spørger man',
      'priv.who.stamp': 'Ikke afklaret endnu',
      'priv.who.text': 'Hvem der formelt står på mål for siden \u2014 skolen eller læreren personligt \u2014 er ikke afklaret endnu, og en kontaktadresse kommer her, så snart der er en. Det er bedre at sige det end at sætte et navn her, som viser sig at være det forkerte.',
      'priv.who.now': 'Indtil da: spørg i timen, eller lad en forælder spørge. Ingen får nej, fordi de spurgte på den forkerte måde.',
      'priv.when.head': 'Hvornår siden her bliver ændret',
      'priv.when.text': 'Sidst gennemgået 29. august 2026. Hvis det, siden gør, bliver ændret, bliver siden her ændret med.',
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
