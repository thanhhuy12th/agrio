import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionMediaComponent } from './p-admin-section-media.component';

describe('PAdminSectionMediaComponent', () => {
  let component: PAdminSectionMediaComponent;
  let fixture: ComponentFixture<PAdminSectionMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
