(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div [ngClass]=\"{'background-image-ie':_globalServ?.org === 'IE','background-image-ceu':_globalServ?.org === 'CEU'}\">\n    <div class=\"half-page\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n          <ion-row>\n            <ion-col></ion-col>\n            <ion-col size=\"9\" style=\"margin-top: -45px;\">\n              <form [formGroup]=\"myForm\" novalidate>\n                 <!-- <div class=\"alternate-theme-one\">\n                  <ion-item style=\"opacity:1;font-weight: 600;--background: tranparent\">\n                    <ion-label style=\"font-size: 13pt;\" position=\"floating\">{{ 'login.username' | translate }}\n                    </ion-label>\n                    <ion-input autocomplete=\"off\" [formControl]=\"myForm.get('username')\"></ion-input>\n                  </ion-item>\n                  <ion-item style=\"opacity:1;font-weight: 600;--background: tranparent\">\n                    <ion-label style=\"font-size: 13pt;\" position=\"floating\">{{ 'login.password' | translate }}\n                    </ion-label>\n                    <ion-input type=\"password\" autocomplete=\"off\" [formControl]=\"myForm.get('password')\"></ion-input>\n                  </ion-item>\n                  <mat-error *ngIf=\"nonExistentUser == true\">{{ 'login.nonExistentUser' | translate }}</mat-error>\n                </div> \n                 <ion-fab class=\"btn-login-internal\" horizontal=\"end\" slot=\"fixed\">\n                  <ion-fab-button (click)=\"onSubmit(myForm.value)\">\n                    <ion-icon name=\"md-arrow-forward\"></ion-icon>\n                  </ion-fab-button>\n\t\t\t\t</ion-fab>  -->\n\n\t\t\t\t<!-- ************* Chnages by Ashwin ********** -->\n\t\t\t\t  <h4  text-center class=\"loginText\">LOG IN</h4>\n\t\t\t\t <ion-fab class=\"btn-login-new\" horizontal=\"end\" slot=\"fixed\">\n                  <ion-fab-button (click)=\"loginOffice()\" size=\"medium\">\n                    <ion-icon name=\"md-arrow-forward\" ></ion-icon>\n                  </ion-fab-button>\n                </ion-fab>  \n              </form>\n              <!-- <button type=\"button\" (click)=\"onDirectLogin()\">for Browser</button>\n              <div class=\"box-center-full box-login-office\">\n                <div class=\"text-login-office\">{{ 'login.title365' | translate }}</div>\n                <button (click)=\"loginOffice()\" class=\"btn-login-office\">\n                  <img src=\"/assets/img/365-office.jpg\"> office 365\n                </button>\n              </div>   -->\n            </ion-col>\n            <ion-col></ion-col>\n          </ion-row>\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-image-ie {\n  background: url('ie_login.jpg') no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  overflow-y: scroll;\n  position: fixed;\n  width: 100%; }\n\n.background-image-ceu {\n  background: url('ceu_login.jpg') no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  overflow-y: scroll;\n  position: fixed;\n  width: 100%; }\n\n.half-page {\n  min-height: 53%; }\n\n.btn-login-text {\n  color: #009cd7; }\n\nion-button {\n  -webkit-appearance: none; }\n\n.btn-internal {\n  -webkit-appearance: inherit; }\n\n.btn-login-internal {\n  margin-right: -35px;\n  margin-top: 15px; }\n\n.btn-login-new {\n  margin-right: 13%;\n  margin-top: 51px; }\n\n.loginText {\n  margin-top: 71px;\n  display: inline-block;\n  color: #009cd7;\n  margin-left: 21%;\n  font-weight: 600;\n  font-family: sans-serif;\n  font-size: 19px; }\n\n.btn-login-office {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n  width: 200px;\n  height: 34px;\n  margin-top: 3px;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n\n.box-login-office {\n  margin-top: 65px; }\n\n.text-login-office {\n  color: black; }\n\nion-label {\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2REFBaUY7RUFJakYsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDhEQUFrRjtFQUlsRixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQU1iO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0ssaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVyQjtFQUNDLGdCQUFnQjtFQUNiLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUVuQjtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBRXRCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWFnZS1pZSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9pZV9sb2dpbi5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2UtY2V1IHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NldV9sb2dpbi5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cblxuLmhhbGYtcGFnZXtcbiAgbWluLWhlaWdodDogNTMlO1xufVxuXG4uYnRuLWxvZ2luLXRleHR7XG4gIGNvbG9yOiAjMDA5Y2Q3O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uYnRuLWludGVybmFsIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGluaGVyaXQ7XG59XG5cbi5idG4tbG9naW4taW50ZXJuYWx7XG4gIG1hcmdpbi1yaWdodDogLTM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYnRuLWxvZ2luLW5ld3tcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMyU7XG4gICAgIG1hcmdpbi10b3A6IDUxcHg7XG59XG4ubG9naW5UZXh0e1xuXHRtYXJnaW4tdG9wOiA3MXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogIzAwOWNkNztcbiAgICBtYXJnaW4tbGVmdDogMjElO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuLmJ0bi1sb2dpbi1vZmZpY2V7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYm94LWxvZ2luLW9mZmljZXtcbiAgbWFyZ2luLXRvcDogNjVweDtcbn1cblxuLnRleHQtbG9naW4tb2ZmaWNle1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_ms_adal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ms-adal/ngx */ "./node_modules/@ionic-native/ms-adal/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");











var LoginPage = /** @class */ (function () {
    function LoginPage(fb, msAdal, location, storage, _userServ, _globalServ, router, splashScreen, translate) {
        this.msAdal = msAdal;
        this.location = location;
        this.storage = storage;
        this._userServ = _userServ;
        this._globalServ = _globalServ;
        this.router = router;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.myForm = fb.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        console.log('url: ' + window.location.href);
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.splashScreen.hide();
    };
    LoginPage.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.myForm.valid) {
            console.log('valid');
            this._userServ.login({ 'email': value.username, 'password': value.password, 'entity': this._globalServ.org }).subscribe(function (data) {
                _this.getDataInternalLogin = data;
                console.log(_this.getDataInternalLogin);
                _this.storage.set('token', _this.getDataInternalLogin.token);
                _this.storage.set('idUser', _this.getDataInternalLogin.user.id);
                _this._globalServ.idUser = _this.getDataInternalLogin.user.id;
                //get language
                _this._userServ.getSettings(_this._globalServ.idUser).subscribe(function (dataLan) {
                    _this.getDataLanguage = dataLan;
                    _this._globalServ.language = _this.getDataLanguage.user_settings[0].value;
                    _this.storage.set('language', _this._globalServ.language);
                    _this.translate.setDefaultLang(_this._globalServ.language);
                }, function (error) {
                    console.log(error);
                });
                //redirect
                if (_this.getDataInternalLogin.user.login_times == 1) {
                    var navigationExtras = {
                        queryParams: {
                            data: JSON.stringify({ 'profile': true /*'userName': this.getDataInternalLogin.user.email, 'lastName': this.getDataInternalLogin.user.last_name, 'firstName': this.getDataInternalLogin.user.first_name, 'firstTime': true*/ })
                        }, replaceUrl: true
                    };
                    _this.router.navigate(['profile'], navigationExtras);
                }
                else {
                    var navigationExtras = {
                        queryParams: {
                            data: JSON.stringify({})
                        }, replaceUrl: true
                    };
                    _this.router.navigate(['tabs/plan-list'], navigationExtras);
                }
            }, function (error) {
                console.log(error);
                if (error.error.message = "El usuario no existe.") {
                    _this.nonExistentUser = true;
                }
            });
        }
    };
    LoginPage.prototype.loginOffice = function () {
        var _this = this;
        //******* ceu production *******
        //f9eb8c3b-e8d4-4e8c-9351-195297be3601
        //msalf9eb8c3b-e8d4-4e8c-9351-195297be3601://auth
        //******* ie production *******
        //df76dcce-035b-46c7-a680-2cb89d36b6d1
        //msaldf76dcce-035b-46c7-a680-2cb89d36b6d1://auth
        var clientId;
        var redirectUrl;
        if (this._globalServ.org == 'CEU') {
            clientId = 'f9eb8c3b-e8d4-4e8c-9351-195297be3601';
            redirectUrl = 'msalf9eb8c3b-e8d4-4e8c-9351-195297be3601://auth';
        }
        if (this._globalServ.org == 'IE') {
            clientId = 'df76dcce-035b-46c7-a680-2cb89d36b6d1';
            // redirectUrl='msalf9eb8c3b-e8d4-4e8c-9351-195297be3601://auth';
            redirectUrl = 'msaldf76dcce-035b-46c7-a680-2cb89d36b6d1://auth';
        }
        var authContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');
        authContext.acquireTokenAsync('https://graph.windows.net', clientId, redirectUrl, null, null)
            .then(function (authResponse) {
            //365 all data
            console.log(authResponse);
            //login internal system.
            _this._userServ.login({ 'email': authResponse.userInfo.uniqueId, 'entity': _this._globalServ.org }).subscribe(function (data) {
                _this.getDataInternalLogin = data;
                console.log(_this.getDataInternalLogin);
                _this.storage.set('token', _this.getDataInternalLogin.token);
                _this.storage.set('idUser', _this.getDataInternalLogin.user.id);
                _this._globalServ.idUser = _this.getDataInternalLogin.user.id;
                //get language
                _this._userServ.getSettings(_this._globalServ.idUser).subscribe(function (dataLan) {
                    _this.getDataLanguage = dataLan;
                    _this._globalServ.language = _this.getDataLanguage.user_settings[0].value;
                    _this.storage.set('language', _this._globalServ.language);
                    _this.translate.setDefaultLang(_this._globalServ.language);
                }, function (error) {
                    console.log(error);
                });
                //redirect
                if (_this.getDataInternalLogin.user.login_times == 1) {
                    var navigationExtras = {
                        queryParams: {
                            data: JSON.stringify({ 'profile': true /*'userName': this.getDataInternalLogin.user.email, 'lastName': this.getDataInternalLogin.user.last_name, 'firstName': this.getDataInternalLogin.user.first_name, 'firstTime': true*/ })
                        }, replaceUrl: true
                    };
                    _this.router.navigate(['profile'], navigationExtras);
                }
                else {
                    var navigationExtras = {
                        queryParams: {
                            data: JSON.stringify({})
                        }, replaceUrl: true
                    };
                    _this.router.navigate(['tabs/plan-list'], navigationExtras);
                }
            }, function (error) {
                console.log(error);
                if (error.error.message = "El usuario no existe.") {
                    _this._userServ.register({ 'email': authResponse.userInfo.uniqueId, 'entity': _this._globalServ.org }).subscribe(function (data) {
                        _this.getDataInternalRegister = data;
                        _this.storage.set('token', _this.getDataInternalRegister.token);
                        _this.storage.set('idUser', _this.getDataInternalRegister.user.id);
                        _this._globalServ.idUser = _this.getDataInternalRegister.user.id;
                        var navigationExtras = {
                            queryParams: {
                                data: JSON.stringify({ 'profile': true, 'userName': _this.getDataInternalRegister.user.email })
                            }, replaceUrl: true
                        };
                        _this.router.navigate(['profile'], navigationExtras);
                    });
                }
            });
        }, function (error) { console.log(error); })
            .catch(function (e) {
            return console.log('Authentication failed', e);
        });
    };
    LoginPage.prototype.onDirectLogin = function () {
        var _this = this;
        console.log(this.getDataInternalLogin);
        this.storage.set('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQsIm5hbWUiOm51bGwsImVtYWlsIjoidmlzdGluZ29hbHVtbmlAYWx1bW5pLmllLmVkdSIsInJvbGUiOiJFIiwiaWF0IjoxNTY2NTM4OTAxLCJleHAiOjE1NjkyMTczMDF9.V704aTCUjTqYsAgiA_Z1pAQinOrRoHh9AFr259911c0');
        this.storage.set('idUser', '44');
        this._globalServ.idUser = '44';
        //get language
        this._userServ.getSettings(this._globalServ.idUser).subscribe(function (dataLan) {
            _this.getDataLanguage = dataLan;
            _this._globalServ.language = _this.getDataLanguage.user_settings[0].value;
            _this.storage.set('language', _this._globalServ.language);
            _this.translate.setDefaultLang(_this._globalServ.language);
        }, function (error) {
            console.log(error);
        });
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({})
            }, replaceUrl: true
        };
        this.router.navigate(['tabs/plan-list'], navigationExtras);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_ms_adal_ngx__WEBPACK_IMPORTED_MODULE_3__["MSAdal"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map