"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service) {
        var _this = this;
        this.service = service;
        this.loggedIn = false;
        this.loggedOut = false;
        service.isLoggedIn$.subscribe(function (x) { return _this.loggedIn = x; });
        service.isLoggedOut$.subscribe(function (x) { return _this.loggedOut = x; });
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n      <mat-toolbar color=\"primary\" xmlns=\"http://www.w3.org/1999/html\">\n        <span>Le bouton d'or</span>\n        <div *ngIf=\"loggedOut\">\n            <button mat-raised-button  routerLinkActive=\"mat-accent\"  aria-label=\"List icon\" [routerLink]=\"['/register']\">Register</button>\n            <button mat-raised-button  routerLinkActive=\"mat-accent\"  aria-label=\"List icon\" [routerLink]=\"['/login']\">Login</button>\n        </div>\n        <div *ngIf=\"loggedIn\">\n          <button mat-raised-button  routerLinkActive=\"mat-accent\"  aria-label=\"List icon\" (click)=\"service.logout()\">Logout</button>\n          <button mat-icon-button routerLinkActive=\"mat-accent\" aria-label=\"Example icon button with a heart icon\" [routerLink]=\"['/profil']\">\n            <mat-icon>account_circle</mat-icon>\n          </button>\n          {{service.userValue.nom}}\n          {{service.userValue.prenom}}\n          {{service.userValue.avatar}}\n          <button mat-raised-button  routerLinkActive=\"mat-accent\"  aria-label=\"List icon\" [routerLink]=\"['/jeux']\">Liste des jeux</button>\n        </div>\n      </mat-toolbar>\n  ",
            styles: []
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
