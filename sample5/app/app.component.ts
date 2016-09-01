import { Component } from '@angular/core';
import { Phone } from './phone';



const PHONES: Phone[] = [
  { id: 11, name: 'Nexus4' },
  { id: 12, name: 'MotoX Play' },
  { id: 13, name: 'MotoG2' },
  { id: 14, name: 'MotoX Style' },
  { id: 15, name: 'Asus Zenfone' },
  { id: 16, name: 'Nexus5' },
  { id: 17, name: 'Samsung Galaxy S7' },
  { id: 18, name: 'iPhone6S' },
  { id: 19, name: 'NokiaLumia' },
  { id: 20, name: 'LG Optimus' }
];


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
})	
export class AppComponent { 
	title= 'CellPhone Arena';
	phones= PHONES;
	
	selectedPhone: Phone;
	
	onSelect(phone: Phone): void {
		this.selectedPhone = phone;
	}


}
