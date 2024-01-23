import { authService } from '@S/auth.service';
import { NotificationService } from '@S/notification.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private auth: authService, private router: Router, private notify: NotificationService) { }

    canActivate(next: ActivatedRouteSnapshot): boolean {
        if (this.auth.isLogedin) {
            return true;
        }
        this.auth.logout();
        return false;
    }
}
