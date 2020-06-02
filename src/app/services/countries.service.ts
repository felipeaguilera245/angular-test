import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {

    console.log("levantando servicio countries");

  }

  getPaises() {

    // ejemplo de promesa

    console.log("inicio promesa");

    const promesa = new Promise((resolve, reject) =>{

      setTimeout(() =>{

          resolve("se termino la promesa");

      }, 5000);


    });

    promesa.then(mensaje => console.log(mensaje));

    console.log("fin promesa");

    //  http request

    return this.http.
      get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(
        map((resp: any[]) => {
          return resp.map(pais => {
            return {
              nombre: pais.name,
              codigo: pais.alpha3Code
            }
          })

        }));

  }

}
