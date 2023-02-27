function mostrarHora() {
  const data = new Date();
  const horas = data.getHoras().toString().padStart(2, "0");
  const minutos = data.getMinutos().toString().padStart(2, "0");
  const segundos = data.getSegundos().toString().padStart(2, "0");
  console.log(`${horas}:${minutos}:${segundos}`);
}

setInterval(mostrarHora, 1000);
