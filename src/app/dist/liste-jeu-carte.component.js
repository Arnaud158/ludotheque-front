"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataSourceAsynchro = exports.ListeJeuCarteComponent = void 0;
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var rxjs_1 = require("rxjs");
var ListeJeuCarteComponent = /** @class */ (function () {
    function ListeJeuCarteComponent(jeuService) {
        var _this = this;
        this.jeuService = jeuService;
        this.listeJeu = [];
        this.dataSource = new DataSourceAsynchro(this.jeuService);
        this.lesColonnes = [
            'nom',
            'description',
            'langue',
            'categorie',
            'theme',
            'details',
        ];
        this.dataSource.setData();
        this.dataSource.connect().subscribe(function (jeu) {
            _this.listeJeu = jeu;
        });
    }
    ListeJeuCarteComponent = __decorate([
        core_1.Component({
            selector: 'app-liste-jeu-carte',
            template: "\n    <div class=\"liste-personnes\">\n      <div class=\"div-table-personnes\" *ngFor=\"let jeu of listeJeu\">\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title\n              ><h3>{{ jeu.id }}</h3></mat-card-title\n            >\n            <mat-card-subtitle>{{ jeu.nom }}</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <p>Description : {{ jeu.description }}</p>\n\n            <p>Age minimum : {{ jeu.age_min }}</p>\n            <p>Langues : {{ jeu.langue }}</p>\n\n            <p>Joueurs Minimums : {{ jeu.nombre_joueurs_min }}</p>\n            <p>Joueurs Maximum: {{ jeu.nombre_joueurs_max }}</p>\n            <p>Dur\u00E9e : {{ jeu.duree_partie }}</p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  ",
            styles: []
        })
    ], ListeJeuCarteComponent);
    return ListeJeuCarteComponent;
}());
exports.ListeJeuCarteComponent = ListeJeuCarteComponent;
var DataSourceAsynchro = /** @class */ (function (_super) {
    __extends(DataSourceAsynchro, _super);
    function DataSourceAsynchro(jeuService) {
        var _this = _super.call(this) || this;
        _this.jeuService = jeuService;
        _this.jeuSubject = new rxjs_1.BehaviorSubject([]);
        return _this;
        //    this.setData();
    }
    DataSourceAsynchro.prototype.connect = function () {
        return this.jeuSubject.asObservable();
    };
    DataSourceAsynchro.prototype.disconnect = function () {
        this.jeuSubject.complete();
    };
    DataSourceAsynchro.prototype.setData = function () {
        var _this = this;
        this.jeuService.getJeux().subscribe(function (jeux) { return _this.jeuSubject.next(jeux); });
    };
    return DataSourceAsynchro;
}(collections_1.DataSource));
exports.DataSourceAsynchro = DataSourceAsynchro;
