import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGuideItemPage } from './city-guide-item.page';

describe('CityGuideItemPage', () => {
  let component: CityGuideItemPage;
  let fixture: ComponentFixture<CityGuideItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityGuideItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityGuideItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
