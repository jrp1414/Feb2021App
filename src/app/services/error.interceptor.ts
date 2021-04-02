
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toast: MessageService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(() => { }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 404) {
                        this.toast.add({ severity: "Error", summary: "Not Found", detail: "Unable to Find resorce" });
                    }
                    if (error.status == 401) {
                        this.toast.add({ severity: "Error", summary: "Unauthorized", detail: "Unauthorized User" });
                    }
                    if (error.status == 500) {
                        this.toast.add({ severity: "Error", summary: "Error", detail: "Internal Server Error" });
                    }
                }
            })
        );
    }
}