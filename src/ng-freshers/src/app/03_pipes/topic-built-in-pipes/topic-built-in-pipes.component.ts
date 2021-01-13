import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-topic-built-in-pipes',
  templateUrl: './topic-built-in-pipes.component.html',
  styleUrls: ['./topic-built-in-pipes.component.scss'],
})
export class TopicBuiltInPipesComponent implements OnInit {
  course = {
    title: 'Angular fundamentals',
    rating: 4.9,
    students: 60120,
    price: 200,
    releaseDate: new Date(2021, 0, 13),
  };

  constructor() {}

  ngOnInit(): void {}
}
