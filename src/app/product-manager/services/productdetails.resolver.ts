import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../services/product.model';
import { ProductService } from '../../services/product.service';

@Injectable({ providedIn: 'root' })
export class ProductDetailsResolver implements Resolve<any> {

    constructor(private ps: ProductService) {

    }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.ps.getProduct(route.params.id);
    }
}