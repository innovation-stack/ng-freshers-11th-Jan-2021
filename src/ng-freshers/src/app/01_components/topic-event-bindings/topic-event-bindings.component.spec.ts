import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicEventBindingsComponent } from './topic-event-bindings.component';

describe('TopicEventBindingsComponent', () => {
  let component: TopicEventBindingsComponent;
  let fixture: ComponentFixture<TopicEventBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicEventBindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicEventBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
