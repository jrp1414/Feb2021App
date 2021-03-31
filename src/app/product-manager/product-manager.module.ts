import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsManagerComponent } from './products-manager/products-manager.component';
import { ProductMDetailsComponent } from './product-details/product-mdetails.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductGuardService } from './services/product-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessageService } from 'primeng/api';
import { ProductDeactivateGuard } from './services/product-candeactivate.guard';
import { ProductsResolver } from './services/products.resolver';
import { ProductDetailsResolver } from './services/productdetails.resolver';

const routes: Routes = [
  {
    path: "productsmanager", component: ProductsManagerComponent, resolve:{products:ProductsResolver}, children: [
      { path: "add", component: ProductAddComponent, canDeactivate:[ProductDeactivateGuard] },
      { path: "notfound", component: NotFoundComponent },
      { path: ":id", component: ProductMDetailsComponent, resolve:{product:ProductDetailsResolver}, canActivate:[ProductGuardService] },
      { path: ":id/edit", component: ProductEditComponent },      
    ]
  }
];

@NgModule({
  declarations: [
    ProductsManagerComponent,
    ProductMDetailsComponent,
    ProductEditComponent,
    ProductAddComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    
  ]
})
export class ProductManagerModule { }
