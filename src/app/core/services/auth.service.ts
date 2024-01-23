import { Injectable } from '@angular/core';
import { localStorageService } from './localStorage.service';
@Injectable({
    providedIn: 'root',
})
export class authService {
    constructor(private lss: localStorageService) {

    }

    loadJwt(token: string): boolean {
        const parsedToken = this.parseJwt(token);
        if (parsedToken.authorization_info[0] == '{') {
            this.lss.set('jt', token);
            this.lss.set('jt_pl', parsedToken.authorization_info);
            this.isLogedin = true;
            return true;
        } else {
            return false;
        }
    }

    get user() {
        if (this.isLogedin) {
            return JSON.parse(this.lss.get('jt_pl'));
        } else {
            this.logout();
        }
    }

    get jwt() {
        return this.lss.get('jt');
    }

    get parsedJwt() {
        return this.parseJwt(this.jwt);
    }

    get isLogedin(): boolean {
        return this.lss.get('iL') == 'han' && this.lss.get('jt') != null && this.lss.get('jt_pl') != null;
    }

    set isLogedin(v: boolean) {
        this.lss.set('iL', v ? 'han' : 'na');
    }

    logout() {
        this.lss.del('jt_pl');
        this.lss.del('jt');
        this.lss.del('iL');
        // window.open('auth server url, '_self');
    }

    parseJwt(token: string) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    }
}
