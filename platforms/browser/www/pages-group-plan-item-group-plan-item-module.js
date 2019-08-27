(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-plan-item-group-plan-item-module"],{

/***/ "./src/app/pages/group-plan-item/group-plan-item.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/group-plan-item/group-plan-item.module.ts ***!
  \*****************************************************************/
/*! exports provided: GroupPlanItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPlanItemPageModule", function() { return GroupPlanItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_plan_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-plan-item.page */ "./src/app/pages/group-plan-item/group-plan-item.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _group_plan_item_page__WEBPACK_IMPORTED_MODULE_6__["GroupPlanItemPage"]
    }
];
var GroupPlanItemPageModule = /** @class */ (function () {
    function GroupPlanItemPageModule() {
    }
    GroupPlanItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_plan_item_page__WEBPACK_IMPORTED_MODULE_6__["GroupPlanItemPage"]]
        })
    ], GroupPlanItemPageModule);
    return GroupPlanItemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-plan-item/group-plan-item.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/group-plan-item/group-plan-item.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-item fas fa-chevron-left\"></span>\n  </div>\n  <div>\n    <img *ngIf=\"groupPlanItem?.image && isValidClubImage\" class=\"main-item-image\" src=\"{{groupPlanItem?.image}}\" (error)=\"updateClubUrl($event)\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n\n        <div class=\"item-title\">\n          <h2>\n            <span>{{groupPlanItem?.title}}</span>\n          </h2>\n        </div>\n        <div class=\"box-center-full\">\n          <div class=\"box-blue-circle\" (click)=\"joinClub()\">\n            <img *ngIf=\"isJoined\" src=\"../../../assets/img/fab_checked.png\"/>\n            <img *ngIf=\"!isJoined\" src=\"../../../assets/img/fab.png\"/>\n            <p class=\"secondary-text\" style=\"margin-top: 5px\" [style.color]=\"isJoined ? '#009cd8' : 'black'\">\n              <span *ngIf=\"isJoined\">{{ 'group-plan-item.joined' | translate }}</span>\n              <span *ngIf=\"!isJoined\">{{ 'group-plan-item.join' | translate }}</span>\n            </p>\n          </div>\n        </div>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"information-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'group-plan-item.details' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">\n              <span *ngIf=\"_globalServ?.language == 'en'\">{{groupPlanItem?.description}}</span>\n              <span *ngIf=\"_globalServ?.language == 'es'\">{{groupPlanItem?.description}}</span></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"blue-text size-18-pt\">{{ 'group-plan-item.readMore' | translate }}</td>\n          </tr>\n        </table>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-star\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'group-plan-item.createdBy' | translate }}</td>\n          </tr>\n          <tbody>\n            <tr>\n              <td></td>\n              <td>\n                <span>\n                  <img class=\"members-avatar\" src=\"{{groupPlanItem?.image}}\" />\n                </span>\n                <span class=\"secondary-text\" style=\"margin-left: 10px;\">{{groupPlanItem?.group?.title}} </span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-checkmark-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'group-plan-item.going' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td>\n              <span *ngFor=\"let partner of going; let i = index\">\n                <img *ngIf=\"i < math.round((innerWidth - 70 - 2*37) / 37)\" class=\"members-avatar\" src=\"{{partner?.image}}\" />\n              </span>\n              <span *ngIf=\"going.length > math.round((innerWidth - 70 - 2*37) / 37)\" class=\"more-member\">\n                +{{going.length - math.round((innerWidth - 70 - 2*37) / 37)}}\n              </span>\n            </td>\n          </tr>\n        </table>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"clock\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'group-plan-item.date' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td>\n              <p class=\"secondary-text\" style=\"margin-bottom: 5px;\">\n                {{groupPlanItem.plan_date | date:'E, d MMMM y'}}\n              </p>\n              <ion-chip class=\"btn-blue-general\">\n                <ion-label>{{ 'group-plan-item.addToCalendar' | translate }}</ion-label>\n              </ion-chip>\n            </td>\n          </tr>\n        </table>\n        <table style=\"width: 100%;\">\n          <tr class=\"weight-600\">\n            <td style=\"width: 34px;\">\n              <ion-icon class=\"icon-item\" name=\"pin\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'group-plan-item.location' | translate }}</td>\n          </tr>\n          <tbody>\n            <tr>\n              <td></td>\n              <td>\n                <p class=\"secondary-text\" style=\"margin-bottom: 5px;\">\n                  {{groupPlanItem.address}}\n                </p>\n                <div *ngIf=\"groupPlanItem.latitude !== null && groupPlanItem.longitude !== null\">\n                  <div id=\"map\" class=\"map-one\" #map></div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- \n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"pin\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'club-detail.plans' | translate }}</td>\n          </tr>\n          <tbody>\n            <tr>\n              <td></td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n        <ion-slides style=\"width: 100%;\" [pager]=\"true\">\n          <ion-slide style=\"width: 100%;\" *ngFor=\"let plan of plans;\">\n            <plan-card [dataPlan]=\"plan\" style=\"width: 100%;\"></plan-card>\n          </ion-slide>\n        </ion-slides> -->\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-plan-item/group-plan-item.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/group-plan-item/group-plan-item.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content-item{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back-item{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n.map-one {\n  margin-top: 20px;\n  margin-bottom: 20px; }\ntable {\n  margin-top: 24pt; }\n/*.sc-ion-card-md-h {\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px;\n}*/\n/*.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}*/\n.members-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 32px;\n  margin-right: 5px; }\n.more-member {\n  width: 32px;\n  height: 32px;\n  text-align: center;\n  font-size: 14px;\n  background-color: #f4f5f8;\n  border-radius: 32px;\n  padding: 9px;\n  font-weight: bold;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ncm91cC1wbGFuLWl0ZW0vZ3JvdXAtcGxhbi1pdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvdXAtcGxhbi1pdGVtL2dyb3VwLXBsYW4taXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDaUJFO0FERUY7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDRyxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjs7Ozs7RUNDRTtBRE1GOzs7RUNGRTtBRE9GO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7QUFFckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLXBsYW4taXRlbS9ncm91cC1wbGFuLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouYnRuLWJhY2stY29udGVudC1pdGVte1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpOy5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmFjay1pdGVte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBwYWRkaW5nOiAzcHggM3B4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbn0qL1xuXG4uYm94LWNlbnRlci1mdWxse1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLm1hcC1vbmV7XG4gICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGFibGV7XG4gICAgbWFyZ2luLXRvcDogMjRwdDtcbn1cblxuLyouc2MtaW9uLWNhcmQtbWQtaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXG4gICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7IFxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59Ki9cblxuLyouaXRlbS1hdmF0YXItY2FyZC5oeWRyYXRlZHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Ki9cblxuLm1lbWJlcnMtYXZhdGFyIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tb3JlLW1lbWJlciB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG4uYm94LWNlbnRlci1mdWxsIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4ubWFwLW9uZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxudGFibGUge1xuICBtYXJnaW4tdG9wOiAyNHB0OyB9XG5cbi8qLnNjLWlvbi1jYXJkLW1kLWgge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxuICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4OyBcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSovXG4vKi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0qL1xuLm1lbWJlcnMtYXZhdGFyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuLm1vcmUtbWVtYmVyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/group-plan-item/group-plan-item.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/group-plan-item/group-plan-item.page.ts ***!
  \***************************************************************/
/*! exports provided: GroupPlanItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPlanItemPage", function() { return GroupPlanItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");










var GroupPlanItemPage = /** @class */ (function () {
    function GroupPlanItemPage(location, _globalServ, _groupServ, actRoute, toastController, _userServ) {
        this.location = location;
        this._globalServ = _globalServ;
        this._groupServ = _groupServ;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this._userServ = _userServ;
        this.email = '';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.groupPlanItem = {};
        this.isValidClubImage = true;
        this.going = [];
        this.plans = [];
        this.math = Math;
        this.isJoined = false;
        this.profile = {};
        this.zoom = 14;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.id = getParams.id;
            // this.email = getParams.email;
            console.log('id: ', this.id);
            console.log('email: ', this.email);
            this.getGroupPlanItem();
        }
    }
    GroupPlanItemPage.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.getProfile();
    };
    GroupPlanItemPage.prototype.getProfile = function () {
        var _this = this;
        this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(function (data) {
            _this.profile = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(data, '[0]', {});
            console.log('this.profile: ', _this.profile);
            _this.email = _this.profile.email;
        }, function (err) {
            console.log('err public profile: ', err);
        });
    };
    GroupPlanItemPage.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    GroupPlanItemPage.prototype.ionViewDidEnter = function () {
        /* this._clubServ.getGroupPlanItem(this.id).subscribe(data => {
          console.log('data:  ', data);
          this.getItem = data;
          this.clubMembers = data['Ceu_Club_Members'] ? data['Ceu_Club_Members'] : [];
          this.clubMembers = this.clubMembers.map(o => {
            if (o.Ceu_User === null) {
              return {
                ...o,
                Ceu_User: {image: '../../../assets/img/empty_avatar.png'}
              };
            }
            return o;
          })
    
          this._clubServ.getPlansByClub(this.id).subscribe(plans => {
            this.plans = get(plans, 'plans', []);
            this.plans = this.plans.map(o => {
              return {
                ...o,
                image: `${this.url}/get-image-plan/` + o.image
              }
            })
            console.log('this.plans : ' ,  this.plans);
          }, errPlan => {
            console.log('errPlan: ', errPlan);
          })
        }, err => {
          console.log('err: ', err);
        }); */
    };
    GroupPlanItemPage.prototype.getGroupPlanItem = function () {
        var _this = this;
        this._groupServ.getGroupPlanItem(this.id, this.email).subscribe(function (data) {
            console.log('group plan item: ', data);
            _this.groupPlanItem = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(data, '[0]', {});
            _this.going = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(_this.groupPlanItem, 'participants', []);
            _this.checkJoinedStatus();
            if (_this.groupPlanItem.latitude !== null && _this.groupPlanItem.longitude !== null) {
                _this.mapFunc(Number(_this.groupPlanItem.latitude), Number(_this.groupPlanItem.longitude));
            }
        }, function (err) {
            console.log('group plan item err: ', err);
        });
    };
    GroupPlanItemPage.prototype.checkJoinedStatus = function () {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(this.groupPlanItem, ['fk_user_id', this._globalServ.idUser])) {
            this.isJoined = true;
        }
        else {
            this.isJoined = false;
        }
    };
    GroupPlanItemPage.prototype.goBack = function () {
        this.location.back();
    };
    GroupPlanItemPage.prototype.mapFunc = function (lat, long) {
        //set map
        var coords = new google.maps.LatLng(lat, long);
        this.mapOptions = {
            center: coords,
            zoom: this.zoom,
            maxZoom: 17,
            minZoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: { lat: lat, lng: long }
        });
    };
    GroupPlanItemPage.prototype.updateClubUrl = function () {
        this.isValidClubImage = false;
    };
    GroupPlanItemPage.prototype.joinClub = function () {
        var _this = this;
        if (!this.isJoined) {
            this._groupServ.joinGroupPlan(this.id, { 'userId': this._globalServ.idUser, 'email': this.email }).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(data);
                            return [4 /*yield*/, this.toastController.create({
                                    message: 'Joined successfully.',
                                    duration: 2000
                                })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            this.isJoined = true;
                            return [2 /*return*/];
                    }
                });
            }); }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(error);
                            return [4 /*yield*/, this.toastController.create({
                                    message: error.message,
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
        else {
            this._groupServ.leaveGroupPlan(this._globalServ.idUser, null).subscribe(function (data) {
                console.log(data);
                _this.isJoined = false;
            }, function (error) {
                console.log(error);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GroupPlanItemPage.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GroupPlanItemPage.prototype, "onResize", null);
    GroupPlanItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-plan-item',
            template: __webpack_require__(/*! ./group-plan-item.page.html */ "./src/app/pages/group-plan-item/group-plan-item.page.html"),
            styles: [__webpack_require__(/*! ./group-plan-item.page.scss */ "./src/app/pages/group-plan-item/group-plan-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]])
    ], GroupPlanItemPage);
    return GroupPlanItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-plan-item-group-plan-item-module.js.map