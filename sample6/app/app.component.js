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
            template: "<h1>{{title}}</h1>\n  <h2>Available Phones</h2> \n  <ul class=\"phones\">\n\t\t<li *ngFor=\"let p of phones\"  [class.selected]= \" p===selectedPhone \" (click)=\"onSelect(p)\">\n\t\t\t<span class=\"podium\"> {{p.id}}</span> {{p.name}}\n\t\t</li>\n  </ul>\n  <my-phone-detail [phone]= selectedPhone></my-phone-detail>\n  ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .phones {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .phones li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .phones li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .phones li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .phones .text {\n    position: relative;\n    top: -3px;\n  }\n  .phones .podium {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
            providers: [phone_service_1.PhoneService]
        }), 
        __metadata('design:paramtypes', [phone_service_1.PhoneService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map