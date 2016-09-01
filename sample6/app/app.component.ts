import { Component } from '@angular/core';
import { Phone } from './phone';
import {OnInit } from '@angular/core';
import  { PhoneService } from './phone.service';





@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <h2>Available Phones</h2> 
  <ul class="phones">
		<li *ngFor="let p of phones"  [class.selected]= " p===selectedPhone " (click)="onSelect(p)">
			<span class="podium"> {{p.id}}</span> {{p.name}}
		</li>
  </ul>
  <my-phone-detail [phone]= selectedPhone></my-phone-detail>
  `,
  
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .phones {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .phones li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .phones li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .phones li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .phones .text {
    position: relative;
    top: -3px;
  }
  .phones .podium {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

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
