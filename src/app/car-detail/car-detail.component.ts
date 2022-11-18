import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// call EventEmitter from @angular/core
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {
  @Output() KeyAction: EventEmitter<KeyboardEvent> =
    new EventEmitter<KeyboardEvent>();

  text = '';

  // hàm bắt sự kiện của keyboard khi sử dụng trong input
  handleKeydown(event: KeyboardEvent): void {
    this.text = event.key;
    this.KeyAction.emit(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
