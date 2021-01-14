import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoProjectDemoComponent } from './todo-project-demo/todo-project-demo.component';
import { YesNoPipe } from './yesno.pipe';

@NgModule({
  declarations: [TodoProjectDemoComponent, YesNoPipe],
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  exports: [],
})
export class TodoProjectModule {}
