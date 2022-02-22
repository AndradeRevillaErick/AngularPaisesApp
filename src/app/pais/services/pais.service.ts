import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
//import { catchError, Observable,of } from 'rxjs'; solo p[ara el ejemplo de pipse rxjs

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]>{
    
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>(url);
    //Ejemplo para probar el uso de pipes rxjs para regresar un arreglo con un mensaje
    //.pipe(catchError((err) => of(['Hola hay un error bro'])));
  }

  buscarCapital( termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( termino: string): Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ termino }`;
    return this.http.get<Country>(url);
  }
}
