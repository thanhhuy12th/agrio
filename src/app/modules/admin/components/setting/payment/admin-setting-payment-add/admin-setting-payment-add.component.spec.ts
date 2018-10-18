import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingPaymentAddComponent } from './admin-setting-payment-add.component';

describe('AdminSettingPaymentAddComponent', () => {
  let component: AdminSettingPaymentAddComponent;
  let fixture: ComponentFixture<AdminSettingPaymentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingPaymentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingPaymentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
