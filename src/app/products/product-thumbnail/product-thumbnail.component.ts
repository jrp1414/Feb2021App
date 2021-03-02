import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers:[
  //   LoggerService
  // ]
})
export class ProductThumbnailComponent implements OnInit{
  @Input("pd") product: Product;
  @Output("addtocart") data: EventEmitter<string> = new EventEmitter();

  date: Date = new Date();
  constructor(private logger: LoggerService,private ps:ProductService) { }
  ngOnInit(): void {
    this.ps.notify.subscribe((data)=>{
      this.logger.log("Logged in Thumbnail : "+ data);
    });
  }

  AddToCart() {
    this.data.emit(this.product.title);
  }
  testRendering() {
    // this.logger.log("Product Thumbnail rendered");
  }
}
