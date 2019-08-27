import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCreateSuccessPage } from './group-create-success.page';

describe('GroupCreateSuccessPage', () => {
  let component: GroupCreateSuccessPage;
  let fixture: ComponentFixture<GroupCreateSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupCreateSuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCreateSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
