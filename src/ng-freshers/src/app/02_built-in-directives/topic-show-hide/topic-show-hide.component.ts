import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-topic-show-hide',
  templateUrl: './topic-show-hide.component.html',
  styleUrls: ['./topic-show-hide.component.scss'],
})
export class TopicShowHideComponent implements OnInit {
  shouldShowMesageBody = true;

  constructor() {}

  ngOnInit(): void {}

  toggleMessageBody() {
    this.shouldShowMesageBody = !this.shouldShowMesageBody;
  }
}
