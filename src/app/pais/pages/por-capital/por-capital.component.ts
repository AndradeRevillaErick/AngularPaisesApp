import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
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