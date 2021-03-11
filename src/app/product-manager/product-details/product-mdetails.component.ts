import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-mdetails.component.html',
  styles: [
  ]
})
export class ProductMDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private ps: ProductService) { }

  ngOnInit(): void {
    // this.product = this.ps.getProduct(this.route.snapshot.params.id);
    this.route.params.subscribe((parms) => {
      this.product = this.ps.getProduct(parms.id);
    });
  }

}
