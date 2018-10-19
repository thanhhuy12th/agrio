import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAdminSectionHotlineComponent } from './c-admin-section-hotline.component';

describe('CAdminSectionHotlineComponent', () => {
  let component: CAdminSectionHotlineComponent;
  let fixture: ComponentFixture<CAdminSectionHotlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAdminSectionHotlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAdminSectionHotlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
