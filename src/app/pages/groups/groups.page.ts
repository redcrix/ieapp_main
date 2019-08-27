import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { GroupService } from '../../services/group.service';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras } from '@angular/router';

import { get } from 'lodash';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  assetsBaseUrl: any = environment.apiUrl + '/get-ceu-club-image/';
  allGroups: any = [];
  recommendedGroups: any = [];

  scrollPos: any = 0;

  isViewAllForGroups: any = false;
  isViewAllForRecommend: any = false;

  constructor(
    private _groupServ: GroupService,
    private _globalServ: GlobalService,
    private router: Router
  ) {
    this.loadAllGroups();
    this.loadRecommendedGroups();
  }

  ngOnInit() {
    
  }

  loadAllGroups() {
    this._groupServ.getGroupList().subscribe(data => {
      console.log('group list: ', data);
      this.allGroups = get(data, 'group', []);
    }, err => {
      console.log('get group err: ', err);
    });
  }

  loadRecommendedGroups() {
    this._groupServ.getRecommendedGroupList().subscribe(data => {
      console.log('recommendedGroups list: ', data);
      this.recommendedGroups = get(data, 'group', []);
    }, err => {
      console.log('get recommendedGroups err: ', err);
    });
  }

  showFixedHeader() {
    if (this.scrollPos > 50) {
      return true;
    }
    return false;
  }

  logScrolling(ev) {
    this.scrollPos = ev.detail.scrollTop;
  }

  logScrollStart() {

  }

  logScrollEnd() {

  }

  goToGroupDetail(value) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': value.id })
      },
    };
    this.router.navigate(['group-detail'], navigationExtras)
  }

  getNumberOfLimitForGroups(type) {
    if (type === 'groups') {
      return this.isViewAllForGroups ? this.allGroups.length : 9;
    } else {
      return this.isViewAllForRecommend ? this.recommendedGroups.length : 3; 
    }
  }

}
