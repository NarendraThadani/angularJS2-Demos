import { Injectable } from '@angular/core';

import { Phone } from './phone';
import { PHONES } from './mock-phones';


@Injectable()
export class PhoneService {
	
	/*
		getPhones function of our Service currently returns a mock data ..
		but usually such functions tend to invoke some server Side Service to fetch data..
		
		i.e would be async.... so we return a Promise
	*/
	
	getPhones() :  Promise<Phone []>{		
		return Promise.resolve(PHONES);
	}
	
	/*
		simulating slow behaviour of getPhones 
		by adding a 2 sec timeout before returning.
	*/
	getPhonesSlowly() : Promise< Phone []> {
		
		return new Promise< Phone []> (
			resolve => setTimeout(resolve,2000) 
		).then(() => this.getPhones());
		
	}

	
}