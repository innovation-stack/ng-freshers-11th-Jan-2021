import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivesDemoComponent } from './custom-directives-demo.component';

describe('CustomDirectivesDemoComponent', () => {
  let component: CustomDirectivesDemoComponent;
  let fixture: ComponentFixture<CustomDirectivesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectivesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectivesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
