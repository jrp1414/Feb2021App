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
    // this.product = this.ps.getProduct(this.route.snapshot.params.id);
    this.route.params.subscribe((p) => {
      this.ps.getProduct(p.id).subscribe(resp=>this.product = <Product>resp);
    });
    
  }

  Navigate() {
    this.router.navigate(["/products"]);
  }

}
