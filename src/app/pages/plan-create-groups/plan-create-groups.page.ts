import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { GroupService } from '../../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { get, find } from 'lodash';
import { UserService } from 'src/app/services/user.service';
import { PlanService } from 'src/app/services/plan.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-plan-create-groups',
  templateUrl: './plan-create-groups.page.html',
  styleUrls: ['./plan-create-groups.page.scss'],
})
export class PlanCreateGroupsPage implements OnInit {

  groupId: any;
  url: any = environment.apiUrl;
  isValidGroupImage: any = true;
  groups: any = [];

  innerWidth: any;
  math = Math;

  profile: any = {};
  selectedPeople: any = [];
  keyword: any = '';

  planCreateGroups: any = -1;

  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private _userServ: UserService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
    private _planServ: PlanService,
    private storage: Storage
  ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.groupId = getParams.groupId;
      this.planCreateGroups = this.groupId;
      console.log('id: ', this.groupId);
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    this.getProfile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  goBack() {
    this.location.back();
  }

  updateGroupUrl() {
    this.isValidGroupImage = false;
  }

  getProfile() {
    this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(data => {
      this.profile = get(data, '[0]', {});
      this.getAllGroupOptions();
      console.log('this.profile: ', this.profile);
    }, err => {
      console.log('profile err:', err);
    });
  }

  getAllGroupOptions() {
    this._planServ.getAccessibleGroup(this._globalServ.idUser).subscribe(data => {
      console.log('ac success: ', data);
      this.groups = data;
    }, err => {
      console.log('ac err: ', err);
    });
  }

  memberKeyChange(event) {
    console.log('key changed: ', event);
    this.keyword = event;
  }

  changeStatus() {
    console.log('this.plancreategroups: ', this.planCreateGroups);
    this.storage.set('plan-create-groups', this.planCreateGroups);
  }

}
