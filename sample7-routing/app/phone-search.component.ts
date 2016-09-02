import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import { Phone  } from './phone';
import { PhoneSearchService } from './phone-search.service';

@Component ({
	selector: 'phone-search',
	templateUrl: 'app/phone-search.component.html',
	styleUrls: ['app/phone-search.component.css'],
	providers: [PhoneSearchService]
})
export class PhoneSearchComponent implements OnInit{
	
	phones: Observable<Phone[]>;
	private searchTerms= new Subject<string>();
	
	constructor (private phoneSearchService: PhoneSearchService, private router: Router){
		
	}
	
	search (term: string) : void {
		this.searchTerms.next(term);		
	}
	
	ngOnInit(): void {
		
		this.phones = this.searchTerms
						.debounceTime(300)		//wait for 300 milliSec
						.distinctUntilChanged()	//ignore is same as previous
						.switchMap( term  => term 		//switch to new Observable each time
								?this.phoneSearchService.search(term)	//return http result
								: Observable.of <Phone[]>([])			//or Empty array of Observable
							)
						.catch( error => {
								console.log (error);
								return Observable.of <Phone[]>([]);
							});
		
						
	}
	
	gotoDetail(phone: Phone): void {
		let link= [ 'detail/', phone.id ];
		this.router.navigate(link);		
	}
	
	
}