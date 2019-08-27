import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private userId: any;

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) {
    this.userId = this._globalServ.idUser;
  }

  getClubList() {
    return this.http.get(environment.apiUrl + '/app-user-clubs/' + this.userId);
  }

  getRecommendedClubList() {
    return this.http.get(environment.apiUrl + '/app-recommended-clubs/' + this.userId);
  }

  getClubDetail(id: any) {
    return this.http.get(environment.apiUrl + '/app-get-club/' + id);
  }

  getPlansByClub(id: any) {
    return this.http.get(environment.apiUrl + '/plans-by-club/' + id);
  }

  joinClub(param) {
    console.log('param: ', param);
    return this.http.post(environment.apiUrl + '/join-ceu-club/' + param.clubId, {
      id: this.userId,
      name: param.userName,
      email: param.userEmail
    });
  }

}
