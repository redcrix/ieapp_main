import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';
import { get } from 'lodash';

@Component({
  selector: 'app-view-profile-groups',
  templateUrl: './view-profile-groups.page.html',
  styleUrls: ['./view-profile-groups.page.scss'],
})
export class ViewProfileGroupsPage implements OnInit {

  Participations: any;
  url: any = environment.apiUrl;
  firstName: any = '';
  groups: any = [];

  constructor(
    private _userServ: UserService,
    private _globalServ: GlobalService,
  ) {
    this.getProfile();
    this.getGroups();
  }

  ngOnInit() {
  }

  getGroups() {
    this._userServ.getUserGroups(this._globalServ.idUser).subscribe(data => {
      this.groups = get(data, 'group', []);
    }, err => { 
      console.log('err user groups: ', err);
    });
  }

  getProfile() {
    this._userServ.getProfile(this._globalServ.idUser, { 'entity': this._globalServ.org })
      .subscribe(dataProf => {
        this.firstName = get(dataProf, 'user.first_name', '');
      }, error => { console.log(error); })
  }

}
