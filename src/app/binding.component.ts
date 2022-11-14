import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <h2>02. Attribute Data Binding</h2>
    <h3>Hello {{ user.name }} here!</h3>
    <p>I am learning {{ user.learn }}</p>
    <input type="text" [value]="user.name" />

    <h2>03. Event Data Binding</h2>
    <!-- <button onclick="showInfo()">Click to show Info!</button> -->
    <button (click)="showInfo()">Click to show Info!</button>

    <h2>04. Two-way Data Binding</h2>
    <input type="text" [(ngModel)]="userName" /><br />
    {{ userName }}
  `,
})
export class BindingComponent {
  userName: string = 'James Bond';
  user = {
    name: 'Tu',
    learn: 'Angular',
  };

  showInfo() {
    alert('the button clicked!');
  }
}
