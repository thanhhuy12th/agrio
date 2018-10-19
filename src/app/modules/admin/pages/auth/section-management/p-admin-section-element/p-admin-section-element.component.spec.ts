import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionElementComponent } from './p-admin-section-element.component';

describe('PAdminSectionElementComponent', () => {
  let component: PAdminSectionElementComponent;
  let fixture: ComponentFixture<PAdminSectionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
