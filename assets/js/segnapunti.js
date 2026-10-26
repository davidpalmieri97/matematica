/* SEGNAPUNTI — da 2 a 6 squadre, salvato solo nel browser (localStorage).
   I giochi possono usarlo da JavaScript:
     Segnapunti.aggiungi(0, 1)   → +1 punto alla prima squadra
     Segnapunti.azzera()         → tutti a zero */
(function () {
  "use strict";

  var radice = document.querySelector("[data-segnapunti]");
  if (!radice) return;

  var CHIAVE = "segnapunti";
  var COLORI = ["blu", "arancio", "verde", "viola", "rosso", "giallo"];
  var contenitore = radice.querySelector("[data-squadre]");
  var stato = carica();

  function nuoveSquadre(n, vecchie) {
    var squadre = [];
    for (var i = 0; i < n; i++) {
      squadre.push((vecchie && vecchie[i]) || { nome: "", punti: 0 });
    }
    return squadre;
  }

  function carica() {
    try {
      var dati = JSON.parse(localStorage.getItem(CHIAVE));
      if (dati && Array.isArray(dati.squadre) && dati.squadre.length >= 2) return dati;
    } catch (e) {}
    return { squadre: nuoveSquadre(2) };
  }

  function salva() {
    try { localStorage.setItem(CHIAVE, JSON.stringify(stato)); } catch (e) {}
  }

  function testoSicuro(testo) {
    var d = document.createElement("div");
    d.textContent = testo;
    return d.innerHTML.replace(/"/g, "&quot;");
  }

  function disegna() {
    var massimo = Math.max.apply(null, stato.squadre.map(function (s) { return s.punti; }));
    var inTesta = stato.squadre.filter(function (s) { return s.punti === massimo; }).length === 1 && massimo > 0;

    contenitore.innerHTML = stato.squadre.map(function (s, i) {
      var primo = inTesta && s.punti === massimo;
      return '<div class="squadra tema-' + COLORI[i] + (primo ? " squadra--in-testa" : "") + '">' +
        '<span class="squadra__corona" aria-hidden="true">' + (primo ? "In testa!" : "") + "</span>" +
        '<input class="squadra__nome" type="text" maxlength="20" autocomplete="off" data-nome="' + i + '"' +
        ' value="' + testoSicuro(s.nome) + '" placeholder="Squadra ' + (i + 1) + '" aria-label="Nome della squadra ' + (i + 1) + '">' +
        '<output class="squadra__punti" data-punti="' + i + '">' + s.punti + "</output>" +
        '<div class="squadra__bottoni">' +
          '<button class="bottone squadra__meno" type="button" data-cambia="' + i + '" data-valore="-1" aria-label="Togli un punto">−1</button>' +
          '<button class="bottone squadra__piu" type="button" data-cambia="' + i + '" data-valore="1" aria-label="Aggiungi un punto">+1</button>' +
        "</div>" +
      "</div>";
    }).join("");

    radice.querySelectorAll("[data-numero]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(Number(b.getAttribute("data-numero")) === stato.squadre.length));
    });
  }

  function aggiungi(i, punti) {
    if (!stato.squadre[i]) return;
    var attivo = document.activeElement;
    var aveFocus = attivo && attivo.hasAttribute && attivo.hasAttribute("data-cambia");
    stato.squadre[i].punti = Math.max(0, stato.squadre[i].punti + punti);
    salva();
    disegna();
    // Chi usa la tastiera resta sullo stesso bottone
    if (aveFocus) {
      var stesso = contenitore.querySelector('[data-cambia="' + attivo.getAttribute("data-cambia") + '"][data-valore="' + attivo.getAttribute("data-valore") + '"]');
      if (stesso) stesso.focus();
    }
    // Piccolo "salto" del numero appena cambiato
    var numero = contenitore.querySelector('[data-punti="' + i + '"]');
    if (numero) {
      numero.classList.add(punti > 0 ? "salta-su" : "salta-giu");
    }
  }

  function azzera() {
    stato.squadre.forEach(function (s) { s.punti = 0; });
    salva();
    disegna();
  }

  radice.addEventListener("click", function (e) {
    var cambia = e.target.closest("[data-cambia]");
    if (cambia) {
      aggiungi(Number(cambia.getAttribute("data-cambia")), Number(cambia.getAttribute("data-valore")));
      return;
    }
    var numero = e.target.closest("[data-numero]");
    if (numero) {
      stato.squadre = nuoveSquadre(Number(numero.getAttribute("data-numero")), stato.squadre);
      salva();
      disegna();
      return;
    }
    if (e.target.closest("[data-azzera]") && window.confirm("Azzerare i punti di tutte le squadre?")) {
      azzera();
    }
  });

  // Il nome si salva mentre si scrive, senza ridisegnare (il cursore resta dov'è)
  radice.addEventListener("input", function (e) {
    var campo = e.target.closest("[data-nome]");
    if (!campo) return;
    stato.squadre[Number(campo.getAttribute("data-nome"))].nome = campo.value;
    salva();
  });

  disegna();

  window.Segnapunti = { aggiungi: aggiungi, azzera: azzera };
})();
