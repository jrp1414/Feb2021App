import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent, LoginComponent, ProductDetailsComponent, ProductsComponent, SignUpComponent } from './component.index';
import { WebWorkerComponent } from './web-worker/web-worker.component';

const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductsComponent },
  { path: "webworker", component: WebWorkerComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent },
  {
    path: "productsmanager", loadChildren: () => import("./product-manager/product-manager.module")
      .then(m => m.ProductManagerModule)
  },
  { path: "signup", component: SignUpComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
