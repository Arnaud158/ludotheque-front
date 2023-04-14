import {Component} from '@angular/core';
import {JeuService} from "../jeu.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(public jeuService : JeuService) {
  }
}


