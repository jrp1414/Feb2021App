import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private ps: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.product = this.ps.getProduct(this.route.snapshot.params.id);
    // console.log(this.route.snapshot.params);
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
  }

  Navigate() {
    this.router.navigate(["/products"]);
  }

}
