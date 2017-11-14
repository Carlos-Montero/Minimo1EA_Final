import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListSubject } from './listsubject.component';
import { ListStudent } from './liststudent.component';
import { SubjectComponent } from './subject.component';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";

import 'rxjs/add/operator/map';



const appRoutes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'listsubject', component: ListSubject},
  {path: 'liststudent', component: ListStudent}
]


@NgModule({
  declarations: [
    AppComponent,
    ListSubject,
    SubjectComponent,
    ListStudent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
