import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOfMeasurementSetupComponent } from './unit-of-measurement-setup.component';

describe('UnitOfMeasurementSetupComponent', () => {
  let component: UnitOfMeasurementSetupComponent;
  let fixture: ComponentFixture<UnitOfMeasurementSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitOfMeasurementSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOfMeasurementSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
