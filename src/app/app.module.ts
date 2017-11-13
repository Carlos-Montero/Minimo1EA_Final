import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
//import {Routes, RouterModule} from "@angular/router";
//import {ListComponent} from "./list/list.component";
import 'rxjs/add/operator/map';

/*
const appRoutes: Routes = [
  {path: 'list', component: ListComponent}
]*/

@NgModule({
  declarations: [
    AppComponent,
    //ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
