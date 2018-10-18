import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagePaymentAddComponent } from './admin-page-payment-add.component';

describe('AdminPagePaymentAddComponent', () => {
  let component: AdminPagePaymentAddComponent;
  let fixture: ComponentFixture<AdminPagePaymentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagePaymentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagePaymentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
