import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-group-create-success',
  templateUrl: './group-create-success.page.html',
  styleUrls: ['./group-create-success.page.scss'],
})
export class GroupCreateSuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  continue() {
    this.router.navigate(['tabs/plan-list']);
  }

}
