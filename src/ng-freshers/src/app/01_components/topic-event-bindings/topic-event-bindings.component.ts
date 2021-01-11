import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-topic-event-bindings',
  templateUrl: './topic-event-bindings.component.html',
  styleUrls: ['./topic-event-bindings.component.scss'],
})
export class TopicEventBindingsComponent implements OnInit {
  name = 'Anup';
  message = '';

  constructor() {}

  ngOnInit(): void {}

  onBlur(event: FocusEvent) {
    // type assertion
    this.name = (event.target as HTMLInputElement).value;
  }

  onInput(event: KeyboardEvent) {
    this.name = (event.target as HTMLInputElement).value;
  }

  resetName() {
    this.name = '';
  }

  showMessageFromInput(input: HTMLInputElement) {
    this.message = input.value;
  }
}
