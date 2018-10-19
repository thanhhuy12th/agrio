import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionAboutUsComponent } from './p-admin-section-about-us.component';

describe('PAdminSectionAboutUsComponent', () => {
  let component: PAdminSectionAboutUsComponent;
  let fixture: ComponentFixture<PAdminSectionAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
