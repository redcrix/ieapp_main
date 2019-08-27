import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCreateInvitePage } from './group-create-invite.page';

describe('GroupCreateInvitePage', () => {
  let component: GroupCreateInvitePage;
  let fixture: ComponentFixture<GroupCreateInvitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupCreateInvitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCreateInvitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
