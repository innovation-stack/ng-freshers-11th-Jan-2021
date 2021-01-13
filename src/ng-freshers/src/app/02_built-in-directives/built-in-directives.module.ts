import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuiltInDirectivesDemoComponent } from './built-in-directives-demo/built-in-directives-demo.component';
import { TopicNgForComponent } from './topic-ng-for/topic-ng-for.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TopicShowHideComponent } from './topic-show-hide/topic-show-hide.component';
import { TopicClassAndStyleComponent } from './topic-class-and-style/topic-class-and-style.component';
import { BuiltInDirectivesRoutingModule } from './built-in-directives-routing.module';

@NgModule({
  declarations: [
    BuiltInDirectivesDemoComponent,
    TopicNgForComponent,
    UserCardComponent,
    TopicShowHideComponent,
    TopicClassAndStyleComponent,
  ],
  imports: [CommonModule, BuiltInDirectivesRoutingModule],
  exports: [BuiltInDirectivesDemoComponent],
})
export class BuiltInDirectivesModule {}
