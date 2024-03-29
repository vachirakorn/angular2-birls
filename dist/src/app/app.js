"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var core_2 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(http, endpoint) {
        this.http = http;
        this.endpoint = endpoint;
        this.fbUrl = 'https://www.facebook.com/birlsmagazine';
        this.twUrl = 'https://www.facebook.com/birlsmagazine';
    }
    AppComponent.prototype.ngOnInit = function () {
        var repoEndpoint = this.endpoint.replace("/api", "");
        this.http.post(repoEndpoint + '/app/settings/onboarding/run', {}, new http_1.Headers({ "Content-Type": "application/x-www-form-urlencoded", 'Access-Control-Allow-Origin': '*' })).subscribe(function (res) { return null; }, function (error) { return null; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './app.html',
        styleUrls: ['./app.scss']
    }),
    __param(1, core_2.Inject('PrismicEndpoint')),
    __metadata("design:paramtypes", [http_1.Http, String])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map