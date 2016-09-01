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
var PHONES = [
    { id: 11, name: 'Nexus4' },
    { id: 12, name: 'MotoX Play' },
    { id: 13, name: 'MotoG2' },
    { id: 14, name: 'MotoX Style' },
    { id: 15, name: 'Asus Zenfone' },
    { id: 16, name: 'Nexus5' },
    { id: 17, name: 'Samsung Galaxy S7' },
    { id: 18, name: 'iPhone6S' },
    { id: 19, name: 'NokiaLumia' },
    { id: 20, name: 'LG Optimus' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CellPhone Arena';
        this.phones = PHONES;
    }
    AppComponent.prototype.onSelect = function (phone) {
        this.selectedPhone = phone;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n  <h2>Available Phones</h2> \n  <ul class=\"phones\">\n\t\t<li *ngFor=\"let p of phones\"  [class.selected]= \" p===selectedPhone \" (click)=\"onSelect(p)\">\n\t\t\t<span class=\"podium\"> {{p.id}}</span> {{p.name}}\n\t\t</li>\n  </ul>\n  <div *ngIf=\"selectedPhone\">\n\t  <h2>{{selectedPhone.name}} Details</h2>\n\t  <div>\n\t\t<label>Id: </label>{{selectedPhone.id}}\n\t  </div>\n\t  <div>\n\t\t<label>Name: </label>\n\t\t<input [(ngModel)]=\"selectedPhone.name\" placeHolder=\"name\"></div>  \n  </div>",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .phones {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .phones li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .phones li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .phones li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .phones .text {\n    position: relative;\n    top: -3px;\n  }\n  .phones .podium {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map