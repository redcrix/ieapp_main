import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) { }

  getJoined(id: any) {
    return this.http.get(environment.apiUrl + '/joined-clubs/' + id);
  }

}
