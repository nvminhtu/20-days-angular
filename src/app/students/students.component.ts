import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  title: string = 'Student Information';

  // khai bao property của 1 sinh viên
  // student?: Student[{ firstName: 'Adam' }];

  constructor() {}
  ngOnInit(): void {
    // this.firstName = 'Adam';
    // this.lastName = 'Traore';
    // this.scores = new Array<string>('8', '9', '10');
  }
}
