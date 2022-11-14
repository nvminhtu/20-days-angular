import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.scss'],
})
export class IfelseComponent implements OnInit {
  // isLoggedIn = true; => khai bao kieu thong thuong
  isLoggedIn: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
