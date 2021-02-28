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
    FilterByCategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
