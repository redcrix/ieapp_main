import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../services/user.service';
import { get } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ClubsService } from '../../services/clubs.service';
import { PlanService } from '../../services/plan.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

/*   example: any = {
    id: 9,
    highlight: true,
    fk_ceu_user_id: 3,
    fk_department_id: 6,
    title: "Clases de Yoga",
    tags: null,
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lor",
    image: "http://178.128.241.57/api/get-image-plan/Dietitian_Cassie_NEW.png",
    plan_date: "2019-09-22T15:00:00.000Z",
    meeting_point: "El Retiro",
    address: "Madrid, Calle de Bravo Murillo, M",
    places: 5,
    private_plan: false,
    status: 1,
    link: "",
    terms: true,
    creation_date: null,
    views: 0,
  }; */

  publicProfile: any = {};
  plans: any = [];
  clubs: any = [];
  groups: any = [
    {}, {}, {}
  ]; 
  
  constructor(
    private router: Router,
    private location: Location,
    private _globalServ: GlobalService,
    private _userServ: UserService
  ) { }
  

  ngOnInit() {
    this.getProfile();
    this.getPlans();
    this.getClubs();
    this.getGroups();
  }

  goBack() {
    this.location.back();
  }

  goToGroups() {
    this.router.navigate(['view-profile-groups'])
  }

  goToPlans() {
    this.router.navigate(['view-profile-plans'])
  }

  getProfile() {
    this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(data => {
      let userLoggedIn = data;

      this._userServ.getPublicProfileForView(this._globalServ.idUser, get(userLoggedIn, 'user.email', '')).subscribe(data => {
        this.publicProfile = get(data, '[0]', {});
        console.log('this.publicProfile: ', this.publicProfile);
      }, err => {
        console.log('err public profile: ', err);
      });
    }, err => {
      console.log('gp: ', err);
    });
  }

  getPlans() {
    this._userServ.getUserPlans(this._globalServ.idUser).subscribe(data => {
      this.plans = data;
      console.log('user plans: ', this.plans);
    }, err => { 
      console.log('err user plans: ', err);
    });
  }

  getClubs() {
    this._userServ.getUserClubs(this._globalServ.idUser).subscribe(data => {
      this.clubs = data;
      this.clubs = this.clubs.slice(0, 3);
    }, err => { 
      console.log('err user clubs: ', err);
    });
  }

  getGroups() {
    this._userServ.getUserGroups(this._globalServ.idUser).subscribe(data => {
      this.groups = get(data, 'group', []);
      this.groups = this.groups.slice(0, 3);
    }, err => { 
      console.log('err user groups: ', err);
    });
  }

}
