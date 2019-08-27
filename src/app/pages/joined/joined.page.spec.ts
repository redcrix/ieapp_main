import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedPage } from './joined.page';

describe('JoinedPage', () => {
  let component: JoinedPage;
  let fixture: ComponentFixture<JoinedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
