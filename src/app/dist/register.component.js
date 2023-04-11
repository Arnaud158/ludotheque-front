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
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            nom: new forms_1.FormControl('', [forms_1.Validators.required]),
            prenom: new forms_1.FormControl('', [forms_1.Validators.required]),
            pseudo: new forms_1.FormControl('', [forms_1.Validators.required]),
            login: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
            passwordConfirm: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.registerForm.valid) {
            return;
        }
        this.authService
            .register(__assign({}, this.registerForm.value))
            .pipe(rxjs_1.tap(function () { return _this.router.navigate(['']); }))
            .subscribe();
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
            template: "\n    <div>\n      <a [routerLink]=\"['../login']\">Se connecter</a>\n      <mat-card>\n        <mat-card-title>Enregistrement</mat-card-title>\n\n        <mat-card-content>\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n            <mat-form-field>\n              <input\n                type=\"email\"\n                matInput\n                placeholder=\"Email\"\n                formControlName=\"email\"\n              />\n              <mat-error\n                *ngIf=\"\n                  this.registerForm.get('email')?.touched &&\n                  this.registerForm.get('email')?.hasError('required')\n                \"\n              >\n                L'adresse mail est obligatoire\n              </mat-error>\n              <mat-error\n                *ngIf=\"\n                  this.registerForm.get('email')?.touched &&\n                  this.registerForm.get('email')?.hasError('email')\n                \"\n              >\n                Doit \u00EAtre une adresse mail valide\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                type=\"text\"\n                matInput\n                placeholder=\"Nom\"\n                formControlName=\"nom\"\n              />\n              <mat-error *ngIf=\"this.registerForm.get('nom')?.touched && this.registerForm.get('nom')?.hasError('required')\">\n                Le nom est obligatoire\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                type=\"text\"\n                matInput\n                placeholder=\"Pr\u00E9nom\"\n                formControlName=\"prenom\"\n              />\n              <mat-error *ngIf=\"this.registerForm.get('prenom')?.touched && this.registerForm.get('prenom')?.hasError('required')\">\n                Le pr\u00E9nom est obligatoire\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                type=\"text\"\n                matInput\n                placeholder=\"pseudo\"\n                formControlName=\"pseudo\"\n              />\n              <mat-error *ngIf=\"this.registerForm.get('pseudo')?.touched && this.registerForm.get('pseudo')?.hasError('required')\">\n                Le pseudo est obligatoire\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                type=\"text\"\n                matInput\n                placeholder=\"login\"\n                formControlName=\"login\"\n              />\n              <mat-error *ngIf=\"this.registerForm.get('login')?.touched && this.registerForm.get('login')?.hasError('required')\">\n                Le login est obligatoire\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                type=\"password\"\n                matInput\n                placeholder=\"Password\"\n                formControlName=\"password\"\n              />\n              <mat-error\n                *ngIf=\"\n                  password?.touched &&\n                  password?.hasError(\n                    '\nrequired'\n                  )\n                \"\n              >\n                Le mot de passe est obligatoire\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input\n                type=\"password\"\n                matInput\n                placeholder=\"Password\nConfirmation\"\n                formControlName=\"passwordConfirm\"\n              />\n              <mat-error\n                *ngIf=\"\n                  passwordConfirm?.touched &&\n                  passwordConfirm?.hasError('required')\n                \"\n              >\n                La confirmation du mot de passe est obligatoire\n              </mat-error>\n            </mat-form-field>\n\n            <mat-error\n              *ngIf=\"\n                passwordConfirm?.dirty &&\n                this.registerForm.hasError('passwordsNotMatching')\n              \"\n            >\n              Les mots de passe saisis ne sont pas identiques !\n            </mat-error>\n\n            <div class=\"button\">\n              <button type=\"submit\" mat-button [disabled]=\"!registerForm.valid\">\n                Enregistrement\n              </button>\n            </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  ",
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
