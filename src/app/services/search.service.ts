import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) { }

  //type:
  // '' --> list all
  // people --> list people
  // student_plan --> list student plan
  // discount --> list discount
  getList(value?: any) {
    if (value.type === 'events') {
      return this.http.get(environment.apiUrl + '/ie-club-plans');
    } else {
      return this.http.get(environment.apiUrl + '/app-search', { params: value });
    }
  }



}
