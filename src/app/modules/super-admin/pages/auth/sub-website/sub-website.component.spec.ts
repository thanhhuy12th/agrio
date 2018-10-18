import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWebsiteComponent } from './sub-website.component';

describe('SubWebsiteComponent', () => {
  let component: SubWebsiteComponent;
  let fixture: ComponentFixture<SubWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
