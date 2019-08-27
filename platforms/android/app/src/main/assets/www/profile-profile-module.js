(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrolling($event)\">\n<toolbar *ngIf=\"profileBool == true\" [back]=\"true\" [title]=\"pageTitleName ? ('profile.profile' | translate) : ''\"></toolbar>\n<toolbar *ngIf=\"settingBool == true\" [back]=\"true\" [title]=\"pageTitleName ? ('profile.setting' | translate) : ''\"></toolbar>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1 *ngIf=\"profileBool == true\" class=\"title\">{{ 'profile.profile' | translate }}</h1>\n      <h1 *ngIf=\"settingBool == true\" class=\"title\">{{ 'profile.setting' | translate }}</h1>\n      <hr class=\"hr-profile\" *ngIf=\"settingBool == true\">\n      <form class=\"form-field\">\n        <div class=\"box-center-full\">\n          <span *ngIf=\"_globalServ?.profileImagePath == null && image == null\" (click)=\"goToUpload()\"\n          class=\"circle\"><span class=\"icon fas fa-camera\"></span></span>\n          <img *ngIf=\"_globalServ?.profileImagePath != null\" (click)=\"goToUpload()\" class=\"profile-img\"\n          [src]=\"_globalServ?.profileImagePath\">\n          <img *ngIf=\"_globalServ?.profileImagePath == null && image != null\" (click)=\"goToUpload()\"\n          class=\"profile-img\" src=\"{{url}}/{{image}}\">\n        </div>\n\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">{{ 'profile.name' | translate }}</ion-label>\n          <ion-input [(ngModel)]=\"firstName\" [formControl]=\"myForm.get('firstName')\" class=\"input-one\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">{{ 'profile.lastName' | translate }}</ion-label>\n          <ion-input [value]=\"lastName\" [formControl]=\"myForm.get('lastName')\" class=\"input-one\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">{{ 'profile.city' | translate }}</ion-label>\n          <ion-input [value]=\"city\" [formControl]=\"myForm.get('city')\" class=\"input-one\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">{{ 'profile.faculty' | translate }}</ion-label>\n          <ion-input [value]=\"faculty\" [formControl]=\"myForm.get('faculty')\" class=\"input-one\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">{{ 'profile.from' | translate }}</ion-label>\n          <ion-input [value]=\"from\" [formControl]=\"myForm.get('from')\" class=\"input-one\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">{{ 'profile.birthday' | translate }}</ion-label>\n          <ion-datetime [formControl]=\"myForm.get('birthday')\" [value]=\"birthday\" display-format=\"DD/MM/YYYY\"\n          class=\"\"></ion-datetime>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"fixed\">{{ 'profile.emailAddress' | translate }}</ion-label>\n          <ion-input readonly [value]=\"userName\" [formControl]=\"myForm.get('userName')\" class=\"input-one\">\n          </ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"openLanguageModal()\">\n          <ion-label position=\"fixed\">{{ 'profile.language' | translate }}</ion-label>\n          <span slot=\"end\" class=\"secondary-text\">\n            <span *ngIf=\"_globalServ.language == 'en'\">{{ 'profile.english' | translate }}</span>\n            <span *ngIf=\"_globalServ.language == 'es'\">{{ 'profile.spanish' | translate }}</span>\n          </span>\n        </ion-item>\n        <hr class=\"hr-profile\" *ngIf=\"settingBool == true\">\n        <ion-item lines=\"none\">\n          <label position=\"fixed\">{{ 'profile.instagram' | translate }}</label>\n          <!-- <ion-chip slot=\"end\" class=\"chip-active chip-inst\" color=\"primary\">\n            <ion-label>{{ 'profile.connect' | translate }}</ion-label>\n          </ion-chip> -->\n        </ion-item>\n\n        <ion-item (click)=\"goToJoined()\" *ngIf=\"settingBool == true\" lines=\"none\">\n          <label position=\"fixed\">{{ 'profile.joined' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"fas fa-chevron-right secondary-text\"></span>\n        </ion-item>\n\n        <ion-item (click)=\"goToPreferences()\" *ngIf=\"settingBool == true\" lines=\"none\">\n          <label position=\"fixed\">{{ 'profile.preferences' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"fas fa-chevron-right secondary-text\"></span>\n        </ion-item>\n\n          <!--\n          <ion-item *ngIf=\"settingBool == true\" lines=\"none\">\n            <label position=\"fixed\">{{ 'profile.permissions' | translate }}</label>\n            <span slot=\"end\" style=\"font-size: 17pt;\" class=\"fas fa-chevron-right secondary-text\"></span>\n          </ion-item>\n        -->\n\n        <!-- <ion-item (click)=\"goToPassword()\" *ngIf=\"settingBool == true\" lines=\"none\">\n          <label position=\"fixed\">{{ 'profile.changePassword' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"fas fa-chevron-right secondary-text\"></span>\n        </ion-item> -->\n\n        <hr class=\"hr-profile\" *ngIf=\"settingBool == true\">\n        <div class=\"box-center-full\">\n          <!-- <ion-button (click)=\"save(myForm.value)\" type=\"submit\" class=\"button-one\" shape=\"round\"> -->\n            <!-- <span *ngIf=\"profileBool == true\">{{ 'profile.continue' | translate }}</span>\n              <span *ngIf=\"settingBool == true\">{{ 'profile.save' | translate }}</span> -->\n              <!-- </ion-button> -->\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  -webkit-appearance: none; }\n\n.box-center-full {\n  margin-top: 40px;\n  margin-bottom: 40px; }\n\n.item-instagram {\n  margin-left: 16px;\n  width: 100%;\n  display: flex;\n  margin-top: 15px;\n  justify-content: space-between; }\n\n.chip-inst {\n  margin-right: -2px; }\n\nion-datetime {\n  width: 100%;\n  text-align: right;\n  color: #888; }\n\n.hr-profile {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important; }\n\n.form-field {\n  margin-left: -15px;\n  margin-right: -15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHdCQUF3QjtFQUN4Qiw4QkFBeUM7RUFDekMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uYm94LWNlbnRlci1mdWxse1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLml0ZW0taW5zdGFncmFte1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jaGlwLWluc3R7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xufVxuXG5pb24tZGF0ZXRpbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICM4ODg7XG59XG5cbi5oci1wcm9maWxle1xuICAgIHdpZHRoOiAxNTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI0LCAyMjQsIDIyNCkgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7IFxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5mb3JtLWZpZWxke1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");












var ProfilePage = /** @class */ (function () {
    function ProfilePage(fb, actRoute, router, _globalServ, _userServ, storage, modalController, alertController, translate) {
        this.actRoute = actRoute;
        this.router = router;
        this._globalServ = _globalServ;
        this._userServ = _userServ;
        this.storage = storage;
        this.modalController = modalController;
        this.alertController = alertController;
        this.translate = translate;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.pageTitleName = false;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.profileBool = getParams.profile;
            this.settingBool = getParams.setting;
        }
        this.getDataProfileFunc();
        this.myForm = fb.group({
            'userName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([])],
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([])],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([])],
            'city': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([])],
            'faculty': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([])],
            'from': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([])],
            'birthday': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([])],
            'myForm': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([])],
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    ProfilePage.prototype.save = function (value) {
        var _this = this;
        if (this.birthday == '') {
            this.birthday = null;
        }
        this._userServ.saveProfile({
            'id': this._globalServ.idUser,
            'entity': this._globalServ.org,
            'firstname': value.firstName,
            'lastname': value.lastName,
            'city': value.city,
            'faculty': value.faculty,
            'from': value.from,
            'birthday': value.birthday,
        }).subscribe(function (data) {
            data;
            _this._userServ.saveSettings({ 'id': _this._globalServ.idUser, 'settings': 'language', 'value': _this._globalServ.language })
                .subscribe(function (dataPref) {
                dataPref;
                _this.storage.set('language', _this._globalServ.language);
            }, function (error) { console.log(error); });
            if (_this.profileBool == true) {
                var navigationExtras = {
                    queryParams: {
                        data: JSON.stringify({ 'showText': true, 'showTitle': true, 'save': true })
                    }
                };
                _this.router.navigate(['preferences'], navigationExtras);
            }
            if (_this.settingBool == true) {
                var navigationExtras = {
                    queryParams: {
                        data: JSON.stringify({})
                    }, replaceUrl: true
                };
                _this.router.navigate(['/tabs/more'], navigationExtras);
            }
        }, function (error) { console.log(error); });
    };
    ProfilePage.prototype.goToUpload = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'profile': true })
            }
        };
        this.router.navigate(['image-cropper'], navigationExtras);
    };
    ProfilePage.prototype.openLanguageModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var titleLabel, englisLabel, spanishLabel, cancelLabel, okLabel, englishChecked, spanishChecked, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        return [4 /*yield*/, this.alertController.create({
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
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: okLabel,
                                        handler: function (value) {
                                            console.log('Confirm Ok', value);
                                            _this._globalServ.language = value;
                                            _this.translate.setDefaultLang(value);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.getDataProfileFunc = function () {
        var _this = this;
        this._userServ.getProfile(this._globalServ.idUser, { 'entity': this._globalServ.org })
            .subscribe(function (dataProf) {
            _this.getDataProfile = dataProf;
            _this.firstName = _this.getDataProfile.user.first_name;
            _this.lastName = _this.getDataProfile.user.last_name;
            _this.userName = _this.getDataProfile.user.email;
            _this.city = _this.getDataProfile.user.city;
            _this.faculty = _this.getDataProfile.user.faculty;
            _this.from = _this.getDataProfile.user.from;
            _this.birthday = _this.getDataProfile.user.birthday;
            _this.image = _this.getDataProfile.user.image;
        }, function (error) { console.log(error); });
    };
    ProfilePage.prototype.goToJoined = function () {
        this.router.navigate(['joined'], {});
    };
    ProfilePage.prototype.goToPreferences = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'fromSetting': true, 'save': true })
            }
        };
        this.router.navigate(['preferences'], navigationExtras);
    };
    ProfilePage.prototype.goToPassword = function () {
        this.router.navigate(['change-password'], {});
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map