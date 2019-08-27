import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCreateSeatsPage } from './plan-create-seats.page';

describe('PlanCreateSeatsPage', () => {
  let component: PlanCreateSeatsPage;
  let fixture: ComponentFixture<PlanCreateSeatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCreateSeatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCreateSeatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
