import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meteo } from '../model/meteo';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
meteo:Meteo;

  private baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private fineUrl: string = '&APPID=0c8eff620a3b931f1c376dce1147e473&lang=it'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'82.196.7.246:80',
      'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getMeteo(citta:string):Observable<any>{ 
    const cittaUrl = this.baseUrl+citta+this.fineUrl;
    return this._http.get(cittaUrl,this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('getMeteo')));
    }

    
setter(meteo:Meteo){
  this.meteo = meteo;
}

getter(){
  return this.meteo;
}

    private errorHandler<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); 
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
}


