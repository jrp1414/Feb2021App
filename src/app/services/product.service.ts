import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product } from './product.model';
import * as productsJson from "./products.json";

@Injectable({
  providedIn:"root"
})
export class ProductService {

  private productList: Product[];
  constructor(private logger: LoggerService) {
    this.productList = (productsJson as any).default;
  }

  notify: EventEmitter<string> = new EventEmitter();

  getProducts() {
    this.logger.log(this.productList.length + " products being returned");
    return this.productList; //Will write some code to fetch it from backend
  }

  getCategories() {
    let uniqueCategories = [...new Set(this.productList.map(item => item.type))];
    return [...new Set(uniqueCategories.map(item => { return { type: item, isChecked: false } }))];
  }
}
