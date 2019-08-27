(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-club-detail-club-detail-module"],{

/***/ "./src/app/pages/club-detail/club-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/club-detail/club-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ClubDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubDetailPageModule", function() { return ClubDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _club_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./club-detail.page */ "./src/app/pages/club-detail/club-detail.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _club_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClubDetailPage"]
    }
];
var ClubDetailPageModule = /** @class */ (function () {
    function ClubDetailPageModule() {
    }
    ClubDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_club_detail_page__WEBPACK_IMPORTED_MODULE_6__["ClubDetailPage"]]
        })
    ], ClubDetailPageModule);
    return ClubDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/club-detail/club-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/club-detail/club-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-item fas fa-chevron-left\"></span>\n  </div>\n  <div>\n    <img *ngIf=\"getItem?.image && isValidClubImage\" class=\"main-item-image\" src=\"{{getItem?.image}}\" (error)=\"updateClubUrl($event)\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n\n        <div class=\"item-title\">\n          <h2>\n            <span>{{getItem?.title}}</span>\n          </h2>\n        </div>\n        <div class=\"box-center-full\">\n          <div class=\"box-blue-circle\" (click)=\"joinClub()\">\n            <img *ngIf=\"isJoined\" src=\"../../../assets/img/fab_checked.png\"/>\n            <img *ngIf=\"!isJoined\" src=\"../../../assets/img/fab.png\"/>\n            <p class=\"secondary-text\" style=\"margin-top: 5px\" [style.color]=\"isJoined ? '#009cd8' : 'black'\">\n              <span *ngIf=\"isJoined\">{{ 'club-detail.joined' | translate }}</span>\n              <span *ngIf=\"!isJoined\">{{ 'club-detail.join' | translate }}</span>\n            </p>\n          </div>\n        </div>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"information-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'club-detail.details' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">\n              <span *ngIf=\"_globalServ?.language == 'en'\">{{getItem?.description}}</span>\n              <span *ngIf=\"_globalServ?.language == 'es'\">{{getItem?.description}}</span></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"blue-text size-18-pt\">{{ 'club-detail.readMore' | translate }}</td>\n          </tr>\n        </table>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-person\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'club-detail.members' | translate }}: {{clubMembers.length}}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td>\n              <span *ngFor=\"let member of clubMembers; let i = index\">\n                <img *ngIf=\"i < math.round((innerWidth - 70 - 2*37) / 37)\" class=\"members-avatar\" src=\"{{member?.Ceu_User?.image}}\" />\n              </span>\n              <span *ngIf=\"clubMembers.length > math.round((innerWidth - 70 - 2*37) / 37)\" class=\"more-member\">\n                +{{clubMembers.length - math.round((innerWidth - 70 - 2*37) / 37)}}\n              </span>\n            </td>\n          </tr>\n        </table>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-star\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'club-detail.createdBy' | translate }}</td>\n          </tr>\n          <tbody>\n            <tr>\n              <td></td>\n              <td>\n                <span>\n                  <img class=\"members-avatar\" src=\"{{getItem?.Ceu_User?.image}}\" />\n                </span>\n                <span class=\"secondary-text\" style=\"margin-left: 10px;\">{{getItem?.Ceu_User?.first_name}} {{getItem?.Ceu_User?.last_name}}</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"pin\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'club-detail.plans' | translate }}</td>\n          </tr>\n          <tbody>\n            <tr>\n              <td></td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n        <ion-slides style=\"width: 100%;\" [pager]=\"true\">\n          <ion-slide style=\"width: 100%;\" *ngFor=\"let plan of plans;\">\n            <plan-card [dataPlan]=\"plan\" style=\"width: 100%;\"></plan-card>\n          </ion-slide>\n        </ion-slides>\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/club-detail/club-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/club-detail/club-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content-item{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back-item{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\n/*.sc-ion-card-md-h {\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px;\n}*/\n/*.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}*/\n.members-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 32px;\n  margin-right: 5px; }\n.more-member {\n  width: 32px;\n  height: 32px;\n  text-align: center;\n  font-size: 14px;\n  background-color: #f4f5f8;\n  border-radius: 32px;\n  padding: 9px;\n  font-weight: bold;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9jbHViLWRldGFpbC9jbHViLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsdWItZGV0YWlsL2NsdWItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNpQkU7QURFRjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtBQUd2QjtFQUNHLGdCQUFnQixFQUFBO0FBR25CO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7Ozs7O0VDQ0U7QURNRjs7O0VDRkU7QURPRjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0FBRXJCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbHViLWRldGFpbC9jbHViLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG5cbi5ib3gtY2VudGVyLWZ1bGx7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ubWFwLW9uZXtcbiAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnRhYmxle1xuICAgIG1hcmdpbi10b3A6IDI0cHQ7XG59XG5cbi8qLnNjLWlvbi1jYXJkLW1kLWgge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxuICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4OyBcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSovXG5cbi8qLml0ZW0tYXZhdGFyLWNhcmQuaHlkcmF0ZWR7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufSovXG5cbi5tZW1iZXJzLWF2YXRhciB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubW9yZS1tZW1iZXIge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLyouYnRuLWJhY2stY29udGVudC1pdGVte1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpOy5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmFjay1pdGVte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBwYWRkaW5nOiAzcHggM3B4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbn0qL1xuLmJveC1jZW50ZXItZnVsbCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cblxuLm1hcC1vbmUge1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjRwdDsgfVxuXG4vKi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcbiAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDsgXG4gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn0qL1xuLyouaXRlbS1hdmF0YXItY2FyZC5oeWRyYXRlZHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Ki9cbi5tZW1iZXJzLWF2YXRhciB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5tb3JlLW1lbWJlciB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/club-detail/club-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/club-detail/club-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ClubDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubDetailPage", function() { return ClubDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_club_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/club.service */ "./src/app/services/club.service.ts");
/* harmony import */ var _services_clubs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/clubs.service */ "./src/app/services/clubs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










var ClubDetailPage = /** @class */ (function () {
    function ClubDetailPage(location, _globalServ, _clubServ, _clubsServ, actRoute, toastController) {
        this.location = location;
        this._globalServ = _globalServ;
        this._clubServ = _clubServ;
        this._clubsServ = _clubsServ;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.getItem = {};
        this.isValidClubImage = true;
        this.clubMembers = [];
        this.plans = [];
        this.math = Math;
        this.isJoined = false;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.id = getParams.id;
            console.log('id: ', this.id);
            this.checkJoinedStatus();
        }
    }
    ClubDetailPage.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        //dummy data
        for (var i = 0; i < 40; i++) {
            this.clubMembers.push({});
        }
    };
    ClubDetailPage.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    ClubDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._clubServ.getClubDetail(this.id).subscribe(function (data) {
            console.log('data:  ', data);
            _this.getItem = data;
            _this.clubMembers = data['Ceu_Club_Members'] ? data['Ceu_Club_Members'] : [];
            _this.clubMembers = _this.clubMembers.map(function (o) {
                if (o.Ceu_User === null) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { Ceu_User: { image: '../../../assets/img/empty_avatar.png' } });
                }
                return o;
            });
            _this._clubServ.getPlansByClub(_this.id).subscribe(function (plans) {
                _this.plans = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(plans, 'plans', []);
                _this.plans = _this.plans.map(function (o) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { image: _this.url + "/get-image-plan/" + o.image });
                });
                console.log('this.plans : ', _this.plans);
            }, function (errPlan) {
                console.log('errPlan: ', errPlan);
            });
        }, function (err) {
            console.log('err: ', err);
        });
    };
    ClubDetailPage.prototype.checkJoinedStatus = function () {
        var _this = this;
        this._clubsServ.getJoined(this._globalServ.idUser).subscribe(function (data) {
            console.log('joined clubs: ', data);
            var joinedClubs = [];
            joinedClubs = JSON.parse(JSON.stringify(data));
            joinedClubs.map(function (o) {
                if (o.id === _this.id) {
                    _this.isJoined = true;
                }
            });
        });
    };
    ClubDetailPage.prototype.goBack = function () {
        this.location.back();
    };
    ClubDetailPage.prototype.updateClubUrl = function () {
        this.isValidClubImage = false;
    };
    ClubDetailPage.prototype.joinClub = function () {
        var _this = this;
        if (!this.isJoined) {
            var param = {
                clubId: this.id,
                userName: this.getItem.Ceu_User.first_name + ' ' + this.getItem.Ceu_User.last_name,
                userEmail: this.getItem.Ceu_User.email
            };
            this._clubServ.joinClub(param).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('joined success: ', data);
                            return [4 /*yield*/, this.toastController.create({
                                    message: 'Joined successfully.',
                                    duration: 2000
                                })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            return [2 /*return*/];
                    }
                });
            }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('join club err: ', err);
                            return [4 /*yield*/, this.toastController.create({
                                    message: err.message,
                                    duration: 2000
                                })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClubDetailPage.prototype, "onResize", null);
    ClubDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-club-detail',
            template: __webpack_require__(/*! ./club-detail.page.html */ "./src/app/pages/club-detail/club-detail.page.html"),
            styles: [__webpack_require__(/*! ./club-detail.page.scss */ "./src/app/pages/club-detail/club-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_club_service__WEBPACK_IMPORTED_MODULE_4__["ClubService"],
            _services_clubs_service__WEBPACK_IMPORTED_MODULE_5__["ClubsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]])
    ], ClubDetailPage);
    return ClubDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-club-detail-club-detail-module.js.map