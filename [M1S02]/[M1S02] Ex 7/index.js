let quantPrimos = 0;

for (let i = 2; i <= 1000; i++) {
  let saoPrimos = true;
  
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      saoPrimos = false;
      break;
    }
  }
  
  if (saoPrimos) {
    console.log(i);
    quantPrimos++;
  }
}

console.log("Existem " + quantPrimos + " números primos de 0 a 1000.");
