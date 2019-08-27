import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDiscountsMapPage } from './offers-discounts-map.page';

describe('OffersDiscountsMapPage', () => {
  let component: OffersDiscountsMapPage;
  let fixture: ComponentFixture<OffersDiscountsMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersDiscountsMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersDiscountsMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
