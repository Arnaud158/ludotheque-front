"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailsJeuComponent = void 0;
var core_1 = require("@angular/core");
var DetailsJeuComponent = /** @class */ (function () {
    function DetailsJeuComponent(route, jeuService) {
        var _this = this;
        this.route = route;
        this.jeuService = jeuService;
        this.id = +(this.route.snapshot.paramMap.get('id') || 1);
        this.loading = false;
        this.loading = true;
        this.jeuService.getJeu(this.id).subscribe(function (rep) {
            console.log(rep);
            _this.jeu = rep;
            _this.loading = false;
        });
    }
    DetailsJeuComponent = __decorate([
        core_1.Component({
            selector: 'app-details-jeu',
            templateUrl: './details-jeu.component.html',
            styleUrls: ['./details-jeu.component.css']
        })
    ], DetailsJeuComponent);
    return DetailsJeuComponent;
}());
exports.DetailsJeuComponent = DetailsJeuComponent;
