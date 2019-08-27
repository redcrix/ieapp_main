import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDiscountsListPage } from './offers-discounts-list.page';

describe('OffersDiscountsListPage', () => {
  let component: OffersDiscountsListPage;
  let fixture: ComponentFixture<OffersDiscountsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersDiscountsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersDiscountsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
