import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';
import { Device } from '@ionic-native/device/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService,
    private Device: Device,
    private AppAvailability: AppAvailability,
    private iab: InAppBrowser,
    private youtube: YoutubeVideoPlayer,
  ) { }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.Device.platform === 'iOS') {
      app = iosSchemaName;
    } else if (this.Device.platform === 'Android') {
      app = androidPackageName;
    } else {
      let browser = this.iab.create(httpUrl + username, '_system');
      return;
    }

    this.AppAvailability.check(app).then(
      () => { // success callback
        let browser = this.iab.create(appUrl + username, '_system');
      },
      () => { // error callback
        let browser = this.iab.create(httpUrl + username, '_system')/*new InAppBrowser(httpUrl + username, '_system')*/;
      }
    );
  }

  openInstagram(username: string) {
    this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
  }

  openTwitter(username: string) {
    this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  }

  openFacebook(username: string) {
    this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
  }

  openLinkedin(id: string) {
    //this.launchExternalApp('linkedin://', 'com.linkedin.android', 'linkedin://profile?id=', 'https://www.linkedin.com/in/', id);
    this.iab.create('https://www.linkedin.com/in/' + id, '_system')
  }

  openYoutube(vidoId: string) {
    this.youtube.openVideo(vidoId);
  }

}
