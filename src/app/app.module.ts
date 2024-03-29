import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card"

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ListeJeuComponent } from './liste-jeu.component';
import {MatButtonModule} from "@angular/material/button";
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactComponent } from './contact/contact.component';
import { CarteJeuComponent } from './carte-jeu/carte-jeu.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { HeaderComponent } from './header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsJeuComponent } from './details-jeu/details-jeu.component';
import { ListeJeuCarteComponent } from './liste-jeu-carte.component';
import { CreationJeuComponent } from './creation-jeu/creation-jeu.component';
@NgModule({
  declarations: [
    AppComponent,
    PiedPageComponent,
    LoginComponent,
    RegisterComponent,
    ListeJeuComponent,
    AProposComponent,
    ContactComponent,
    CarteJeuComponent,
    AccueilComponent,
    HeaderComponent,
    DetailsJeuComponent,
    ListeJeuCarteComponent,
    CarteJeuComponent,
    CreationJeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor, multi: true},],

  bootstrap: [AppComponent]
})
export class AppModule { }
