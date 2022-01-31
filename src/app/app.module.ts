import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ApplicantItemComponent } from './components/applicant-item/applicant-item.component';
import { AddApplicantComponent } from './components/add-applicant/add-applicant.component';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: ApplicantsComponent },
  {path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ApplicantsComponent,
    ApplicantItemComponent,
    AddApplicantComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
