import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { ProprtyBindingComponent } from './proprty-binding/proprty-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { ProductsComponent } from './products/products.component';
import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
import { CartComponent } from './products/cart/cart.component';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';
import { FilterByCategoryPipe } from './shared/pipes/filter-by-category.pipe';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { LoggerService } from './services/logger.service';
import { TempProductsComponent } from './temp-products/temp-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { ProductManagerModule } from './product-manager/product-manager.module';
import { MessageService } from 'primeng/api';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MustMatchDirective } from './shared/directives/must-match.directive';

const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductsComponent },
  // { path: "productdetails/:id/:title", component: ProductDetailsComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent },
  { path: "signup", component: SignUpComponent },
  { path: "", component: DashboardComponent },
  // { path: "**", redirectTo: "home" },
];

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    ProprtyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    CartComponent,
    ShortenPipe,
    FilterPipe,
    SortPipe,
    FilterByCategoryPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent,
    NavigationComponent,
    DashboardComponent,
    ProductDetailsComponent,
    SignUpComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductManagerModule,
    MaterialModule,
    PrimengModule,    
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoggerService,
    MessageService
    // ProductService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
