import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-topic-property-bindings',
  templateUrl: './topic-property-bindings.component.html',
  styleUrls: ['./topic-property-bindings.component.scss'],
})
export class TopicPropertyBindingsComponent implements OnInit {
  text = 'Some random text';
  htmlSnippet = '<strong>Some bolded text</strong>';
  inputValue = 'Enter age';
  shouldHideText = false;

  constructor() {}

  ngOnInit(): void {}

  toggleText() {
    this.shouldHideText = !this.shouldHideText;
  }
}
