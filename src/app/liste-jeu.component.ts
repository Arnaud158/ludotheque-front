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
          <th mat-header-cell *matHeaderCellDef> #</th>
          <td mat-cell *matCellDef="let element"> {{element.nom}} </td>
        </ng-container>

        <!-- description Column -->
        <ng-container matColumnDef="description">
          <th mat-header-cell *matHeaderCellDef>description</th>
          <td mat-cell *matCellDef="let element"> {{element.description}} </td>
        </ng-container>

        <!-- langue Column -->
        <ng-container matColumnDef="langue">
          <th mat-header-cell *matHeaderCellDef>langue</th>
          <td mat-cell *matCellDef="let element"> {{element.langue}} </td>
        </ng-container>

        <!-- catégorie Column -->
        <ng-container matColumnDef="categorie">
          <th mat-header-cell *matHeaderCellDef>catégorie</th>
          <td mat-cell *matCellDef="let element">
            <mat-icon [routerLink]="['/personnes', element.categorie]">loupe</mat-icon>
          </td>
        </ng-container>

        <!-- thème Column -->
        <ng-container matColumnDef="theme">
          <th mat-header-cell *matHeaderCellDef>Thème</th>
          <td mat-cell *matCellDef="let element"> {{element.theme}} </td>
        </ng-container>

        <!-- La ligne -->
        <tr mat-header-row *matHeaderRowDef="lesColonnes; sticky: true"></tr>
        <tr mat-row *matRowDef="let row; columns: lesColonnes;"></tr>
      </table>
    </div>
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

  setData(sort = 0, horsLimite= false) {
    this.jeuService.getJeux()
      .subscribe(jeux => this.jeuSubject.next(jeux));
  }
}
