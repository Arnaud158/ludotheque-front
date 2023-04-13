import {Component, Input} from '@angular/core';
import { JeuService } from './jeu.service';
import { JeuRequest } from 'src/models/jeu-request';
import {DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-liste-jeu',
  template: `
  <div class="liste-personnes">
    <div class="div-table-personnes">
      <app-carte-jeu *ngFor="let jeu of listeJeu" [jeux]="jeu"></app-carte-jeu>
    </div>
  </div>
`,

  styles: [
  ]
})
export class ListeJeuCarteComponent {

  public listeJeu : JeuRequest[] = []
  dataSource: DataSourceAsynchro = new DataSourceAsynchro(this.jeuService);
  lesColonnes = ['nom', 'description', 'langue', 'categorie', 'theme', 'details'];

  constructor(public jeuService : JeuService) {
    this.dataSource.setData();
    this.dataSource.connect().subscribe(jeu => {
      this.listeJeu = jeu;
    })
  }
}


export class DataSourceAsynchro extends DataSource<JeuRequest> {
  private jeuSubject = new BehaviorSubject<JeuRequest[]>([]);

  constructor(private jeuService: JeuService) {
    super();
//    this.setData();
  }

  connect(): Observable<JeuRequest[]> {
    return this.jeuSubject.asObservable();
  }

  disconnect() {
    this.jeuSubject.complete();
  }

  setData() {
    this.jeuService.getJeux()
      .subscribe(jeux => this.jeuSubject.next(jeux));
  }
}
