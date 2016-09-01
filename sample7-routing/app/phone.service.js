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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PhoneService = (function () {
    function PhoneService(http) {
        this.http = http;
        this.phonesUrl = 'app/phones'; //URL to Web API
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    /*
    
    */
    PhoneService.prototype.getPhones = function () {
        return this.http.get(this.phonesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /*
        simulating slow behaviour of getPhones
        by adding a 2 sec timeout before returning.
    */
    PhoneService.prototype.getPhonesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(resolve, 2000); }).then(function () { return _this.getPhones(); });
    };
    PhoneService.prototype.getPhone = function (id) {
        return this.getPhones()
            .then(function (phones) { return phones.find(function (phone) { return phone.id === id; }); });
    };
    PhoneService.prototype.update = function (phone) {
        var url = this.phonesUrl + "/" + phone.id;
        return this.http.put(url, JSON.stringify(phone), { headers: this.headers })
            .toPromise()
            .then(function () { return phone; })
            .catch(this.handleError);
    };
    PhoneService.prototype.create = function (name) {
        return this.http.post(this.phonesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PhoneService.prototype.delete = function (id) {
        var url = this.phonesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PhoneService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PhoneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PhoneService);
    return PhoneService;
}());
exports.PhoneService = PhoneService;
//# sourceMappingURL=phone.service.js.map