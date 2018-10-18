import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingPaymentListComponent } from './admin-setting-payment-list.component';

describe('AdminSettingPaymentListComponent', () => {
  let component: AdminSettingPaymentListComponent;
  let fixture: ComponentFixture<AdminSettingPaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingPaymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
