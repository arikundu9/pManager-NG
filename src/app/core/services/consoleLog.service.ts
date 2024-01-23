import { Injectable } from '@angular/core';
import { environment } from '@E/environment';

@Injectable({
    providedIn: 'root',
})
export class consoleLogService {
    constructor() { }
    log(...args: any) {
        if (!environment.production) {
            console.warn.apply(console, args);
        }
    }
}
