# LEGGIMI — Come usare e aggiornare il sito

Questa guida spiega, passo passo, come aggiungere materiale al sito.
**Non serve saper programmare**: quasi sempre basta mettere un file nella cartella giusta.

---

## 1. Com'è fatto il sito

Il sito ha tre parti: **Argomenti**, **Blog** e **In classe** (per la LIM).
Le cartelle che userai davvero sono due: **`argomenti/`** e **`blog/`**.

```
argomenti/
└── percentuali/              ← un argomento
    ├── index.md              ← la "scheda": titolo, area, simbolo...
    ├── dispense/             ┐
    ├── esercitazioni/        │  le quattro sottosezioni:
    ├── problem-solving/      │  qui metti PDF o pagine .md
    └── giochi/               ┘

blog/
├── divulgazione/_posts/      ← un articolo = un file .md
├── lettere/_posts/
└── articoli/_posts/

in-classe/giochi/             ← giochi a punti per la LIM

_modelli/                     ← modelli pronti da copiare (non compaiono sul sito)
```

Le altre cartelle e i file che iniziano con il trattino basso (`_layouts`, `_includes`, `assets`...) sono il **"motore"** del sito: **non toccarli**.
Le eccezioni sono `_modelli/` e i piccoli elenchi in `_data/`, che puoi modificare (vedi il punto 9).

> **Come si aggiorna il sito?** Quando carichi un file su GitHub, il sito si aggiorna **da solo in circa 1-2 minuti**. Se non vedi la modifica, ricarica la pagina.

---

## 2. Due modi per caricare i file

Puoi usare quello che preferisci, anche entrambi.

### Modo A — GitHub Desktop (consigliato sul tuo computer)
È un programma gratuito che tiene sincronizzata la cartella del sito sul tuo Mac con GitHub.

1. Installa **GitHub Desktop** da [desktop.github.com](https://desktop.github.com) e accedi con il tuo account GitHub.
2. Scegli **File → Clone repository** e seleziona il repository del sito. Ti chiede dove salvarlo: scegli per esempio la Scrivania.
3. Da qui in poi lavori nel **Finder**: copi, trascini e rinomini i file nella cartella del sito, come faresti con qualsiasi cartella.
4. Torna in GitHub Desktop: in basso a sinistra scrivi una breve descrizione (es. *"Aggiunta dispensa sconti"*) e premi **Commit to main**.
5. Premi **Push origin** in alto. Fatto: tra un minuto il sito è aggiornato.

### Modo C — Chiedere a Claude
Puoi chiedere a Claude (in Claude Code, aprendo questa cartella) di aggiungere o modificare materiale: lui cambia i file nella cartella del sito. Poi tu apri GitHub Desktop, scrivi una breve descrizione, premi **Commit to main** e **Push origin**: il caricamento finale lo fai sempre tu.

### Modo B — Dal browser (comodo a scuola, da qualsiasi PC)
1. Vai su [github.com](https://github.com), apri il repository del sito ed entra nella cartella giusta (es. `argomenti` → `percentuali` → `dispense`).
2. Premi **Add file → Upload files** e trascina il file nella pagina.
3. In fondo premi il bottone verde **Commit changes**.

---

## 3. Aggiungere materiale a un argomento

Ogni argomento ha quattro sottosezioni: **Dispense**, **Esercitazioni**, **Problem solving** e **Giochi**.
**In ciascuna puoi mettere due tipi di file:**

- un **PDF** (`.pdf`);
- una **pagina scritta da te** (`.md`), con testo, formule e soluzioni a scomparsa (vedi il punto 4).

1. Dai al file un **nome chiaro, con i trattini al posto degli spazi**. Il nome diventa il titolo mostrato sul sito.
   Un numero all'inizio decide l'ordine e non viene mostrato:

   | Nome del file | Sul sito appare come |
   |---|---|
   | `01-cosa-sono-le-percentuali.pdf` | Cosa sono le percentuali |
   | `02-sconti-e-aumenti.pdf` | Sconti e aumenti |

2. Mettilo nella **cartella della sottosezione giusta** (es. `argomenti/percentuali/esercitazioni/`).
3. Carica la modifica su GitHub (Modo A o B). Il file compare da solo nella pagina dell'argomento, e la scheda in home si aggiorna da sola ("3 materiali").

> I PDF si aprono in una nuova scheda. Tienili sotto i 10 MB, così si aprono in fretta anche dal telefono (in Anteprima: *Esporta → Filtro Quartz → Reduce File Size*).

---

## 4. Scrivere una pagina (esercitazione, problem solving, gioco...)

Le pagine sono **file di testo** che finiscono con **`.md`** (Markdown): si scrivono come un normale testo, con qualche simbolo per dare forma.

1. **Copia il modello** `_modelli/esercitazione.md` nella cartella della sottosezione e rinominalo (es. `01-sconti.md`).
   - Sul Mac puoi modificarlo con **TextEdit**: menu *Formato → Converti in formato Solo testo*.
   - Dal browser (Modo B): **Add file → Create new file**, scrivi il nome del file e incolla il testo del modello.
2. La **prima riga** deve iniziare con `#` seguito da uno spazio: è il titolo della pagina.
3. Carica la modifica su GitHub.

### Esempio

```markdown
# Sconti e aumenti

Un paio di scarpe costa 80 €. Con lo sconto del 25% quanto paghi?

$$80 - \frac{25}{100} \cdot 80 = 60$$

## Prova tu

1. Calcola il 10% di 250 €.
2. Il prezzo $$p$$ aumenta del 20%: scrivi la formula del nuovo prezzo.

<details markdown="1">
<summary>Soluzione</summary>

1. 25 €
2. $$p \cdot 1{,}2$$

</details>
```

Il blocco `<details>` crea il bottone **"Soluzione"**: gli studenti la vedono solo se lo toccano. Copia queste righe così come sono, compreso `markdown="1"`, e lascia una riga vuota dopo `</summary>`.

### I simboli principali di Markdown

| Scrivi | Ottieni |
|---|---|
| `# Titolo` | titolo grande (solo nella prima riga) |
| `## Sottotitolo` | titolo di sezione |
| `**parola**` | **grassetto** |
| `*parola*` | *corsivo* |
| `1. testo` | elenco numerato |
| `- testo` | elenco puntato |
| `> testo` | riquadro evidenziato (citazione) |
| `[GeoGebra](https://www.geogebra.org)` | un link |
| una riga vuota | un nuovo paragrafo |

### Inserire un esempio GeoGebra

1. Su [geogebra.org](https://www.geogebra.org) apri il materiale che vuoi mostrare (tuo o di altri). L'indirizzo è del tipo `geogebra.org/m/`**`abcd1234`**: quel codice finale è l'**id**.
2. Nella pagina `.md` (esercitazione, problem solving, gioco o articolo del blog), dove vuoi l'esempio, scrivi:
   ```
   {% include geogebra.html id="abcd1234" titolo="Il grafico della parabola" %}
   ```
3. Carica la modifica su GitHub.

Nella pagina comparirà un riquadro con il bottone **"Apri l'esempio interattivo"**: il grafico si carica da geogebra.org solo quando qualcuno lo preme. Così aprire la pagina resta veloce e non invia nessun dato a siti esterni. Il `titolo` è facoltativo.

---

## 5. Scrivere le formule

Metti **ogni formula tra due coppie di dollari: `$$ ... $$`**.

- **Dentro una frase**, la formula resta in linea: `il risultato è $$x = 3$$.`
- **Da sola in un paragrafo** (con una riga vuota prima e dopo), la formula viene centrata e ingrandita.

| Scrivi | Ottieni |
|---|---|
| `$$\frac{3}{4}$$` | frazione tre quarti |
| `$$x^2$$` | x al quadrato |
| `$$a_1$$` | a con pedice 1 |
| `$$\sqrt{16}$$` | radice quadrata di 16 |
| `$$\sqrt[3]{8}$$` | radice cubica di 8 |
| `$$3 \cdot 4$$` | 3 per 4 (puntino) |
| `$$12 \div 3$$` | 12 diviso 3 |
| `$$1{,}5$$` | 1,5 (la virgola decimale va tra graffe) |
| `$$\le \quad \ge \quad \ne$$` | minore o uguale, maggiore o uguale, diverso |
| `$$\pi$$` | pi greco |
| `$$\pm$$` | più o meno |
| `$$P(A) = \frac{casi\ favorevoli}{casi\ possibili}$$` | probabilità |

> Se una formula non si vede bene, controlla che le parentesi graffe `{ }` siano chiuse e che ci siano i `$$` sia all'inizio sia alla fine.

---

## 6. Scrivere un articolo del blog

Il blog ha tre categorie: **Divulgazione**, **Lettere** e **Articoli**. Ogni categoria è una cartella.

1. **Copia il modello** `_modelli/articolo-blog.md`.
2. Rinominalo con **la data davanti**, nel formato `ANNO-MESE-GIORNO-titolo.md`, per esempio:
   `2026-11-03-il-numero-aureo.md`
3. Mettilo nella cartella `_posts` della categoria giusta, per esempio `blog/divulgazione/_posts/`.
4. Scrivi l'articolo: la prima riga `# ...` è il titolo, e il primo paragrafo diventa l'anteprima nell'elenco del blog.
5. Carica la modifica su GitHub. L'articolo compare nel blog e, se è tra gli ultimi tre, anche in home.

> Gli articoli sono in ordine di data, dal più recente. Se metti una data futura, l'articolo comparirà solo da quel giorno: puoi usarlo per programmare le pubblicazioni.
>
> L'articolo *"Benvenuti nel blog"* è solo un esempio: cancellalo quando pubblichi il primo articolo vero.

**Nuova categoria del blog** (es. "Recensioni"):
1. crea la cartella `blog/recensioni/_posts/` e mettici il primo articolo;
2. apri `_data/blog.yml` e aggiungi in fondo, con gli stessi spazi delle altre righe:
   ```yaml
   - id: recensioni
     nome: "Recensioni"
     colore: giallo
   ```

---

## 7. La sezione "In classe" (LIM)

Aprila sulla LIM all'inizio della lezione. Contiene:

- **Testo grande**: ingrandisce i caratteri di **tutto il sito** su quel dispositivo, quindi anche le pagine di esercizi che proietti. Il dispositivo se lo ricorda: premilo di nuovo per tornare normale.
- **Schermo intero**: nasconde le barre del browser. Per uscire premi di nuovo il bottone o il tasto `Esc`.
- **Strumenti**: GeoGebra (grafici, geometria, 3D) e Kahoot (il link "Gioca" serve agli studenti per inserire il PIN). Si aprono in una nuova scheda.
- **Segnapunti**: da 2 a 6 squadre, con +1 e −1 a un tocco. Il nome della squadra si cambia toccandolo. I punti restano salvati **solo su quel dispositivo**, anche se chiudi la pagina; "Azzera" li rimette a zero.
- **Vai a un argomento**: bottoni grandi per saltare a ogni argomento.

> Usa nomi di squadra ("I Pitagorici"), non nomi degli studenti.

**Aggiungere uno strumento** (es. Wordwall, Desmos): apri `_data/in_classe.yml`, copia un blocco di 5 righe e cambia nome, descrizione, indirizzo, colore e simbolo.

### Creare un gioco a punti

1. Copia il modello `_modelli/gioco-a-punti.md` nella cartella **`in-classe/giochi/`** e rinominalo (es. `01-sfida-percentuali.md`).
2. Scrivi le domande. Le risposte vanno nei blocchi "Risposta" a scomparsa, che funzionano come le soluzioni degli esercizi.
3. Lascia in fondo la riga `{% include segnapunti.html %}`: è il segnapunti delle squadre.
4. Carica la modifica su GitHub: il gioco compare da solo in "In classe", sotto *Giochi a punti*.

> Puoi mettere un gioco anche nella cartella `giochi/` di un argomento: in quel caso compare nella pagina dell'argomento. Anche lì puoi aggiungere il segnapunti con la stessa riga.

---

## 8. Creare un nuovo argomento

1. **Copia** la cartella di un argomento esistente (es. `argomenti/percentuali`) e **rinominala** con il nome del nuovo argomento: tutto minuscolo, con i trattini al posto degli spazi e senza accenti (es. `proporzioni`, `teorema-di-pitagora`).
2. Se la cartella copiata conteneva già dei materiali, **cancellali** dalla copia. Dentro le sottocartelle c'è anche un file nascosto, `.gitkeep`, che nel Finder non vedi: non preoccuparti, serve a GitHub per tenere le cartelle anche quando sono vuote.
3. Apri `index.md` e cambia **solo il testo dopo i due punti**:

```yaml
titolo: "Teorema di Pitagora"
area: geometria         # aritmetica, algebra, geometria, statistica-e-probabilita
ordine: 2               # posizione nella lista della sua area (1 = primo)
simbolo: "a²"           # 1-3 caratteri disegnati sulla scheda
descrizione: "Triangoli rettangoli e misure."
```

4. Carica la modifica su GitHub: la nuova scheda compare in home, nella sua area, con il colore dell'area.

> **Dal browser (Modo B)** non si possono copiare cartelle. Usa **Add file → Create new file** e come nome scrivi `argomenti/teorema-di-pitagora/index.md`: le barre `/` creano le cartelle. Incolla il contenuto di un altro `index.md` e modificalo. Per creare le sottocartelle, crea allo stesso modo un file vuoto chiamato `.gitkeep` in ciascuna, per esempio `argomenti/teorema-di-pitagora/dispense/.gitkeep` (poi `esercitazioni`, `problem-solving`, `giochi`).

### Link utili di un argomento

Nel file `index.md` dell'argomento, cerca la riga `link: []` e sostituiscila così:

```yaml
link:
  - nome: "GeoGebra – Percentuali"
    url: "https://www.geogebra.org/..."
  - nome: "Video: sconti al supermercato"
    url: "https://www.youtube.com/..."
```

- Quando ci sono dei link, scrivi `link:` senza le parentesi `[]`.
- Ogni link inizia con **due spazi, un trattino e uno spazio** (`  - `). La riga `url:` ha **quattro spazi** davanti. Usa gli spazi, non il tasto Tab.
- Metti sempre i testi **tra virgolette**.

---

## 9. Piccole personalizzazioni

| Cosa vuoi cambiare | Dove |
|---|---|
| Nome del sito e frase sotto il nome | `_config.yml`, righe `title:` e `sottotitolo:` |
| Aree della home (nomi, colori, descrizioni, ordine) | `_data/aree.yml` |
| Categorie del blog | `_data/blog.yml` |
| Nomi e colori delle sottosezioni | `_data/sezioni.yml` |
| Strumenti rapidi di "In classe" | `_data/in_classe.yml` |
| Aspetto del sito: `giocoso` oppure `quaderno` | `_config.yml`, riga `aspetto:` |

Colori disponibili: `verde`, `blu`, `arancio`, `viola`, `rosso`, `giallo`.
In `_config.yml` non toccare la parte sotto la riga *"DA QUI IN GIÙ"*.

---

## 10. Pubblicare il sito la prima volta (GitHub Pages)

Questi passaggi si fanno **una volta sola**. Il sito è gratuito e **non servono altri servizi** (database, hosting a pagamento...).

1. Crea un account gratuito su [github.com](https://github.com).
2. Premi **+ → New repository**, dai un nome (es. `matematica`), scegli **Public** e premi **Create repository**.
3. **Prima di caricare**, apri `_config.yml` e alla riga `baseurl:` scrivi il nome del repository con la barra davanti, per esempio `baseurl: "/matematica"`. Senza questo passaggio il sito appare senza colori.
4. Carica tutti i file del sito:
   - **Modo A**: in GitHub Desktop scegli *File → Add local repository*, seleziona la cartella del sito, poi *Publish repository*.
   - **Modo B**: *uploading an existing file* → trascina tutto il contenuto della cartella.
5. Nel repository vai su **Settings → Pages**. In *Source* scegli **Deploy from a branch**, poi branch **main** e cartella **/ (root)**, e premi **Save**.
6. Dopo 1-2 minuti il sito è online all'indirizzo `https://tuonomeutente.github.io/matematica/`, che trovi anche in *Settings → Pages*.

> Con l'account gratuito il repository dev'essere **pubblico**: chiunque può vedere i file del sito (che sono comunque già pubblici sul sito stesso). Non caricare mai nulla di riservato.

---

## 11. Se qualcosa non funziona

- **Non vedo la modifica**: aspetta 2 minuti e ricarica la pagina. Sul telefono a volte serve chiudere e riaprire la scheda del browser.
- **Il sito non si aggiorna più**: su GitHub apri la scheda **Actions**. Se c'è una **X rossa**, l'ultima modifica contiene un errore. Quasi sempre è in un `index.md` o in un file di `_data/`:
  - mancano le virgolette intorno a un testo che contiene i due punti `:`;
  - gli spazi davanti a `- nome:` o `url:` non sono giusti;
  - le tre lineette `---` all'inizio o alla fine della scheda sono state cancellate.

  Correggi il file e caricalo di nuovo: il sito riparte da solo.
- **Un argomento non compare in home**: controlla che `index.md` contenga la riga `layout: argomento` e che `area:` sia scritta esattamente come in `_data/aree.yml` (es. `statistica-e-probabilita`, senza accento).
- **Un articolo non compare nel blog**: controlla che il nome del file inizi con la data (`2026-11-03-...`), che la data non sia nel futuro e che il file sia dentro una cartella `_posts`.

---

## Privacy

Il sito **non ha login**, **non raccoglie dati personali** e **non usa cookie né statistiche**. I font e gli strumenti per le formule sono dentro il sito, quindi aprire una pagina non manda richieste a Google o ad altri servizi.
Non caricare mai sul sito documenti con nomi, voti o dati degli studenti.
