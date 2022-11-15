import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pj-schoolboard',
  templateUrl: './pj-schoolboard.component.html',
  styleUrls: ['./pj-schoolboard.component.scss'],
})
export class PjSchoolboardComponent implements OnInit {
  sb: number = 1;
  isChecked: boolean = true;

  sb2: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
