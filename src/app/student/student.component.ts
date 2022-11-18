import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  @Input() firstName?: string;
  @Input() lastName?: string;
  @Input() scores?: Array<String>;
  constructor() {}
  ngOnInit(): void {}
}
