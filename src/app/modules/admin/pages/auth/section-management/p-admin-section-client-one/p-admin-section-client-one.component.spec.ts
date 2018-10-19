import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionClientOneComponent } from './p-admin-section-client-one.component';

describe('PAdminSectionClientOneComponent', () => {
  let component: PAdminSectionClientOneComponent;
  let fixture: ComponentFixture<PAdminSectionClientOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionClientOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionClientOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
