import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {environment} from "../../environments/environment";
import { map,of, shareReplay, tap, catchError, Observable } from 'rxjs';
import { JeuRequest } from 'src/models/jeu-request';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
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


  getJeux(params? : Request) : Observable<JeuRequest[]> {
    let url = `${environment.apiUrl}/jeux`;
    return this.http.get<any>(url, httpOptions).pipe(
      map(res => res.data as JeuRequest[]),
      tap(res=> console.log(res)),
      catchError(err => {
        console.log('Erreur http : ', err);
        return of([]);
      })
    );
  }

  getJeu(id: number) {
    let url = `${environment.apiUrl}/jeux/${id}`;
    return this.http.get<any>(url, httpOptions).pipe(
      map(res => res.data as JeuRequest),
      catchError(err => {
        console.log('Erreur http : ', err);
        return err;
      })
    );
  }

  createJeu(jeuRequest: JeuRequest) {
    let url = `${environment.apiUrl}/jeux/`;
    return this.http.post<any>(url, jeuRequest, httpOptions).pipe(
      catchError(err => {
        console.log('Erreur http : ', err);
        return err;
      })
    );
  }

  updateJeu(jeuRequest: JeuRequest) {
    let url = `${environment.apiUrl}/jeux/${jeuRequest.id}`;
    return this.http.put<any>(url, jeuRequest, httpOptions).pipe(
      catchError(err => {
        console.log('Erreur http : ', err);
        return err;
      })
    );
  }

  get5Jeux() {
    let url = `${environment.apiUrl}/jeux/listejeu`;
    return this.http.post<any>(url, httpOptions).pipe(
      map(res => res.data as JeuRequest[]),
      tap(res=> console.log(res)),
      catchError(err => {
        console.log('Erreur http : ', err);
        return of([]);
      })
    );
  }
  uploadMedia(id: number, avatar: any) {
    let url = `${environment.apiUrl}/jeux/id`;
    return this.http.put<any>(url, avatar, httpOptions).pipe(
      catchError(err => {
        console.log('Erreur http : ', err);
        return err;
      })
    );
  }
}
