import { Component } from '@angular/core';
import { JeuService } from './jeu.service';
import { JeuRequest } from 'src/models/jeu-request';
import {DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-liste-jeu',
  template: `
  <div class="liste-personnes">
    <div class="div-table-personnes">
      <table mat-table [dataSource]="dataSource">

        <!-- nom Column -->
        <ng-container matColumnDef="nom">
          <th mat-header-cell *matHeaderCellDef>Jeu</th>
          <td mat-cell *matCellDef="let element"> {{element.nom}} </td>
        </ng-container>

        <!-- description Column -->
        <ng-container matColumnDef="description">
          <th mat-header-cell *matHeaderCellDef>Description</th>
          <td mat-cell *matCellDef="let element"> {{element.description}} </td>
        </ng-container>

        <!-- langue Column -->
        <ng-container matColumnDef="langue">
          <th mat-header-cell *matHeaderCellDef>Langue</th>
          <td mat-cell *matCellDef="let element"> {{element.langue}} </td>
        </ng-container>

        <!-- catégorie Column -->
        <ng-container matColumnDef="categorie">
          <th mat-header-cell *matHeaderCellDef>Catégorie</th>
          <td mat-cell *matCellDef="let element"> {{element.categorie_id}}</td>
        </ng-container>

        <!-- thème Column -->
        <ng-container matColumnDef="theme">
          <th mat-header-cell *matHeaderCellDef>Thème</th>
          <td mat-cell *matCellDef="let element"> {{element.theme_id}} </td>
        </ng-container>

        <!-- La ligne -->
        <tr mat-header-row *matHeaderRowDef="lesColonnes; sticky: true"></tr>
        <tr mat-row *matRowDef="let row; columns: lesColonnes;"></tr>
      </table>
    </div>
  </div>

  <div>
    <button (click)="setData()">Tri</button>
  </div>
`,

  styles: [
  ]
})
export class ListeJeuComponent {

  public listeJeu : JeuRequest[] = []
  dataSource: DataSourceAsynchro = new DataSourceAsynchro(this.jeuService);
  lesColonnes = ['nom', 'description', 'langue', 'categorie', 'theme'];

  constructor(public jeuService : JeuService) {
    this.dataSource.setData();
  }

  setData() {
    this.dataSource.setData();
  }
}


export class DataSourceAsynchro extends DataSource<JeuRequest> {
  private jeuSubject = new BehaviorSubject<JeuRequest[]>([]);
  private nbTri : number;

  constructor(private jeuService: JeuService) {
    super();
    this.nbTri=0;
  }

  connect(): Observable<JeuRequest[]> {
    return this.jeuSubject.asObservable();
  }

  disconnect() {
    this.jeuSubject.complete();
  }

  setData() {
    this.jeuService.getJeuxSort(this.nbTri)
      .subscribe(jeux => this.jeuSubject.next(jeux));
    this.nbTri+=1
  }
}
