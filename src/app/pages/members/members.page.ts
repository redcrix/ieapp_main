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

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  groupId: any;
  url: any = environment.apiUrl;
  isValidGroupImage: any = true;
  groupMembers: any = [];

  innerWidth: any;
  math = Math;

  profile: any = {};
  selectedPeople: any = [];
  keyword: any = '';

  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private _userServ: UserService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController
  ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.groupId = getParams.id;
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
      this.getAllPeople();
      console.log('this.profile: ', this.profile);
    }, err => {
      console.log('profile err:', err);
    });
  }

  getAllPeople() {
    this._groupServ.getAllPeople().subscribe(data => {
      console.log('get all peopel success: ', data);
      this.groupMembers = data;
      this.getExistingMembers();
    }, err => {
      console.log('get all people error : ', err);
    });
  }

  getExistingMembers() {
    this._groupServ.getExistingGroupMembers(this.groupId).subscribe(data => {
      console.log('get group members: ', data);
      let existingMembers = get(data, 'groupMembers', []);
      this.groupMembers = this.groupMembers.filter(o => {
        if (find(existingMembers, ['id', o.id])) {
          return false;
        }
        return true;
      });
    }, err => {
      console.log('get grup members err: ', err);
    });
  }

  memberKeyChange(event) {
    console.log('key changed: ', event);
    this.keyword = event;
  }

  selectPeople(member) {
    if (!this.selectedPeople.includes(member.id)) {
      this.selectedPeople.push(member.id);
    } else {
      this.selectedPeople = this.selectedPeople.filter(o => o !== member.id);
    }
  }

  isSelected(member) {
    return this.selectedPeople.includes(member.id)
  }

  async inviteMemberEvent(event) {
    if (this.selectedPeople) {
      let param = {
        userId: this._globalServ.idUser,
        email: this.profile.email,
        group_member_ids: this.selectedPeople.toString()
      };

      this._groupServ.joinGroup(this.groupId, param).subscribe(async data => {
        console.log('join group success: ', data);
    
        const toast = await this.toastController.create({
          message: 'Invited user successfully.',
          duration: 2000
        });
        toast.present();
    
        this.getAllPeople();
      }, async err => { 
        console.log('join group err: ', err);
    
        const toast = await this.toastController.create({
          message: err.message,
          duration: 2000
        });
        toast.present();
      });
    } else {
      const toast = await this.toastController.create({
        message: 'Please select one people at least for the invitation',
        duration: 2000
      });
      toast.present();
    }
  }

}
