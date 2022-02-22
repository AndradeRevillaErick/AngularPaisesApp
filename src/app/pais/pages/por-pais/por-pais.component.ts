import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country, Currencies } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (paises) => { 
          console.log(paises);
          this.paises = paises;
          console.log(this.paises);
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
          console.info(err);
        } 
      });
      
    console.log(this.termino);
  }

  sugerencias(termino: string){
    this.hayError = false;

  }
}
