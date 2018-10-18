import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageDeliveryAddComponent } from './admin-page-delivery-add.component';

describe('AdminPageDeliveryAddComponent', () => {
  let component: AdminPageDeliveryAddComponent;
  let fixture: ComponentFixture<AdminPageDeliveryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageDeliveryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageDeliveryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
