import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSetupComponent } from './locations-setup.component';

describe('LocationsSetupComponent', () => {
  let component: LocationsSetupComponent;
  let fixture: ComponentFixture<LocationsSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
