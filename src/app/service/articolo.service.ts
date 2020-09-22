import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Articolo } from '../model/articolo';

@Injectable({
  providedIn: 'root'
})
export class ArticoloService {

  articolo : Articolo; 
 
  private baseUrl: string = 'http://localhost:8080/apiarticolo'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getArticoli() : Observable<any> {
    return this._http.get(this.baseUrl + '/articoli',this.httpOptions).pipe(
    map((response =>response )));
  }
  
  getArticolo(id:Number) : Observable<any> {
    return this._http.get(this.baseUrl + '/articolo/'+id,this.httpOptions).pipe(
    map((response =>response )));
  }

  saveArticolo(articolo:Articolo) {
    return this._http.post(this.baseUrl + '/saveart',JSON.stringify(articolo), this.httpOptions).pipe(
    catchError(this.errorHandler<any>('saveArticolo')));
  }

  updateArticolo(articolo:Articolo) {
    return this._http.put(this.baseUrl + '/updateart',JSON.stringify(articolo),this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('updateArticolo')));
  }

  deleteArticolo(id:Number) : Observable<any>{
    return this._http.delete(this.baseUrl + '/delarticolo/'+id,this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('deleteArticolo')));
  }
  
  setter(articolo : Articolo){
    this.articolo = articolo;
  }

  getter(){
    return this.articolo;
  }

  private errorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
