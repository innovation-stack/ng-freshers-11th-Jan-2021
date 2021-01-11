import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPropertyBindingsComponent } from './topic-property-bindings.component';

describe('TopicPropertyBindingsComponent', () => {
  let component: TopicPropertyBindingsComponent;
  let fixture: ComponentFixture<TopicPropertyBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPropertyBindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPropertyBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
