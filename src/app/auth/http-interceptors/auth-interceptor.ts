import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
  } from '@angular/common/http';
  import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
         private authService: AuthService,
         private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if(/.*login$/.test(req.url)) {
            return next.handle(req);
        }
        return next.handle(this.addAccessToken(req, this.authService.getAccessToken().access_token))
            .pipe(
                catchError(err => {
                    if(err instanceof HttpErrorResponse) {
                        if(err.status === 401) {
                            this.router.navigate(['login']);
                        }
                    } else {
                        return throwError(err);
                    }
                })
            );
    }

    private addAccessToken(req: HttpRequest<any>, token: String) {
        return req.clone({ setHeaders: { Authorization: `${token}` } });
    }
}