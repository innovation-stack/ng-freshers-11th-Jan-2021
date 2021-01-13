import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EllipsisPipe } from './ellipsis.pipe';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { TopicBuiltInPipesComponent } from './topic-built-in-pipes/topic-built-in-pipes.component';
import { TopicCustomPipesComponent } from './topic-custom-pipes/topic-custom-pipes.component';

@NgModule({
  declarations: [
    PipesDemoComponent,
    TopicBuiltInPipesComponent,
    TopicCustomPipesComponent,
    EllipsisPipe,
  ],
  imports: [CommonModule],
  exports: [PipesDemoComponent],
})
export class PipesModule {}
