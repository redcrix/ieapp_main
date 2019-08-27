import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { GroupService } from '../../services/group.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { get, find } from 'lodash';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.page.html',
  styleUrls: ['./group-detail.page.scss'],
})
export class GroupDetailPage implements OnInit {

  id: any;
  url: any = environment.apiUrl;
  getItem: any = {};
  isValidGroupImage: any = true;
  groupMembers: any = [];
  plans: any = [];
  comments: any = [];

  innerWidth: any;
  math = Math;

  isJoined: any = false;

  profile: any = {};


  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
    private router: Router,
    private _userServ: UserService,
    private storage: Storage
    ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
      console.log('id: ', this.id);
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ionViewDidEnter() {
    this.getProfile();
  }

  getProfile() {
    this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(data => {
      this.profile = get(data, '[0]', {});
      console.log('this.profile: ', this.profile);

      this.getGroupDetail();
      this.getGroupComments();
      this.getGroupPlans();
    }, err => {
      console.log('err public profile: ', err);
    });
  }

  getGroupDetail() {
    this._groupServ.getGroupDetail(this.id).subscribe(data => {
      console.log('group detail data: ', data);
      this.getItem = get(data, 'group', {});
      this.groupMembers = get(data, 'members', []);

      console.log('user id: ', this._globalServ.idUser);
      if (find(this.groupMembers, ['id', this._globalServ.idUser])) {
        this.isJoined = true;
      } else {
        this.isJoined = false;
      }
    }, err => {
      console.log('group detail err: ', err);
    });
  }

  getDuration(tcreated) {
    let now = new Date().getTime();
    let created = new Date(tcreated).getTime();

    if (now > created) {
      let hours = new Date(now-created).getHours();
      if (Math.floor(hours/24) === 0) {
        return '1d';
      }
      return Math.floor(hours/24) + 'd';
    } else {
      return '';
    }
  }

  getGroupComments() {
    this._groupServ.getGroupComments(this.id).subscribe(data => {
      console.log('group comment data: ', data);
      this.comments = get(data, 'comment', {});  
      this.comments = this.comments.map(o => {
        let duration = this.getDuration(o.created);
        
        return {
          ...o,
          duration
        };
      })
    }, err => {
      console.log('group comment err: ', err);
    });
  }

  getGroupPlans() {
    this._groupServ.getGroupPlans(this.id, this.profile.email).subscribe(data => {
      console.log('group plans data: ', data);
      if(this._globalServ.org == 'CEU') {
        this.plans = data;
      } else {
        this.plans = data['groupPlans'];
      }
      this.plans = this.plans.map(o => {
        return {
          ...o,
          type: 'group_plan'
        }
      })
    }, err => {
      console.log('group plans err: ', err);
    });
  }

  goToGroupPlanItem(plan) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': plan.id, 'email': this.profile.email })
      }
    };
    this.router.navigate(['group-plan-item'], navigationExtras)
  }


  goBack() {
    this.location.back();
  }

  updateGroupUrl() {
    this.isValidGroupImage = false;
  }

  joinGroup(){
    if(this.isJoined == true){
      this._groupServ.leaveGroupPlan(this.id, null).subscribe(data => {
        console.log(data);
        this.isJoined = false;
      }, error => {
        console.log(error);
      })

    } else {
      let param = {
        userId: this._globalServ.idUser,
        email: this.profile.email
      };

      this._groupServ.joinGroup(this.id, param).subscribe(async data => {
        console.log('joined success: ', data);
        const toast = await this.toastController.create({
          message: 'Joined successfully.',
          duration: 2000
        });
        toast.present();
        this.isJoined = true;
      }, async err => {
        console.log('join group err: ', err);
        const toast = await this.toastController.create({
          message: err.message,
          duration: 2000
        });
        toast.present();
        this.isJoined = false;
      })
    }
  }

  writeComment() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': this.id })
      }
    };
    this.router.navigate(['write-comment'], navigationExtras)
  }

  goToMembers() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': this.id })
      }
    };
    this.router.navigate(['members'], navigationExtras)
  }

  goToCreatePlan() {
    this.storage.set('plan-create-seats', -1);
    this.storage.set('plan-create-createdby', 1);
    this.storage.set('plan-create-groups', -1);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'groupId': this.id })
      }
    };

    this.router.navigate(['plan-create'], navigationExtras);
  }

}
