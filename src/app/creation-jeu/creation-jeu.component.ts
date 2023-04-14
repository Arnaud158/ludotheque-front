import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JeuRequest } from 'src/models/jeu-request';
import { JeuService } from '../jeu.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';

@Component({
  selector: 'app-creation-jeu',
  templateUrl: './creation-jeu.component.html',
  styleUrls: ['./creation-jeu.component.css']
})
export class CreationJeuComponent {

  creationJeuForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    langue: new FormControl('', [Validators.required]),
    age_min: new FormControl(1, [Validators.required]),
    nombre_joueurs_min: new FormControl(1, [Validators.required]),
    nombre_joueurs_max: new FormControl(1, [Validators.required]),
    duree_partie: new FormControl(1, [Validators.required]),
    categorie: new FormControl('', [Validators.required]),
    theme: new FormControl('', [Validators.required]),
    editeur: new FormControl('', [Validators.required]),
  });

  constructor(private jeuService: JeuService,private snackbar: MatSnackBar,
    private router: Router) {
  }
  creationJeu() {
    if (!this.creationJeuForm.valid) {
      return;
    }
    this.jeuService
      .createJeu(<JeuRequest>{ ...this.creationJeuForm.value })
      .pipe(tap(() => this.router.navigate([''])))
      .subscribe()
  }


}
