import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'offer-discount-card',
  templateUrl: './offer-discount-card.component.html',
  styleUrls: ['./offer-discount-card.component.scss'],
})
export class OfferDiscountCardComponent implements OnInit {

  @Input() dataOffDisc: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToOfferDiscountItem() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'item': this.dataOffDisc })
      },
    };
    this.router.navigate(['offers-discoutns-item'], navigationExtras)
  }

}
