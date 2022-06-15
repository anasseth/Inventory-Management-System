import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeSetupComponent } from './size-setup.component';

describe('SizeSetupComponent', () => {
  let component: SizeSetupComponent;
  let fixture: ComponentFixture<SizeSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
