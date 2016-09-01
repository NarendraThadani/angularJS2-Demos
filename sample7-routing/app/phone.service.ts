import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Phone } from './phone';


@Injectable()
export class PhoneService {
	
	private phonesUrl = 'app/phones';	//URL to Web API
	
	private headers = new Headers({'Content-Type': 'application/json'});

	
	
	constructor (private http : Http){
		
		
	}
	/*
	
	*/
	getPhones() :  Promise<Phone []>{		
		
		return this.http.get(this.phonesUrl)
				.toPromise()
				.then(response => response.json().data as Phone[])
				.catch(this.handleError);
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

	
	getPhone(id: number): Promise<Phone> {
		return this.getPhones()
             .then(phones => phones.find(phone => phone.id === id));
	}
	
	update (phone: Phone): Promise<Phone> {
		const url =`${this.phonesUrl}/${phone.id}`;
		
		return this.http.put(url, JSON.stringify(phone), {headers: this.headers})
			.toPromise()
			.then(() => phone)
			.catch(this.handleError);
		
	}
	
	create(name: string): Promise<Phone> {
		return this.http.post(this.phonesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
	
	delete(id: number): Promise<void> {
		let url = `${this.phonesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}

	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}


	
}