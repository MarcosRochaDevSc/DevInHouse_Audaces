let valorInicial = parseFloat(prompt("Digite o valor inicial da progressão: "))
let raiz = parseFloat(prompt("Digite a raiz da progressão: "))
let termo = valorInicial

console.log("Os 10 primeiros termos da progressão aritmética:")

for (let i = 0; i < 10; i++) {
  console.log(termo)
  termo += raiz
}
