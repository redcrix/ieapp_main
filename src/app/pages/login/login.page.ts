import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal/ngx';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';
import { Router, NavigationExtras } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;
  getDataInternalLogin: any;
  getDataInternalRegister: any;
  nonExistentUser: boolean;
  getDataLanguage: any;

  constructor(
    fb: FormBuilder,
    private msAdal: MSAdal,
    private location: Location,
    private storage: Storage,
    private _userServ: UserService,
    private _globalServ: GlobalService,
    private router: Router,
    private splashScreen: SplashScreen,
    private translate: TranslateService,
    ) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    console.log('url: ' + window.location.href);

  }

  ionViewDidEnter() {
    this.splashScreen.hide();
  }

  onSubmit(value: any) {
    if (this.myForm.valid) {
      console.log('valid');
      this._userServ.login({ 'email': value.username, 'password': value.password, 'entity': this._globalServ.org }).subscribe(data => {
        this.getDataInternalLogin = data;
        console.log(this.getDataInternalLogin);
        this.storage.set('token', this.getDataInternalLogin.token);
        this.storage.set('idUser', this.getDataInternalLogin.user.id);
        this._globalServ.idUser = this.getDataInternalLogin.user.id;
        //get language
        this._userServ.getSettings(this._globalServ.idUser).subscribe(dataLan => {
          this.getDataLanguage = dataLan;
          this._globalServ.language = this.getDataLanguage.user_settings[0].value;
          this.storage.set('language', this._globalServ.language);
          this.translate.setDefaultLang(this._globalServ.language);
        }, error => {
          console.log(error);
        })
        //redirect
        if (this.getDataInternalLogin.user.login_times == 1) {
          let navigationExtras: NavigationExtras = {
            queryParams: {
            data: JSON.stringify({ 'profile': true /*'userName': this.getDataInternalLogin.user.email, 'lastName': this.getDataInternalLogin.user.last_name, 'firstName': this.getDataInternalLogin.user.first_name, 'firstTime': true*/ })
          }, replaceUrl: true
        };
        this.router.navigate(['profile'], navigationExtras)
      } else {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify({})
          }, replaceUrl: true
        };
        this.router.navigate(['tabs/plan-list'], navigationExtras)
      }
    }, error => {
      console.log(error);
      if (error.error.message = "El usuario no existe.") {
        this.nonExistentUser = true;
      }
    })
    }
  }

  loginOffice() {
    //******* ceu production *******
    //f9eb8c3b-e8d4-4e8c-9351-195297be3601
    //msalf9eb8c3b-e8d4-4e8c-9351-195297be3601://auth
    //******* ie production *******
    //df76dcce-035b-46c7-a680-2cb89d36b6d1
    //msaldf76dcce-035b-46c7-a680-2cb89d36b6d1://auth
    let clientId;
    let redirectUrl;
    if(this._globalServ.org == 'CEU'){
      clientId='f9eb8c3b-e8d4-4e8c-9351-195297be3601';
      redirectUrl='msalf9eb8c3b-e8d4-4e8c-9351-195297be3601://auth';
    }
    if(this._globalServ.org == 'IE'){
      clientId='df76dcce-035b-46c7-a680-2cb89d36b6d1';
      // redirectUrl='msalf9eb8c3b-e8d4-4e8c-9351-195297be3601://auth';
      redirectUrl='msaldf76dcce-035b-46c7-a680-2cb89d36b6d1://auth';
    }
    let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');

    authContext.acquireTokenAsync('https://graph.windows.net', clientId, redirectUrl, null, null)
    .then((authResponse: AuthenticationResult) => {
      //365 all data
      console.log(authResponse);
      //login internal system.
      this._userServ.login({ 'email': authResponse.userInfo.uniqueId, 'entity': this._globalServ.org }).subscribe(data => {
        this.getDataInternalLogin = data;
        console.log(this.getDataInternalLogin);
        this.storage.set('token', this.getDataInternalLogin.token);
        this.storage.set('idUser', this.getDataInternalLogin.user.id);
        this._globalServ.idUser = this.getDataInternalLogin.user.id;
        //get language
        this._userServ.getSettings(this._globalServ.idUser).subscribe(dataLan => {
          this.getDataLanguage = dataLan;
          this._globalServ.language = this.getDataLanguage.user_settings[0].value;
          this.storage.set('language', this._globalServ.language);
          this.translate.setDefaultLang(this._globalServ.language);
        }, error => {
          console.log(error);
        })
        //redirect
        if (this.getDataInternalLogin.user.login_times == 1) {
          let navigationExtras: NavigationExtras = {
            queryParams: {
            data: JSON.stringify({ 'profile': true/*'userName': this.getDataInternalLogin.user.email, 'lastName': this.getDataInternalLogin.user.last_name, 'firstName': this.getDataInternalLogin.user.first_name, 'firstTime': true*/ })
          }, replaceUrl: true
        };
        this.router.navigate(['profile'], navigationExtras)
      } else {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify({})
          }, replaceUrl: true
        };
        this.router.navigate(['tabs/plan-list'], navigationExtras)
      }
    }, error => {
      console.log(error);
      if (error.error.message = "El usuario no existe.") {
        this._userServ.register({ 'email': authResponse.userInfo.uniqueId, 'entity': this._globalServ.org}).subscribe(data => {
          this.getDataInternalRegister = data;
          this.storage.set('token', this.getDataInternalRegister.token);
          this.storage.set('idUser', this.getDataInternalRegister.user.id);
          this._globalServ.idUser = this.getDataInternalRegister.user.id;
          let navigationExtras: NavigationExtras = {
            queryParams: {
              data: JSON.stringify({ 'profile': true, 'userName': this.getDataInternalRegister.user.email })
            }, replaceUrl: true
          };
          this.router.navigate(['profile'], navigationExtras)
        });
      }
    })
    }, error => { console.log(error) })
    .catch((e: any) =>
      console.log('Authentication failed', e)
      );
  }



  onDirectLogin(){
    console.log(this.getDataInternalLogin);
    this.storage.set('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQsIm5hbWUiOm51bGwsImVtYWlsIjoidmlzdGluZ29hbHVtbmlAYWx1bW5pLmllLmVkdSIsInJvbGUiOiJFIiwiaWF0IjoxNTY2NTM4OTAxLCJleHAiOjE1NjkyMTczMDF9.V704aTCUjTqYsAgiA_Z1pAQinOrRoHh9AFr259911c0');
    this.storage.set('idUser', '44');
    this._globalServ.idUser = '44';
    //get language
    this._userServ.getSettings(this._globalServ.idUser).subscribe(dataLan => {
      this.getDataLanguage = dataLan;
      this._globalServ.language = this.getDataLanguage.user_settings[0].value;
      this.storage.set('language', this._globalServ.language);
      this.translate.setDefaultLang(this._globalServ.language);
    }, error => {
      console.log(error);
    })

    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({})
      }, replaceUrl: true
    };
    this.router.navigate(['tabs/plan-list'], navigationExtras)
    
  }

}
