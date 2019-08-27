import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-joined',
  templateUrl: './joined.page.html',
  styleUrls: ['./joined.page.scss'],
})
export class JoinedPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToStudentPlan(){
    this.router.navigate(['joined-plans'], {});
  }

  goToClubs(){
    this.router.navigate(['joined-clubs'], {});
  }

  goToGroupPlan() {
    this.router.navigate(['joined-group-plans'], {});
  }

  goToGroups() {
    this.router.navigate(['joined-groups'], {});
  }

}
