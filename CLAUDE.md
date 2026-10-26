# CLAUDE.md — Regole del progetto

Sito statico per le lezioni di matematica di un IeFP (studenti 14-18 anni).
Chi lo mantiene **non è un programmatore**: ogni scelta deve privilegiare la **semplicità di manutenzione**.
Rispondi e scrivi commenti in italiano.

## Tecnologia (non cambiarla senza chiedere)

- **Jekyll + GitHub Pages**: GitHub costruisce il sito da solo a ogni caricamento. Niente Node, npm, bundler, GitHub Actions o passaggi di build.
- Usa **solo funzioni compatibili con GitHub Pages**: Jekyll 3.10, Liquid 4, kramdown. Plugin ammessi: solo quelli già attivi su GitHub Pages (oggi `jekyll-optional-front-matter`, `jekyll-titles-from-headings`, `jekyll-relative-links`).
  - Attenzione: in Jekyll 3 `where_exp` non accetta `and`/`or`. Usa un ciclo `for` con un `if`.
- **CSS puro** in `assets/css/stile.css` (niente Sass, Tailwind o framework). **JavaScript minimo** in `assets/js/sito.js`: il sito deve funzionare anche senza JS.
- Tutti i link interni passano da `| relative_url`, perché il sito può vivere in una sottocartella (`baseurl`).

## Come si aggiunge materiale (non rompere questo flusso)

Aggiungere materiale deve richiedere **solo di mettere un file in una cartella**.

```
argomenti/<nome-argomento>/
├── index.md          ← scheda: titolo, area, ordine, simbolo, descrizione, link (colore facoltativo)
├── dispense/         ┐
├── esercitazioni/    │ sottosezioni (elenco in _data/sezioni.yml): in ognuna si mettono
├── problem-solving/  │ PDF, pagine .md SENZA intestazione (titolo = prima riga "# ...")
└── giochi/           ┘ o giochi .html autonomi

blog/<categoria>/_posts/AAAA-MM-GG-titolo.md   ← articoli; categoria = nome della cartella
_modelli/            ← modelli da copiare (esercitazione, articolo); non vengono pubblicati
```

- **Niente anni**: gli argomenti sono raggruppati per **area** (`_data/aree.yml`: aritmetica, algebra, geometria, statistica-e-probabilita). La home li filtra con le chip. Il colore della scheda viene dall'area.
- La home trova gli argomenti da sola: sono le pagine con `layout: argomento`.
- Le **categorie del blog** sono in `_data/blog.yml` (nome e colore). Una cartella che non è nell'elenco funziona lo stesso, con il colore blu.
- I filtri a chip (aree, categorie) sono un solo componente JS generico: `data-filtri="prefisso"`, `data-valore`, `data-gruppo`, `data-filtrabile`.
- I nomi dei file decidono l'ordine (`01-...`). Il titolo mostrato si ricava dal nome del file (`_includes/titolo-da-file.html`) o dal primo `# titolo`.
- `_includes/raccogli-materiali.html` è l'unico punto che decide cosa conta come materiale.
- Colori ammessi: `verde`, `blu`, `arancio`, `viola`, `rosso`, `giallo` (classi `.tema-*` nel CSS).
- **Formule**: `$$...$$`. Kramdown le trasforma in `\(...\)` (in linea) o `\[...\]` (blocco), poi KaTeX le disegna. KaTeX si carica **solo nelle pagine che contengono formule**.
- **GeoGebra**: `{% include geogebra.html id="..." titolo="..." %}`. L'iframe viene creato da `sito.js` **solo al clic** (niente richieste esterne all'apertura della pagina). Non incorporare mai iframe esterni che si caricano da soli.
- **Soluzioni a scomparsa**: `<details markdown="1"><summary>Soluzione</summary> ... </details>`.
- Gli articoli del blog con data futura compaiono solo da quel giorno (comportamento standard di Jekyll).
- Se cambi questo flusso, aggiorna **anche LEGGIMI.md**: è la guida per chi gestisce il sito.

## Servizi esterni

**Nessun backend**: niente Supabase, Firebase, Cloudflare Workers o simili. Il sito è statico su GitHub Pages. Rivaluta solo se un giorno servissero dati condivisi tra dispositivi (es. classifiche dei giochi tra più classi), e in quel caso **chiedi prima**: comporterebbe dati e privacy.

## Stile: segui DESIGN.md

- Lo stile segue **DESIGN.md** (ispirato a Duolingo). Prendine **solo lo stile**: niente logo, nomi, mascotte o illustrazioni di Duolingo.
- Font gratuiti ospitati nel sito: **Nunito** per i titoli, **Nunito Sans** per il testo (`assets/fonts/`). Mai caricarli da Google Fonts.
- Tono **giocoso ma non infantile**: deve funzionare anche per ragazzi di 17-18 anni. Niente mascotte e niente testi "da bambini".
- Usa i token in `:root` di `stile.css`. Differenze volute da DESIGN.md:
  - Per il testo si usano **varianti più scure** di verde, blu e grigio (`--verde-titolo`, `--blu-testo`, `--testo-tenue`), così il contrasto rispetta WCAG AA. I colori brillanti restano per riempimenti, decorazioni e fasce.
  - Le **schede colorate in griglia** e la palette secondaria (arancio, viola, rosso, giallo) sono state chieste esplicitamente, anche se DESIGN.md le sconsiglia.
  - I bottoni hanno un "bordo 3D" a tinta piena (`box-shadow` senza sfocatura) che si abbassa al tocco. Mai ombre sfumate, gradienti o effetti vetro.
- Angoli sempre arrotondati (12px per bottoni e chip, 16px per le schede) e bordi spessi 2px.

## Due aspetti: "giocoso" e "quaderno"

- `aspetto:` in `_config.yml` sceglie lo stile: `giocoso` (DESIGN.md, `assets/css/stile.css`) oppure `quaderno` (DESIGN-quaderno.md, `assets/css/quaderno.css`, include in `_includes/quaderno/`).
- I contenuti e le cartelle sono gli stessi: cambia solo la presentazione. JS e attributi `data-*` sono condivisi.
- Ogni componente nuovo va previsto **in entrambi gli aspetti**. I fogli di stile sono indipendenti: non mescolare le classi.
- Anteprima locale del quaderno senza toccare il sito online: aggiungi una config extra con `aspetto: quaderno` (`--config _config.yml,altro.yml`).

## Interattività e animazioni

- Animazioni **leggere e veloci** (circa 120-360ms): bottoni che si premono, schede che reagiscono al passaggio e al tocco, piccoli feedback visivi.
- Transizioni tra pagine con le **View Transitions CSS** (`@view-transition`), senza librerie.
- Ogni animazione si **disattiva con `prefers-reduced-motion: reduce`**.
- Gli effetti `:hover` stanno dentro `@media (hover: hover)`, così non restano "incollati" sul touch.

## Mobile first

- Il CSS base è per smartphone. Poi i breakpoint: 600px (tablet), 900px (PC: menu in alto, la barra in basso sparisce), 1600px e oltre (LIM: tutto più grande).
- Bersagli da toccare di almeno 44px. Su telefono il menu è una barra in basso, comoda per il pollice.
- Pagine leggere: nessuna libreria esterna, immagini solo SVG o ottimizzate, KaTeX solo dove serve.
- Nessuno scroll orizzontale a 375px di larghezza.

## Privacy

- **Nessun login, nessun dato personale degli studenti**, nessun cookie, nessuna statistica o analytics, nessun form che invia dati.
- **Nessuna richiesta a servizi esterni** al caricamento della pagina: font, KaTeX e script sono dentro il sito. I link verso siti esterni (GeoGebra, Kahoot...) vanno bene.
- `localStorage` si usa solo per comodità locali, come l'ultimo anno scelto nel filtro.

## Sezione "In classe" (LIM)

- Caratteri molto grandi: dalla larghezza di 1600px in su i riquadri di `in-classe/` si ingrandiscono ancora.
- Bottone **Testo grande**: aggiunge la classe `testo-grande` a `<html>` su tutto il sito. La scelta resta salvata in `localStorage` del dispositivo e viene applicata subito da uno script in `head.html`.
- Bottone **Schermo intero**: Fullscreen API; resta nascosto dove non è supportato (iPhone).
- Strumenti rapidi (GeoGebra, Kahoot...) in `_data/in_classe.yml`. Si aprono in una nuova scheda.
- **Giochi a punti**: pagine `.md` o `.html` in `in-classe/giochi/` (layout `gioco`), elencate da sole nella pagina. Modello: `_modelli/gioco-a-punti.md`.
- **Segnapunti riutilizzabile**: `{% include segnapunti.html %}` in qualsiasi pagina, anche nei giochi degli argomenti. JS in `assets/js/segnapunti.js`; API `Segnapunti.aggiungi(i, punti)` e `Segnapunti.azzera()` per i giochi futuri. Ha un solo stato per dispositivo (`localStorage`, chiave `segnapunti`). Mai nomi degli studenti, mai invio di dati.

## Anteprima locale (solo per sviluppo)

Il Ruby di macOS (2.6) richiede versioni fissate a mano. Comandi già verificati:

```
gem install --no-document ffi:1.15.5 json:2.6.3 i18n:1.14.1 public_suffix:4.0.7 addressable:2.8.1 webrick:1.8.1
gem install --no-document jekyll:3.10.0
gem install --no-document --ignore-dependencies jekyll-optional-front-matter:0.3.2 jekyll-titles-from-headings:0.5.3 jekyll-relative-links:0.6.1
jekyll build --watch --baseurl "" -d <cartella-temporanea>/_site
```

Poi servi `_site` con `python3 -m http.server`. La cartella del progetto sta sulla Scrivania: un server avviato dal pannello di anteprima non può leggerla, quindi costruisci in una cartella temporanea e servi quella.

## Prima di consegnare una modifica

1. `jekyll build` senza errori.
2. Controllo visivo a 375px (telefono) e a 1280px o più (PC/LIM).
3. Se è cambiato il modo di aggiungere materiale, aggiorna LEGGIMI.md.
