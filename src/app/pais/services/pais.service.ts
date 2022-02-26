import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
//import { catchError, Observable,of } from 'rxjs'; solo p[ara el ejemplo de pipse rxjs

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  get httpParams(){
    return new HttpParams().set( 'fields', 'name,capital,population,flags,cca2' );
  }

  constructor(private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]>{
    
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
    //Ejemplo para probar el uso de pipes rxjs para regresar un arreglo con un mensaje
    //.pipe(catchError((err) => of(['Hola hay un error bro'])));
  }

  buscarCapital( termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha( termino: string): Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ termino }`;
    return this.http.get<Country>(url);
  }

  getPaisPorRegion( termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/region/${ termino }`;

    //en emsc6 si se usa una variable que se llama igual al tipo de dato
    //se puede obviar y en lugar de escribirse asi params: params seria asi params 
    // por ejemplo los HttpParams creados son de tipo params
    return this.http.get<Country[]>( url, {params: this.httpParams});
  }
}
