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
var mock_phones_1 = require('./mock-phones');
var PhoneService = (function () {
    function PhoneService() {
    }
    /*
        getPhones function of our Service currently returns a mock data ..
        but usually such functions tend to invoke some server Side Service to fetch data..
        
        i.e would be async.... so we return a Promise
    */
    PhoneService.prototype.getPhones = function () {
        return Promise.resolve(mock_phones_1.PHONES);
    };
    /*
        simulating slow behaviour of getPhones
        by adding a 2 sec timeout before returning.
    */
    PhoneService.prototype.getPhonesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(resolve, 2000); }).then(function () { return _this.getPhones(); });
    };
    PhoneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PhoneService);
    return PhoneService;
}());
exports.PhoneService = PhoneService;
//# sourceMappingURL=phone.service.js.map