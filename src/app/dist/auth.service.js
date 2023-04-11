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
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var user_1 = require("../models/user");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../environments/environment");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, snackbar, router) {
        this.http = http;
        this.snackbar = snackbar;
        this.router = router;
        this.userSubject = new rxjs_1.BehaviorSubject(user_1.ANONYMOUS_USER);
        this.user$ = this.userSubject.asObservable();
        this.isLoggedIn$ = this.user$.pipe(rxjs_1.map(function (user) { return !!user.id; }));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(rxjs_1.map(function (isLoggedIn) { return !isLoggedIn; }));
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(environment_1.environment.apiUrl + "/login", { email: email, password: password }, httpOptions)
            .pipe(rxjs_1.map(function (rep) {
            var user = __assign(__assign({}, rep.user), { jwtToken: rep.authorisation.token });
            _this.userSubject.next(user);
            return user;
        }), rxjs_1.shareReplay(), rxjs_1.tap(function () { return _this.snackbar.open("Bienvenue sur votre compte!", 'Close', {
            duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
        }); }), rxjs_1.catchError(function (err) {
            _this.userSubject.next(user_1.ANONYMOUS_USER);
            _this.snackbar.open('Connexion invalide', 'Close', {
                duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
            });
            throw new Error("login result : " + err);
        }));
    };
    AuthService.prototype.register = function (request) {
        var _this = this;
        return this.http.post(environment_1.environment.apiUrl + "/register", {
            login: request.login,
            email: request.email,
            nom: request.nom,
            prenom: request.prenom,
            pseudo: request.pseudo,
            password: request.password
        }, httpOptions).pipe(rxjs_1.map(function (rep) {
            var user = __assign(__assign({}, rep.user), { jwtToken: rep.authorisation.token });
            _this.userSubject.next(user);
            _this.snackbar.open("Bienvenue sur votre compte!", 'Close', {
                duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
            });
            return user;
        }), rxjs_1.shareReplay(), rxjs_1.catchError(function (err) {
            console.log(err);
            _this.userSubject.next(user_1.ANONYMOUS_USER);
            _this.snackbar.open("Enregistrement invalide " + err.error.message, 'Close', {
                duration: 3000, horizontalPosition: 'right', verticalPosition: 'top'
            });
            throw new Error("register result : " + err);
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var oldUser = this.userValue;
        this.http.post(environment_1.environment.apiUrl + "/logout", {}, httpOptions)
            .subscribe(function (user) {
            return _this.snackbar.open("A bient\u00F4t, " + oldUser.name, 'Close', {
                duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
            });
        });
        this.userSubject.next(user_1.ANONYMOUS_USER);
        this.router.navigate(['/']);
    };
    AuthService.prototype.getProfile = function () {
        return this.http.get(environment_1.environment.apiUrl + "/me", httpOptions)
            .pipe(rxjs_1.map(function (rep) { return rep.user; }), rxjs_1.catchError(function (err) { return rxjs_1.throwError(err); }));
    };
    Object.defineProperty(AuthService.prototype, "userValue", {
        get: function () {
            return this.userSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
