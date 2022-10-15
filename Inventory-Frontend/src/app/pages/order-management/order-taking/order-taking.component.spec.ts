import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTakingComponent } from './order-taking.component';

describe('OrderTakingComponent', () => {
  let component: OrderTakingComponent;
  let fixture: ComponentFixture<OrderTakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
