import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdminSectionGuildComponent } from './p-admin-section-guild.component';

describe('PAdminSectionGuildComponent', () => {
  let component: PAdminSectionGuildComponent;
  let fixture: ComponentFixture<PAdminSectionGuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdminSectionGuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdminSectionGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
