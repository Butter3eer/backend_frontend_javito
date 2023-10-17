import './node_modules/bootstrap/dist/css/bootstrap.css';
import './node_modules/bootstrap/dist/js/bootstrap.js';

document.addEventListener('DOMContentLoaded', init);

const urlInput = document.getElementById("urlInput");
const betuMeretInput = document.getElementById("betuMeretInput");
const sorkozInput = document.getElementById("sorkozInput");
const betuColorInput = document.getElementById("betuColorInput");
const kep = document.getElementById("kepHelye");
const jobbBalButton = document.getElementById("jobbBalButton");
const szoveg = document.getElementById("szoveg");

urlInput.addEventListener("keyup", function () {
  init();
});

betuMeretInput.addEventListener("input", function () {
  init();
});

sorkozInput.addEventListener("input", function () {
  init();
});

betuColorInput.addEventListener("input", function () {
  init();
});

jobbBalButton.addEventListener("click", function() {
  if (kep.style.float == "right") {
    kep.style.float = "left";
  }
  else {
    kep.style.float = "right";
  }
});


function kepSzovegValtoztatas(kep, szoveg, url, betuMeret, sorkoz, szin) {
  kep.src = "";
  kep.src = url;
  szoveg.style.color = szin;
  szoveg.style.fontSize = betuMeret + "pt";
  szoveg.style.lineHeight = sorkoz + "em";
}

function init() {
  const url = urlInput.value;
  const betuMeret = betuMeretInput.value;
  const sorkoz = sorkozInput.value;
  const szin = betuColorInput.value;

  kepSzovegValtoztatas(kep, szoveg, url, betuMeret, sorkoz, szin);
}