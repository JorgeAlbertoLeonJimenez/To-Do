const cardsContainer = document.querySelector(".container-cards");
const InpCard = document.getElementById("InputCard");
const BCard = document.getElementById("BCard");
const clockDiv = document.querySelector(".clock");

BCard.addEventListener("click", crearTarjeta);

cardsContainer.addEventListener("click", function (e) {
  if (e.target.id === "Delete") {
    e.target.parentElement.remove();
  }
});

function crearTarjeta() {
  const valorInput = InpCard.value.trim();
  if (valorInput !== "") {
    const tarjeta = crearElementoTarjeta(valorInput);
    cardsContainer.appendChild(tarjeta);
    InpCard.value = "";
  } else {
    alert("No hay texto");
  }
}




function crearElementoTarjeta(valor) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
   
    <div id="info-card">
        <h4>${valor}</h4>
    </div>
    <p class="time">${obtenerHoraActual()}</p>
    <img id="Delete" src="/Assets/Delete.svg" alt="Delete">
  `;

 


  return div;
}

function obtenerHoraActual() {
  const horaActual = new Date();
  let horas = horaActual.getHours();
  let minutos = horaActual.getMinutes();
  minutos = minutos < 10 ? `0${minutos}` : minutos;
  horas = horas > 12 ? horas - 12 : horas;
  return `${horas}:${minutos}`;
}

setInterval(() => {
  clockDiv.innerHTML = `<h1 class="roboto">${obtenerHoraActual()}</h1>`;
}, 1000);
