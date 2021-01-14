import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';

@NgModule({
  declarations: [FormsDemoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormsDemoComponent],
})
export class FormsDemoModule {}
