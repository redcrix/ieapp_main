import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-preferences-ok',
  templateUrl: './preferences-ok.page.html',
  styleUrls: ['./preferences-ok.page.scss'],
})
export class PreferencesOkPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToPlans() {
    let index = window.history.length;
    window.history.go(-index);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({})
      }, replaceUrl: true
    };
    this.router.navigate(['tabs/plan-list'], navigationExtras)
  }


}
