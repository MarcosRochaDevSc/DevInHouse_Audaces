function mostrarHora() {
  const data = new Date();
  const horas = data.getHours().toString().padStart(2, "0");
  const minutos = data.getMinutes().toString().padStart(2, "0");
  const segundos = data.getSeconds().toString().padStart(2, "0");
  console.log(`${horas}:${minutos}:${segundos}`);
}

setInterval(mostrarHora, 1000);
