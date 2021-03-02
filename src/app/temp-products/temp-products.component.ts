import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'temp-products',
  template: `
    <p>
      temp-products works!
    </p>
  `,
  styles: [
  ],
  providers:[
    // ProductService
  ]
})
export class TempProductsComponent implements OnInit {

  constructor(private ps:ProductService,private logger:LoggerService) { }

  ngOnInit(): void {
    this.ps.notify.subscribe((data)=>{
      this.logger.log("Logged in Temp Products : "+ data);
    });
  }

}
