export class Time {
  constructor(nome, sigla) {
    this.nome = nome;
    this.sigla = sigla;
    this.vitorias = 0;
    this.empates = 0;
    this.derrotas = 0;
    this.golsMarcados = 0;
    this.golsSofridos = 0;
  }

  get numeroDePontos() {
    return this.vitorias * 3 + this.empates;
  }

  get numeroDeJogos() {
    return this.vitorias + this.derrotas + this.empates;
  }

  computarPartida(partida) {
    if (partida.siglaTimeA === this.sigla) {
      this.golsMarcados += partida.golsTimeA;
      this.golsSofridos += partida.golsTimeB;

      if (partida.golsTimeA > partida.golsTimeB) {
        this.vitorias += 1;
      } else if (partida.golsTimeB > partida.golsTimeA) {
        this.derrotas += 1;
      } else {
        this.empates += 1;
      }
    } else if (partida.siglaTimeB === this.sigla) {
      this.golsMarcados += partida.golsTimeB;
      this.golsSofridos += partida.golsTimeA;
      if (partida.golsTimeB > partida.golsTimeA) {
        this.vitorias += 1;
      } else if (partida.golsTimeA > partida.golsTimeB) {
        this.derrotas += 1;
      } else {
        this.empates += 1;
      }
    }
  }

  exibirSituacao() {
    console.log(`Time: ${this.nome} (${this.sigla})`);
    console.log(`Vitórias: ${this.vitorias}`);
    console.log(`Derrotas: ${this.derrotas}`);
    console.log(`Empates: ${this.empates}`);
    console.log(`Gols Marcados: ${this.golsMarcados}`);
    console.log(`Gols Sofridos: ${this.golsSofridos}`);
    console.log(`Número de Jogos: ${this.numeroDeJogos}`);
    console.log(`Número de Pontos: ${this.numeroDePontos}`);
  }
}
