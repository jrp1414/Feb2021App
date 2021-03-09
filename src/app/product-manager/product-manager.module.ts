import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsManagerComponent } from './products-manager/products-manager.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { Routes } from '@angular/router';

const routes:Routes = [
  {path:"productsmanager", component:ProductsManagerComponent}
];

@NgModule({
  declarations: [
    ProductsManagerComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule
  ]
})
export class ProductManagerModule { }
