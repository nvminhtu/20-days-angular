import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  keyPressed = '';
  constructor() {}
  ngOnInit(): void {}
  handleKeyAction(event: KeyboardEvent): void {
    this.keyPressed = event.key + ' from Parent';
  }
}
