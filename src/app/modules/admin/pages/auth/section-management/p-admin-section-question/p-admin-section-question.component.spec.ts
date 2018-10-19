import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionQuestionComponent } from './p-admin-section-question.component';

describe('PAdminSectionQuestionComponent', () => {
  let component: PAdminSectionQuestionComponent;
  let fixture: ComponentFixture<PAdminSectionQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
