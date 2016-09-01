import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { PhoneDetailComponent } from './phone-detail.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PhoneDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
