import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGuideListPage } from './city-guide-list.page';

describe('CityGuideListPage', () => {
  let component: CityGuideListPage;
  let fixture: ComponentFixture<CityGuideListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityGuideListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityGuideListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
