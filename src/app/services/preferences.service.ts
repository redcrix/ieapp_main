import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) { }

  getSupercategories(value: any) {
    return this.http.get(environment.apiUrl + '/supercategories', { params: value });
  }

  getSupercategoriesByUser(id: any) {
    return this.http.get(environment.apiUrl + '/app-user-preferences/' + id);
  }

  saveSupercategories(value: any) {
    return this.http.post(environment.apiUrl + '/app-user-set-preferences', value)
  }

}
