import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCommentOneComponent } from './client-comment-one.component';

describe('ClientCommentOneComponent', () => {
  let component: ClientCommentOneComponent;
  let fixture: ComponentFixture<ClientCommentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCommentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCommentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
