let dauer = 11; // Sekunden
let timer = window.setInterval(takt, 1000);
window.clearInterval(timer); // nur Objekt definieren geht nicht

function setDauer(d) {
  dauer = d;
  show();
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
    console.log("time's up");
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
  document.getElementById("output").innerHTML = minuten + ":" + sekunden;
}