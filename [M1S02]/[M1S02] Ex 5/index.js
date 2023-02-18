let num = parseInt(prompt("Digite um número positivo: "));
let numPares = 0;
let numImpares = 0;

for (let i = 0; i <= num; i++) {
  if (i % 2 === 0) {
    numPares++;
  } else {
    numImpares++;
  }
}

alert("De 0 até " + num + ", existem " + numPares + " números pares e " + numImpares + " números ímpares.");
