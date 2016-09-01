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
var router_1 = require('@angular/router');
var phone_service_1 = require('./phone.service');
var PhoneDetailComponent = (function () {
    function PhoneDetailComponent(phoneService, route) {
        this.phoneService = phoneService;
        this.route = route;
    }
    PhoneDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.phoneService.getPhone(id)
                .then(function (phone) { return _this.phone = phone; });
        });
    };
    PhoneDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', phone_1.Phone)
    ], PhoneDetailComponent.prototype, "phone", void 0);
    PhoneDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-phone-detail',
            templateUrl: 'app/phone-detail.component.html',
            styleUrls: ['app/phone-detail.component.css']
        }), 
        __metadata('design:paramtypes', [phone_service_1.PhoneService, router_1.ActivatedRoute])
    ], PhoneDetailComponent);
    return PhoneDetailComponent;
}());
exports.PhoneDetailComponent = PhoneDetailComponent;
//# sourceMappingURL=phone-detail.component.js.map