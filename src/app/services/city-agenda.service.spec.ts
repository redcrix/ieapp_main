import { TestBed } from '@angular/core/testing';

import { CityAgendaService } from './city-agenda.service';

describe('CityAgendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityAgendaService = TestBed.get(CityAgendaService);
    expect(service).toBeTruthy();
  });
});
