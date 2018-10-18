import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDeliveryUpdateComponent } from './admin-setting-delivery-update.component';

describe('AdminSettingDeliveryUpdateComponent', () => {
  let component: AdminSettingDeliveryUpdateComponent;
  let fixture: ComponentFixture<AdminSettingDeliveryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDeliveryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDeliveryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
