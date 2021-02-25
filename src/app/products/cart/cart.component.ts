import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  @Input("cart") cartProducts:string[];
  constructor() { }

  ngOnInit(): void {
  }

}
