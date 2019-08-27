import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { ClubService } from '../../services/club.service';
import { ClubsService } from '../../services/clubs.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { get } from 'lodash';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.page.html',
  styleUrls: ['./club-detail.page.scss'],
})
export class ClubDetailPage implements OnInit {

  id: any;
  url: any = environment.apiUrl;
  getItem: any = {};
  isValidClubImage: any = true;
  clubMembers: any = [];
  plans: any = [];

  innerWidth: any;
  math = Math;

  isJoined: any = false;


  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _clubServ: ClubService,
    private _clubsServ: ClubsService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController
  ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
      console.log('id: ', this.id);
      
      this.checkJoinedStatus();
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    //dummy data
    for (let i = 0; i < 40; i++) {
      this.clubMembers.push({});
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ionViewDidEnter() {
    this._clubServ.getClubDetail(this.id).subscribe(data => {
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
    });
  }

  checkJoinedStatus() {
    this._clubsServ.getJoined(this._globalServ.idUser).subscribe(data => {
      console.log('joined clubs: ', data);
      let joinedClubs = [];
      joinedClubs = JSON.parse(JSON.stringify(data));
      
      joinedClubs.map(o => {
        if (o.id === this.id) {
          this.isJoined = true;
        }
      });
    });
  }

  goBack() {
    this.location.back();
  }

  updateClubUrl() {
    this.isValidClubImage = false;
  }

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
  }

}
