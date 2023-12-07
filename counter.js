let dauer = 11; // Sekunden
let timer = window.setInterval(takt, 1000);
window.clearInterval(timer); // nur Objekt definieren geht nicht
let ausgabe = document.getElementById("output");

function setDauer(d) {
  dauer = d;
  show();
  // console.log(dauer);
}

function start() {
  timer = window.setInterval(takt, 1000);
  // console.log("Go");
}

function takt() {
  if (dauer > 0) {
    dauer -= 1;
    show();
    // console.log(dauer);
  }
  else {
    stopp();
    alert("Die Zeit ist abgelaufen");
    // document.getElementById("output").innerHTML = "&#33" + "&#07;"; // ASCII #07 (BEL) geht nicht
  }
}

function stopp() {
    window.clearInterval(timer);
    show();
    // console.log("NoGo");  
}

function show() {
  let minuten = Math.floor(dauer / 60);
  if (minuten < 10) minuten = "0" + minuten;
  let sekunden = dauer % 60;
  if (sekunden < 10) sekunden = "0" + sekunden;
  ausgabe.innerHTML = minuten + ":" + sekunden;
  // console.log(sekunden)
}