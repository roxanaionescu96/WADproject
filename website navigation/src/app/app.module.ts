import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {LoginFormComponent} from './login-form/login-form.component';

const  appRoutes: Routes = [
  {path: 'homepage ', component: HomepageComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    ContactComponent,
    ServicesComponent,
    LoginFormComponent,
    HomepageComponent,
    AboutPageComponent,
    ContactComponent,
    ServicesComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCIZY4a4yAcFGLWpk-67FRf8q0XHKURYpg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
