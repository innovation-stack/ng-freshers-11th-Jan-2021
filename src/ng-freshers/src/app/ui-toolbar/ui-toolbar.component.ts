import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngr-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
})
export class UiToolbarComponent implements OnInit {
  // request Angular for a service dependency
  // Dependency (constructor) Injection
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleCustomDirectivesClick() {
    this.router.navigate(['/custom-directives']);
  }
}
