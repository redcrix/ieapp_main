import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { GlobalService } from './services/global.service';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private location: Location,
    private router: Router,
    private storage: Storage,
    private _globalServ: GlobalService,
    private globalization: Globalization,
    private translate: TranslateService,
    private device: Device,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      document.addEventListener('backbutton', (evt: any) => {
        if (this._globalServ.idUser != null) {
          this.location.back();
        }
      });

      this.getDivice();
      this.storage.get('language').then((val) => {
        console.log('Language', val)
        if (val == null) {
          this.getLanguage();
        } else {
          this.translate.setDefaultLang(val);
          this._globalServ.language = val;
        }
      });
      this.storage.get('token').then((val) => {
        if (val != null) {
          this.storage.get('idUser').then((val) => {
            this._globalServ.idUser = val;
            this.router.navigate(['tabs/plan-list'], {})
          });
        } else {
          this.router.navigate(['login'], {})
        }
      });
    });
  }

  getDivice() {
    if (this.platform.is('ios')) {
      this._globalServ.iosDivice = true;
    }
    if (this.platform.is('android')) {
      this._globalServ.androidDivice = true;
    }
    console.log('model -->', this.device.model);
  }

  getLanguage() {
    this.globalization.getPreferredLanguage()
      .then(res => {
        this._globalServ.language = res.value.substring(0, 2);
        console.log('language:', this._globalServ.language);
        if (this._globalServ.language == 'en' || this._globalServ.language == 'es') {
          this.translate.setDefaultLang(this._globalServ.language);
        } else {
          this.translate.setDefaultLang('en');
        }
      }).catch(error => {
        this.translate.setDefaultLang('en');
        this._globalServ.language = 'en';
        console.log(error)
      });
  }

}
