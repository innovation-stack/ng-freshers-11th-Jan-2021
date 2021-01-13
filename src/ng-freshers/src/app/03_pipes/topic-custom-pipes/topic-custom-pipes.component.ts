import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-topic-custom-pipes',
  templateUrl: './topic-custom-pipes.component.html',
  styleUrls: ['./topic-custom-pipes.component.scss'],
})
export class TopicCustomPipesComponent implements OnInit {
  loremIpsumText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.';

  constructor() {}

  ngOnInit(): void {}
}
