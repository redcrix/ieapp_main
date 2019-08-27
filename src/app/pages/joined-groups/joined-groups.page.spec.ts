import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedGroupsPage } from './joined-groups.page';

describe('JoinedGroupsPage', () => {
  let component: JoinedGroupsPage;
  let fixture: ComponentFixture<JoinedGroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedGroupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
