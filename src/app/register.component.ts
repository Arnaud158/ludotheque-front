import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { RegisterRequest } from 'src/models/register-request';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  template: `
   <div>
   <a [routerLink]="['../login']">Se connecter</a>
   <mat-card>
   <mat-card-title>Enregistrement</mat-card-title>
  
   <mat-card-content>
   <form [formGroup]="registerForm" (ngSubmit)="register()">
  
   <mat-form-field>
   <input type="email" matInput placeholder="Email"
  formControlName="email">
   <mat-error
   *ngIf="this.registerForm.get('email')?.touched && this.
  registerForm.get('email')?.hasError('required')">
   L'adresse mail est obligatoire
   </mat-error>
   <mat-error
   *ngIf="this.registerForm.get('email')?.touched && this.
  registerForm.get('email')?.hasError('email')">
   Doit être une adresse mail valide
   </mat-error>
   </mat-form-field>

   <mat-form-field>
   <input type="text" matInput placeholder="Nom"
  formControlName="name">
   <mat-error
   *ngIf="name?.touched && name?.hasError('required')">
   Le nom est obligatoire
 </mat-error>
   </mat-form-field>
  
   <mat-form-field>
 <input type="password" matInput placeholder="Password"
  formControlName="password">
   <mat-error
   *ngIf="password?.touched && password?.hasError('
required')">
Le mot de passe est obligatoire
</mat-error>
 </mat-form-field>

 <mat-form-field>
 <input type="password" matInput placeholder="Password
Confirmation" formControlName="passwordConfirm">
 <mat-error
 *ngIf="passwordConfirm?.touched && passwordConfirm?.
hasError('required')">
 La confirmation du mot de passe est obligatoire
 </mat-error>
 </mat-form-field>

 <mat-error *ngIf="passwordConfirm?.dirty && this.registerForm.
hasError('passwordsNotMatching')">
Les mots de passe saisis ne sont pas identiques !
 </mat-error>

 <div class="button">
 <button type="submit" mat-button [disabled]="!
registerForm.valid">Enregistrement</button>
 </div>

 </form>
 </mat-card-content>

 </mat-card>
 </div>

 `,
  styles: [
    ':host { display: flex; justify-content: center; margin: 100px 0px;}',
    'mat-card { max-width: 600px;}',
    'mat-card-title, mat-card-content { display: flex; justifycontent: center;}',
    'mat-form-field { width: 100%; min-width: 300px; }',
    '.error {padding: 16px;width: 300px;color: white;backgroundcolor: red;}',
    '.button { display: flex; justify-content: flex-end;}',
  ],
 })
 export class RegisterComponent {
 registerForm = new FormGroup({
 email: new FormControl('', [Validators.required, Validators
.email]),
name: new FormControl('', [Validators.required]),
 password: new FormControl('', [Validators.required]),
 passwordConfirm: new FormControl('', [Validators.required])
},
 )

 constructor(
 private router: Router,
 private authService: AuthService
 ) {
 }

 register() {
 if (!this.registerForm.valid) {
return;
 }
 this.authService.register(<RegisterRequest>{...this.
registerForm.value}).pipe(
 tap(() => this.router.navigate(['dashboard']))
 ).subscribe();
 }

 get email() {
 return this.registerForm.get('email');
 }

 get password() {
 return this.registerForm.get('password');
 }

 get passwordConfirm() {
 return this.registerForm.get('passwordConfirm');
 }

 get name() {
 return this.registerForm.get('name');
 }
 }

