let time = parseInt(sessionStorage.getItem("tempo")) || 0;
let x = null;
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("save").addEventListener("click", salva);
  document.getElementById("delate").addEventListener("click", cancella);

  if (localStorage.getItem("nome")) {
    document.querySelector("span").innerText = localStorage.getItem("nome");
  }
  cronometro();
  document.getElementById("reset").addEventListener("click", () => {
    clearInterval(x);
    time = 0;
    sessionStorage.setItem("tempo", time);
    cronometro();
  });
});

const salva = () => {
  localStorage.setItem("nome", document.getElementById("name").value);
};

const cancella = () => {
  localStorage.removeItem("nome");
};
const cronometro = () => {
  showTime();
  x = setInterval(() => {
    orologio();
    showTime();
  }, 1000);
};
const orologio = () => {
  time++;
  sessionStorage.setItem("tempo", time);
};

const showTime = () => {
  let minuti = parseInt(time / 60);
  const ore = parseInt(minuti / 60);
  const secondi = time % 60;
  minuti = minuti - ore * 60;
  console.log(ore, minuti, secondi);
  const tempo = document.getElementById("tempo");
  if (ore > 0) {
    tempo.innerText = `${ore} h  ${minuti} m  ${secondi} s`;
  } else if (minuti > 0) {
    tempo.innerText = `${minuti} m  ${secondi} s`;
  } else {
    tempo.innerText = `${secondi} s`;
  }
};
