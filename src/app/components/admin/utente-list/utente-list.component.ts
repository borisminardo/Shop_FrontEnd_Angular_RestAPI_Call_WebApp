import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/model/utente';
import { Router } from '@angular/router';
import { UtenteServiceService } from 'src/app/service/utente-service.service';

@Component({
  selector: 'app-utente-list',
  templateUrl: './utente-list.component.html',
  styleUrls: ['./utente-list.component.css']
})
export class UtenteListComponent implements OnInit {

  utenti:Utente[];

  constructor(private _utenteService:UtenteServiceService, private _router:Router) { }

  ngOnInit(): void {
    this._utenteService.getUtenti().subscribe((utenti) =>{
      console.log(utenti);
      this.utenti = utenti;
    }, (error) =>{
      console.log(error);
    });
  }

  deleteUtente(utente: Utente){ 
    this._utenteService.deleteUtente(utente.username).subscribe((data)=>{
      this.utenti.splice(this.utenti.indexOf(utente),1);
    }, (error) => {
      console.log(error);
    });
  }

  updateUtente(utente: Utente){ 
      this._utenteService.setter(utente);
      this._router.navigate(['/form']);
  }

}
