import { Component } from '@angular/core';
import {JeuRequest} from "../../models/jeu-request";
import {ActivatedRoute} from "@angular/router";
import {JeuService} from "../jeu.service";

@Component({
  selector: 'app-details-jeu',
  templateUrl: './details-jeu.component.html',
  styleUrls: ['./details-jeu.component.css']
})
export class DetailsJeuComponent {
  id : number = +(this.route.snapshot.paramMap.get('id') || 1);
  loading: boolean = false;
  jeu : any;

  constructor(private route: ActivatedRoute, private jeuService : JeuService) {
    this.loading = true;
    this.jeuService.getJeu(this.id).subscribe(
      rep => {
        console.log(rep);
        this.jeu = rep;
        this.loading = false;
      }
    );
  }
}
