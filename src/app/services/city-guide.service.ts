import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityGuideService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) { }

  getFilteredCategories(id: any, value: any) {
    return this.http.get(environment.apiUrl + '/app-filtered-city-guides/' + id, { params: value });
  }

  getArticlesCategory(id: any) {
    return this.http.get(environment.apiUrl + '/cityguide/articles/category/' + id);
  }

  getItem(id: any) {
    return this.http.get(environment.apiUrl + '/get-article/' + id);
  }

  //get data to City Guide list tab
  getDataCityGuideList() {
    this.getFilteredCategories(this._globalServ.idUser, { 'entity': this._globalServ.org })
      .subscribe(data => {
        this._globalServ.listCityGuide = data;
      }, error => {
        console.log(error);
      })
  }

}
