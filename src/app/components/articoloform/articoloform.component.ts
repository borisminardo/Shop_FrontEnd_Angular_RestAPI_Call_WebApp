import { Component, OnInit } from '@angular/core';
import { ArticoloService } from 'src/app/service/articolo.service';
import { Router } from '@angular/router';
import { Articolo } from 'src/app/model/articolo';

@Component({
  selector: 'app-articoloform',
  templateUrl: './articoloform.component.html',
  styleUrls: ['./articoloform.component.css']
})
export class ArticoloFormComponent implements OnInit {

  articolo:Articolo;

  constructor(private _articoloService: ArticoloService, private _router: Router) { }

  ngOnInit(): void {
    this.articolo = this._articoloService.getter();
  }

  processForm() {
    if (this.articolo.id == undefined) {
      this._articoloService.saveArticolo(this.articolo).subscribe((u) => {
        console.log(u);
        this._router.navigate(['/'])
      }, (error) => {
        console.log(error);
      });
    } else { //altrimenti, se si ha già un id... si trasforma un 
      this._articoloService.updateArticolo(this.articolo).subscribe((u) => {
        console.log(u);
        this._router.navigate(['/'])
      }, (error) => {
        console.log(error);
      });
    }
  }

}