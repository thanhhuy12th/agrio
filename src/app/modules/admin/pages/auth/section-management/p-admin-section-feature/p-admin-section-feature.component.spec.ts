import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionFeatureComponent } from './p-admin-section-feature.component';

describe('PAdminSectionFeatureComponent', () => {
  let component: PAdminSectionFeatureComponent;
  let fixture: ComponentFixture<PAdminSectionFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
