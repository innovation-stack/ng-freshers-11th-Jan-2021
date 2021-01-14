import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './01_components/components.module';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { BuiltInDirectivesModule } from './02_built-in-directives/built-in-directives.module';
import { PipesModule } from './03_pipes/pipes.module';
import { CustomDirectivesModule } from './04_custom-directives/custom-directives.module';
import { FormsDemoModule } from './05_forms-demo/forms-demo.module';
import { ServicesModule } from './06_services/services.module';
import { HelloWorldService } from './06_services/hello-world.service';
import { TodoProjectModule } from './07_todo-project/todo-project.module';
@NgModule({
  declarations: [AppComponent, UiToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    // BuiltInDirectivesModule,
    PipesModule,
    CustomDirectivesModule,
    FormsDemoModule,
    ServicesModule,
    TodoProjectModule,
  ],
  // providers: [HelloWorldService],
  bootstrap: [AppComponent],
})
export class AppModule {}
