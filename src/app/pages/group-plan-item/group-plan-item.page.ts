import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { GroupService } from '../../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { get, find } from 'lodash';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-group-plan-item',
  templateUrl: './group-plan-item.page.html',
  styleUrls: ['./group-plan-item.page.scss'],
})
export class GroupPlanItemPage implements OnInit {

  id: any;
  email: any = '';
  url: any = environment.apiUrl;
  groupPlanItem: any = {};
  isValidClubImage: any = true;
  going: any = [];
  plans: any = [];

  innerWidth: any;
  math = Math;

  isJoined: any = false;
  profile: any = {};
  latitudeInit: any;
  longitudeInit: any;
  zoom: any = 14;
  map: any;
  mapOptions: google.maps.MapOptions;
  @ViewChild("map") mapElement;


  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
    private _userServ: UserService
    ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
      // this.email = getParams.email;
      console.log('id: ', this.id);
      console.log('email: ', this.email);
      this.getGroupPlanItem();
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.getProfile();
  }

  getProfile() {
    this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(data => {
      this.profile = get(data, '[0]', {});
      console.log('this.profile: ', this.profile);
      this.email = this.profile.email;
    }, err => {
      console.log('err public profile: ', err);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ionViewDidEnter() {

    /* this._clubServ.getGroupPlanItem(this.id).subscribe(data => {
      console.log('data:  ', data);
      this.getItem = data;
      this.clubMembers = data['Ceu_Club_Members'] ? data['Ceu_Club_Members'] : [];
      this.clubMembers = this.clubMembers.map(o => {
        if (o.Ceu_User === null) {
          return {
            ...o,
            Ceu_User: {image: '../../../assets/img/empty_avatar.png'}
          };
        }
        return o;
      })

      this._clubServ.getPlansByClub(this.id).subscribe(plans => {
        this.plans = get(plans, 'plans', []);
        this.plans = this.plans.map(o => {
          return {
            ...o,
            image: `${this.url}/get-image-plan/` + o.image
          }
        })
        console.log('this.plans : ' ,  this.plans);
      }, errPlan => {
        console.log('errPlan: ', errPlan);
      })
    }, err => {
      console.log('err: ', err);
    }); */
  }

  getGroupPlanItem() {
    this._groupServ.getGroupPlanItem(this.id, this.email).subscribe(data =>{
      console.log('group plan item: ', data);
      this.groupPlanItem = get(data, '[0]', {});
      this.going = get(this.groupPlanItem, 'participants', []);
      this.checkJoinedStatus();
      if (this.groupPlanItem.latitude !== null && this.groupPlanItem.longitude !== null) {
        this.mapFunc(Number(this.groupPlanItem.latitude), Number(this.groupPlanItem.longitude));
      }
    }, err => {
      console.log('group plan item err: ', err);
    })
  }

  checkJoinedStatus() {
    if (find(this.groupPlanItem, ['fk_user_id', this._globalServ.idUser])) {
      this.isJoined = true;
    } else {
      this.isJoined = false;
    }
  }

  goBack() {
    this.location.back();
  }

  mapFunc(lat: number, long: number) {
    //set map
    let coords = new google.maps.LatLng(lat, long);
    this.mapOptions = {
      center: coords,
      zoom: this.zoom,
      maxZoom: 17,
      minZoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      styles: [
      {
        "featureType": "landscape",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      }
      ]
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    var marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: { lat: lat, lng: long }
    });
  }

  updateClubUrl() {
    this.isValidClubImage = false;
  }

  joinClub(){
    if (!this.isJoined) {
      this._groupServ.joinGroupPlan(this.id, {'userId': this._globalServ.idUser, 'email': this.email}).subscribe(async data => {
        console.log(data);
        const toast = await this.toastController.create({
          message: 'Joined successfully.',
          duration: 2000
        });
        toast.present();
        this.isJoined = true;
      }, async error => {
        console.log(error);
        const toast = await this.toastController.create({
          message: error.message,
          duration: 2000
        });
        toast.present();
      });
    } else {
      this._groupServ.leaveGroupPlan(this._globalServ.idUser, null).subscribe(data => {
        console.log(data);
        this.isJoined = false;
      }, error => {
        console.log(error);
      })
    }
  }

  /* 

  joinClub(){
    if (!this.isJoined) {
      let param = {
        clubId: this.id,
        userName: this.getItem.Ceu_User.first_name + ' ' + this.getItem.Ceu_User.last_name,
        userEmail: this.getItem.Ceu_User.email
      };
  
      this._clubServ.joinClub(param).subscribe(async data => {
        console.log('joined success: ', data);
        const toast = await this.toastController.create({
          message: 'Joined successfully.',
          duration: 2000
        });
        toast.present();
      }, async err => {
        console.log('join club err: ', err);
        const toast = await this.toastController.create({
          message: err.message,
          duration: 2000
        });
        toast.present();
      })
    }
  } */

}
