import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDeliveryAddComponent } from './admin-setting-delivery-add.component';

describe('AdminSettingDeliveryAddComponent', () => {
  let component: AdminSettingDeliveryAddComponent;
  let fixture: ComponentFixture<AdminSettingDeliveryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDeliveryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDeliveryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
