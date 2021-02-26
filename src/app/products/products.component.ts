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

  FilterTest(){
    this.products.push({
      "id":1,
      "title": "Brown eggs",
      "type": "dairy",
      "description": "Raw organic brown eggs in a basket",
      "filename": "0.jpg",
      "height": 600,
      "width": 400,
      "price": 28.1,
      "rating": 4,
      "imageurl":"https://previews.123rf.com/images/bhofack2/bhofack21502/bhofack2150200615/37073865-raw-organic-brown-eggs-in-a-basket.jpg"
    });
  }

}