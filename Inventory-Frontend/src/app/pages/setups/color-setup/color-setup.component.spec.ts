import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSetupComponent } from './color-setup.component';

describe('ColorSetupComponent', () => {
  let component: ColorSetupComponent;
  let fixture: ComponentFixture<ColorSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
