import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubWebsiteComponent } from './add-sub-website.component';

describe('AddSubWebsiteComponent', () => {
  let component: AddSubWebsiteComponent;
  let fixture: ComponentFixture<AddSubWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
