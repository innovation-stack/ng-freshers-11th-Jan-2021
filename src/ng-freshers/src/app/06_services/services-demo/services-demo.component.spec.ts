import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDemoComponent } from './services-demo.component';

describe('ServicesDemoComponent', () => {
  let component: ServicesDemoComponent;
  let fixture: ComponentFixture<ServicesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
