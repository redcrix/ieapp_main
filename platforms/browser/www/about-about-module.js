(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrolling($event)\">\n<toolbar [back]=\"true\" [title]=\"pageTitleName ? ('about.about' | translate) : ''\"></toolbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1 class=\"title\">{{ 'about.about' | translate }}</h1>\n      <div class=\"box-center-full box-logo-about\">\n        <img *ngIf=\"_globalServ?.org == 'IE'\" src=\"assets/img/about_ie.jpg\">\n        <img *ngIf=\"_globalServ?.org == 'CEU'\" src=\"assets/img/about_ceu.jpg\">\n      </div>\n      <div class=\"mini-container\">\n        <div class=\"title-desc-about\">\n          <span *ngIf=\"_globalServ?.org == 'IE'\">{{ 'about.aboutVIVEIE' | translate }}</span>\n          <span *ngIf=\"_globalServ?.org == 'CEU'\">{{ 'about.aboutCEU' | translate }}</span>\n        </div>\n        <div class=\"desc-about\">\n          {{ 'about.textAbout' | translate }}\n        </div>\n        <div class=\"box-policy-about\" (click)=\"openPrivacyPolicy()\">\n          <span class=\"policy-about\">{{ 'about.checkThePrivacyPolicy' | translate }}</span> <span\n          class=\"fas fa-chevron-right policy-arrow\"></span>\n        </div>\n        <div class=\"contact-about\">\n          {{ 'about.contactUs' | translate }}\n        </div>\n        <div class=\"box-center-full\">\n          <div (click)=\"openWebVistingo()\" class=\"box-blue-circle\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/call.png\">\n            <div class=\"blue-text\">{{ 'city-guide-item.visitUs' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <a href=\"mailto:someone@example.com?Subject=Hello%20again\" target=\"_top\"><img width=\"48px\" height=\"48px\" src=\"assets/img/call.png\">\n              <div class=\"blue-text\">{{ 'city-guide-item.emailUs' | translate }}</div>\n            </a>\n          </div>\n          <div class=\"box-blue-circle\" (click)=\"callWithNumber()\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/call.png\">\n            <div class=\"blue-text\">{{ 'city-guide-item.callUs' | translate }}</div>\n          </div>\n        </div>\n        <div class=\"follow-about\">\n          {{ 'about.followUs' | translate }}\n        </div>\n        <div class=\"box-center-full\">\n          <div class=\"box-blue-circle\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/facebook.png\">\n            <div class=\"blue-text\">{{ 'city-guide-item.website' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/facebook.png\">\n            <div class=\"denim-blue\">{{ 'city-guide-item.facebook' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/instagram.png\">\n            <div class=\"text-insta\">{{ 'city-guide-item.instagram' | translate }}</div>\n          </div>\n        </div>\n        <div class=\"box-center-full\">\n          <div class=\"box-blue-circle\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/twitter.png\">\n            <div class=\"blue-text\">{{ 'city-guide-item.twitter' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/youtube.png\">\n            <div class=\"text-red\">{{ 'city-guide-item.youtube' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/linked-in.png\">\n            <div class=\"text-linked\">{{ 'city-guide-item.linkedin' | translate }}</div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-logo-about {\n  margin-top: 56pt; }\n\n.title-desc-about {\n  font-size: 16px;\n  line-height: 18pt;\n  font-weight: 600;\n  margin-top: 59pt; }\n\n.desc-about {\n  font-size: 13px;\n  line-height: 18pt;\n  margin-top: 9pt; }\n\n.box-policy-about {\n  line-height: 18pt;\n  margin-top: 39pt; }\n\n.policy-about {\n  font-size: 16pt;\n  font-weight: 600; }\n\n.policy-arrow {\n  font-size: 11pt;\n  margin-left: 6pt; }\n\n.contact-about {\n  font-size: 16pt;\n  font-weight: 600;\n  margin-top: 54pt; }\n\n.box-blue-circle {\n  width: 33%;\n  margin: 8px 0px 0px 0px; }\n\n.follow-about {\n  font-size: 16pt;\n  font-weight: 600;\n  margin-top: 57pt; }\n\n.denim-blue {\n  color: #3b5998; }\n\n.text-red {\n  color: #ce1312; }\n\n.text-insta {\n  color: #d54783; }\n\n.text-linked {\n  color: #0077b5; }\n\n.mini-container {\n  margin: 0px 16px 32px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVU7RUFDVix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtbG9nby1hYm91dHtcbiAgICBtYXJnaW4tdG9wOiA1NnB0O1xufVxuXG4udGl0bGUtZGVzYy1hYm91dHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOiA1OXB0O1xufVxuXG4uZGVzYy1hYm91dHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHQ7XG4gICAgbWFyZ2luLXRvcDogOXB0O1xufVxuXG4uYm94LXBvbGljeS1hYm91dHtcbiAgICBsaW5lLWhlaWdodDogMThwdDtcbiAgICBtYXJnaW4tdG9wOiAzOXB0O1xufVxuXG4ucG9saWN5LWFib3V0e1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucG9saWN5LWFycm93e1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBtYXJnaW4tbGVmdDogNnB0O1xufVxuXG4uY29udGFjdC1hYm91dHtcbiAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOiA1NHB0O1xufVxuXG4uYm94LWJsdWUtY2lyY2xlIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xufVxuXG4uZm9sbG93LWFib3V0e1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDU3cHQ7XG59XG4uZGVuaW0tYmx1ZXtcbiAgICBjb2xvcjogIzNiNTk5ODtcbn1cbi50ZXh0LXJlZHtcbiAgICBjb2xvcjogI2NlMTMxMjtcbn1cbi50ZXh0LWluc3Rhe1xuICAgIGNvbG9yOiAjZDU0NzgzO1xufVxuLnRleHQtbGlua2Vke1xuICAgIGNvbG9yOiAjMDA3N2I1O1xufVxuLm1pbmktY29udGFpbmVye1xuICAgIG1hcmdpbjogMHB4IDE2cHggMzJweCAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var AboutPage = /** @class */ (function () {
    function AboutPage(_globalServ, _generalServ, iab, callNumber, alertController) {
        this._globalServ = _globalServ;
        this._generalServ = _generalServ;
        this.iab = iab;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.pageTitleName = false;
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    AboutPage.prototype.callWithNumber = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            subHeader: '18001010101',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Call',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.callNumber.callNumber("18001010101", true)
                                            .then(function (res) { return console.log('Launched dialer!', res); })
                                            .catch(function (err) { return console.log('Error launching dialer', err); });
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
    AboutPage.prototype.openWebVistingo = function () {
        this.iab.create('https://campuslife-events.ie.edu/home', '_system');
    };
    AboutPage.prototype.openPrivacyPolicy = function () {
        this.iab.create('https://campuslife-events.ie.edu/home', '_system');
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/services/general.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-availability/ngx */ "./node_modules/@ionic-native/app-availability/ngx/index.js");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "./node_modules/@ionic-native/youtube-video-player/ngx/index.js");








var GeneralService = /** @class */ (function () {
    function GeneralService(http, _globalServ, Device, AppAvailability, iab, youtube) {
        this.http = http;
        this._globalServ = _globalServ;
        this.Device = Device;
        this.AppAvailability = AppAvailability;
        this.iab = iab;
        this.youtube = youtube;
    }
    GeneralService.prototype.launchExternalApp = function (iosSchemaName, androidPackageName, appUrl, httpUrl, username) {
        var _this = this;
        var app;
        if (this.Device.platform === 'iOS') {
            app = iosSchemaName;
        }
        else if (this.Device.platform === 'Android') {
            app = androidPackageName;
        }
        else {
            var browser = this.iab.create(httpUrl + username, '_system');
            return;
        }
        this.AppAvailability.check(app).then(function () {
            var browser = _this.iab.create(appUrl + username, '_system');
        }, function () {
            var browser = _this.iab.create(httpUrl + username, '_system') /*new InAppBrowser(httpUrl + username, '_system')*/;
        });
    };
    GeneralService.prototype.openInstagram = function (username) {
        this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
    };
    GeneralService.prototype.openTwitter = function (username) {
        this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
    };
    GeneralService.prototype.openFacebook = function (username) {
        this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
    };
    GeneralService.prototype.openLinkedin = function (id) {
        //this.launchExternalApp('linkedin://', 'com.linkedin.android', 'linkedin://profile?id=', 'https://www.linkedin.com/in/', id);
        this.iab.create('https://www.linkedin.com/in/' + id, '_system');
    };
    GeneralService.prototype.openYoutube = function (vidoId) {
        this.youtube.openVideo(vidoId);
    };
    GeneralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"],
            _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_6__["AppAvailability"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_7__["YoutubeVideoPlayer"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map