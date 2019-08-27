import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesOkPage } from './preferences-ok.page';

describe('PreferencesOkPage', () => {
  let component: PreferencesOkPage;
  let fixture: ComponentFixture<PreferencesOkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesOkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesOkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
