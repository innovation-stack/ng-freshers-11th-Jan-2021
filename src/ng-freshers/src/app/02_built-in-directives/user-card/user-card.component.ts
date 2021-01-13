import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input()
  user: User;

  @Input()
  userIndex: number;

  @Input()
  isFirst: boolean;

  @Input()
  isLast: boolean;

  @Input()
  isEven: boolean;

  @Input()
  isOdd: boolean;

  @Output()
  userViewed = new EventEmitter<User>();

  @Output()
  userDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    const output = {
      first: this.isFirst,
      last: this.isLast,
      even: this.isEven,
      odd: this.isOdd,
    };
    console.table(output);
  }

  handleView() {
    this.userViewed.emit(this.user);
  }

  handleDeleteUser() {
    this.userDeleted.emit(this.userIndex);
  }
}
