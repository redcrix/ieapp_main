import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';
import { get } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.page.html',
  styleUrls: ['./write-comment.page.scss'],
})
export class WriteCommentPage implements OnInit {

  Participations: any;
  url: any = environment.apiUrl;
  commentData: any = '';

  groupId: any = '';
  comments: any = [];
  profile: any = {};

  constructor(
    private _userServ: UserService,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController
  ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.groupId = getParams.id;
      console.log('groupId: ', this.groupId);

      this.getProfile();
    }

    // this.keyboard.disableScroll(true);
  }

  ngOnInit() {
  }

  getProfile() {
    this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(data => {
      this.profile = get(data, '[0]', {});
      console.log('this.profile: ', this.profile);

      this.getGroupComments();
    }, err => {
      console.log('err public profile: ', err);
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
    this._groupServ.getGroupComments(this.groupId).subscribe(data => {
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

  addComment() {
    let param = {
      userId: this._globalServ.idUser,
      email: this.profile.email,
      comment: this.commentData
    };

    console.log('param: ', param);

    this._groupServ.addComment(this.groupId, param).subscribe(async data => {
      console.log('add comment sucess : ', data);
      const toast = await this.toastController.create({
        message: 'Added comment successfully.',
        duration: 2000
      });
      toast.present();
      
      this.commentData = '';
      this.getGroupComments();
    }, async err => {
      console.log('add comment err : ', err);
      const toast = await this.toastController.create({
        message: err.message,
        duration: 2000
      });
      toast.present();
      this.commentData = '';
    });
  }

}
