"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JeuService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var rxjs_1 = require("rxjs");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
};
var JeuService = /** @class */ (function () {
    function JeuService(http, snackbar) {
        this.http = http;
        this.snackbar = snackbar;
    }
    JeuService.prototype.getJeux = function (params) {
        var url = environment_1.environment.apiUrl + "/jeux/" + params;
        return this.http.get(url, httpOptions).pipe(rxjs_1.map(function (res) { return res.data; }), rxjs_1.catchError(function (err) {
            console.log('Erreur http : ', err);
            return err;
        }));
    };
    JeuService.prototype.getJeu = function (id) {
        var url = environment_1.environment.apiUrl + "/jeux/" + id;
        return this.http.get(url, httpOptions).pipe(rxjs_1.map(function (res) { return res.data; }), rxjs_1.catchError(function (err) {
            console.log('Erreur http : ', err);
            return err;
        }));
    };
    JeuService.prototype.createJeu = function (jeuRequest) {
        var url = environment_1.environment.apiUrl + "/jeux/";
        return this.http.post(url, jeuRequest, httpOptions).pipe(rxjs_1.catchError(function (err) {
            console.log('Erreur http : ', err);
            return err;
        }));
    };
    JeuService.prototype.updateJeu = function (jeuRequest) {
        var url = environment_1.environment.apiUrl + "/jeux/" + jeuRequest.id;
        return this.http.put(url, jeuRequest, httpOptions).pipe(rxjs_1.catchError(function (err) {
            console.log('Erreur http : ', err);
            return err;
        }));
    };
    JeuService.prototype.uploadMedia = function (id, avatar) {
        var url = environment_1.environment.apiUrl + "/jeux/id";
        return this.http.put(url, avatar, httpOptions).pipe(rxjs_1.catchError(function (err) {
            console.log('Erreur http : ', err);
            return err;
        }));
    };
    JeuService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], JeuService);
    return JeuService;
}());
exports.JeuService = JeuService;
