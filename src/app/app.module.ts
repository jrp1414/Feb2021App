import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

const routes:Routes = [
  {path:"home",component:DashboardComponent},
  {path:"products",component:ProductsComponent}
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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoggerService,
    // ProductService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
