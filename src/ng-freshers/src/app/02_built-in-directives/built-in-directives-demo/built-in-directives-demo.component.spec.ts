import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInDirectivesDemoComponent } from './built-in-directives-demo.component';

describe('BuiltInDirectivesDemoComponent', () => {
  let component: BuiltInDirectivesDemoComponent;
  let fixture: ComponentFixture<BuiltInDirectivesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInDirectivesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInDirectivesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
