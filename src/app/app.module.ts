import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { SubjectComponent } from './subject.component';
import { AppComponent } from './app.component';
import { FilterListComponent } from './filterlist.component';
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";

import 'rxjs/add/operator/map';



const appRoutes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'list', component: ListComponent},
  {path: 'filterlist', component: FilterListComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SubjectComponent,
    FilterListComponent
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
