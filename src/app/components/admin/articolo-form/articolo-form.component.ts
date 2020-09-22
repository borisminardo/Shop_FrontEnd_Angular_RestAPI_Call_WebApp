import { Component, OnInit } from '@angular/core';
import { Articolo } from 'src/app/model/articolo';
import { ArticoloServiceService } from 'src/app/service/articolo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent implements OnInit {
  articolo:Articolo;

  constructor(private _articoloService: ArticoloServiceService, private _router: Router) { }

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
    } else {
      this._articoloService.updateArticolo(this.articolo).subscribe((u) => {
        console.log(u);
        this._router.navigate(['/'])
      }, (error) => {
        console.log(error);
      });
    }
  }

}
