import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MessageService } from 'primeng/api';
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
  imageUrls: FormArray = this.fb.array([this.fb.control("")]);
  categories: any[] = [];
  @Input() available: boolean;
  constructor(private ps: ProductService, private fb: FormBuilder, private toast: MessageService) {

  }

  ngOnInit(): void {
    this.categories = this.ps.getCategories();
    this.productForm = this.fb.group({
      title: "",
      type: "", //drop down
      description: "", //Text Area
      releaseDate: "", // Date Picker
      rating: "", // Rating
      price: "", // Currency
      availibility: "", // toggle slider
      safeFor: "", // Radio
      qualityScore: "", // Slider
      // imageUrl: "",
      imageurls: this.imageUrls,
      tags: [],
      sellerAddress: this.fb.group({
        AddLine1: "",
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      })
    });

    // this.productForm.get("imageUrl").valueChanges.subscribe(val => this.imageUrlDisplay = val);

  }
  imageUrlDisplay: string = "";
  onSubmit() {
    this.ps.addProduct(this.productForm.value);
  }

  addImageUrl() {
    // let imgUrls = <FormArray>this.productForm.get("imageurls");
    let imgUrls = this.productForm.get("imageurls") as FormArray;
    if (imgUrls.controls.length < 4) {
      imgUrls.push(this.fb.control(""));
    } else {
      this.toast.add({
        severity: "info",
        summary: "Limit reached",
        detail: "Maximum 4 Images to be added"
      })
    }
  }

  DeleteImageUrl(index){
    let imgUrls = this.productForm.get("imageurls") as FormArray;
    imgUrls.removeAt(index);
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(100);
    }

    return value;
  }




}
