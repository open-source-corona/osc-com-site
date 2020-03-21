import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenubarModule, MessagesModule} from 'primeng';
import {Routes, RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { DevelopersComponent } from './developers/developers.component';
import { ApisComponent } from './apis/apis.component';
import {CountriesComponent} from './countries/countries.component';
import { InformationComponent } from './information/information.component';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'information', component: InformationComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'apis', component: ApisComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    DevelopersComponent,
    ApisComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    MessagesModule,
    MessagesModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
