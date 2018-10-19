import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionClientTwoComponent } from './p-admin-section-client-two.component';

describe('PAdminSectionClientTwoComponent', () => {
  let component: PAdminSectionClientTwoComponent;
  let fixture: ComponentFixture<PAdminSectionClientTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionClientTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionClientTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
