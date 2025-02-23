import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/products/header.component';
import { NgFor } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaspi-products';
}




// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     Hello {{ city }}, {{ 1 + 1 }}
//   `,
// })
// export class AppComponent {
//   city = 'San Francisco';
// }
