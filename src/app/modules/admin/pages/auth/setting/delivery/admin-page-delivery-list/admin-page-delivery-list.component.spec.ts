import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageDeliveryListComponent } from './admin-page-delivery-list.component';

describe('AdminPageDeliveryListComponent', () => {
  let component: AdminPageDeliveryListComponent;
  let fixture: ComponentFixture<AdminPageDeliveryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageDeliveryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageDeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
