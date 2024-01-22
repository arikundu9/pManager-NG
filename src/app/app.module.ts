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


@NgModule({
    declarations: [AppComponent, compDeclaration],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, KeyboardShortcutsModule, ReactiveFormsModule, DragDropModule, MatExpansionModule, MatSliderModule, CdkMenuModule, MatIconModule, MatMenuModule, MatListModule, MatSidenavModule, MatToolbarModule, MatTreeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
