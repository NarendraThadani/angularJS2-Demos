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
	
	add(name: string): void {
		name = name.trim();
		if(!name ) { return ;}
		
		this.phoneService.create(name)
			.then(phone => {
				this.phones.push(phone);
				this.selectedPhone = null;	
			});
	}
	
	delete(phone: Phone): void {
		this.phoneService.delete(phone.id)
		.then(() => {
			this.phones = this.phones.filter(h => h !== phone);
			if (this.selectedPhone === phone) { this.selectedPhone = null; }
		});
	}



}
