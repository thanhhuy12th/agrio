import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagePaymentListComponent } from './admin-page-payment-list.component';

describe('AdminPagePaymentListComponent', () => {
  let component: AdminPagePaymentListComponent;
  let fixture: ComponentFixture<AdminPagePaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagePaymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagePaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
