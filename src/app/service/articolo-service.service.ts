import { Injectable } from '@angular/core';
import { Articolo } from 'src/app/model/articolo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticoloServiceService {
  articolo : Articolo;
  
  private baseUrl: string = 'http://127.0.0.1:8080/apiarticolo'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getArticoli() : Observable<any> {
    return this._http.get(this.baseUrl + '/articoli', this.httpOptions).pipe(
    map((response => response)));
  }

  getArticolo(id:number): Observable<any> {
    return this._http.get(this.baseUrl + '/articolo/'+id, this.httpOptions).pipe(
      map((response => response)));
  }

  saveArticolo(articolo:Articolo){
    return this._http.post(this.baseUrl + '/save', JSON.stringify(articolo), this.httpOptions).pipe(
      catchError(this.errorHandler<any>('saveArticolo')));
  }

  updateArticolo(articolo:Articolo) {
    return this._http.put(this.baseUrl + '/update',JSON.stringify(articolo),this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('updateArticolo')));
  }

  
  deleteArticolo(id:Number) : Observable<any>{
    return this._http.delete(this.baseUrl + '/delete/'+id,this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('deleteArticolo')));
  }


  setter(articolo:Articolo){
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
