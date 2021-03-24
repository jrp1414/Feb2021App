import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductAddComponent } from '../product-add/product-add.component';

@Injectable({ providedIn: 'root' })
export class ProductDeactivateGuard implements CanDeactivate<ProductAddComponent> {
    canDeactivate(
        component: ProductAddComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): boolean {
        if (component.productForm.dirty && component.productForm.status == 'INVALID') {
            if (confirm("Are you sure to navigate away and loose all changes?")) {
                return true;
            }
            return false;
        }
        return true;
    }
}