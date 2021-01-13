import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicClassAndStyleComponent } from './topic-class-and-style.component';

describe('TopicClassAndStyleComponent', () => {
  let component: TopicClassAndStyleComponent;
  let fixture: ComponentFixture<TopicClassAndStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicClassAndStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicClassAndStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
