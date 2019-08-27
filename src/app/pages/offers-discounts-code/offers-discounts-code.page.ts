import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-discounts-code',
  templateUrl: './offers-discounts-code.page.html',
  styleUrls: ['./offers-discounts-code.page.scss'],
})
export class OffersDiscountsCodePage implements OnInit {

  code: any;
  constructor(
    private actRoute: ActivatedRoute,
  ) {
    /*if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.code = getParams.code;
    }*/
  }

  ngOnInit() {
  }

}
