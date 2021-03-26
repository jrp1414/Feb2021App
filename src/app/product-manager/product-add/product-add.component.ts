import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { TypeMaster } from 'src/app/services/product.model';
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
  categories: TypeMaster[] = [];
  @Input() available: boolean;
  constructor(private ps: ProductService, private fb: FormBuilder, 
    private toast: MessageService,private router:Router) {

  }

  ngOnInit(): void {
    this.ps.getCategories().subscribe(resp => this.categories = <TypeMaster[]>resp);
    this.productForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      typeId: "", //drop down
      description: "", //Text Area
      releaseDate: ["", Validators.required], // Date Picker
      rating: "", // Rating
      price: "", // Currency
      availibility: "", // toggle slider
      safeFor: "", // Radio
      qualityScore: "", // Slider
      imageurls: this.imageUrls,
      tags: [],
      sellers: this.sellerAddresses
    });

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
    // console.log(this.productForm.value);
    this.ps.addProduct(this.productForm.value).subscribe(resp=>{
      this.toast.add({
        severity: "info",
        summary: "Product Added",
        detail: "Product successfully added"
      });
      this.ps.notify.emit();
      this.router.navigate(["/productsmanager"]);
    });
  }

  addImageUrl() {
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
