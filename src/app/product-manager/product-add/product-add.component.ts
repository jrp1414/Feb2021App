import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styles: [
  ]
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  categories: any[] = [];
  @Input() available: boolean;
  constructor(private ps: ProductService) {
    
  }

  ngOnInit(): void {
    this.categories = this.ps.getCategories();
    this.productForm = new FormGroup({
      title: new FormControl(),
      type: new FormControl(), //drop down
      description: new FormControl(), //Text Area
      releaseDate: new FormControl(), // Date Picker
      rating: new FormControl(), // Rating
      price: new FormControl(), // Currency
      availibility: new FormControl(), // toggle slider
      safeFor: new FormControl(), // Radio
      qualityScore: new FormControl(), // Slider
      imageUrl:new FormControl()
    });

  }
  imageUrlDisplay:string="";
  onSubmit() {
    console.log(this.productForm.value);
  }

formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(100);
    }

    return value;
  }



}
