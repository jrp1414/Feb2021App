import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';

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
  ],
  providers: [
    // LoggerService,
    // ProductService
  ]
})
export class ProductsComponent {
  products: Product[] = [];
  filterText: string = "";
  categories: any[] = [];
  selectedCategories: string[] = [];
  addedToCart: string[] = [];
  constructor(private logger: LoggerService, private ps: ProductService) {
    this.products = this.ps.getProducts();
    this.categories = this.ps.getCategories();
  }

  changeSelection() {
    this.selectedCategories = this.categories.filter((value) => value.isChecked).map(item => item.type);
    // this.logger.log(this.selectedCategories.toString());
    this.ps.notify.emit(this.selectedCategories.toString());
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