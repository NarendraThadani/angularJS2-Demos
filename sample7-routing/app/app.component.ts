import { Component } from '@angular/core';
import { Phone } from './phone';
import {OnInit } from '@angular/core';
import  { PhoneService } from './phone.service';





@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <nav>
  <a routerLink ="/phones" routerLinkActive="active"> Phones </a>
   | 
  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
 </nav>
  <router-outlet></router-outlet>
   `,
 
 
  styleUrls: ['app/app.component.css']
  providers:  [PhoneService]
})	
export class AppComponent implements OnInit { 
	title= 'CellPhone Arena';
	
	phones: Phone[];	
	selectedPhone: Phone;

	constructor(private phoneService : PhoneService ){
		/*
		injecting the phoneService Service into our AppComponent ... 
		we do not instantiate phoneService using new keyword, instead we inject it thru constructor...
		which implementation of the instance to inject is specified in providers of the Component. .. e.g  providers: [PhoneService];
		*/
		
	}
	
	ngOnInit(): void {
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
	}
	onSelect(phone: Phone): void {
		this.selectedPhone = phone;
	}
	
	getPhones () : void {
		
		//this.phones =  this.phoneService.getPhones();  // direct call to getPhones function... Usually we will prefer promises

		
		//invoking getPhones function async ... using a Promise callback		
		//this.phoneService.getPhones().then(phones => this.phones= phones);
		
		//invoking getPhonesSlowly function to test async and slow behaviour while calling the service method.

		this.phoneService.getPhonesSlowly().then(phones => this.phones= phones);
	}


}
