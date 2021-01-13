import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCustomPipesComponent } from './topic-custom-pipes.component';

describe('TopicCustomPipesComponent', () => {
  let component: TopicCustomPipesComponent;
  let fixture: ComponentFixture<TopicCustomPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCustomPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
