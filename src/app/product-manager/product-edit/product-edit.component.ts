import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ImageUrl, Product, Tag, TypeMaster } from 'src/app/services/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styles: [
  ]
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  regEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  imageUrls: FormArray = this.fb.array([]);
  sellerAddresses: FormArray = this.fb.array([]);
  categories: TypeMaster[] = [];
  @Input() available: boolean;
  product: Product;
  constructor(
    private ps: ProductService,
    private fb: FormBuilder,
    private toast: MessageService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.ps.getCategories().subscribe(resp => this.categories = <TypeMaster[]>resp);
    this.productForm = this.fb.group({
      id: "",
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
      Addresses: this.sellerAddresses
    });

    this.route.params.subscribe(p => {
      this.ps.getProduct(p.id).subscribe(resp => {
        this.product = <Product>resp;
        this.populateForm();
      });
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

  populateForm() {
    this.product.ImageUrls.forEach(i => {
      (<FormArray>this.productForm.get("imageurls")).push(this.fb.control(""));
    });

    this.product.Addresses.forEach(i => {
      (<FormArray>this.productForm.get("Addresses")).push(this.fb.group({
        id: "",
        AddLine1: ["", Validators.required],
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      }));
    });

    this.productForm.patchValue(this.product);
    this.productForm.get("safeFor").patchValue(this.product.safeFor.toString());
    this.productForm.get("imageurls").patchValue(this.product.ImageUrls.map(m => m.imageUrl));
    this.productForm.get("tags").patchValue(this.product.Tags.map(m => m.tag));
    // this.productForm.get("Addresses").patchValue(this.product.Addresses);
  }
  imageUrlDisplay: string = "";
  onSubmit() {
    var form = this.productForm.value as Product;
    var tags: Tag[] = [];
    form.tags.forEach(t => {
      var tg = this.product.Tags.find(tg => tg.tag == t);
      if (tg) {
        tags.push(tg);
      } else {
        tags.push({ tag: t });
      }
    });

    var imgs: ImageUrl[] = [];
    form.imageurls.forEach(i => {
      var img = this.product.ImageUrls.find(im => im.imageUrl == i);
      if (img) {
        imgs.push(img);
      } else {
        imgs.push({ imageUrl: i });
      }
    });

    var prod: Product = {
      ...this.productForm.value,
      Tags: tags,
      ImageUrls: imgs
    };

    this.ps.editProduct(prod).subscribe(resp=>{
      this.ps.notify.emit(true);
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
    let sellers = this.productForm.get("Addresses") as FormArray;
    if (sellers.controls.length < 3) {
      sellers.push(this.fb.group({
        id: "",
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
    let sellers = this.productForm.get("Addresses") as FormArray;
    sellers.removeAt(index);
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(100);
    }

    return value;
  }

}
