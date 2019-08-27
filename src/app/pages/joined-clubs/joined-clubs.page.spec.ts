import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedClubsPage } from './joined-clubs.page';

describe('JoinedClubsPage', () => {
  let component: JoinedClubsPage;
  let fixture: ComponentFixture<JoinedClubsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedClubsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedClubsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
