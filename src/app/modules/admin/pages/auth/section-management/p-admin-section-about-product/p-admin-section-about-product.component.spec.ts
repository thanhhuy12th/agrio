import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionAboutProductComponent } from './p-admin-section-about-product.component';

describe('PAdminSectionAboutProductComponent', () => {
  let component: PAdminSectionAboutProductComponent;
  let fixture: ComponentFixture<PAdminSectionAboutProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionAboutProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionAboutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
