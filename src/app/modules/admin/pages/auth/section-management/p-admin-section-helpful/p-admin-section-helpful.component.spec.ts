import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionHelpfulComponent } from './p-admin-section-helpful.component';

describe('PAdminSectionHelpfulComponent', () => {
  let component: PAdminSectionHelpfulComponent;
  let fixture: ComponentFixture<PAdminSectionHelpfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionHelpfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionHelpfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
