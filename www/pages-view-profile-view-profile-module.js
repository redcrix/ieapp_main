(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-profile-view-profile-module"],{

/***/ "./src/app/pages/view-profile/view-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-profile/view-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-profile.page */ "./src/app/pages/view-profile/view-profile.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _view_profile_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfilePage"]
    }
];
var ViewProfilePageModule = /** @class */ (function () {
    function ViewProfilePageModule() {
    }
    ViewProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_profile_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfilePage"]]
        })
    ], ViewProfilePageModule);
    return ViewProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-profile/view-profile.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-profile/view-profile.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-black fas fa-chevron-left\"></span>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div class=\"box-center-full top-image-vp\">\n          <div *ngIf=\"publicProfile.image != null\" class=\"image-camera-more\">\n            <img src=\"{{publicProfile.image}}\" />\n          </div>\n          <div *ngIf=\"publicProfile.image == null\" class=\"circle image-camera-more\">\n            <span class=\"icon fas fa-camera\"></span>\n          </div>\n          <div class=\"vp-name\">{{publicProfile.first_name}} {{publicProfile.last_name}}</div>\n          <div class=\"vp-view-carrer\">{{publicProfile.faculty}}</div>\n        </div>\n        <div class=\"box-center-full box-number-vp\">\n          <div class=\"box-data-vp\">\n            <span class=\"data-circle-vp\">{{publicProfile.preferences}}</span>\n            <div class=\"data-text-vp\">{{ 'view-profile.preferences' | translate }}</div>\n          </div>\n          <div class=\"box-data-vp\">\n            <span class=\"data-circle-vp\">{{publicProfile.clubs}}</span>\n            <div class=\"data-text-vp\">{{ 'view-profile.clubs' | translate }}</div>\n          </div>\n          <div class=\"box-data-vp\">\n            <span class=\"data-circle-vp\">{{publicProfile.groups}}</span>\n            <div class=\"data-text-vp\">{{ 'view-profile.groups' | translate }}</div>\n          </div>\n        </div>\n\n        <hr class=\"hr-view-profile\">\n\n        <div class=\"box-center-full\">\n          <div class=\"box-blue-circle\">\n            <span class=\"blue-circle icon-blue fas fa-envelope\"></span>\n            <div class=\"blue-text\">{{ 'view-profile.email' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <span class=\"separate-blue-circle\"></span>\n          </div>\n          <div class=\"box-blue-circle\">\n            <span class=\"blue-circle icon-blue fab fa-instagram\"></span>\n            <div class=\"blue-text\">{{ 'view-profile.instagram' | translate }}</div>\n          </div>\n        </div>\n\n        <div class=\"vp-personal-inf\">\n          {{ 'view-profile.personalInformation' | translate }}\n        </div>\n\n        <div class=\"vp-box-icon-text\">\n          <ion-icon class=\"vp-icon\" name=\"ios-home\"></ion-icon> <span class=\"vp-item-text\"><span\n              class=\"secondary-text vp-margin-icon\">{{ 'view-profile.from' | translate }}</span> <span\n              style=\"margin-left: 6pt;\">{{publicProfile.from}}</span></span>\n        </div>\n\n        <div style=\"margin-bottom: 28pt;\" class=\"vp-box-icon-text vp-box-two\">\n          <span class=\"vp-icon fas fa-birthday-cake\"></span> <span class=\"vp-item-text\"><span\n              class=\"secondary-text vp-margin-icon \">{{ 'view-profile.birthdayOn' | translate }}</span> <span\n              style=\"margin-left: 6pt;\">{{publicProfile.birthday | date:'d MMM'}}</span></span>\n        </div>\n\n        <ion-row>\n          <ion-col class=\"weight-600\" size=\"6\">joes's {{ 'view-profile.plans' | translate }}</ion-col>\n          <ion-col class=\"secondary-text view-all\" size=\"6\" (click)=\"goToPlans()\">{{ 'view-profile.viewAll' | translate }}</ion-col>\n        </ion-row>\n\n        <ion-slides style=\"width: 100%;\" [pager]=\"true\">\n          <ion-slide style=\"width: 100%;\" *ngFor=\"let plan of plans; let i = index\">\n            <plan-card [dataPlan]=\"plan\" style=\"width: 100%;\"></plan-card>\n          </ion-slide>\n        </ion-slides>\n\n        <ion-row style=\"margin-top: 22pt;width: 100%\">\n          <ion-col class=\"weight-600\" size=\"6\">joe's {{ 'view-profile.clubs' | translate }}</ion-col>\n          <ion-col class=\"secondary-text view-all\" size=\"6\">{{ 'view-profile.viewAll' | translate }}</ion-col>\n        </ion-row>\n\n\n        <div class=\"box-container\">\n          <div class=\"item\" *ngFor=\"let club of clubs; let i = index\">\n            <ion-card>\n              <img src=\"{{club.image}}\">\n            </ion-card>\n            <div\n              style=\"line-height: 20px; text-align: center;\" [ngClass]=\"{'vp-ios-text-card':_globalServ?.iosDivice}\">\n              {{club.title}}\n            </div>\n            <div class=\"box-center-full\">\n              <div class=\"secondary-text\">\n                <ion-icon class=\"vp-icon\" name=\"ios-person\"></ion-icon> <span class=\"vp-item-text\">{{club.club_member_count}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <ion-row style=\"padding-top: 22pt;width: 100%\">\n          <ion-col class=\"weight-600\" size=\"6\">joe's {{ 'view-profile.groups' | translate }}</ion-col>\n          <ion-col class=\"secondary-text view-all\" size=\"6\" (click)=\"goToGroups()\">{{ 'view-profile.viewAll' | translate }}</ion-col>\n        </ion-row>\n\n\n        <div class=\"box-container\">\n          <div class=\"item\" *ngFor=\"let group of groups; let i = index\">\n            <ion-card>\n              <img src=\"{{group.image}}\">\n            </ion-card>\n            <div\n              style=\"line-height: 20px; text-align: center;\" [ngClass]=\"{'vp-ios-text-card':_globalServ?.iosDivice}\">\n              {{group.title}}\n            </div>\n            <div class=\"box-center-full\">\n              <div class=\"secondary-text\">\n                <ion-icon class=\"vp-icon\" name=\"ios-person\"></ion-icon> <span class=\"vp-item-text\">{{group.group_members_count}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n    <div style=\"margin-top: 100px;\"></div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/view-profile/view-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-profile/view-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hr-view-profile {\n  width: 150px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  visibility: visible !important; }\n\n.top-image-vp {\n  margin-top: 88pt; }\n\n.vp-name {\n  font-size: 20pt;\n  margin-top: 20pt;\n  font-weight: 600; }\n\n.vp-view-carrer {\n  font-size: 12pt;\n  color: #9b9b9b;\n  margin-top: 7pt; }\n\n.box-number-vp {\n  margin-top: 56pt; }\n\n.vp-personal-inf {\n  color: black;\n  font-size: 16pt;\n  margin-top: 65pt;\n  margin-bottom: 24pt;\n  font-weight: 600; }\n\n.vp-box-icon-text {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n.vp-item-text {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12pt;\n  margin-left: 10px; }\n\n.vp-icon {\n  font-size: 18pt;\n  display: inline-block;\n  vertical-align: middle; }\n\n.vp-box-two {\n  margin-top: 16pt; }\n\n.view-all {\n  text-align: right; }\n\n.vp-margin-icon {\n  margin-left: 18pt; }\n\n.box-container .item {\n  float: left;\n  width: 33.3%; }\n\n.item {\n  list-style-type: disc; }\n\n.separate-blue-circle {\n  display: inline-block;\n  border-radius: 60px;\n  height: 48pt;\n  width: 48pt;\n  margin-bottom: 10px; }\n\n.vp-ios-text-card {\n  margin-top: -20px; }\n\n.image-camera-more img {\n  width: 138px;\n  height: 138px;\n  border-radius: 138px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2Qiw4QkFBeUM7RUFDekMseUJBQXlCO0VBRXpCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGNBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFJbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCO0VBQUMsbUJBQW1CO0VBQ3pDLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBRVEsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctcHJvZmlsZS92aWV3LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhyLXZpZXctcHJvZmlsZXtcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI0LCAyMjQsIDIyNCkgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIC8vbWFyZ2luLWxlZnQ6IC00MDBweDsgXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG4udG9wLWltYWdlLXZwe1xuICAgIG1hcmdpbi10b3A6IDg4cHQ7XG59XG5cbi52cC1uYW1le1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICBtYXJnaW4tdG9wOiAyMHB0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi52cC12aWV3LWNhcnJlcntcbiAgICBmb250LXNpemU6IDEycHQ7XG4gICAgY29sb3I6IHJnYigxNTUsIDE1NSwgMTU1KTtcbiAgICBtYXJnaW4tdG9wOiA3cHQ7XG59XG5cblxuLmJveC1udW1iZXItdnB7XG4gICAgbWFyZ2luLXRvcDogNTZwdDtcbn1cblxuLnZwLXBlcnNvbmFsLWluZntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB0O1xuICAgIG1hcmdpbi10b3A6IDY1cHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRwdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi52cC1ib3gtaWNvbi10ZXh0e1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnZwLWl0ZW0tdGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDEycHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi52cC1pY29ue1xuICAgIGZvbnQtc2l6ZToxOHB0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udnAtYm94LXR3b3tcbiAgICBtYXJnaW4tdG9wOiAxNnB0O1xufVxuLnZpZXctYWxse1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udnAtbWFyZ2luLWljb257XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHQ7XG59XG5cblxuLmJveC1jb250YWluZXIgLml0ZW17XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMzLjMlOy8vaGVscHMgdG8gZGV0ZXJtaW5lIG51bWJlciBvZiBjb2x1bW5zLCBmb3IgaW5zdGFuY2UgMzMuMyUgZGlzcGxheXMgMyBjb2x1bW5zXG59XG4uaXRlbXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG5cbi5zZXBhcmF0ZS1ibHVlLWNpcmNsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czogNjBweDtcbiAgICBoZWlnaHQ6IDQ4cHQ7XG4gICAgd2lkdGg6IDQ4cHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnZwLWlvcy10ZXh0LWNhcmR7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5pbWFnZS1jYW1lcmEtbW9yZSB7XG4gICAgJiBpbWcge1xuICAgICAgICB3aWR0aDogMTM4cHg7XG4gICAgICAgIGhlaWdodDogMTM4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEzOHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/view-profile/view-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/view-profile/view-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: ViewProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePage", function() { return ViewProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var ViewProfilePage = /** @class */ (function () {
    function ViewProfilePage(router, location, _globalServ, _userServ) {
        this.router = router;
        this.location = location;
        this._globalServ = _globalServ;
        this._userServ = _userServ;
        /*   example: any = {
            id: 9,
            highlight: true,
            fk_ceu_user_id: 3,
            fk_department_id: 6,
            title: "Clases de Yoga",
            tags: null,
            description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lor",
            image: "http://178.128.241.57/api/get-image-plan/Dietitian_Cassie_NEW.png",
            plan_date: "2019-09-22T15:00:00.000Z",
            meeting_point: "El Retiro",
            address: "Madrid, Calle de Bravo Murillo, M",
            places: 5,
            private_plan: false,
            status: 1,
            link: "",
            terms: true,
            creation_date: null,
            views: 0,
          }; */
        this.publicProfile = {};
        this.plans = [];
        this.clubs = [];
        this.groups = [
            {}, {}, {}
        ];
    }
    ViewProfilePage.prototype.ngOnInit = function () {
        this.getProfile();
        this.getPlans();
        this.getClubs();
        this.getGroups();
    };
    ViewProfilePage.prototype.goBack = function () {
        this.location.back();
    };
    ViewProfilePage.prototype.goToGroups = function () {
        this.router.navigate(['view-profile-groups']);
    };
    ViewProfilePage.prototype.goToPlans = function () {
        this.router.navigate(['view-profile-plans']);
    };
    ViewProfilePage.prototype.getProfile = function () {
        var _this = this;
        this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(function (data) {
            var userLoggedIn = data;
            _this._userServ.getPublicProfileForView(_this._globalServ.idUser, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(userLoggedIn, 'user.email', '')).subscribe(function (data) {
                _this.publicProfile = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(data, '[0]', {});
                console.log('this.publicProfile: ', _this.publicProfile);
            }, function (err) {
                console.log('err public profile: ', err);
            });
        }, function (err) {
            console.log('gp: ', err);
        });
    };
    ViewProfilePage.prototype.getPlans = function () {
        var _this = this;
        this._userServ.getUserPlans(this._globalServ.idUser).subscribe(function (data) {
            _this.plans = data;
            console.log('user plans: ', _this.plans);
        }, function (err) {
            console.log('err user plans: ', err);
        });
    };
    ViewProfilePage.prototype.getClubs = function () {
        var _this = this;
        this._userServ.getUserClubs(this._globalServ.idUser).subscribe(function (data) {
            _this.clubs = data;
            _this.clubs = _this.clubs.slice(0, 3);
        }, function (err) {
            console.log('err user clubs: ', err);
        });
    };
    ViewProfilePage.prototype.getGroups = function () {
        var _this = this;
        this._userServ.getUserGroups(this._globalServ.idUser).subscribe(function (data) {
            _this.groups = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(data, 'group', []);
            _this.groups = _this.groups.slice(0, 3);
        }, function (err) {
            console.log('err user groups: ', err);
        });
    };
    ViewProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-profile',
            template: __webpack_require__(/*! ./view-profile.page.html */ "./src/app/pages/view-profile/view-profile.page.html"),
            styles: [__webpack_require__(/*! ./view-profile.page.scss */ "./src/app/pages/view-profile/view-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], ViewProfilePage);
    return ViewProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-profile-view-profile-module.js.map