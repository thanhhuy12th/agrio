import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDeliveryComponent } from './admin-setting-delivery.component';

describe('AdminSettingDeliveryComponent', () => {
  let component: AdminSettingDeliveryComponent;
  let fixture: ComponentFixture<AdminSettingDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
