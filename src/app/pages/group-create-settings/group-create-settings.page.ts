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
  selector: 'app-group-create-settings',
  templateUrl: './group-create-settings.page.html',
  styleUrls: ['./group-create-settings.page.scss'],
})
export class GroupCreateSettingsPage implements OnInit {

  id: any;
  url: any = environment.apiUrl;
  isValidGroupImage: any = true;
  groupCreateSettings: any = [];

  innerWidth: any;
  math = Math;

  groupSettingsIds = [];

  groupSettingValue: any = -1;

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

    this.storage.get('group-create-settings').then((val) => {
      this.groupSettingValue = val;
      this.getGroupSettings();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  getGroupSettings() {
    this._groupServ.getGroupSettings().subscribe(data => {
      console.log('group settings data: ', data);
      this.groupCreateSettings = data;
    }, err => {
      console.log('group settings err: ', err);
    })
  }

  changeStatus() {
    this.storage.set('group-create-settings', this.groupSettingValue);
  }

}
