import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCreatePage } from './plan-create.page';

describe('PlanCreatePage', () => {
  let component: PlanCreatePage;
  let fixture: ComponentFixture<PlanCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
