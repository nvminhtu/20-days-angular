import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
// export class ProgressBarComponent implements OnInit {
//   @Input() progress = 0; // phai import Input từ @angular/core
//   // component nhan vao 1 property tên là progress
//   constructor() {}

//   ngOnInit(): void {}
// }
export class ProgressBarComponent implements OnInit {
  @Input() progress = 0;
  @Input() backgroundColor?: string = 'gray';
  @Input() progressColor?: string;
  // @Input() progressColor: string = 'default';

  constructor() {}

  ngOnInit(): void {}
}
// 1- required: @Input
// 2- use it to parse data from parent to child
// 3- @Input() progress = 0;
