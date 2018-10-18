import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCommentTwoComponent } from './client-comment-two.component';

describe('ClientCommentTwoComponent', () => {
  let component: ClientCommentTwoComponent;
  let fixture: ComponentFixture<ClientCommentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCommentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCommentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
