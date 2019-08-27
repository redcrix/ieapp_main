import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';
import { Device } from '@ionic-native/device/ngx';
import { environment } from '../../../environments/environment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  getDataProfile: any;
  firstName: any;
  lastName: any;
  url: any = environment.apiUrl;
  image: any;

  constructor(
    private router: Router,
    private _userServ: UserService,
    private _globalServ: GlobalService,
    private device: Device,
    private storage: Storage
  ) {
    this.getDataProfileFunc();
  }

  ngOnInit() {
  }

  goToSetting() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'setting': true })
      }
    };
    this.router.navigate(['tabs/profile'], navigationExtras)
  }

  getDataProfileFunc() {
    this._userServ.getProfile(this._globalServ.idUser, { 'entity': this._globalServ.org })
      .subscribe(dataProf => {
        this.getDataProfile = dataProf;
        this.firstName = this.getDataProfile.user.first_name;
        this.lastName = this.getDataProfile.user.last_name;
        this.image = this.getDataProfile.user.image;
      }, error => { console.log(error); })
  }



  goToViewProfile() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'idUser': this._globalServ.idUser })
      }
    };
    this.router.navigate(['/view-profile'], navigationExtras);
  }

  goToAbout(){
    this.router.navigate(['tabs/about'], {});
  }

  goToClubs(){
    this.router.navigate(['clubs'], {});
  }

  goToGroups(){
    this.router.navigate(['groups'], {});
  }

  logout(){
    this.storage.clear();
    this._globalServ.idUser=null;
    this.router.navigate(['login'], { replaceUrl: true });
  }

}
