import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-binding',
  template: `<h2>05. Two way Data Binding</h2>
    User name: <input type="text" [(ngModel)]="userName" />{{ userName }} `,
})
export class TwobindingComponent implements OnInit {
  // use two way data binging with private/ public class
  constructor() {}

  userName: string = 'Bill Gates';

  // get userName(): string {
  //   return this._userName;
  // }

  // set userName(val: string) {
  //   this._userName = val;
  // }

  ngOnInit(): void {
    // default
  }
}
