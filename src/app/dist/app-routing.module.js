"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_not_found_component_1 = require("./page-not-found.component");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var a_propos_component_1 = require("./a-propos/a-propos.component");
var contact_component_1 = require("./contact/contact.component");
var liste_jeu_component_1 = require("./liste-jeu.component");
var accueil_component_1 = require("./accueil/accueil.component");
var details_jeu_component_1 = require("./details-jeu/details-jeu.component");
var liste_jeu_carte_component_1 = require("./liste-jeu-carte.component");
var routes = [
    { path: '', component: accueil_component_1.AccueilComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'apropos', component: a_propos_component_1.AProposComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'jeux/:id', component: details_jeu_component_1.DetailsJeuComponent },
    { path: 'jeuxTab', component: liste_jeu_component_1.ListeJeuComponent },
    { path: 'jeuxCarte', component: liste_jeu_carte_component_1.ListeJeuCarteComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
