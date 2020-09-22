import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Ordine } from '../model/ordine';

@Injectable({
  providedIn: 'root'
})
export class OrdineService {

  ordine : Ordine; 
 
  private baseUrl: string = 'http://localhost:8080/apiordine'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getUtenti() : Observable<any> {
    return this._http.get(this.baseUrl + '/ordini',this.httpOptions).pipe(
    map((response =>response )));
  }
  
  getUtente(id:Number) : Observable<any> {
    return this._http.get(this.baseUrl + '/ordine/'+id,this.httpOptions).pipe(
    map((response =>response )));
  }

  saveUtente(ordine:Ordine) {
    return this._http.post(this.baseUrl + '/saveord',JSON.stringify(ordine), this.httpOptions).pipe(
    catchError(this.errorHandler<any>('saveOrdine')));
  }

  updateUtente(ordine:Ordine) {
    return this._http.put(this.baseUrl + '/updateord',JSON.stringify(ordine),this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('updateOrdine')));
  }

  deleteUtente(id:Number) : Observable<any>{
    return this._http.delete(this.baseUrl + '/delordine/'+id,this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('udeleteUtente')));
  }
  
  setter(ordine : Ordine){
    this.ordine = ordine;
  }

  getter(){
    return this.ordine;
  }

  private errorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
