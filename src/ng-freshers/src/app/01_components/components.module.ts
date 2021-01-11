import { NgModule } from '@angular/core';
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TopicPropertyBindingsComponent } from './topic-property-bindings/topic-property-bindings.component';
import { TopicEventBindingsComponent } from './topic-event-bindings/topic-event-bindings.component';

@NgModule({
  declarations: [
    ComponentsDemoComponent,
    UserCardComponent,
    TopicPropertyBindingsComponent,
    TopicEventBindingsComponent,
  ],
  exports: [ComponentsDemoComponent],
})
export class ComponentsModule {}
