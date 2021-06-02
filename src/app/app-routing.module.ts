import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { TinspireComponent } from './tinspire/tinspire.component';
import { TipythonComponent } from './tipython/tipython.component';
import { WizappComponent } from './wizapp/wizapp.component';
import { HolidayinnComponent } from './holidayinn/holidayinn.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tinspire', component: TinspireComponent}, 
  {path: 'tipython', component: TipythonComponent}, 
  {path: 'wizapp', component: WizappComponent}, 
  {path: 'holidayinn', component: HolidayinnComponent}, 

  {
    path: 'content',
    component: WizappComponent,
  },
  {
    path: '',
    redirectTo: 'content', // Empty path will redirect to content route.
    pathMatch: 'full'
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
