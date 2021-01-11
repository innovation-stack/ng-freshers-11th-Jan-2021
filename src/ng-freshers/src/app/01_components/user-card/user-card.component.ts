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

  @Output()
  userViewed = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  handleView() {
    console.log('button clicked');
    this.userViewed.emit(this.user);
  }
}
