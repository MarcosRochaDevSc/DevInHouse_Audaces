let num;
let soma = 0;

do {
  num = parseInt(prompt("Digite um número (ou -1 para sair): "));
  if (num !== -1) {
    soma += num;
  }
} while (num !== -1);

alert("A soma dos números digitados é: " + soma);
