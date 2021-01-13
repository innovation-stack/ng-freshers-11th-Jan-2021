import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuiltInDirectivesDemoComponent } from './built-in-directives-demo/built-in-directives-demo.component';

const routes: Routes = [
  {
    path: '',
    component: BuiltInDirectivesDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuiltInDirectivesRoutingModule {}
