import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) { }

  getNotifications(email: any) {
    return this.http.get(environment.apiUrl + `/user-notifications/${this._globalServ.idUser}?email=${email}`);
  }

  readNotifications(notificationId: any, param: any) {
    return this.http.post(environment.apiUrl + `/read-notification/${notificationId}`, param);
  }

}
