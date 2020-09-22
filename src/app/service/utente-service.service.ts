import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Utente} from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteServiceService {

  utente : Utente | any = {};

  private baseUrl: string = 'http://127.0.0.1:8080/apiutente'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getUtenti() : Observable<any> {
    return this._http.get(this.baseUrl + '/utenti', this.httpOptions).pipe(
    map((response => response)));
  }

  getUtente(username:string): Observable<any> {
    return this._http.get(this.baseUrl + '/utente/'+username, this.httpOptions).pipe(
      map((response => response)));
  }

  saveUtente(utente:Utente){
    return this._http.post(this.baseUrl + '/saveuser', JSON.stringify(utente), this.httpOptions).pipe(
      catchError(this.errorHandler<any>('saveUtente')));
  }

  updateUtente(utente:Utente) {
    return this._http.put(this.baseUrl + '/updateuser',JSON.stringify(utente),this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('updateUtente')));
  }

  deleteUtente(username:string) : Observable<any>{
    return this._http.delete(this.baseUrl + '/delete/'+username,this.httpOptions).pipe(
    map((response =>response )),
    catchError(this.errorHandler<any>('deleteUtente')));
  }

  setter(utente : Utente){
    this.utente = utente;
  }

  getter(){
    console.log(this.utente);
    return this.utente;
  }

  private errorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
