import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.css']
})
export class GaleriaFotosComponent {

  fotos: string[] = [
    "../assets/foto1.jpg",
    "../assets/foto2.jpg",
    "../assets/foto3.jpg",
    "../assets/foto4.jpg"
  ];

  fotoAtual: number = 0;

  voltarParaPrimeiraFoto() {
    this.fotoAtual = 0;
  }

  irParaProximaFoto() {
    if (this.fotoAtual < this.fotos.length - 1) {
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
