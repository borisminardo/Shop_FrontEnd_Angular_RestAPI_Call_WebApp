import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/model/utente';
import { UtenteServiceService } from 'src/app/service/utente-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utente-form',
  templateUrl: './utente-form.component.html',
  styleUrls: ['./utente-form.component.css']
})
export class UtenteFormComponent implements OnInit {

  utente:Utente | any = {};


  constructor(private _utenteService: UtenteServiceService, private _router: Router) { }

  ngOnInit(): void {
    this.utente = this._utenteService.getter();
    console.log(this.utente,"utente");

  }

  
  processForm() {
  console.log(this.utente);
      this._utenteService.saveUtente(this.utente).subscribe((u) => {
        console.log(u);
        this._router.navigate(['/'])
      }, (error) => {
        console.log(error);
      }); 
     }
  }