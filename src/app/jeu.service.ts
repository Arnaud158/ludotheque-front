import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {environment} from "../../environments/environment";
import { map,of, shareReplay, tap, catchError, Observable } from 'rxjs';
import { Jeu } from 'src/models/jeu'
import { JeuRequest } from 'src/models/jeu-request'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'cess-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JeuService {

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar,
  ) {
  }


  getJeux() : Observable<Jeu[]> {
    let url = `${environment.apiUrl}/jeu/listeJeu`;
    return this.http.post<any>(url, httpOptions).pipe(
      map(res => res.Jeux as Jeu[]),
      tap(res=> console.log(res)),
      catchError(err => {
        console.log('Erreur http : ', err);
        return of([]);
      })
    );
  }

  getJeu(id: number) {
    let url = `${environment.apiUrl}/jeu/${id}`;
    return this.http.get<any>(url, httpOptions).pipe(
      map(res => res.jeu as Jeu[]),
      tap(res=> console.log(res)),
      catchError(err => {
        console.log('Erreur http : ', err);
        return of([]);
      })
    );
  }

  createJeu(jeuRequest: JeuRequest) {
    let url = `${environment.apiUrl}/jeu/`;
    return this.http.post<any>(url, jeuRequest, httpOptions).pipe(
      catchError(err => {
        console.log('Erreur http : ', err);
        return err;
      })
    );
  }

  updateJeu(jeu: Jeu) {
    let url = `${environment.apiUrl}/jeu/${jeu.id}`;
    return this.http.put<any>(url, jeu, httpOptions).pipe(
      catchError(err => {
        console.log('Erreur http : ', err);
        return err;
      })
    );
  }

  uploadMedia(id: number, avatar: any) {
    let url = `${environment.apiUrl}/jeu/id`;
    return this.http.put<any>(url, avatar, httpOptions).pipe(
      catchError(err => {
        console.log('Erreur http : ', err);
        return err;
      })
    );
  }

  getJeuxSort(sortNb : number) : Observable<Jeu[]> {
    let url = `${environment.apiUrl}/jeu/listeJeu`;
    if (sortNb%3==0) {
      url = `${environment.apiUrl}/jeu/listeJeu?sort=asc`;
    }
    if (sortNb%3==1) {
      url = `${environment.apiUrl}/jeu/listeJeu?age_min=18`;
    }
    if (sortNb%3==2) {
      url = `${environment.apiUrl}/jeu/listeJeu?nombre_joueurs_max=2`;
    }
    return this.http.post<any>(url, httpOptions).pipe(
      map(res => res.Jeux as Jeu[]),
      tap(res=> console.log(res)),
      catchError(err => {
        console.log('Erreur http : ', err);
        return of([]);
      })
    );
  }
}
