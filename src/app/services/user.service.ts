import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) { }

  login(value: any) {
    return this.http.post(environment.apiUrl + '/app-login', value)
  }

  register(value: any) {
    return this.http.post(environment.apiUrl + '/app-register', value)
  }

  saveProfile(value: any) {
    return this.http.post(environment.apiUrl + '/app-user-set-profile', value)
  }

  getProfile(id: any, value: any) {
    return this.http.get(environment.apiUrl + '/app-user-profile/' + id, { params: value });
  }

  saveSettings(value: any) {
    return this.http.post(environment.apiUrl + '/app-user-set-settings', value)
  }

  getSettings(id: any) {
    return this.http.get(environment.apiUrl + '/app-user-settings/' + id);
  }

  getPublicProfile(id: any) {
    return this.http.get(environment.apiUrl + '/app-public-profile/' + id);
  }

  getPublicProfileForView(id: any, email: any) {
    return this.http.get(environment.apiUrl + '/app-public-profile/' + id + '?email=' + email);
  }

  getUserPlans(id: any) {
    return this.http.get(environment.apiUrl + '/get-user-plans/' + id);
  }

  getAppPlans(id: any) {
    return this.http.get(environment.apiUrl + '/app-user-plans/' + id);
  }

  getUserClubs(id: any) {
    return this.http.get(environment.apiUrl + '/app-user-clubs/' + id);
  }

  getUserGroups(id: any) {
    return this.http.get(environment.apiUrl + '/groups/' + id + '?type=user');
  }

}
