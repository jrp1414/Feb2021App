import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';
import * as o from 'rxjs-compat';


@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html'
})
export class ProductsManagerComponent implements OnInit, OnDestroy {
  productsList: Product[] = [];
  constructor(private ps: ProductService) {
    this.productsList = this.ps.getProducts()
  }
  numSubs: o.Subscription = new o.Subscription();
  counter: number;
  time: Date = new Date();
  ngOnInit(): void {
    // let numObs = o.Observable.interval(1000);
    // this.numSubs = numObs.subscribe((num) => {
    //   // this.counter = num;
    //   // this.time = new Date();
    //   // console.log(num);
    // });


    let messageObs = new Observable((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("First Data");
      }, 1000);

      setTimeout(() => {
        observer.next("Second Data");
      }, 3000);
      setTimeout(() => {
        observer.next("Third Data");
      }, 5000);
      // setTimeout(() => {
      //   observer.error("Error Occurred");
      // }, 6000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
      setTimeout(() => {
        observer.next("Forth Data");
      }, 7000);
    });

    messageObs.subscribe(
      (data) => { this.message = data; },
      (e) => { console.log(e); },
      () => { console.log("Completed"); }
    );
  }
  message: string = "";

  ngOnDestroy(): void {
    // this.numSubs.unsubscribe();
  }
}
