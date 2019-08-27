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
import { Router, NavigationExtras } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan-create-createdby',
  templateUrl: './plan-create-createdby.page.html',
  styleUrls: ['./plan-create-createdby.page.scss'],
})
export class PlanCreateCreatedbyPage implements OnInit {

  id: any;
  url: any = environment.apiUrl;
  isValidGroupImage: any = true;
  planCreateCreatedby: any = [];

  innerWidth: any;
  math = Math;

  planCreateCreatedbyValue: any = -1;
  groupId: any = null;

  isIncluded: any = false;

  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
    private storage: Storage,
    private router: Router,
    private _planServ: PlanService
  ) {
  }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.innerWidth = window.innerWidth;

    this.storage.get('plan-create-createdby').then((val) => {
      this.planCreateCreatedbyValue = val;
      this.getGroupSettings();

      if (this.actRoute.snapshot.queryParams.data != null) {
        let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
        this.groupId = getParams.groupId;
        console.log('groupId: ', this.groupId);
        this.storage.get('plan-create-groups').then((val) => {
          if (val > 0 || val === -2) { // -2: Me, 0> : selected from group list
            this.groupId = val;
          }
          this.checkGroupOptionsNeeded();
        });
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  getGroupSettings() {
    this.planCreateCreatedby = [
      {
        id: -2,
        name: 'Me (Student Plan)'
      }
    ];
  }

  changeStatus() {
    console.log('ME?? : ', this.planCreateCreatedbyValue);
    this.storage.set('plan-create-groups', this.planCreateCreatedbyValue);
  }

  goToGroupOptions() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'groupId': this.groupId })
      }
    };
    this.router.navigate(['plan-create-groups'], navigationExtras);
  }

  checkGroupOptionsNeeded() {
    this._planServ.getAccessibleGroup(this._globalServ.idUser).subscribe(data => {
      console.log('ac success--->: ', data);
      console.log('this.groupid: ', this.groupId);

      let accessableGroups = JSON.parse(JSON.stringify(data));
      if (accessableGroups.length > 0) {
        console.log('show group options');
        this.isIncluded=true;
        this.planCreateCreatedbyValue = this.groupId;
      } else {
        console.log('hide group options');
        this.isIncluded=false;
        this.planCreateCreatedbyValue = -2;
      }
    }, err => {
      console.log('ac err: ', err);
    });
  }

}
