import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCreateCreatedbyPage } from './plan-create-createdby.page';

describe('PlanCreateCreatedbyPage', () => {
  let component: PlanCreateCreatedbyPage;
  let fixture: ComponentFixture<PlanCreateCreatedbyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCreateCreatedbyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCreateCreatedbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
