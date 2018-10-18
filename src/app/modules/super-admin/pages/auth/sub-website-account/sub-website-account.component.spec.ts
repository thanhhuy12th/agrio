import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWebsiteAccountComponent } from './sub-website-account.component';

describe('SubWebsiteAccountComponent', () => {
  let component: SubWebsiteAccountComponent;
  let fixture: ComponentFixture<SubWebsiteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubWebsiteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubWebsiteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
