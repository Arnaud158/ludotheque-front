import { Component } from '@angular/core';
import {AuthService} from './auth.service'

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>Le bouton d'or</span>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
