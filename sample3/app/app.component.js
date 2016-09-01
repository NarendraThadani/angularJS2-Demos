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
var core_1 = require('@angular/core');
var Phone = (function () {
    function Phone() {
    }
    return Phone;
}());
exports.Phone = Phone;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CellPhone Arena';
        this.phone = {
            id: 1,
            name: 'Nexus4'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1> \n  <h3>{{phone.name}} Details!</h3> \n  <div><label>Id: </label>{{phone.id}}</div> \n  <div>\n\t<label> Name: </label> \n\t<input [(ngModel)]=\"phone.name\" placeholder=\"name\"> \n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map