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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var phone_search_service_1 = require('./phone-search.service');
var PhoneSearchComponent = (function () {
    function PhoneSearchComponent(phoneSearchService, router) {
        this.phoneSearchService = phoneSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    PhoneSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PhoneSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phones = this.searchTerms
            .debounceTime(300) //wait for 300 milliSec
            .distinctUntilChanged() //ignore is same as previous
            .switchMap(function (term) { return term //switch to new Observable each time
            ? _this.phoneSearchService.search(term) //return http result
            : Observable_1.Observable.of([]); } //or Empty array of Observable
         //or Empty array of Observable
        )
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    PhoneSearchComponent.prototype.gotoDetail = function (phone) {
        var link = ['detail/', phone.id];
        this.router.navigate(link);
    };
    PhoneSearchComponent = __decorate([
        core_1.Component({
            selector: 'phone-search',
            templateUrl: 'app/phone-search.component.html',
            styleUrls: ['app/phone-search.component.css'],
            providers: [phone_search_service_1.PhoneSearchService]
        }), 
        __metadata('design:paramtypes', [phone_search_service_1.PhoneSearchService, router_1.Router])
    ], PhoneSearchComponent);
    return PhoneSearchComponent;
}());
exports.PhoneSearchComponent = PhoneSearchComponent;
//# sourceMappingURL=phone-search.component.js.map