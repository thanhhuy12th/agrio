import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingPaymentComponent } from './admin-setting-payment.component';

describe('AdminSettingPaymentComponent', () => {
  let component: AdminSettingPaymentComponent;
  let fixture: ComponentFixture<AdminSettingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
