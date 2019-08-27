import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGuideItemListPage } from './city-guide-item-list.page';

describe('CityGuideItemListPage', () => {
  let component: CityGuideItemListPage;
  let fixture: ComponentFixture<CityGuideItemListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityGuideItemListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityGuideItemListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
