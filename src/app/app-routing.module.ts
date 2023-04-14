import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AppComponent } from './app.component';
import {AProposComponent} from "./a-propos/a-propos.component";
import {ContactComponent} from "./contact/contact.component";
import {ListeJeuComponent} from "./liste-jeu.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {DetailsJeuComponent} from "./details-jeu/details-jeu.component";
import {ListeJeuCarteComponent} from "./liste-jeu-carte.component";
import { CreationJeuComponent } from './creation-jeu/creation-jeu.component';

const routes: Routes = [
  {path: '', component:AccueilComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'apropos', component:AProposComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'jeux/:id', component: DetailsJeuComponent},
  {path: 'creationJeu', component: CreationJeuComponent},
  {path: 'jeuxTab', component:ListeJeuComponent},
  {path: 'jeuxCarte', component:ListeJeuCarteComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
