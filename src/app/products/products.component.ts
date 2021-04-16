import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { LoggerService } from '../services/logger.service';
import { Product, TypeMaster } from '../services/product.model';
import { ProductService } from '../services/product.service';
import { cartAction, CartInfo } from '../store/cart.action';

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
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filterText: string = "";
  categories: TypeMaster[] = [];
  selectedCategories: TypeMaster[] = [];
  addedToCart: string[] = [];
  constructor(public logger: LoggerService, public ps: ProductService,
    private toast: MessageService, public store: Store) {
    this.ps.getProducts().subscribe(resp => {
      this.products = <Product[]>resp;
    }, (error) => {

    });
    this.ps.getCategories().subscribe(resp => this.categories = <TypeMaster[]>resp);
  }
  ngOnInit(): void {
    this.store.subscribe(s => {
      console.log(s);
      let titles = s["cartR"].titles;
      this.addedToCart = titles ? titles : [];
    });
  }

  // changeSelection() {
  //   this.selectedCategories = this.categories.filter((value) => value.isChecked).map(item => item.type);
  //   // this.logger.log(this.selectedCategories.toString());
  //   this.ps.notify.emit(this.selectedCategories.toString());
  // }

  Received(d) {
    // this.addedToCart.push(d);
    this.addedToCart = [...this.addedToCart, d];
    var cart: CartInfo = { titles: this.addedToCart };
    this.store.dispatch(cartAction({ cart }));
  }

  FilterTest() {

  }

  sortBy: string = "asc";

}