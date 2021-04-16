import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";

import {
  AppComponent, StringInterpolationComponent, ProprtyBindingComponent, EventBindingComponent,
  TwowayBindingComponent, ProductsComponent, ProductThumbnailComponent, CartComponent,
  TempProductsComponent, NavigationComponent, DashboardComponent, ProductDetailsComponent,
  SignUpComponent, LoginComponent
} from "./component.index";

import { LoggerService } from './services/logger.service';
import { MaterialModule } from './shared/material/material.module';
import { PrimengModule } from './shared/primeng/primeng.module';
import { ProductManagerModule } from './product-manager/product-manager.module';
import { MessageService } from 'primeng/api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { metaReducers, reducers } from './store/meta.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    TempProductsComponent,
    NavigationComponent,
    DashboardComponent,
    ProductDetailsComponent,
    SignUpComponent,
    LoginComponent,
    WebWorkerComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    PrimengModule,
    StoreModule.forRoot({ cartR: reducers },{metaReducers}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    LoggerService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    // ProductService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
