import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { ImageUrl, Product, Tag } from './product.model';
import * as productsJson from "./products.json";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  private productList: Product[];
  constructor(private logger: LoggerService, private http: HttpClient) {
    this.productList = (productsJson as any).default;
  }
  baseUrl: string = "http://localhost:64403/";
  notify: EventEmitter<boolean> = new EventEmitter();

  getProducts() {
    return this.http.get(this.baseUrl + "GetProducts");
  }

  getCategories() {
    return this.http.get(this.baseUrl + "GetTypes");
  }

  getProduct(id: number) {
    return this.http.get(this.baseUrl + "GetProduct?productId=" + id);
  }

  addProduct(product: Product) {
    let imgs: ImageUrl[] = [];
    product.imageurls.forEach(i => {
      imgs.push({ imageUrl: i });
    });
    product.ImageUrls = imgs;
    let tags: Tag[] = [];
    product.tags.forEach(i => {
      tags.push({ tag: i });
    });
    product.Tags = tags;
    
    return this.http.post(this.baseUrl+"AddProduct",product);
  }
}
