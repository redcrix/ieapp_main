import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPlanItemPage } from './group-plan-item.page';

describe('GroupPlanItemPage', () => {
  let component: GroupPlanItemPage;
  let fixture: ComponentFixture<GroupPlanItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPlanItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPlanItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
