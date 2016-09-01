import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonesComponent }      from './phones.component';
import { DashboardComponent }      from './dashboard.component';
import { PhoneDetailComponent }      from './phone-detail.component';

const appRoutes: Routes = [
  {
    path: 'phones',
    component: PhonesComponent
  },
  
  {
  path: 'dashboard',
  component: DashboardComponent
  },
  
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  },
  
  {
  path: 'detail/:id',
  component: PhoneDetailComponent
  }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

