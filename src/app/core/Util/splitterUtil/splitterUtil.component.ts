import { CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'splitterUtil',
    templateUrl: './splitterUtil.component.html',
    styleUrls: ['./splitterUtil.component.scss'],
})
export class SplitterUtilComponent implements OnInit {
    @Input('part1') initPortion1: any;
    @Input('part2') initPortion2: any;
    @Output() initPortion1Change = new EventEmitter<any>();
    @Output() initPortion2Change = new EventEmitter<any>();

    w1: number = 1;
    w2: number = 100 - this.w1;
    d_w1: number = 0;
    d_w2: number = 0;

    value = 0;
    constructor() {}

    ngOnInit() {
        this.w1 = this.initPortion1;
        this.w2 = this.initPortion2;
        console.log('w1='+this.w1+' & w2='+this.w2);
    }
    dragStarted($event: CdkDragStart<any>) {
        this.d_w1 = (screen.availWidth * this.w1) / 100;
        this.d_w2 = (screen.availWidth * this.w2) / 100;
        $event.source.element.nativeElement.classList.add('bg-sky-600');
        console.log(this.d_w1, this.d_w2);
    }
    moved($event: CdkDragMove<any>) {
        $event.source._dragRef.reset()
        this.w1 = ((this.d_w1 + $event.distance.x) / screen.availWidth) * 100;
        this.w2 = ((this.d_w2 - $event.distance.x) / screen.availWidth) * 100;
    }
    dragEnd($event: CdkDragEnd<any>) {
        $event.source.element.nativeElement.classList.remove('bg-sky-600');
        // this.w1 = this.d_w1 + $event.distance.x;
        // this.w2 = this.d_w2 - $event.distance.x;
        // this.w1 = this.d_w1;
        // this.w2 = this.d_w2;
    }
}
