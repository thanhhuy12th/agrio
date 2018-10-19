import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionHomeSliderComponent } from './p-admin-section-home-slider.component';

describe('PAdminSectionHomeSliderComponent', () => {
  let component: PAdminSectionHomeSliderComponent;
  let fixture: ComponentFixture<PAdminSectionHomeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionHomeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionHomeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
