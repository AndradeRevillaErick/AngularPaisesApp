import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activaRegion(region: string){

    if(region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paises = [];

    this.hayError = false;
    this.termino = region;

    this.paisService.getPaisPorRegion(this.termino)
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
  
}
