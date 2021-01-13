import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomDirectivesDemoComponent } from './custom-directives-demo/custom-directives-demo.component';
import { NavbarTogglerDirective } from './navbar-toggler.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [CustomDirectivesDemoComponent, NavbarTogglerDirective, HighlightDirective],
  imports: [CommonModule],
  exports: [CustomDirectivesDemoComponent],
})
export class CustomDirectivesModule {}
