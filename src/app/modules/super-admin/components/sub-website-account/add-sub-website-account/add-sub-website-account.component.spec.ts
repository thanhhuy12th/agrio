import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubWebsiteAccountComponent } from './add-sub-website-account.component';

describe('AddSubWebsiteAccountComponent', () => {
  let component: AddSubWebsiteAccountComponent;
  let fixture: ComponentFixture<AddSubWebsiteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubWebsiteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubWebsiteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
