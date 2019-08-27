import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanItemPage } from './plan-item.page';

describe('PlanItemPage', () => {
  let component: PlanItemPage;
  let fixture: ComponentFixture<PlanItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
