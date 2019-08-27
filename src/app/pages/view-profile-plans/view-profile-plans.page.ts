import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';
import { get } from 'lodash';

@Component({
  selector: 'app-view-profile-plans',
  templateUrl: './view-profile-plans.page.html',
  styleUrls: ['./view-profile-plans.page.scss'],
})
export class ViewProfilePlansPage implements OnInit {

  Participations: any;
  url: any = environment.apiUrl;
  firstName: any = '';
  plans: any = [];

  constructor(
    private _userServ: UserService,
    private _globalServ: GlobalService,
  ) {
    this.getProfile();
    this.getPlans();
  }

  ngOnInit() {
  }

  getPlans() {
    this._userServ.getUserPlans(this._globalServ.idUser).subscribe(data => {
      this.plans = data;
      console.log('user plans: ', this.plans);
    }, err => { 
      console.log('err user plans: ', err);
    });
  }

  getProfile() {
    this._userServ.getProfile(this._globalServ.idUser, { 'entity': this._globalServ.org })
      .subscribe(dataProf => {
        this.firstName = get(dataProf, 'user.first_name', '');
      }, error => { console.log(error); })
  }

}
