"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var expansion_1 = require("@angular/material/expansion");
var list_1 = require("@angular/material/list");
var icon_1 = require("@angular/material/icon");
var toolbar_1 = require("@angular/material/toolbar");
var table_1 = require("@angular/material/table");
var select_1 = require("@angular/material/select");
var forms_1 = require("@angular/forms");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var card_1 = require("@angular/material/card");
var snack_bar_1 = require("@angular/material/snack-bar");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                snack_bar_1.MatSnackBarModule,
                expansion_1.MatExpansionModule,
                list_1.MatListModule,
                icon_1.MatIconModule,
                toolbar_1.MatToolbarModule,
                table_1.MatTableModule,
                select_1.MatSelectModule,
                forms_1.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                card_1.MatCardModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
