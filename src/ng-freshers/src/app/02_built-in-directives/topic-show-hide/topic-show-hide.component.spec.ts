import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicShowHideComponent } from './topic-show-hide.component';

describe('TopicShowHideComponent', () => {
  let component: TopicShowHideComponent;
  let fixture: ComponentFixture<TopicShowHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicShowHideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
