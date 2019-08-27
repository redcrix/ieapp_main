import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDiscountsCodePage } from './offers-discounts-code.page';

describe('OffersDiscountsCodePage', () => {
  let component: OffersDiscountsCodePage;
  let fixture: ComponentFixture<OffersDiscountsCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersDiscountsCodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersDiscountsCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
