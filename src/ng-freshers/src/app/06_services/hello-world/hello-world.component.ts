import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../hello-world.service';
import { Observable } from 'rxjs';

// reactive programming
// represent sequence of data that arrives over time

// array: [10, 20, 30, 40]
// promise: resolves/rejects only once.
// observable: [10, 20, 30]

@Component({
  selector: 'ngr-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
  todos: any[];

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.helloWorldService.getTodos().subscribe((todos: any[]) => {
      this.todos = todos;
    });
  }
}
