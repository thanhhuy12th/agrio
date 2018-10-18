import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubWebsiteListComponent } from './admin-sub-website-list.component';

describe('AdminSubWebsiteListComponent', () => {
  let component: AdminSubWebsiteListComponent;
  let fixture: ComponentFixture<AdminSubWebsiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubWebsiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubWebsiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
