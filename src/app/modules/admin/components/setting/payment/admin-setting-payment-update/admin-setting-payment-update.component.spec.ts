import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingPaymentUpdateComponent } from './admin-setting-payment-update.component';

describe('AdminSettingPaymentUpdateComponent', () => {
  let component: AdminSettingPaymentUpdateComponent;
  let fixture: ComponentFixture<AdminSettingPaymentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingPaymentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingPaymentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
