import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAgendaItemPage } from './city-agenda-item.page';

describe('CityAgendaItemPage', () => {
  let component: CityAgendaItemPage;
  let fixture: ComponentFixture<CityAgendaItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAgendaItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAgendaItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
