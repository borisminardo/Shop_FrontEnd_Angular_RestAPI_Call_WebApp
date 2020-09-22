import { Component, OnInit } from '@angular/core';
import { Articolo } from 'src/app/model/articolo';
import { ArticoloServiceService } from 'src/app/service/articolo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrls: ['./articoli-list.component.css']
})
export class ArticoliListComponent implements OnInit {
  articoli:Articolo[];

  constructor(private _articoloService:ArticoloServiceService, private _router:Router ) { }

  ngOnInit(): void {
    this._articoloService.getArticoli().subscribe((articoli) => {
      console.log(articoli,"articoli")
      this.articoli = articoli;
    }, (error) => {
      console.log(error);
    });
  }


  
  deleteArticolo(articolo: Articolo){ 
    this._articoloService.deleteArticolo(articolo.id).subscribe((data)=>{
      this.articoli.splice(this.articoli.indexOf(articolo),1);
    }, (error) => {
      console.log(error);
    });
  }

  updateArticolo(articolo: Articolo){ 
      this._articoloService.setter(articolo);
      this._router.navigate(['/form']);
  }

}
