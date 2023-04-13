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
  jeu : JeuRequest = <JeuRequest>{};

  constructor(private route: ActivatedRoute, private jeuService : JeuService) {

  }

  ngOnInit(): void {
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
