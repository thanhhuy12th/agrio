import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubWebsiteComponent } from './list-sub-website.component';

describe('ListSubWebsiteComponent', () => {
  let component: ListSubWebsiteComponent;
  let fixture: ComponentFixture<ListSubWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
