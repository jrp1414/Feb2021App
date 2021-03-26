import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { Product, TypeMaster } from '../services/product.model';
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
  categories: TypeMaster[] = [];
  selectedCategories: TypeMaster[] = [];
  addedToCart: string[] = [];
  constructor(private logger: LoggerService, private ps: ProductService) {
    this.ps.getProducts().subscribe(resp=>{
      this.products = <Product[]>resp;
    });
    this.ps.getCategories().subscribe(resp=>this.categories = <TypeMaster[]>resp);
  }

  // changeSelection() {
  //   this.selectedCategories = this.categories.filter((value) => value.isChecked).map(item => item.type);
  //   // this.logger.log(this.selectedCategories.toString());
  //   this.ps.notify.emit(this.selectedCategories.toString());
  // }

  Received(d) {
    this.addedToCart.push(d);
  }

  FilterTest() {
    
  }

  sortBy: string = "asc";

}