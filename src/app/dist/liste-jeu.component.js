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
exports.DataSourceAsynchro = exports.ListeJeuComponent = void 0;
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var rxjs_1 = require("rxjs");
var ListeJeuComponent = /** @class */ (function () {
    function ListeJeuComponent(jeuService) {
        this.jeuService = jeuService;
        this.listeJeu = [];
        this.dataSource = new DataSourceAsynchro(this.jeuService);
        this.lesColonnes = ['nom', 'description', 'langue', 'categorie', 'theme'];
        this.dataSource.setData();
    }
    ListeJeuComponent = __decorate([
        core_1.Component({
            selector: 'app-liste-jeu',
            template: "\n  <div class=\"liste-personnes\">\n    <div class=\"div-table-personnes\">\n      <table mat-table [dataSource]=\"dataSource\">\n\n        <!-- nom Column -->\n        <ng-container matColumnDef=\"nom\">\n          <th mat-header-cell *matHeaderCellDef> #</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.nom}} </td>\n        </ng-container>\n\n        <!-- description Column -->\n        <ng-container matColumnDef=\"description\">\n          <th mat-header-cell *matHeaderCellDef>description</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n        </ng-container>\n\n        <!-- langue Column -->\n        <ng-container matColumnDef=\"langue\">\n          <th mat-header-cell *matHeaderCellDef>langue</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.langue}} </td>\n        </ng-container>\n\n        <!-- cat\u00E9gorie Column -->\n        <ng-container matColumnDef=\"categorie\">\n          <th mat-header-cell *matHeaderCellDef>cat\u00E9gorie</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <mat-icon [routerLink]=\"['/personnes', element.categorie]\">loupe</mat-icon>\n          </td>\n        </ng-container>\n\n        <!-- th\u00E8me Column -->\n        <ng-container matColumnDef=\"theme\">\n          <th mat-header-cell *matHeaderCellDef>Th\u00E8me</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.theme}} </td>\n        </ng-container>\n\n        <!-- La ligne -->\n        <tr mat-header-row *matHeaderRowDef=\"lesColonnes; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: lesColonnes;\"></tr>\n      </table>\n    </div>\n  </div>\n",
            styles: []
        })
    ], ListeJeuComponent);
    return ListeJeuComponent;
}());
exports.ListeJeuComponent = ListeJeuComponent;
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
    DataSourceAsynchro.prototype.setData = function (sort, horsLimite) {
        var _this = this;
        if (sort === void 0) { sort = 0; }
        if (horsLimite === void 0) { horsLimite = false; }
        this.jeuService.getJeux()
            .subscribe(function (jeux) { return _this.jeuSubject.next(jeux); });
    };
    return DataSourceAsynchro;
}(collections_1.DataSource));
exports.DataSourceAsynchro = DataSourceAsynchro;
