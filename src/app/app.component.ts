import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
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
    // MessageService
  ]
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig,private messageService:MessageService) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  ShowSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Invalid Product', detail: 'Unable to find product' });
  }
}


enum Color {
  Red,
  Green,
  Blue
}