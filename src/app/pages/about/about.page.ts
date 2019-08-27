import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { GeneralService } from '../../services/general.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  pageTitleName: any = false;

  constructor(
    private _globalServ: GlobalService,
    private _generalServ: GeneralService,
    private iab: InAppBrowser,
    private callNumber: CallNumber,
    public alertController: AlertController,
    ) { }

  ngOnInit() {
  }

  logScrolling(e){
    if(e.detail.scrollTop>50){
      this.pageTitleName = true;
    } else {
      this.pageTitleName = false;
    }
  }

  async callWithNumber() {
    const alert = await this.alertController.create({
      subHeader: '18001010101',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Call',
        handler: () => {
          console.log('Confirm Okay');
          this.callNumber.callNumber("18001010101", true)
          .then(res => console.log('Launched dialer!', res))
          .catch(err => console.log('Error launching dialer', err));
        }
      }
      ]
    });

    await alert.present();
  }

  openWebVistingo() {
    this.iab.create('https://campuslife-events.ie.edu/home', '_system')
  }

  openPrivacyPolicy(){
    this.iab.create('https://campuslife-events.ie.edu/home', '_system')
  }

}
