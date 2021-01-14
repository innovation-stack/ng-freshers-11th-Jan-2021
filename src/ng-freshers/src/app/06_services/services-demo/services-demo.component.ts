import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../hello-world.service';
import { HelloWorldComponent } from '../hello-world/hello-world.component';

@Component({
  selector: 'ngr-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.scss'],
  // providers: [{ provide: HelloWorldService, useClass: HelloWorldService }],
  // providers: [HelloWorldService],
})
export class ServicesDemoComponent implements OnInit {
  // No provider for HelloWorldService!
  // Module, Component, Directive
  // Module: ModuleInjector
  // Component/Directive: ElementInjector

  // Injector: container which contains list of providers
  // Provider : knows how to instantiate the service

  // 1. Angular asks ElementInjector for dependency (via injection token)
  // 2. ElementInjector requests provider for existence of dependency
  // 3. Provider responds positively that service exists.
  // 4. Provider (based on the configuration ) instantiates the service and hands it
  //    over to the injector

  constructor() {}

  ngOnInit(): void {}
}
