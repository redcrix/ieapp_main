import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanListPage } from './plan-list.page';

describe('PlanListPage', () => {
  let component: PlanListPage;
  let fixture: ComponentFixture<PlanListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
