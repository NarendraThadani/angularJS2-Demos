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
var phone_service_1 = require('./phone.service');
var AppComponent = (function () {
    function AppComponent(phoneService) {
        /*
        injecting the phoneService Service into our AppComponent ...
        we do not instantiate phoneService using new keyword, instead we inject it thru constructor...
        which implementation of the instance to inject is specified in providers of the Component. .. e.g  providers: [PhoneService];
        */
        this.phoneService = phoneService;
        this.title = 'CellPhone Arena';
    }
    AppComponent.prototype.ngOnInit = function () {
        /*
            we needed a call to getPhones functions (which could be a call to remote server)
            It is recommended to not make such calls thru constructors, as they are basically for initialization..
            
            So if not the constructor, then where?
            It is recommended we make such calls in ngOnInit
            (implement OnInit interface and ngOnInit method )
            
            Read more about similar LifeCycle Hooks (like ngOnInit)
            https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
            
        */
        this.getPhones();
    };
    AppComponent.prototype.onSelect = function (phone) {
        this.selectedPhone = phone;
    };
    AppComponent.prototype.getPhones = function () {
        //this.phones =  this.phoneService.getPhones();  // direct call to getPhones function... Usually we will prefer promises
        var _this = this;
        //invoking getPhones function async ... using a Promise callback		
        //this.phoneService.getPhones().then(phones => this.phones= phones);
        //invoking getPhonesSlowly function to test async and slow behaviour while calling the service method.
        this.phoneService.getPhonesSlowly().then(function (phones) { return _this.phones = phones; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n  <nav>\n  <a routerLink =\"/phones\" routerLinkActive=\"active\"> Phones </a>\n   | \n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n </nav>\n  <router-outlet></router-outlet>\n   ",
            styleUrls: ['app/app.component.css'],
            providers: [phone_service_1.PhoneService]
        }), 
        __metadata('design:paramtypes', [phone_service_1.PhoneService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map