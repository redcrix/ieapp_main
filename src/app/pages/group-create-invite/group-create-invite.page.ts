import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { GroupService } from '../../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { get } from 'lodash';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-group-create-invite',
  templateUrl: './group-create-invite.page.html',
  styleUrls: ['./group-create-invite.page.scss'],
})
export class GroupCreateInvitePage implements OnInit {

  id: any;
  url: any = environment.apiUrl;
  isValidGroupImage: any = true;
  groupPeoples: any = [];

  innerWidth: any;
  math = Math;

  keyword: any = '';

  groupMembersIds: any = [];

  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
    private storage: Storage
  ) {
    /* if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
      console.log('id: ', this.id);
    } */
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    this.storage.get('group-create-members').then((val) => {
      this.groupMembersIds = val;
      this.getPeoples();
    });
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

  getPeoples() {
    this._groupServ.getPeoplesForInvitation().subscribe(data => {
      this.groupPeoples = data;
      this.groupPeoples = this.groupPeoples.map(o => {
        let value = 0;
        if (this.groupMembersIds.includes(o.id)) {
          value = 1;
        }
        return {
          ...o,
          value
        }
      });
      console.log('this.groupGroupCreateCategory: ', this.groupPeoples);
    }, err => { 
      console.log('catetgories err: ', err);
    })
  }

  async changeStatus(idx) {
    if (this.groupPeoples.length > 0) {
      this.groupPeoples[idx].value = (this.groupPeoples[idx].value + 1) % 2;
      this.groupMembersIds = this.groupPeoples.filter(o => o.value === 1).map(o => {
        return o.id
      });
      this.storage.set('group-create-members', this.groupMembersIds);
    }
  }

  memberKeyChange(event) {
    console.log('key changed: ', event);
    this.keyword = event;
  }

}
