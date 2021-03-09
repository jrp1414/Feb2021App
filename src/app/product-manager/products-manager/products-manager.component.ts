import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html'
})
export class ProductsManagerComponent implements OnInit {

  constructor(private ps: ProductService) {
    console.log(this.ps.getProducts());
  }

  ngOnInit(): void {
  }

}
