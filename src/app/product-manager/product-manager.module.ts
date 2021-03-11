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
import { FormsModule } from '@angular/forms';
import { ProductGuardService } from './services/product-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessageService } from 'primeng/api';

const routes: Routes = [
  {
    path: "productsmanager", component: ProductsManagerComponent, children: [
      { path: "add", component: ProductAddComponent },
      { path: "notfound", component: NotFoundComponent },
      { path: ":id", component: ProductMDetailsComponent, canActivate:[ProductGuardService] },
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
    RouterModule.forChild(routes)
  ],
  providers:[
    MessageService
  ]
})
export class ProductManagerModule { }
