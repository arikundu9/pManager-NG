import { Injectable } from '@angular/core';
import { environment } from '@E/environment';
import { CryptoService } from './crypto.service';

@Injectable({
    providedIn: 'root',
})
export class localStorageService {
    static crypto: any = new CryptoService();
    constructor(private crypto: CryptoService) { }
    set(key: string, value: any) {
        localStorage.setItem(key, this.crypto.set(environment.AesKey, value));
    }
    get(key: string): any {
        return localStorage.getItem(key) == null ? null : this.crypto.get(environment.AesKey, localStorage.getItem(key));
    }
    del(key: string) {
        localStorage.removeItem(key);
    }
}
