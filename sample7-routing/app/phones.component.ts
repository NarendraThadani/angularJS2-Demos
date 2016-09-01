import { Component } from '@angular/core';
import { Phone } from './phone';
import { OnInit } from '@angular/core';
import  { PhoneService } from './phone.service';

import { Router } from '@angular/router';



@Component({
  selector: 'my-phones',
  templateUrl: 'app/phones.component.html',
  
  styleUrls: ['app/phones.component.css']

})	
export class PhonesComponent implements OnInit { 
	
	phones: Phone[];	
	selectedPhone: Phone;

	constructor(private router: Router, private phoneService : PhoneService ){
	}
	
	ngOnInit(): void {
		this.getPhones();
	}
	onSelect(phone: Phone): void {
		this.selectedPhone = phone;
	}
	
	getPhones () : void {
		
		//invoking getPhones function async ... using a Promise callback		
		this.phoneService.getPhones().then(phones => this.phones= phones);
		
		//invoking getPhonesSlowly function to test async and slow behaviour while calling the service method.
		//this.phoneService.getPhonesSlowly().then(phones => this.phones= phones);
	}
	
	gotoDetail (): void {
		this.router.navigate(['/detail', this.selectedPhone.id]);
		
	}


}
