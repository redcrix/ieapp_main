import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedPlansPage } from './joined-plans.page';

describe('JoinedPlansPage', () => {
  let component: JoinedPlansPage;
  let fixture: ComponentFixture<JoinedPlansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedPlansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
