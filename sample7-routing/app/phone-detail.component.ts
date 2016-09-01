import { Component, Input, OnInit } from '@angular/core';
import { Phone } from './phone';

import { ActivatedRoute, Params } from '@angular/router';
import { PhoneService } from './phone.service';


@Component({
  selector: 'my-phone-detail',
  templateUrl: 'app/phone-detail.component.html',
  styleUrls: ['app/phone-detail.component.css']

})
export class PhoneDetailComponent implements OnInit {
@Input()
phone: Phone;

	constructor ( private phoneService: PhoneService, private route: ActivatedRoute ){
		
		
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.phoneService.getPhone(id)
				.then(phone => this.phone = phone);
		});
		
		
	}
	goBack() : void {
		
		window.history.back();
	}
	
	save(): void {
		
		this.phoneService.update(this.phone)
			.then(this.goBack);
		
	}
	

}
