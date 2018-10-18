import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubWebsiteNameComponent } from './admin-sub-website-name.component';

describe('AdminSubWebsiteNameComponent', () => {
  let component: AdminSubWebsiteNameComponent;
  let fixture: ComponentFixture<AdminSubWebsiteNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubWebsiteNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubWebsiteNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
