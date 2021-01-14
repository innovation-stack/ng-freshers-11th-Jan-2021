import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HelloWorldService } from './hello-world.service';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ServicesDemoComponent } from './services-demo/services-demo.component';

@NgModule({
  declarations: [ServicesDemoComponent, HelloWorldComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ServicesDemoComponent],
})
export class ServicesModule {}
