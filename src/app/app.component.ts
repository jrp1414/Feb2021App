import { Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  // template: "<h1>Hello World. Practising Angular</h1>" +
  //   "<div>Line 2</div>"
  // template:`
  // <h2>Multiple Line Template</h2>
  // <h3>Using backtick to write multi line template</h3>
  // `
  templateUrl: "./app.component.html",
  // styles: [
  //   `
  //   h2{
  //     background-color:aqua;
  //   }
  //   `],
  styleUrls: [
    "./app.component.less"
  ],
  providers:[
    // ProductService
  ]
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  constructor() {

  }
}


enum Color {
  Red,
  Green,
  Blue
}