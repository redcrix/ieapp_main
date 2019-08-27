import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) { }

  saveFilters(value: any) {
    return this.http.post(environment.apiUrl + '/app-set-filters', value)
  }

  getFilters() {
    return this.http.get(environment.apiUrl + '/app-filters', { params: null });
  }

  getFiltersByUser(id: any) {
    return this.http.get(environment.apiUrl + '/app-filters/' + id);
  }

}
