import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../services/user.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userName: any;
  firstName: any;
  lastName: any;
  city: any;
  faculty: any;
  from: any;
  birthday: any;
  myForm: FormGroup;
  getDataProfile: any;
  profileBool: Boolean;
  settingBool: Boolean;
  image: any;
  url: any = environment.apiUrl;
  pageTitleName: any = false;

  constructor(
    fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private _globalServ: GlobalService,
    private _userServ: UserService,
    private storage: Storage,
    public modalController: ModalController,
    public alertController: AlertController,
    private translate: TranslateService,
    ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.profileBool = getParams.profile;
      this.settingBool = getParams.setting;
    }
    this.getDataProfileFunc();
    this.myForm = fb.group({
      'userName': ['', Validators.compose([])],
      'firstName': ['', Validators.compose([])],
      'lastName': ['', Validators.compose([])],
      'city': ['', Validators.compose([])],
      'faculty': ['', Validators.compose([])],
      'from': ['', Validators.compose([])],
      'birthday': ['', Validators.compose([])],
      'myForm': ['', Validators.compose([])],
    });
  }

  ngOnInit() {
  }

  logScrolling(e){
    if(e.detail.scrollTop>50){
      this.pageTitleName = true;
    } else {
      this.pageTitleName = false;
    }
  }

  save(value: any) {
    if (this.birthday == '') { this.birthday = null; }
    this._userServ.saveProfile({
      'id': this._globalServ.idUser,
      'entity': this._globalServ.org,
      'firstname': value.firstName,
      'lastname': value.lastName,
      'city': value.city,
      'faculty': value.faculty,
      'from': value.from,
      'birthday': value.birthday,
    }).subscribe(data => {
      data;
      this._userServ.saveSettings({ 'id': this._globalServ.idUser, 'settings': 'language', 'value': this._globalServ.language })
      .subscribe(dataPref => {
        dataPref;
        this.storage.set('language', this._globalServ.language);
      }, error => { console.log(error); })
      if (this.profileBool == true) {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify({ 'showText': true, 'showTitle': true,'save':true })
          }
        };
        this.router.navigate(['preferences'], navigationExtras)
      }
      if (this.settingBool == true) {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify({})
          }, replaceUrl: true
        };
        this.router.navigate(['/tabs/more'], navigationExtras)
      }
    }, error => { console.log(error); });
  }

  goToUpload() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'profile': true })
      }
    };
    this.router.navigate(['image-cropper'], navigationExtras)
  }

  async openLanguageModal() {
    let titleLabel;
    let englisLabel;
    let spanishLabel;
    let cancelLabel;
    let okLabel;
    let englishChecked;
    let spanishChecked;
    if (this._globalServ.language == 'en') {
      titleLabel = 'Language';
      englisLabel = 'English';
      spanishLabel = 'Espanish';
      cancelLabel = 'Cancel';
      okLabel = 'Ok';
      englishChecked = true;
      spanishChecked = false;
    }
    if (this._globalServ.language == 'es') {
      titleLabel = 'Idioma';
      englisLabel = 'Ingles';
      spanishLabel = 'Español';
      cancelLabel = 'Cancelar';
      okLabel = 'Confirmar';
      englishChecked = false;
      spanishChecked = true;
    }
    const alert = await this.alertController.create({
      header: titleLabel,
      inputs: [
      {
        name: 'english',
        type: 'radio',
        label: englisLabel,
        value: 'en',
        checked: englishChecked
      },
      {
        name: 'spanish',
        type: 'radio',
        label: spanishLabel,
        value: 'es',
        checked: spanishChecked
      }
      ],
      buttons: [
      {
        text: cancelLabel,
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: okLabel,
        handler: (value: any) => {
          console.log('Confirm Ok', value);
          this._globalServ.language = value;
          this.translate.setDefaultLang(value);
        }
      }
      ]
    });

    await alert.present();
  }

  getDataProfileFunc() {
    this._userServ.getProfile(this._globalServ.idUser, { 'entity': this._globalServ.org })
    .subscribe(dataProf => {
      this.getDataProfile = dataProf;
      this.firstName = this.getDataProfile.user.first_name;
      this.lastName = this.getDataProfile.user.last_name;
      this.userName = this.getDataProfile.user.email;
      this.city = this.getDataProfile.user.city;
      this.faculty = this.getDataProfile.user.faculty;
      this.from = this.getDataProfile.user.from;
      this.birthday = this.getDataProfile.user.birthday;
      this.image = this.getDataProfile.user.image;
    }, error => { console.log(error); })
  }

  goToJoined() {
    this.router.navigate(['joined'], {});
  }

  goToPreferences() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'fromSetting': true,'save':true })
      }
    };
    this.router.navigate(['preferences'], navigationExtras)
  }

  goToPassword() {
    this.router.navigate(['change-password'], {});
  }


}
