# DESIGN-quaderno.md — Stile "Quaderno" (seconda versione del sito)

> Riferimento: scheda di stile "Notion — warm paper notebook under afternoon sun" da styles.refero.design.
> Prendiamo **solo lo stile**: niente logo, nomi, personaggi o illustrazioni di Notion.
> Si attiva con `aspetto: quaderno` in `_config.yml`. Lo stile "giocoso" resta descritto in DESIGN.md.

## Adattamenti per questo sito

- Font gratuiti ospitati nel sito: **Inter** (sostituto di NotionInter) per interfaccia e titoli, **Source Serif 4** (sostituto di Lyon Text) solo per introduzioni, sottotitoli editoriali e citazioni.
- Colori delle aree e delle categorie: palette "post-it" tenue (sfondo tinta + testo scuro dello stesso tono), mappata sui nomi già usati nei file `_data/` (`verde`, `blu`, `arancio`, `viola`, `rosso`, `giallo`).
- Testo secondario un po' più scuro dei valori originali dove serve per il contrasto WCAG AA.
- Restano le regole del progetto: mobile first, barra in basso su telefono, bersagli di almeno 44px, animazioni brevi e disattivate con `prefers-reduced-motion`.

---

## Il carattere dello stile

Un quaderno ben usato alla luce del pomeriggio: fondo carta calda (`#f6f5f4`) tattile, non clinico. Tipografia sans generosa che dà peso editoriale ai testi. Il colore è **punteggiatura rara**: pillole color pesca evidenziano una parola, un solo blu segna l'azione principale, una piccola serie di tinte d'accento colora gli sfondi dei riquadri come post-it. Le schede stanno sul fondo con **bordi sottilissimi da 1px e angoli da 12px, senza ombre**, come sezioni rigate di un taccuino. Movimento morbido, circa 200ms.

## Colori

| Nome | Valore | Ruolo |
|---|---|---|
| Blu azione | `#0075de` | Unico bottone pieno, voce di menu attiva, link |
| Carta calda | `#f6f5f4` | Fondo della pagina e delle sezioni |
| Bianco | `#ffffff` | Superficie delle schede |
| Inchiostro | `#000000` | Titoli e testo, con opacità diverse (100/95/60/40%) per la gerarchia |
| Grafite | `#615d59` | Testo con tono caldo |
| Pietra | `#757575` | Testo di aiuto, etichette secondarie |
| Cielo tenue | `#e6f3fe` | Sfondo dei bottoni secondari e degli stati attivi |
| Calendula | `#ffb110` | Pillola evidenziatrice, accento caldo |
| Corallo | `#f64932` | Accento caldo per riquadri decorativi |
| Blu segnale | `#097fe8` | Accento blu decorativo |
| Mezzanotte | `#02093a` | Riquadro scuro "isola" (banda In classe) |
| Pesca | `#f6d5b8` | Pillola evidenziatrice nel titolo principale |

## Tipografia

- **Inter**: 400 testo, 500 interfaccia, 600-700 titoli. Titoli grandi con spaziatura negativa (circa -0.035em a 54px, -0.028em a 72px); testo con spaziatura normale.
- **Source Serif 4**: 400, 18px, interlinea 1.56. Solo per sottotitoli editoriali, introduzioni e citazioni: mai per etichette o menu.
- Scala: 12 · 14 · 16 · 20 · 22 · 40 · 48 · 54 · 72px.

## Forme e spazi

- Unità base 4px; sezioni distanziate di circa 80px; padding delle schede 24px.
- Raggi: schede 12px, bottoni 8px, piccoli elementi 4px, pillole 9999px. Mai più di 12px su elementi rettangolari.
- Bordi: `1px solid rgba(0,0,0,0.08)` al posto delle ombre.
- Ombre solo sulla barra di navigazione fissa: `0 0.7px 1.5px rgba(0,0,0,.015), 0 3px 9px rgba(0,0,0,.03)`.

## Componenti

- **Bottone principale**: fondo `#0075de`, testo bianco 14-16px peso 500, raggio 8px. Uno solo per schermata.
- **Bottone secondario**: fondo `#e6f3fe`, testo `#0075de`.
- **Bottone testo**: senza fondo né bordo, testo inchiostro al 95%.
- **Voce di menu**: testo inchiostro al 54%, piena al passaggio, mai sottolineata.
- **Pillola**: fondo colorato tenue, raggio 9999px, padding 4px 12px.
- **Scheda bianca**: fondo bianco, raggio 12px, padding 24px, bordo hairline, nessuna ombra.
- **Riquadro d'accento**: fondo in una tinta d'accento, raggio 12px, senza bordo.
- **Riquadro scuro**: fondo `#02093a`, testo bianco; usato con parsimonia.
- **Pillola nel titolo**: una parola del titolo principale dentro una pillola pesca o calendula.

## Da fare

- Fondo `#f6f5f4` e schede `#ffffff`: mai il contrario.
- Un solo colore pieno per i bottoni (`#0075de`); la varietà di colore sta negli sfondi dei riquadri.
- Gerarchia del testo tramite opacità dello stesso inchiostro.
- Transizioni di circa 200ms con easing morbido.

## Da evitare

- Fondo pagina bianco puro.
- Ombre sulle schede, gradienti, effetti vetro.
- Più colori pieni per i bottoni nella stessa vista.
- Il serif per etichette o menu.
- Raggi oltre 12px su elementi rettangolari.

## Impaginazione

Contenuto centrato con larghezza massima ampia. Apertura centrata o a due colonne: titolo grande con una parola dentro una pillola, sottotitolo in serif, uno o due bottoni. Poi sezioni che alternano griglie di schede bianche e riquadri colorati. Barra di navigazione fissa in alto di circa 64px su schermi grandi. Illustrazioni solo come piccoli segni decorativi a tratto (scarabocchi, frecce, stelline), mai come contenuto.
