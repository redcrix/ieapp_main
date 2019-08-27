import { Component, OnInit } from '@angular/core';
import { OfferDiscountService } from '../../services/offer-discount.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-offers-discounts-list',
  templateUrl: './offers-discounts-list.page.html',
  styleUrls: ['./offers-discounts-list.page.scss'],
})
export class OffersDiscountsListPage implements OnInit {
  pageTitleName: any = false;

  constructor(
    private _offerDiscountServ: OfferDiscountService,
    private _globalServ: GlobalService,
    ) {
    this._offerDiscountServ.getDataOfferDiscountList();
  }

  ngOnInit() {
  }

  logScrolling(e){
    if(e.detail.scrollTop>50){
      this.pageTitleName = true;
    } else {
      this.pageTitleName = false;
    }
  }

}
