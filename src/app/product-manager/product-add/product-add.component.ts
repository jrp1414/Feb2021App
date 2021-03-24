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
  regEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  imageUrls: FormArray = this.fb.array([this.fb.control("", Validators.pattern(this.regEx))]);
  sellerAddresses: FormArray = this.fb.array([this.fb.group({
    AddLine1: ["", Validators.required],
    AddLine2: "",
    AddLine3: "",
    City: "",
    State: ""
  })]);
  categories: any[] = [];
  @Input() available: boolean;
  constructor(private ps: ProductService, private fb: FormBuilder, private toast: MessageService) {

  }

  ngOnInit(): void {
    this.categories = this.ps.getCategories();
    this.productForm = this.fb.group({
      // title: new FormControl("",Validators.required),
      // title: new FormControl("",[Validators.required,Validators.minLength(3)]),
      // title: ["",Validators.required],
      title: ["", [Validators.required, Validators.minLength(3)]],
      type: "", //drop down
      description: "", //Text Area
      // releaseDate: ["",Validators.required], // Date Picker
      releaseDate: "", // Date Picker
      rating: "", // Rating
      price: "", // Currency
      availibility: "", // toggle slider
      safeFor: "", // Radio
      qualityScore: "", // Slider
      // imageUrl: "",
      imageurls: this.imageUrls,
      tags: [],
      sellers: this.sellerAddresses
    });

    // this.productForm.get("imageUrl").valueChanges.subscribe(val => this.imageUrlDisplay = val);
    this.productForm.get("availibility").valueChanges.subscribe(val => {
      let releaseDate = this.productForm.get("releaseDate");
      if (val) {
        releaseDate.setValidators([Validators.required]);
      } else {
        releaseDate.clearValidators();
      }
      releaseDate.updateValueAndValidity();
    });

  }
  imageUrlDisplay: string = "";
  onSubmit() {
    console.log(this.productForm);
    this.ps.addProduct(this.productForm.value);
  }

  addImageUrl() {
    // let imgUrls = <FormArray>this.productForm.get("imageurls");
    let imgUrls = this.productForm.get("imageurls") as FormArray;
    if (imgUrls.controls.length < 4) {
      imgUrls.push(this.fb.control("", Validators.pattern(this.regEx)));
    } else {
      this.toast.add({
        severity: "info",
        summary: "Limit reached",
        detail: "Maximum 4 Images to be added"
      })
    }
  }

  DeleteImageUrl(index) {
    let imgUrls = this.productForm.get("imageurls") as FormArray;
    imgUrls.removeAt(index);
  }

  addSellerAddress() {
    // let imgUrls = <FormArray>this.productForm.get("imageurls");
    let sellers = this.productForm.get("sellers") as FormArray;
    if (sellers.controls.length < 3) {
      sellers.push(this.fb.group({
        AddLine1: ["", Validators.required],
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      }));
    } else {
      this.toast.add({
        severity: "info",
        summary: "Limit reached",
        detail: "Maximum 3 Sellers to be added"
      })
    }
  }

  DeleteSellerAddress(index) {
    let sellers = this.productForm.get("sellers") as FormArray;
    sellers.removeAt(index);
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(100);
    }

    return value;
  }




}
