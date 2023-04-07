"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.registerForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators
                    .email]),
            name: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
            passwordConfirm: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.registerForm.valid) {
            return;
        }
        this.authService.register(__assign({}, this.
            registerForm.value)).pipe(rxjs_1.tap(function () { return _this.router.navigate(['dashboard']); })).subscribe();
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwordConfirm", {
        get: function () {
            return this.registerForm.get('passwordConfirm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () {
            return this.registerForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: "\n   <div>\n   <a [routerLink]=\"['../login']\">Se connecter</a>\n   <mat-card>\n   <mat-card-title>Enregistrement</mat-card-title>\n  \n   <mat-card-content>\n   <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n  \n   <mat-form-field>\n   <input type=\"email\" matInput placeholder=\"Email\"\n  formControlName=\"email\">\n   <mat-error\n   *ngIf=\"this.registerForm.get('email')?.touched && this.\n  registerForm.get('email')?.hasError('required')\">\n   L'adresse mail est obligatoire\n   </mat-error>\n   <mat-error\n   *ngIf=\"this.registerForm.get('email')?.touched && this.\n  registerForm.get('email')?.hasError('email')\">\n   Doit \u00EAtre une adresse mail valide\n   </mat-error>\n   </mat-form-field>\n\n   <mat-form-field>\n   <input type=\"text\" matInput placeholder=\"Nom\"\n  formControlName=\"name\">\n   <mat-error\n   *ngIf=\"name?.touched && name?.hasError('required')\">\n   Le nom est obligatoire\n </mat-error>\n   </mat-form-field>\n  \n   <mat-form-field>\n <input type=\"password\" matInput placeholder=\"Password\"\n  formControlName=\"password\">\n   <mat-error\n   *ngIf=\"password?.touched && password?.hasError('\nrequired')\">\nLe mot de passe est obligatoire\n</mat-error>\n </mat-form-field>\n\n <mat-form-field>\n <input type=\"password\" matInput placeholder=\"Password\nConfirmation\" formControlName=\"passwordConfirm\">\n <mat-error\n *ngIf=\"passwordConfirm?.touched && passwordConfirm?.\nhasError('required')\">\n La confirmation du mot de passe est obligatoire\n </mat-error>\n </mat-form-field>\n\n <mat-error *ngIf=\"passwordConfirm?.dirty && this.registerForm.\nhasError('passwordsNotMatching')\">\nLes mots de passe saisis ne sont pas identiques !\n </mat-error>\n\n <div class=\"button\">\n <button type=\"submit\" mat-button [disabled]=\"!\nregisterForm.valid\">Enregistrement</button>\n </div>\n\n </form>\n </mat-card-content>\n\n </mat-card>\n </div>\n\n ",
            styles: [
                ':host { display: flex; justify-content: center; margin: 100px 0px;}',
                'mat-card { max-width: 600px;}',
                'mat-card-title, mat-card-content { display: flex; justifycontent: center;}',
                'mat-form-field { width: 100%; min-width: 300px; }',
                '.error {padding: 16px;width: 300px;color: white;backgroundcolor: red;}',
                '.button { display: flex; justify-content: flex-end;}',
            ]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
