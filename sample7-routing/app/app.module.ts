import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppComponent }  from './app.component';
import { PhoneDetailComponent } from './phone-detail.component';
import { PhonesComponent } from './phones.component';
import { PhoneService} from './phone.service';
import { DashboardComponent } from './dashboard.component';

import { routing } from './app.routing';



@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, PhoneDetailComponent, PhonesComponent, DashboardComponent],
  bootstrap:    [ AppComponent ],
  
  providers: [PhoneService]
})
export class AppModule { }
