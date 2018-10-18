import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingGeneralComponent } from './admin-setting-general.component';

describe('AdminSettingGeneralComponent', () => {
  let component: AdminSettingGeneralComponent;
  let fixture: ComponentFixture<AdminSettingGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
