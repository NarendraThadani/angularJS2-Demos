import { Component, Input } from '@angular/core';
import { Phone } from './phone';


@Component({
  selector: 'my-phone-detail',
  template: `
  <div *ngIf="phone">
    <h2>{{phone.name}} details!</h2>
    <div><label>id: </label>{{phone.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="phone.name" placeholder="name"/>
    </div>
  </div>
`

})
export class PhoneDetailComponent {
@Input()
phone: Phone;


}
