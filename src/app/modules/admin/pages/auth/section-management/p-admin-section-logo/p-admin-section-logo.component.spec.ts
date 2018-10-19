import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionLogoComponent } from './p-admin-section-logo.component';

describe('PAdminSectionLogoComponent', () => {
  let component: PAdminSectionLogoComponent;
  let fixture: ComponentFixture<PAdminSectionLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
