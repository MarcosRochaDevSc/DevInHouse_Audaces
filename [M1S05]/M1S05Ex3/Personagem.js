export default class Personagem {
    constructor(nome) {
      this.nome = nome;
      this.percentualVida = 100;
    }
  
    sofreuDano(percentualDano) {
      this.percentualVida = Math.max(this.percentualVida - percentualDano, 0);
    }
  
    usouKitMedico() {
      this.percentualVida = Math.min(this.percentualVida + 10, 100);
    }
  }