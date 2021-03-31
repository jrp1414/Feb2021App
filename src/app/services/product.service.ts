import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  
  notify: EventEmitter<boolean> = new EventEmitter();

  getProducts() {
    // return this.http.get(environment.apiUrl + "GetProducts");
    return this.http.get(`${environment.apiUrl}/GetProducts`);
  }

  getCategories() {
    return this.http.get(`${environment.apiUrl}/GetTypes`);
  }

  getProduct(id: number) {
    return this.http.get(`${environment.apiUrl}/GetProduct?productId=${id}`);
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
    
    return this.http.post(`${environment.apiUrl}/AddProduct`,product);
  }

  editProduct(product: Product) {
    return this.http.put(`${environment.apiUrl}/UpdateProduct`,product);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${environment.apiUrl}/DeleteProduct?productId=${productId}`);
  }
}
