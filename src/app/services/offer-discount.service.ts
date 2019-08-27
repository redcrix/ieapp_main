import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferDiscountService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
  ) { }

  getListFiltered(id: any) {
    return this.http.get(environment.apiUrl + '/app-filtered-offer-discount/' + id);
  }

  //get data to Offer Discount list tab
  getDataOfferDiscountList() {
    this.getListFiltered(this._globalServ.idUser)
      .subscribe(data => {
        this._globalServ.listOfferAndDisc = data;
      }, error => {
        console.log(error);
      })
  }

}
