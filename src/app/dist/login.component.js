"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.form = new forms_1.FormGroup({});
    }
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: "\n<div>\n<a [routerLink]=\"['../register']\">Cr\u00E9ation d'un compte</a>\n<mat-card>\n<mat-card-title>Connexion</mat-card-title>\n<mat-card-content>\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n<mat-form-field>\n<input type=\"email\" matInput placeholder=\"Email\"\nformControlName=\"email\">\n<mat-error\n*ngIf=\"email?.touched && email?.hasError('required')\">\nL'adresse mail est obligatoire\n</mat-error>\n<mat-error *ngIf=\"email?.touched && email?.hasError('\nemail')\">\nDoit \u00EAtre une adresse mail valide\n</mat-error>\n</mat-form-field>\n\n<mat-form-field>\n<input type=\"password\" matInput placeholder=\"Password\"\nformControlName=\"password\">\n<mat-error\n*ngIf=\"password?.touched && password?.hasError('\nrequired')\">\nLe mot de passe est obligatoire\n</mat-error>\n</mat-form-field>\n\n<div class=\"button\">\n<button type=\"submit\" mat-button [disabled]=\"!form.valid\"\n>Connexion</button>\n</div>\n</form>\n</mat-card-content>\n</mat-card>\n</div>\n",
            styles: [
                ':host { display: flex; justify-content: center; margin: 100px 0px;}', 'mat-card { max-width: 600px;}',
                'mat-card-title, mat-card-content { display: flex; justifycontent: center;}',
                'mat-form-field { width: 100%; min-width: 300px; }',
                '.error {padding: 16px;width: 300px;color: white;backgroundcolor: red;}',
                '.button { display: flex; justify-content: flex-end;}'
            ]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
