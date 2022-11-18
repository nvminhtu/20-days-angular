import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-parent',
  templateUrl: './com-parent.component.html',
  styleUrls: ['./com-parent.component.scss'],
})
export class ComParentComponent implements OnInit {
  inputText: string = 'Hi Kid, have a nice day - message from parent';
  childMessage?: string;
  constructor() {}

  ngOnInit(): void {}

  // now we implement a method called: receiveChildData
  receiveChildData(data: string) {
    // oday phai khai bao kieu du lieu nhe
    this.childMessage = data;
  }
}
