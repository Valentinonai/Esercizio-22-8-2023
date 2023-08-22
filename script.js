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
    document.getElementById("tempo").innerText = time + " s";
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
  document.getElementById("tempo").innerText = time + " s";

  x = setInterval(() => {
    orologio();
    document.getElementById("tempo").innerText = time + " s";
  }, 1000);
};
const orologio = () => {
  time++;
  sessionStorage.setItem("tempo", time);
};
