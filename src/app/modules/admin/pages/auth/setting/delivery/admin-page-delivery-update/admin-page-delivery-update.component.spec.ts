import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageDeliveryUpdateComponent } from './admin-page-delivery-update.component';

describe('AdminPageDeliveryUpdateComponent', () => {
  let component: AdminPageDeliveryUpdateComponent;
  let fixture: ComponentFixture<AdminPageDeliveryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageDeliveryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageDeliveryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
