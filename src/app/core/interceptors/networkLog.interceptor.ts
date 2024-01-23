import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { environment } from '@E/environment';
import { consoleLogService } from '@S/consoleLog.service';
import { NotificationService } from '@S/notification.service';

@Injectable()
export class netlogInterceptor implements HttpInterceptor {
    constructor(private notify: NotificationService, private consoleLogS: consoleLogService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((e) => {
                if (!environment.production) {
                    if (e.type != 0) {
                        this.consoleLogS.log('==>>', e);
                    }
                }
            })
        );
    }
}
