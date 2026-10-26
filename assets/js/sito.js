/* Piccoli comportamenti del sito. Senza JavaScript il sito funziona lo stesso. */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  // Su iPhone/iPad serve un ascoltatore "touchstart" perché :active (effetto "pressione") funzioni
  document.addEventListener("touchstart", function () {}, { passive: true });

  var movimentoRidotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Formule matematiche (KaTeX, caricato solo dove serve) ---------- */
  if (window.renderMathInElement) {
    document.querySelectorAll(".prosa").forEach(function (zona) {
      window.renderMathInElement(zona, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
          { left: "$$", right: "$$", display: true }
        ],
        throwOnError: false
      });
    });
  }

  /* ---------- "In classe": Testo grande (vale per tutto il sito, su questo dispositivo) ---------- */
  var radice = document.documentElement;
  document.querySelectorAll("[data-testo-grande]").forEach(function (bottone) {
    bottone.setAttribute("aria-pressed", String(radice.classList.contains("testo-grande")));
    bottone.addEventListener("click", function () {
      var attivo = radice.classList.toggle("testo-grande");
      bottone.setAttribute("aria-pressed", String(attivo));
      try { localStorage.setItem("testo-grande", attivo ? "1" : "0"); } catch (e) {}
    });
  });

  /* ---------- "In classe": Schermo intero (solo dove il browser lo permette) ---------- */
  document.querySelectorAll("[data-schermo-intero]").forEach(function (bottone) {
    if (!document.fullscreenEnabled) return;
    bottone.hidden = false;
    var etichetta = bottone.querySelector("[data-etichetta]");
    function aggiorna() {
      etichetta.textContent = document.fullscreenElement ? "Esci da schermo intero" : "Schermo intero";
    }
    bottone.addEventListener("click", function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else radice.requestFullscreen().catch(function () {});
    });
    document.addEventListener("fullscreenchange", aggiorna);
  });

  /* ---------- Filtri a "chip" (aree nella home, categorie nel blog) ----------
     <div data-filtri="area">  con dentro  <a data-valore="algebra">
     Gli elementi filtrati hanno  data-gruppo="algebra"  dentro [data-filtrabile].
     L'indirizzo diventa ...#area-algebra, così si può condividere. */
  document.querySelectorAll("[data-filtri]").forEach(function (filtri) {
    var prefisso = filtri.getAttribute("data-filtri");
    var zona = filtri.closest("[data-filtrabile]") || document;
    var chip = filtri.querySelectorAll("[data-valore]");
    var elementi = zona.querySelectorAll("[data-gruppo]");

    function applica(valore) {
      chip.forEach(function (c) {
        c.setAttribute("aria-pressed", String(c.getAttribute("data-valore") === valore));
      });
      elementi.forEach(function (el) {
        var visibile = valore === "tutti" || el.getAttribute("data-gruppo") === valore;
        if (visibile) el.removeAttribute("data-nascosto");
        else el.setAttribute("data-nascosto", "");
      });
    }

    function scegli(valore) {
      // Dissolvenza morbida tra un filtro e l'altro, dove il browser la supporta
      if (document.startViewTransition && !movimentoRidotto) {
        var radice = document.documentElement;
        radice.classList.add("vt-filtro");
        var transizione = document.startViewTransition(function () { applica(valore); });
        transizione.finished.finally(function () { radice.classList.remove("vt-filtro"); });
      } else {
        applica(valore);
      }
      var indirizzo = valore === "tutti" ? location.pathname : "#" + prefisso + "-" + valore;
      history.replaceState(null, "", indirizzo);
    }

    chip.forEach(function (c) {
      c.addEventListener("click", function (evento) {
        evento.preventDefault();
        scegli(c.getAttribute("data-valore"));
      });
    });

    // All'apertura: legge il filtro dall'indirizzo (es. .../#area-algebra)
    var hash = decodeURIComponent(location.hash.slice(1));
    var iniziale = hash.indexOf(prefisso + "-") === 0 ? hash.slice(prefisso.length + 1) : "tutti";
    var esiste = Array.prototype.some.call(chip, function (c) { return c.getAttribute("data-valore") === iniziale; });
    applica(esiste ? iniziale : "tutti");
  });
})();
