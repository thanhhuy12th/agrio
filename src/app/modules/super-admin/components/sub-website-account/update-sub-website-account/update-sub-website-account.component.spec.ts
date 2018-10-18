import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubWebsiteAccountComponent } from './update-sub-website-account.component';

describe('UpdateSubWebsiteAccountComponent', () => {
  let component: UpdateSubWebsiteAccountComponent;
  let fixture: ComponentFixture<UpdateSubWebsiteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSubWebsiteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubWebsiteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
