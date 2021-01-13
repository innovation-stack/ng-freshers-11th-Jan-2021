import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBuiltInPipesComponent } from './topic-built-in-pipes.component';

describe('TopicBuiltInPipesComponent', () => {
  let component: TopicBuiltInPipesComponent;
  let fixture: ComponentFixture<TopicBuiltInPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicBuiltInPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBuiltInPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
