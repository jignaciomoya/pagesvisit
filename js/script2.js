const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

const getVisitCounter = () => parseInt(localStorage.getItem('contadorVisitas')) || 0;

let visitCounter = getVisitCounter();

const trackNewVisits = (counter) => localStorage.setItem('contadorVisitas', counter);

const refreshCounter = () => {
    contadorVisitas.textContent = visitCounter;
    trackNewVisits(visitCounter);
};

visitCounter++;
refreshCounter();

btnReestablecer.addEventListener("click", () => {
  localStorage.setItem('contadorVisitas', 0)
  contadorVisitas.textContent = localStorage.getItem('contadorVisitas');
});