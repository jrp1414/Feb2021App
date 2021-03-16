import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styles: [
  ]
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  categories:any[] = [];
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.categories = this.ps.getCategories();
    this.productForm = new FormGroup({
      title: new FormControl(),
      type: new FormControl(), //
      description:new FormControl(),
      releaseDate:new FormControl(),
      rating:new FormControl(),
      tags:new FormControl(),
      price:new FormControl(),
      availibility:new FormControl(), // toggle slider
      safeFor:new FormControl(), // Radio
      qualityMarks: new FormControl() // Slider
    });

  }

  onSubmit() {
    console.log(this.productForm.value);
  }

}
