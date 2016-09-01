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
var phone_1 = require('./phone');
var PhoneDetailComponent = (function () {
    function PhoneDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', phone_1.Phone)
    ], PhoneDetailComponent.prototype, "phone", void 0);
    PhoneDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-phone-detail',
            template: "\n  <div *ngIf=\"phone\">\n    <h2>{{phone.name}} details!</h2>\n    <div><label>id: </label>{{phone.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"phone.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PhoneDetailComponent);
    return PhoneDetailComponent;
}());
exports.PhoneDetailComponent = PhoneDetailComponent;
//# sourceMappingURL=phone-detail.component.js.map