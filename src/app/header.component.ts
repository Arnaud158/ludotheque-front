import { Component } from '@angular/core';
import {AuthService} from './auth.service'
import {filter, Observable} from "rxjs";
import {User} from "../models/user";

@Component({
  selector: 'app-header',
  template: `
      <mat-toolbar color="primary" xmlns="http://www.w3.org/1999/html">
        <span>Le bouton d'or</span>
        <div *ngIf="loggedOut">
            <button mat-raised-button  routerLinkActive="mat-accent"  aria-label="List icon" [routerLink]="['/register']">Register</button>
            <button mat-raised-button  routerLinkActive="mat-accent"  aria-label="List icon" [routerLink]="['/login']">Login</button>
        </div>
        <div *ngIf="loggedIn">
          <button mat-raised-button  routerLinkActive="mat-accent"  aria-label="List icon" (click)="service.logout()">Logout</button>
          <button mat-icon-button routerLinkActive="mat-accent" aria-label="Example icon button with a heart icon" [routerLink]="['/profil']">
            <mat-icon>account_circle</mat-icon>
          </button>
          {{service.userValue.nom}}
          {{service.userValue.prenom}}
          {{service.userValue.avatar}}
          <button mat-raised-button  routerLinkActive="mat-accent"  aria-label="List icon" [routerLink]="['/jeuxTab']">Liste des jeux tableau</button>
          <button mat-raised-button  routerLinkActive="mat-accent"  aria-label="List icon" [routerLink]="['/jeuxCarte']">Liste des jeux carte</button>
        </div>
      </mat-toolbar>
  `,
  styles: [
  ]
})
export class HeaderComponent {

  public loggedIn : boolean = false;
  public loggedOut : boolean = false;

  constructor(public service : AuthService) {
     service.isLoggedIn$.subscribe(x => this.loggedIn = x);
     service.isLoggedOut$.subscribe(x => this.loggedOut = x);
  }

}
