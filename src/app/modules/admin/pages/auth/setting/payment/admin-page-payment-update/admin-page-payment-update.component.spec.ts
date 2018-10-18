import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagePaymentUpdateComponent } from './admin-page-payment-update.component';

describe('AdminPagePaymentUpdateComponent', () => {
  let component: AdminPagePaymentUpdateComponent;
  let fixture: ComponentFixture<AdminPagePaymentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagePaymentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagePaymentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
