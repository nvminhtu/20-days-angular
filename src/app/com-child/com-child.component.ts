import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com-child',
  templateUrl: './com-child.component.html',
  styleUrls: ['./com-child.component.scss'],
})
export class ComChildComponent implements OnInit {
  // khai bao bien dau vao
  @Input() inputFromParent?: string; // co hoac ko - hoac phai khoi tao
  @Output() outputFromChild: EventEmitter<string> = new EventEmitter();

  outputText: string = 'Hi Father, message from child';
  constructor() {}

  ngOnInit(): void {
    // test xem nhan duoc chua
    console.log(this.inputFromParent);
  }

  sendDataToParent() {
    this.outputFromChild.emit(this.outputText);
  }
}
