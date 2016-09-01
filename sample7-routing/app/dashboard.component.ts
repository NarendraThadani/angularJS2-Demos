import { Component, OnInit } from '@angular/core';


import { PhoneService } from './phone.service';
import { Phone } from './phone';

import { Router } from '@angular/router';



@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']


})
export class DashboardComponent implements OnInit{

	phones : Phones []  = [];
	
	constructor (private router: Router, private phoneService: PhoneService){
		
		
	}
	
	ngOnInit(): void {
		this.phoneService.getPhones()
			.then(phones => this.phones = phones.slice(1,5));
			
	}
	
	gotoDetail (phone: Phone ): void {
		let link = ['/detail', phone.id];
		this.router.navigate(link);
		
	}

}
