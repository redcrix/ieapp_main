import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityAgendaService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService,
  ) { }

  getFilteredEvents(id: any) {
    return this.http.get(environment.apiUrl + '/app-filtered-city-agenda/' + id);
  }

  getItem(id: any) {
    return this.http.get(environment.apiUrl + '/get-event/' + id);
  }

  getDataCityAgendaList() {
    this.getFilteredEvents(this._globalServ.idUser)
      .subscribe(data => {
        this._globalServ.listCityAgenda = data;
      }, error => {
        console.log(error);
      })
  }

}
