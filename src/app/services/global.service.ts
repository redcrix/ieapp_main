import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  androidDivice: boolean;
  iosDivice: boolean;
  idUser: any;
  //org: any = 'CEU';
  org: any = 'IE';
  language: any;

  //save image profile
  profileImagePath: any;

  //create plan
  planImagePath: any;
  planImagePost: any;
  idsCategories: any;

  //create plan
  groupImagePath: any;
  groupImagePost: any;

  //data of tabs
  //plan
  listPlanHighlight: any;
  listPlanFiltered: any;
  //City Guide
  listCityGuide: any;
  //City agenda
  listCityAgenda: any;
  //offer and discount
  listOfferAndDisc: any;

  //*** saved in storage ***
  //token
  //idUser
  //language

  constructor() { }
}
