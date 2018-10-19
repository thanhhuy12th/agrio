import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionHotlineComponent } from './p-admin-section-hotline.component';

describe('PAdminSectionHotlineComponent', () => {
  let component: PAdminSectionHotlineComponent;
  let fixture: ComponentFixture<PAdminSectionHotlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionHotlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionHotlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
