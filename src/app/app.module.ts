import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, compDeclaration } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { SplitterModule } from 'primeng/splitter';
import { TreeModule } from 'primeng/tree';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { networkSpinnerInterceptor } from '@I/networkSpinner.interceptor';
import { netlogInterceptor } from '@I/networkLog.interceptor';
import { networkErrorInterceptor } from '@I/networkError.interceptor';


@NgModule({
    declarations: [AppComponent, compDeclaration],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, KeyboardShortcutsModule, ReactiveFormsModule, DragDropModule, MatExpansionModule, MatSliderModule, CdkMenuModule, MatIconModule, MatMenuModule, MatListModule, MatSidenavModule, MatToolbarModule, MatTreeModule, SplitterModule, TreeModule, ToolbarModule, ButtonModule, TieredMenuModule],
    providers: [
        DatePipe,
        { provide: HTTP_INTERCEPTORS, useClass: netlogInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: networkErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: networkSpinnerInterceptor, multi: true },
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
