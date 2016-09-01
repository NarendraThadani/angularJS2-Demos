import { Component } from '@angular/core';

export class Phone{
	id: number;
	name: string;
	
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1> 
  <h3>{{phone.name}} Details!</h3> 
  <div><label>Id: </label>{{phone.id}}</div> 
  <div>
	<label> Name: </label> 
	<input [(ngModel)]="phone.name" placeholder="name"> 
  </div>`
})	
export class AppComponent { 
	title= 'CellPhone Arena';
	phone: Phone  = { 
		id: 1,
		name: 'Nexus4'
	};
}
