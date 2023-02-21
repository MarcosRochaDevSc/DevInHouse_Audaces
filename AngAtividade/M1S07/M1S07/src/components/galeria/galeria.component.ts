import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  
  public fotos =["src\assets\foto1.jpg", "src\assets\foto2.jpg", "src\assets\foto3"]

  fotoAtual: number = 0;

  voltarParaPrimeiraFoto() {
    this.fotoAtual = 0;
  }

  irParaProximaFoto() {
    if (this.fotoAtual < this.fotos.length-1) {
      this.fotoAtual++;
    }
  }

  voltarUmaFoto() {
    if (this.fotoAtual > 0) {
      this.fotoAtual--;
    }
  }

  irParaUltimaFoto() {
    this.fotoAtual = this.fotos.length - 1;
  }

}

