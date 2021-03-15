import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';
import * as o from 'rxjs-compat';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html'
})
export class ProductsManagerComponent implements OnInit, OnDestroy {
  productsList: Product[] = [];
  constructor(private ps: ProductService,private messageService:MessageService) {
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


    // let messageObs = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next("First Data");
    //   }, 1000);

    //   setTimeout(() => {
    //     observer.next("Second Data");
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next("Third Data");
    //   }, 5000);
    //   // setTimeout(() => {
    //   //   observer.error("Error Occurred");
    //   // }, 6000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 6000);
    //   setTimeout(() => {
    //     observer.next("Forth Data");
    //   }, 7000);
    // });

    // messageObs.subscribe(
    //   (data) => { this.message = data; },
    //   (e) => { console.log(e); },
    //   () => { console.log("Completed"); }
    // );

    // let subs = new Subject();
    // setTimeout(() => {
    //   subs.next("First Data from Subject");
    // }, 1000);
    // setTimeout(() => {
    //   subs.next("Second Data from Subject");
    // }, 3000);
    // setTimeout(() => {
    //   subs.next("Third Data from Subject");
    // }, 5000);

    // setTimeout(() => {
    //   subs.error("Error Occurred in Subject");
    // }, 6000);

    // subs.subscribe(
    //   (data) => { console.log(data) },
    //   (e) => { console.error(e) }
    // );

    // let e = new EventEmitter();
    // setTimeout(() => {
    //   e.emit("First Data from Event Emitter");
    // }, 1000);
    // setTimeout(() => {
    //   e.emit("Second Data from Event Emitter");
    // }, 3000);
    // setTimeout(() => {
    //   e.emit("Third Data from Event Emitter");
    // }, 5000);

    // e.subscribe((data) => { console.log(data); })
  }
  message: string = "";

  ShowSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Invalid Product', detail: 'Unable to find product' });
  }
  ngOnDestroy(): void {
    // this.numSubs.unsubscribe();
  }
}
