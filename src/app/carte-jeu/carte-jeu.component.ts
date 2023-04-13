import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JeuRequest } from 'src/models/jeu-request';
import { JeuService } from '../jeu.service';
import { MatCard,MatCardHeader,MatCardContent,MatCardTitle,MatCardSubtitle } from '@angular/material/card';
import {Observable} from "rxjs";

@Component({
  selector: 'app-carte-jeu',
  templateUrl: './carte-jeu.component.html',
  styleUrls: ['./carte-jeu.component.css']
})

export class CarteJeuComponent implements OnInit{

  id : number = +(this.route.snapshot.paramMap.get('id') || 1);
  loading: boolean = false;
  @Input() jeux : JeuRequest;

  constructor(private route: ActivatedRoute, private jeuService : JeuService) {
    this.jeux = <JeuRequest>{}
  }

  ngOnInit(): void {
    this.loading = true;
    console.log("icicleieifikze")
    console.log(this.jeux)
/*    this.jeuService.getJeu(this.id).subscribe(
      rep => {
        this.jeux = rep;
        this.loading = false;
      }
    );*/
  }

}
