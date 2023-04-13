import {Component} from '@angular/core';
import {JeuService} from "../jeu.service";
import {JeuRequest} from "../../models/jeu-request";
import {DataSourceAsynchro} from "./dataSourceAsynchro";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  public listeJeu : JeuRequest[] = []
  dataSource: DataSourceAsynchro = new DataSourceAsynchro(this.jeuService);
  lesColonnes = ['nom', 'description', 'langue', 'categorie', 'theme'];

  constructor(public jeuService : JeuService) {
    this.dataSource.setData();
    console.log(this.dataSource)
  }
}


