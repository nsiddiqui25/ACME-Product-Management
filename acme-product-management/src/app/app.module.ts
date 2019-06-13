import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgModule decorator, defining this class as an Angular module
@NgModule({
  //declares the AppComponent so that Angular can locate its selector
  declarations: [
    AppComponent
  ],
  //imports array includes BrowserModule so that app runs correctly in the browser
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap array lists our AppComponent as the starting component for our app
  bootstrap: [AppComponent]
})

//Class
export class AppModule { }
