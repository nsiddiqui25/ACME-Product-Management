/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acme-product-management';
}
*/

// 3) Importing
  // IntelliSense automatically filled this in, otherwise the component decorator would flag an error which is that it can't find the name
import { Component } from '@angular/core';


// 2) Component
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})


// 1) Building the class
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  pageTitle: string = 'Acme Product Management';
}
