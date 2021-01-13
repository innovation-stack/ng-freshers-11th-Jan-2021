import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicNgForComponent } from './topic-ng-for.component';

describe('TopicNgForComponent', () => {
  let component: TopicNgForComponent;
  let fixture: ComponentFixture<TopicNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
