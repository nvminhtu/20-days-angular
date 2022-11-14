import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  // templateUrl: './condition.component.html',
  template: `
    <h2>
      Check Condition when user input the number -> user can view film/or not
    </h2>
    <input type="text" [(ngModel)]="user.age" />
    <div *ngIf="user.age > 18">You can view these types of films</div>

    <div *ngIf="user.age >= 18; else noPG13">18+ content</div>
    <ng-template #noPG13>
      You are not Adult, cannot view these type of content
    </ng-template>
  `,
  styleUrls: ['./condition.component.scss'],
})
export class ConditionComponent implements OnInit {
  city = {
    name: 'Hongkong',
    location: 'China',
  };

  user = {
    name: 'Andes',
    age: 30,
  };

  constructor() {}
  ngOnInit(): void {}
}
