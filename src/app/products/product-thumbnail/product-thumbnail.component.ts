import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/services/product.model';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: [
    `
    .h4, h4 {
    font-size: 1rem;
  }
    `
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductThumbnailComponent {
  @Input("pd") product: Product;
  @Output("addtocart") data: EventEmitter<string> = new EventEmitter();

  date: Date = new Date();
  constructor() { }

  AddToCart() {
    this.data.emit(this.product.title);
  }
  testRendering() {
    console.log("Product Thumbnail rendered");
  }
}
