(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-more-module"],{

/***/ "./src/app/pages/more/more.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/more/more.module.ts ***!
  \*******************************************/
/*! exports provided: MorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more.page */ "./src/app/pages/more/more.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _more_page__WEBPACK_IMPORTED_MODULE_6__["MorePage"]
    }
];
var MorePageModule = /** @class */ (function () {
    function MorePageModule() {
    }
    MorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_more_page__WEBPACK_IMPORTED_MODULE_6__["MorePage"]]
        })
    ], MorePageModule);
    return MorePageModule;
}());



/***/ }),

/***/ "./src/app/pages/more/more.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/more/more.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <h1 class=\"title\">{{ 'more.more' | translate }}</h1>\n        <div class=\"box-center-full\">\n          <div *ngIf=\"image == null && _globalServ.profileImagePath == null\" (click)=\"goToViewProfile()\"\n          class=\"circle image-camera-more\">\n          <span class=\"icon fas fa-camera\"></span>\n        </div>\n        <img *ngIf=\"image != null && _globalServ.profileImagePath == null\" (click)=\"goToViewProfile()\"\n        class=\"profile-img\" src=\"{{url}}/{{image}}\">\n        <img *ngIf=\"_globalServ.profileImagePath != null\" (click)=\"goToViewProfile()\" class=\"profile-img\"\n        [src]=\"_globalServ.profileImagePath\">\n        <div (click)=\"goToViewProfile()\" class=\"more-name\">{{firstName}} {{lastName}}</div>\n        <div (click)=\"goToViewProfile()\" class=\"more-view-profile\">{{ 'more.viewProfile' | translate }}</div>\n      </div>\n\n      <div class=\"content-more\">\n        <div *ngIf=\"_globalServ?.org == 'CEU'\" class=\"more-item first-more-item\">\n          <div class=\"more-box-icon-text\" (click)=\"goToClubs()\">\n            <ion-icon class=\"more-icon\" name=\"md-bicycle\"></ion-icon> <span\n            class=\"more-item-text\">{{ 'more.clubs' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"more-item others-more-item\">\n          <div class=\"more-box-icon-text\" (click)=\"goToGroups()\"> \n            <ion-icon class=\"more-icon\" name=\"ios-people\"></ion-icon> <span\n            class=\"more-item-text\">{{ 'more.groups' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"more-item others-more-item\">\n          <div class=\"more-box-icon-text\" (click)=\"goToSetting()\">\n            <ion-icon class=\"more-icon\" name=\"ios-settings\"></ion-icon> <span\n            class=\"more-item-text\">{{ 'more.settings' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"more-item others-more-item\">\n          <div class=\"more-box-icon-text\" (click)=\"goToAbout()\">\n            <ion-icon class=\"more-icon\" name=\"information-circle\"></ion-icon> <span\n            class=\"more-item-text\">{{ 'more.about' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"more-item others-more-item\">\n          <div class=\"more-box-icon-text\" (click)=\"logout()\">\n            <ion-icon class=\"more-icon\" name=\"ios-log-out\"></ion-icon> <span\n            class=\"more-item-text\">{{ 'more.logOut' | translate }}</span>\n          </div>\n        </div>\n          <!--<div>\n            {{device.model}}\n          </div>-->\n        </div>\n        <div class=\"margin-bottom\"></div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/more/more.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/more/more.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  margin-top: 90pt;\n  margin-bottom: 15pt; }\n\n.image-camera-more {\n  margin-top: 13pt;\n  margin-bottom: 15pt; }\n\n.content-more {\n  margin-top: 38pt; }\n\n.more-item {\n  color: #5f6369;\n  line-height: 18pt; }\n\n.first-more-item {\n  margin-top: 16pt; }\n\n.others-more-item {\n  margin-top: 30pt; }\n\n.margin-bottom {\n  height: 70pt; }\n\n.more-name {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24pt; }\n\n.more-view-profile {\n  font-size: 16px;\n  color: #9b9b9b;\n  line-height: 18pt;\n  margin-top: 4pt; }\n\n.more-icon {\n  font-size: 18pt;\n  display: inline-block;\n  vertical-align: middle; }\n\n.more-item-text {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 16px;\n  margin-left: 10px; }\n\n.more-box-icon-text {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9tb3JlL21vcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFnQjtFQUNoQixjQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWM7RUFDZCxxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0kscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vcmUvbW9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgbWFyZ2luLXRvcDogOTBwdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB0O1xufVxuXG4uaW1hZ2UtY2FtZXJhLW1vcmV7XG4gICAgbWFyZ2luLXRvcDogMTNwdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB0O1xufVxuXG4uY29udGVudC1tb3Jle1xuICAgIG1hcmdpbi10b3A6IDM4cHQ7XG59XG5cbi5tb3JlLWl0ZW17XG4gICAgY29sb3I6IHJnYig5NSw5OSwxMDUpO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB0O1xufVxuXG4uZmlyc3QtbW9yZS1pdGVte1xuICAgIG1hcmdpbi10b3A6IDE2cHQ7XG59XG5cbi5vdGhlcnMtbW9yZS1pdGVte1xuICAgIG1hcmdpbi10b3A6IDMwcHQ7XG59XG5cbi5tYXJnaW4tYm90dG9te1xuICAgIGhlaWdodDogNzBwdDtcbn1cblxuLm1vcmUtbmFtZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMjRwdDtcbn1cblxuLm1vcmUtdmlldy1wcm9maWxle1xuICAgIGZvbnQtc2l6ZTogMTZweCA7XG4gICAgY29sb3I6IHJnYigxNTUsIDE1NSwgMTU1KTtcbiAgICBsaW5lLWhlaWdodDogMThwdDtcbiAgICBtYXJnaW4tdG9wOiA0cHQ7XG59XG5cbi5tb3JlLWljb257XG4gICAgZm9udC1zaXplOjE4cHQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tb3JlLWl0ZW0tdGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tb3JlLWJveC1pY29uLXRleHR7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/more/more.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/more/more.page.ts ***!
  \*****************************************/
/*! exports provided: MorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePage", function() { return MorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var MorePage = /** @class */ (function () {
    function MorePage(router, _userServ, _globalServ, device, storage) {
        this.router = router;
        this._userServ = _userServ;
        this._globalServ = _globalServ;
        this.device = device;
        this.storage = storage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.getDataProfileFunc();
    }
    MorePage.prototype.ngOnInit = function () {
    };
    MorePage.prototype.goToSetting = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'setting': true })
            }
        };
        this.router.navigate(['tabs/profile'], navigationExtras);
    };
    MorePage.prototype.getDataProfileFunc = function () {
        var _this = this;
        this._userServ.getProfile(this._globalServ.idUser, { 'entity': this._globalServ.org })
            .subscribe(function (dataProf) {
            _this.getDataProfile = dataProf;
            _this.firstName = _this.getDataProfile.user.first_name;
            _this.lastName = _this.getDataProfile.user.last_name;
            _this.image = _this.getDataProfile.user.image;
        }, function (error) { console.log(error); });
    };
    MorePage.prototype.goToViewProfile = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'idUser': this._globalServ.idUser })
            }
        };
        this.router.navigate(['/view-profile'], navigationExtras);
    };
    MorePage.prototype.goToAbout = function () {
        this.router.navigate(['tabs/about'], {});
    };
    MorePage.prototype.goToClubs = function () {
        this.router.navigate(['clubs'], {});
    };
    MorePage.prototype.goToGroups = function () {
        this.router.navigate(['groups'], {});
    };
    MorePage.prototype.logout = function () {
        this.storage.clear();
        this._globalServ.idUser = null;
        this.router.navigate(['login'], { replaceUrl: true });
    };
    MorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more',
            template: __webpack_require__(/*! ./more.page.html */ "./src/app/pages/more/more.page.html"),
            styles: [__webpack_require__(/*! ./more.page.scss */ "./src/app/pages/more/more.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], MorePage);
    return MorePage;
}());



/***/ })

}]);
//# sourceMappingURL=more-more-module.js.map