import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCommentPage } from './write-comment.page';

describe('WriteCommentPage', () => {
  let component: WriteCommentPage;
  let fixture: ComponentFixture<WriteCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteCommentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
