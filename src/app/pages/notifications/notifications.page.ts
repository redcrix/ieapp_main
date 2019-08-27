import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
import { get } from 'lodash';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  profile: any = {};
  notifications: any = [];

  constructor(
    private _globalServ: GlobalService,
    private _notificationServ: NotificationService,
    private _userServ: UserService,
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(data => {
      this.profile = get(data, '[0]', {});
      this.getNotifications();
      console.log('this.profile: ', this.profile);
    }, err => {
      console.log('profile err:', err);
    });
  }

  getDuration(createdDateStr) {
    let now = new Date().getTime();
    let created = new Date(createdDateStr).getTime();

    if (now > created) {
      let days = Math.round((now-created) / 3600 / 1000 / 24);
      let origDays = (now-created) / 3600 / 1000 / 24;
      if (days === 0) {
        return Math.round((now-created) / 3600 / 1000) + ' hours ago';
      } else if(days > 0 && origDays <= 6 && days <= 6) {
        if (days === 1) {
          return 'yesterday';
        } else {
          let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          return days[new Date(createdDateStr).getDay()];
        }
      } else {
        return Math.round(((now-created) / 3600 / 1000 / 24 / 7)) + ' week ago';
      }
    } else {
      return '';
    }
  }

  readNotification(notification) {
    let param = {
      userId: this._globalServ.idUser,
      email: this.profile.email
    };
    this._notificationServ.readNotifications(notification.id, param).subscribe(data => {
      console.log('read success: ', data);
      this.getNotifications();
    }, err => {
      console.log('read err: ', err);
    })
  }

  getNotifications() {
    this._notificationServ.getNotifications(this.profile.email).subscribe(data => {
      console.log('notification data: ', data);
      this.notifications = get(data, 'notifications', []);
    }, err => {
      console.log('notification err: ', err);
    });
  }

}
