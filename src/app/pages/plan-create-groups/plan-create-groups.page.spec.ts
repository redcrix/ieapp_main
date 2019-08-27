import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCreateGroupsPage } from './plan-create-groups.page';

describe('PlanCreateGroupsPage', () => {
  let component: PlanCreateGroupsPage;
  let fixture: ComponentFixture<PlanCreateGroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCreateGroupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCreateGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
