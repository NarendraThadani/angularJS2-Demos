import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Phone  } from './phone';

@Injectable ()
export class PhoneSearchService {
	
	constructor (private http: Http){
		
	}
	
	search (term: string) : Observable<Phone[]> {
		console.log(term);
		return this.http.get ( `app/phones/?name=${term}`)
			.map ((r: Response) => r.json().data as Phone[]);
	}
	
}