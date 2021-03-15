import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate {

  constructor(private ps: ProductService, 
    private messageService: MessageService, 
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let product = this.ps.getProduct(route.params.id);
    if (product) {
      
      return true;
    }
    this.messageService.add({ severity: 'error', summary: 'Invalid Product', detail: 'Unable to find product' });
    this.router.navigate(['/productsmanager/notfound']);
    return false;
  }
}
