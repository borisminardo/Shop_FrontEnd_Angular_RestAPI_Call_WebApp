import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/model/utente';
import { Router } from '@angular/router';
import { UtenteServiceService } from 'src/app/service/utente-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utente:Utente;
  constructor(private _utenteService: UtenteServiceService, private _router: Router) { }
  ngOnInit(): void {
  }

}
