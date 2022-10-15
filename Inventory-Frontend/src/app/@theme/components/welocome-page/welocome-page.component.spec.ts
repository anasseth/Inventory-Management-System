import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocomePageComponent } from './welocome-page.component';

describe('WelocomePageComponent', () => {
  let component: WelocomePageComponent;
  let fixture: ComponentFixture<WelocomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelocomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelocomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
