let operacao = prompt("Qual tipo de cálculo deseja fazer? (+, -, *, /)");
let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let resultado;

switch (operacao) {
  case "+":
    resultado = valor1 + valor2;
    break;
  case "-":
    resultado = valor1 - valor2;
    break;
  case "*":
    resultado = valor1 * valor2;
    break;
  case "/":
    resultado = valor1 / valor2;
    break;
  default:
    alert("Operação inválida!");
}

if (resultado !== undefined) {
  alert("O resultado é: " + resultado);
}
