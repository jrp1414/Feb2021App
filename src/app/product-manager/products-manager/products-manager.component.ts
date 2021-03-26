import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';
import * as o from 'rxjs-compat';
import { MessageService } from 'primeng/api';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html'
})
export class ProductsManagerComponent implements OnInit, OnDestroy {
  productsList: Product[] = [];
  filteredProducts: Product[] = [];
  constructor(private ps: ProductService, private messageService: MessageService) {

  }
  numSubs: o.Subscription = new o.Subscription();
  counter: number;
  time: Date = new Date();

  pageIndex: number = 0;
  pageSize: number = 10;
  pageEvent: PageEvent;
  getFilteredData(e): PageEvent {
    console.log(e);
    this.filteredProducts = this.productsList.slice((e.pageIndex * e.pageSize), (e.pageIndex * e.pageSize + e.pageSize));
    return e;
  }

  ngOnInit(): void {
    this.refreshProducts();
    this.ps.notify.subscribe(flag => this.refreshProducts());
  }

  refreshProducts() {
    this.ps.getProducts().subscribe(resp => {
      this.productsList = <Product[]>resp;
      this.filteredProducts = this.productsList.slice((this.pageIndex * this.pageSize), (this.pageIndex * this.pageSize + this.pageSize));
    });
  }
  message: string = "";

  ShowSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Invalid Product', detail: 'Unable to find product' });
  }
  ngOnDestroy(): void {
    // this.numSubs.unsubscribe();
  }
}
