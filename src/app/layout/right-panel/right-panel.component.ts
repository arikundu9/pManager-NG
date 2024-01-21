import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'workBench',
    templateUrl: './right-panel.component.html',
    styleUrls: ['./right-panel.component.scss'],
})
export class RightPanelComponent implements OnInit {
    tabs = ['File1.txt','File2.txt','code.ts','code.test.ts'];
    constructor() {}

    ngOnInit(): void {}

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
    }
}
