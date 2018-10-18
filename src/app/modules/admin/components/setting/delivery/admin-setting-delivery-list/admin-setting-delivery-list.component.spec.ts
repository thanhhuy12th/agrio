import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDeliveryListComponent } from './admin-setting-delivery-list.component';

describe('AdminSettingDeliveryListComponent', () => {
  let component: AdminSettingDeliveryListComponent;
  let fixture: ComponentFixture<AdminSettingDeliveryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDeliveryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
