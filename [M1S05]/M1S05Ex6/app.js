import Juros from "./Juros.js";

const jurosc = new Juros(10000, 0.07, 24);
const jurosSimplesc = jurosc.calcularjurosSimples();
const jurosCompostosc = jurosc.calcularjurosCompostos();
console.log("Aplicação de 10.000 a uma taxa de 7% de juros simples, em 24 meses:", jurosSimplesc);
console.log("Aplicação de 10.000 a uma taxa de 7% de juros compostos, em 24 meses:", jurosCompostosc);

const jurosd = new Juros(10000, 0.15, 10);
const jurosSimplesd = jurosd.calcularjurosSimples();
const jurosCompostosd = jurosd.calcularjurosCompostos();
console.log("Aplicação de 10.000 a uma taxa de 15% de juros simples, em 10 anos:", jurosSimplesd);
console.log("Aplicação de 10.000 a uma taxa de 15% de juros compostos, em 10 anos:", jurosCompostosd);
