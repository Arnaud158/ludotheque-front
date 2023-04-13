import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JeuRequest } from 'src/models/jeu-request';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-carte-jeu',
  templateUrl: './carte-jeu.component.html',
  styleUrls: ['./carte-jeu.component.css']
})
export class CarteJeuComponent {
  id : number = +(this.route.snapshot.paramMap.get('id') || 1);
  jeu : any

  constructor(private route: ActivatedRoute, public jeuService : JeuService) {
    this.jeu = jeuService.getJeu(this.id);
  }
}
