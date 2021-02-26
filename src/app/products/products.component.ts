import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product.model';
import * as productsList from "../services/products.json";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `
    .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
    `
  ]
})
export class ProductsComponent {
  products: Product[] = (productsList as any).default;
  filterText: string = "";

  addedToCart: string[] = [];
  constructor() {
  }

  Received(d) {
    this.addedToCart.push(d);
  }

}