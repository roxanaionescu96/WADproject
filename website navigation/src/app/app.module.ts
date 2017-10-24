import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
const  appRoutes: Routes = [
  {path: 'homepage ', component: HomepageComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
