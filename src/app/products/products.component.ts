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
  categories: any[] = [];
  uniqueCategories: string[] = [];
  selectedCategories: string[] = [];
  addedToCart: string[] = [];
  constructor() {
    this.uniqueCategories = [...new Set(this.products.map(item => item.type))];
    // console.log(this.uniqueCategories);
    this.categories = [...new Set(this.uniqueCategories.map(item => { return { type: item, isChecked: false } }))];
    // console.log(this.categories);
  }

  changeSelection() {
    this.selectedCategories = this.categories.filter((value) => value.isChecked).map(item => item.type);    
    console.log(this.selectedCategories);
  }

  Received(d) {
    this.addedToCart.push(d);
  }

  FilterTest() {
    this.products.push({
      "id": 1,
      "title": "Brown eggs",
      "type": "dairy",
      "description": "Raw organic brown eggs in a basket",
      "filename": "0.jpg",
      "height": 600,
      "width": 400,
      "price": 28.1,
      "rating": 4,
      "imageurl": "https://previews.123rf.com/images/bhofack2/bhofack21502/bhofack2150200615/37073865-raw-organic-brown-eggs-in-a-basket.jpg"
    });
  }

  sortBy: string = "asc";

}