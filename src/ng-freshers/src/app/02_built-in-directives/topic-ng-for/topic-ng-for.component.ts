import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-topic-ng-for',
  templateUrl: './topic-ng-for.component.html',
  styleUrls: ['./topic-ng-for.component.scss'],
})
export class TopicNgForComponent implements OnInit {
  // "" 0 null undefined <-- falsy value
  // if() <-- equates to false
  name = '';

  users: User[] = [
    {
      name: 'Amar',
      handle: '@amar',
      description: 'Some history about Amar',
    },
    {
      name: 'Akhbar',
      handle: '@akhbar',
      description: 'Some history about Akhbar',
    },
    {
      name: 'Anthony',
      handle: '@anthony',
      description: 'Some history about Anthony',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleUserViewed(user: User) {
    this.name = user.name;
  }

  handleUserDeleted(userIndex: number) {
    this.users.splice(userIndex, 1);
  }
}
