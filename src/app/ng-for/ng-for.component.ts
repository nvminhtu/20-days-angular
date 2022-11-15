import { Component, OnInit } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';

const Heroes = [
  { id: 1, name: 'Batman' },
  { id: 2, name: 'Spiderman' },
  { id: 3, name: 'Aquaman' },
];

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  // cannot declare here because we cannot use const inside a Class @Component

  // const HEROES = [
  //   {id: 1, name:'Superman'},
  //   {id: 2, name:'Batman'},
  //   {id: 5, name:'BatGirl'},
  //   {id: 3, name:'Robin'},
  //   {id: 4, name:'Flash'}
  // ]

  // 01- declare a property
  heroes = Heroes;

  constructor() {}

  // trackHero(index, hero) {
  //   console.log(hero);
  //   return hero ? hero.id : undefined;
  // }

  ngOnInit(): void {}
}
