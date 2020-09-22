import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UtenteFormComponent } from './components/user/utente-form/utente-form.component';
import { ArticoloFormComponent } from './components/admin/articolo-form/articolo-form.component';
import { UtenteServiceService } from './service/utente-service.service';
import { ArticoloServiceService } from './service/articolo-service.service';
import { OrdineServiceService } from './service/ordine-service.service';


import {
  RouterModule,
  Routes
} from '@angular/router';

import { UtenteListComponent } from './components/admin/utente-list/utente-list.component';
import { ArticoliListComponent } from './components/user/articoli-list/articoli-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './components/user/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MeteoComponent } from './meteo/meteo.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'catalogo', component: ArticoliListComponent},
  { path: 'utenteform', component: UtenteFormComponent },
  { path: 'utentilist', component: UtenteListComponent },
  { path: 'articoloform', component: ArticoloFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    UtenteFormComponent,
    ArticoloFormComponent,
    UtenteListComponent,
    ArticoliListComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    MeteoComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    UtenteServiceService,
    ArticoloServiceService,
    OrdineServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
