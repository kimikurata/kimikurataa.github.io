import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { StickyNavModule } from 'ng2-sticky-nav';
import { RouterModule, Router } from '@angular/router';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { TipythonComponent } from './tipython/tipython.component';
import { WizappComponent } from './wizapp/wizapp.component';
import { HolidayinnComponent } from './holidayinn/holidayinn.component';
import { HomeComponent } from './home/home.component';
import { TinspireComponent } from './tinspire/tinspire.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectThumbsComponent } from './project-thumbs/project-thumbs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WizappComponent,
    HolidayinnComponent,
    TinspireComponent,
    TipythonComponent,
    HomeComponent,
    FooterComponent,
    ProjectThumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    StickyNavModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
