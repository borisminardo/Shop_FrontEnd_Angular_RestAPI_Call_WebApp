import { Injectable } from '@angular/core';
import { Ordine } from 'src/app/model/ordine';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdineServiceService {

  ordine:Ordine;

  private baseUrl: string = 'http://127.0.0.1:8080/apiordine'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getOrdini() : Observable<any> {
    return this._http.get(this.baseUrl + '/ordini', this.httpOptions).pipe(
    map((response => response)));
  }

  getOrdine(id:number): Observable<any> {
    return this._http.get(this.baseUrl + '/ordine/'+id, this.httpOptions).pipe(
      map((response => response)));
  }

  saveOrdine(ordine:Ordine){
    return this._http.post(this.baseUrl + '/save', JSON.stringify(ordine), this.httpOptions).pipe(
      catchError(this.errorHandler<any>('saveOrdine')));
  }

  updateOrdine(ordine:Ordine) {
    return this._http.put(this.baseUrl + '/update',JSON.stringify(ordine),this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('updateOrdine')));
  }

  
  deleteOrdine(id:number) : Observable<any>{
    return this._http.delete(this.baseUrl + '/delete/'+id,this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('deleteOrdine')));
  }


  setter(ordine:Ordine){
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

