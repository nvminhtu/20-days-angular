import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <h2>01. Data Binding</h2>
    <h3>Personal Information</h3>
    <p>Your name: {{ user.name }}</p>
    <p>Your age: {{ user.age }}</p>
  `,
})
export class PersonComponent {
  user = {
    name: 'Steve',
    age: '30',
  };
}
