export default class Juros {
    constructor(capitalInicial, taxaAplicada, tempo) {
      this.capitalInicial = capitalInicial;
      this.taxaAplicada = taxaAplicada;
      this.tempo = tempo;
    }
  
    calcularjurosSimples() {
      return this.capitalInicial * this.taxaAplicada * this.tempo;
    }
  
    calcularjurosCompostos() {
      return this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
    }
  }
  