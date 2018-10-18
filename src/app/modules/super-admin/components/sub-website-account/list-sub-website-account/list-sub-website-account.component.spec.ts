import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubWebsiteAccountComponent } from './list-sub-website-account.component';

describe('ListSubWebsiteAccountComponent', () => {
  let component: ListSubWebsiteAccountComponent;
  let fixture: ComponentFixture<ListSubWebsiteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubWebsiteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubWebsiteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
