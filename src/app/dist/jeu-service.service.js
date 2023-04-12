"use strict";
exports.__esModule = true;
exports.JeuServiceService = void 0;
var http_1 = require("@angular/common/http");
var environment_prod_1 = require("environments/environment.prod");
var rxjs_1 = require("rxjs");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
};
var JeuServiceService = /** @class */ (function () {
    function JeuServiceService(http, snackbar) {
        this.http = http;
        this.snackbar = snackbar;
    }
    JeuServiceService.prototype.getJeu = function (params) {
        params;
    };
    JeuServiceService.prototype.getJeu = function (id) {
        var url = environment_prod_1.environment.apiUrl + "/jeu/" + id;
        return this.http.get(url, httpOptions).pipe(rxjs_1.map(function (res) { return res.data; }), rxjs_1.catchError(function (err) {
            console.log('Erreur http : ', err);
            return err;
        }));
    };
    JeuServiceService.prototype.noteJeu = function (id) {
    };
    JeuServiceService.prototype.nbLikes = function (id) {
    };
    JeuServiceService.prototype.createJeu = function (jeuRequest) {
    };
    JeuServiceService.prototype.updateJeu = function (jeuRequest) {
    };
    JeuServiceService.prototype.uploadMedia = function (id) {
    };
    return JeuServiceService;
}());
exports.JeuServiceService = JeuServiceService;
