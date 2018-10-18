import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubWebsiteComponent } from './update-sub-website.component';

describe('UpdateSubWebsiteComponent', () => {
  let component: UpdateSubWebsiteComponent;
  let fixture: ComponentFixture<UpdateSubWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSubWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
