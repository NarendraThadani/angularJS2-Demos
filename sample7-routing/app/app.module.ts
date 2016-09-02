import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule }    from '@angular/http';

import './rxjs-extensions';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';
import { PhoneDetailComponent } from './phone-detail.component';
import { PhonesComponent } from './phones.component';
import { PhoneService} from './phone.service';
import { DashboardComponent } from './dashboard.component';
import {PhoneSearchComponent } from './phone-search.component';

import { routing } from './app.routing';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), routing ],
  declarations: [ AppComponent, PhoneDetailComponent, PhonesComponent, DashboardComponent, PhoneSearchComponent],
  bootstrap:    [ AppComponent ],
  
  providers: [PhoneService]
})
export class AppModule { }
