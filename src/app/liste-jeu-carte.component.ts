import { Component, Input } from '@angular/core';
import { JeuService } from './jeu.service';
import { Jeu } from 'src/models/jeu';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-liste-jeu-carte',
  template: `
    <div class="liste-personnes">
      <div class="div-table-personnes" *ngFor="let jeu of listeJeu">
        <mat-card class="example-card">
          <mat-card-header>
            <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title
              ><h3>{{ jeu.id }}</h3></mat-card-title
            >
            <mat-card-subtitle>{{ jeu.nom }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Description : {{ jeu.description }}</p>

            <p>Age minimum : {{ jeu.age_min }}</p>
            <p>Langues : {{ jeu.langue }}</p>

            <p>Joueurs Minimums : {{ jeu.nombre_joueurs_min }}</p>
            <p>Joueurs Maximum: {{ jeu.nombre_joueurs_max }}</p>
            <p>Durée : {{ jeu.duree_partie }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,

  styles: [],
})
export class ListeJeuCarteComponent {
  public listeJeu: Jeu[] = [];
  dataSource: DataSourceAsynchro = new DataSourceAsynchro(this.jeuService);
  lesColonnes = [
    'nom',
    'description',
    'langue',
    'categorie',
    'theme',
    'details',
  ];

  constructor(public jeuService: JeuService) {
    this.dataSource.setData();
    this.dataSource.connect().subscribe((jeu) => {
      this.listeJeu = jeu;
    });
  }
}


export class DataSourceAsynchro extends DataSource<Jeu> {
  private jeuSubject = new BehaviorSubject<Jeu[]>([]);

  constructor(private jeuService: JeuService) {
    super();
    //    this.setData();
  }

  connect(): Observable<Jeu[]> {
    return this.jeuSubject.asObservable();
  }

  disconnect() {
    this.jeuSubject.complete();
  }

  setData() {
    this.jeuService.getJeux().subscribe((jeux) => this.jeuSubject.next(jeux));
  }
}
