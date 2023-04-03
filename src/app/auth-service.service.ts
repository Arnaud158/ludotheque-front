import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, shareReplay,
tap, throwError} from "rxjs";
import {ANONYMOUS_USER, User} from "../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserInfo} from "../models/userInfo";
import {Router} from "@angular/router";
import {RegisterRequest} from "../models/interface";
import {MatSnackBar} from "@angular/material/snack-bar";

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(ANONYMOUS_USER);
  public user$: Observable<User> = this.userSubject.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !! user.id));
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));
  constructor(private http: HttpClient,
    private snackbar: MatSnackBar,
    private router: Router) {
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(`${environment.apiUrl}/login`, {email, password}, httpOptions)
      .pipe(map(rep => {
      const user = {...rep.user, jwtToken: rep.authorisation.token};
      this.userSubject.next(user);
      return user;
    }),
    shareReplay(),
      tap(() => this.snackbar.open(`Bienvenue, ${this.userValue.name}`, 'Close', {
      duration: 2000, horizontalPosition: 'right',
      verticalPosition: 'top'
    })),
    catchError(err => {
      this.userSubject.next(ANONYMOUS_USER);
      this.snackbar.open('Connexion invalide', 'Close', {
      duration: 2000, horizontalPosition: 'right',
      verticalPosition: 'top'
    })
      throw new Error(`login result : ${err}`)
    }));
  }

  register(request: RegisterRequest): Observable<User> {
    return this.http.post<any>(`${environment.apiUrl}/register`, {
    email: request.email,
    name: request.name,
    password: request.password}, httpOptions).pipe(map(rep => {
    const user = {...rep.user, jwtToken: rep.authorisation.token};
    this.userSubject.next(user);
    this.snackbar.open(`Bienvenue, ${this.userValue.name}`,'Close', {
    duration: 2000, horizontalPosition: 'right',verticalPosition: 'top'})
    return user;
  }),
  shareReplay(),
  catchError(err => {
  console.log(err);
  this.userSubject.next(ANONYMOUS_USER);
  this.snackbar.open(`Enregistrement invalide ${err.error.message}`, 'Close', {
  duration: 3000, horizontalPosition: 'right',
  verticalPosition: 'top'
})
throw new Error(`register result : ${err}`)})
    )
  }
}
