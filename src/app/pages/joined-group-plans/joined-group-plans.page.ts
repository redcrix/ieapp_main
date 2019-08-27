import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-joined-group-plans',
  templateUrl: './joined-group-plans.page.html',
  styleUrls: ['./joined-group-plans.page.scss'],
})
export class JoinedGroupPlansPage implements OnInit {

  joinedGroupPlans: any;
  url: any = environment.apiUrl;

  constructor(
    private router: Router,
    private _groupServ: GroupService,
    private _globalServ: GlobalService,
    ) {
    this._groupServ.joinedGroupPlans(this._globalServ.idUser).subscribe(data => {
      this.joinedGroupPlans = data;
      console.log('joined group plans scc: ', this.joinedGroupPlans);
    }, err => {
      console.log('joined gropu plan err: ', err);
    })
  }

  goToGroups() {
    this.router.navigate(['groups']);
  }

  ngOnInit() {
  }

  goToPlan(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({})
      }, replaceUrl: true
    };
    this.router.navigate(['tabs/plan-list'], navigationExtras)
  }

  goToGroupItem(group) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': group.id })
      },
    };
    this.router.navigate(['group-plan-item'], navigationExtras);
  }

}
