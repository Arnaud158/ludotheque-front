"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ToastService = void 0;
var core_1 = require("@angular/core");
var ToastService = /** @class */ (function () {
    function ToastService(snackBar) {
        this.snackBar = snackBar;
    }
    // Snackbar that opens with success background
    ToastService.prototype.openSnackBar = function (options) {
        var style = options.severity == 'info' ? 'green-snackbar' : 'red-snackbar';
        var action = options.summary || "OK";
        this.snackBar.open(options.comment || "message", action, {
            duration: 3000,
            panelClass: [style]
        });
    };
    ToastService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ToastService);
    return ToastService;
}());
exports.ToastService = ToastService;
