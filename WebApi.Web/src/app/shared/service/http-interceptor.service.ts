import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMessage } from './error-message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private _snackBar: MatSnackBar, private _errorMessage: ErrorMessage) { }

    showError(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 10000,
            panelClass: 'red-snackbar',
        });
    }

    /**
     * Http error intercepter
     * @param request request delegate
     * @param next request handler
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            switch (err.status) {
                case 0:
                    this.showError(this._errorMessage.error("ApiNotRunning"), "X");
                    setTimeout(() => {
                        window.location.reload();
                    }, 15000);
                    break;

                case 400: case 401: case 500:
                    this.showError(err.error.Message || err.statusText, "X");
                    break;

                case 404:
                    this.showError(`${err.status}: ${this._errorMessage.error("DefaultError")}`, "X");
                    break;

                default:
                    const error = err.error.message || err.statusText;
                    this.showError(error, "X");
                    return throwError(error);
            }
        }));
    }
}