import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAgendaListPage } from './city-agenda-list.page';

describe('CityAgendaListPage', () => {
  let component: CityAgendaListPage;
  let fixture: ComponentFixture<CityAgendaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAgendaListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAgendaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
