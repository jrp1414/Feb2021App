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
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  constructor(private route: ActivatedRoute, private ps: ProductService) { }

  ngOnInit(): void {
    // this.product = this.ps.getProduct(this.route.snapshot.params.id);
    // this.route.params.subscribe((parms) => {
    //   this.ps.getProduct(parms.id).subscribe(resp => this.product = <Product>resp);
    // });
    this.route.data.subscribe(data => this.product = <Product>data);
  }

}
