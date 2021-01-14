import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProjectDemoComponent } from './todo-project-demo.component';

describe('TodoProjectDemoComponent', () => {
  let component: TodoProjectDemoComponent;
  let fixture: ComponentFixture<TodoProjectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoProjectDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoProjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
