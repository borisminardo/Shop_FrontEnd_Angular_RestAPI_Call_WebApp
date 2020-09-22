import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../../service/meteo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  weather:any;

  constructor(private meteoService : MeteoService) { }

  ngOnInit(): void {
    
  }

  getMeteo(citta:string){
    this.meteoService.getMeteo(citta).subscribe((w)=> this.weather = w)
  }

}
