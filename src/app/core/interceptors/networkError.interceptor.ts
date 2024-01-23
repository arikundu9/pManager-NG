import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { consoleLogService } from '@S/consoleLog.service';
import { alertifyService } from '@S/alertify.service';

@Injectable()
export class networkErrorInterceptor implements HttpInterceptor {
    constructor(private notify: alertifyService, private consoleLogS: consoleLogService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Client Side Error: ${error.error.message}`;
                } else {
                    errorMsg = ` Server Side Error Code: ${error.status},  Message: ${error.message}, Code: ${error.status}`;

                    //.NET Custom errors : start
                    let alert_title = '';
                    let alert_msg = '';
                    if (error.error.type != null) {
                        //known .net error format
                        alert_title = error.error.title + '<br><small>Status Code: ' + error.error.status + '<br>TraceID: ' + error.error.traceId + '</small>';
                        alert_msg = JSON.stringify(error.error.errors);
                        this.consoleLogS.log(alert_msg);
                        this.notify.alert(alert_title, alert_msg);
                    }
                    //.NET Custom errors : end
                    else {
                        this.notify.cloasableAlert(error.message);
                    }
                    // switch (error.status) {
                    //     case 404:
                    //         // this.notify.errorToast("404 Not Found.<br>"+error.message);
                    //         break;
                    // }
                }
                return throwError(() => errorMsg);
            })
        );
    }
}
