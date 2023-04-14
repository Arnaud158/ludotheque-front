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
exports.CreationJeuComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var CreationJeuComponent = /** @class */ (function () {
    function CreationJeuComponent(jeuService, snackbar, router) {
        this.jeuService = jeuService;
        this.snackbar = snackbar;
        this.router = router;
        this.creationJeuForm = new forms_1.FormGroup({
            nom: new forms_1.FormControl('', [forms_1.Validators.required]),
            description: new forms_1.FormControl('', [forms_1.Validators.required]),
            langue: new forms_1.FormControl('', [forms_1.Validators.required]),
            age_min: new forms_1.FormControl(1, [forms_1.Validators.required]),
            nombre_joueurs_min: new forms_1.FormControl(1, [forms_1.Validators.required]),
            nombre_joueurs_max: new forms_1.FormControl(1, [forms_1.Validators.required]),
            duree_partie: new forms_1.FormControl(1, [forms_1.Validators.required]),
            categorie: new forms_1.FormControl('', [forms_1.Validators.required]),
            theme: new forms_1.FormControl('', [forms_1.Validators.required]),
            editeur: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    CreationJeuComponent.prototype.creationJeu = function () {
        var _this = this;
        if (!this.creationJeuForm.valid) {
            return;
        }
        this.jeuService
            .createJeu(__assign({}, this.creationJeuForm.value))
            .pipe(rxjs_1.tap(function () { return _this.router.navigate(['']); }))
            .subscribe();
    };
    CreationJeuComponent = __decorate([
        core_1.Component({
            selector: 'app-creation-jeu',
            templateUrl: './creation-jeu.component.html',
            styleUrls: ['./creation-jeu.component.css']
        })
    ], CreationJeuComponent);
    return CreationJeuComponent;
}());
exports.CreationJeuComponent = CreationJeuComponent;
