import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-plan-create-success',
  templateUrl: './plan-create-success.page.html',
  styleUrls: ['./plan-create-success.page.scss'],
})
export class PlanCreateSuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  continue() {
    this.router.navigate(['tabs/plan-list']);
  }

}
