(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plan-item-plan-item-module"],{

/***/ "./src/app/pages/plan-item/plan-item.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/plan-item/plan-item.module.ts ***!
  \*****************************************************/
/*! exports provided: PlanItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanItemPageModule", function() { return PlanItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plan_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan-item.page */ "./src/app/pages/plan-item/plan-item.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _plan_item_page__WEBPACK_IMPORTED_MODULE_6__["PlanItemPage"]
    }
];
var PlanItemPageModule = /** @class */ (function () {
    function PlanItemPageModule() {
    }
    PlanItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plan_item_page__WEBPACK_IMPORTED_MODULE_6__["PlanItemPage"]]
        })
    ], PlanItemPageModule);
    return PlanItemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plan-item/plan-item.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/plan-item/plan-item.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-item fas fa-chevron-left\"></span>\n  </div>\n  <div>\n    <img class=\"main-item-image\" src=\"{{url}}{{getItem?.image}}\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n\n        <div>\n          <h2>\n            <span class=\"item-title\">{{getItem?.title}}</span>\n          </h2>\n        </div>\n        <div class=\"box-center-full\">\n          <div *ngIf=\"joined == true\" class=\"box-blue-circle\" (click)=\"joinPlan()\">\n            <img width=\"48px\" height=\"48px\" src=\"../../../assets/img/checked.png\"/>\n            <p class=\"secondary-text\"  style=\"color: #179ed5; margin-top: 5px\">{{'plan-item.joined' | translate}}</p>\n          </div>\n          <div *ngIf=\"joined != true\" class=\"box-blue-circle\" (click)=\"joinPlan()\">\n            <img width=\"48px\" height=\"48px\" src=\"../../../assets/img/plus.png\"/>\n            <p class=\"secondary-text\" style=\"color: #179ed5; margin-top: 5px\">{{'plan-item.join' | translate}}</p>\n          </div>\n        </div>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"information-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'plan-item.details' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">{{getItem?.description}}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"blue-text size-18-pt\">{{ 'plan-item.readMore' | translate }}</td>\n          </tr>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"star\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'plan-item.createBy' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">\n              <ion-item (click)=\"goToViewProfile()\" lines=\"none\">\n                <ion-avatar slot=\"start\">\n                  <img *ngIf=\"_globalServ?.org == 'CEU' && getItem?.Ceu_User?.image != null\" src=\"{{urlImageProfile}}/{{getItem?.Ceu_User?.image}}\">\n                  <img *ngIf=\"_globalServ?.org == 'CEU' && getItem?.Ceu_User?.image == null\" src=\"../../../assets/img/empty_avatar.png\">\n                  <img *ngIf=\"_globalServ?.org == 'IE' && getItem?.IE_User?.image != null\" src=\"{{urlImageProfile}}/{{getItem?.IE_User?.image}}\">\n                  <img *ngIf=\"_globalServ?.org == 'IE' && getItem?.IE_User?.image == null\" src=\"../../../assets/img/empty_avatar.png\">\n                </ion-avatar>\n                <ion-label *ngIf=\"getItem?.Ceu_User\" style=\"color: #888;\">{{getItem?.Ceu_User?.first_name}} {{getItem?.Ceu_User?.last_name}}</ion-label>\n                <ion-label *ngIf=\"getItem?.IE_User.first_name\" style=\"color: #888;\">{{getItem?.IE_User?.first_name}} {{getItem?.IE_User?.last_name}}</ion-label>\n                <ion-label *ngIf=\"getItem?.IE_User.name\" style=\"color: #888;\">{{getItem?.IE_User?.name}}</ion-label>\n              </ion-item>\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td>\n              <ion-chip class=\"btn-blue-general\">\n                <ion-label>Instagram</ion-label>\n              </ion-chip>\n            </td>\n          </tr>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"checkmark-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'plan-item.going' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">\n              <ion-item *ngIf=\"remainingUsers !== 0\" lines=\"none\">\n                <ion-avatar *ngFor=\"let item of getParticipants?.participants\" slot=\"start\">\n                  <img *ngIf=\"_globalServ?.org == 'CEU' && item?.Ceu_User?.image != null && item?.Ceu_User?.image != ''\" [src]=\"item?.Ceu_User?.image\">\n                  <img *ngIf=\"_globalServ?.org == 'CEU' && item?.Ceu_User?.image == null || item?.Ceu_User?.image == ''\" src=\"assets/img/empty_avatar.png\">\n                  <img *ngIf=\"_globalServ?.org == 'IE' && item?.IE_User?.image != null && item?.IE_User?.image != ''\" [src]=\"item?.IE_User?.image\">\n                  <img *ngIf=\"_globalServ?.org == 'IE' && item?.IE_User?.image == null || item?.IE_User?.image == ''\" src=\"assets/img/empty_avatar.png\">\n                </ion-avatar>\n                <span class=\"grey-circle\">+{{remainingUsers}}</span>\n              </ion-item>\n            </td>\n          </tr>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"clock\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'plan-item.dateAndTime' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>{{getItem?.plan_date | date:'mediumDate'}}</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>{{getItem?.plan_date | date:'mediumTime'}}</td>\n          </tr>\n          <tr>\n          <!--<tr class=\"secondary-text\">\n            <td></td>\n            <td>10:00 - 11:00</td>\n          </tr>-->\n          <tr>\n            <td></td>\n            <td>\n              <ion-chip class=\"btn-blue-general\">\n\t\t\t\t        <ion-label *ngIf=\"!AddedToCalender\" (click)=\"AddToCalender(getItem)\">{{ 'plan-item.addToCalendar' | translate }}</ion-label>\n\t\t\t\t        <ion-label  *ngIf=\"AddedToCalender\" >{{ 'plan-item.addedToCalendar' | translate }}</ion-label>\n              </ion-chip>\n            </td>\n          </tr>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"pin\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'plan-item.location' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td *ngIf=\"_globalServ?.language == 'en'\">{{item?.Place?.name_EN}}</td>\n            <td *ngIf=\"_globalServ?.language == 'es'\">{{item?.Place?.name_ES}}</td>\n          </tr>\n          <tr>\n            <tr class=\"secondary-text\">\n              <td></td>\n              <td>{{getItem?.address}}</td>\n            </tr>\n            <tr>\n              <td></td>\n              <td>\n                <ion-chip class=\"btn-blue-general\" (click)=\"goToLink()\">\n                  <ion-label>{{ 'plan-item.website' | translate }}</ion-label>\n                </ion-chip>\n                <ion-chip class=\"btn-blue-general\">\n                  <ion-label>{{ 'plan-item.directions' | translate }}</ion-label>\n                </ion-chip>\n              </td>\n            </tr>\n          </table>\n          <div [style.display]=\"getControlsOnStyleDisplay()\" class=\"box-map-one\">\n            <div id=\"map\" class=\"map-one\" #map></div>\n          </div>\n          <table>\n            <tr class=\"weight-600\">\n              <td>\n                <ion-icon class=\"icon-item\" name=\"ios-pricetag\"></ion-icon>\n              </td>\n              <td class=\"title-item\">{{ 'plan-item.price' | translate }}</td>\n            </tr>\n            <tr class=\"secondary-text\">\n              <td></td>\n              <td *ngIf=\"(getItem?.Place?.price_ES == null || getItem?.Place?.price_ES == '') && (getItem?.Place?.price_EN == null || getItem?.Place?.price_EN == '')\">Free</td>\n              <td *ngIf=\"_globalServ?.language == 'en'\">{{getItem?.Place?.price_EN}}</td>\n              <td *ngIf=\"_globalServ?.language == 'es'\">{{getItem?.Place?.price_ES}}</td>\n            </tr>\n            <tr>\n            </table>\n\n            <table class=\"margin-last-table\">\n              <tr class=\"weight-600\">\n                <td>\n                  <ion-icon class=\"icon-item\" name=\"ios-share\"></ion-icon>\n                </td>\n                <td class=\"title-item\">{{ 'plan-item.share' | translate }}</td>\n              </tr>\n              <tr class=\"secondary-text\">\n                <td></td>\n                <td>\n                  <ion-chip class=\"btn-facebook\">\n                    <ion-label>Facebook</ion-label>\n                  </ion-chip>\n                  <ion-chip class=\"btn-twitter\">\n                    <ion-label>Twitter</ion-label>\n                  </ion-chip>\n                  <ion-chip class=\"btn-email\">\n                    <ion-label>{{ 'plan-item.email' | translate }}</ion-label>\n                  </ion-chip>\n                  <ion-chip class=\"btn-whatsapp\">\n                    <ion-label>WhatsApp</ion-label>\n                  </ion-chip>\n                </td>\n              </tr>\n              <tr>\n              </table>\n\n            </div>\n            <div class=\"col-md-2\"></div>\n          </div>\n        </div>\n      </ion-content>"

/***/ }),

/***/ "./src/app/pages/plan-item/plan-item.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/plan-item/plan-item.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n/*\n.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}\n*/\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\nh2 {\n  font-size: 20px;\n  font-family: 'SF Pro Medium';\n  font-weight: 900; }\n/*\n.sc-ion-card-md-h {\n\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px; \n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9wbGFuLWl0ZW0vcGxhbi1pdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhbi1pdGVtL3BsYW4taXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDaUJFO0FERUY7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdkI7Ozs7O0NDR0M7QURJRDtFQUNHLGdCQUFnQixFQUFBO0FBR25CO0VBQ0ksZ0JBQWdCLEVBQUE7QUFFcEI7RUFDSSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQixFQUFBO0FBSXBCOzs7Ozs7O0VDQ0UiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGFuLWl0ZW0vcGxhbi1pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmJ0bi1iYWNrLWNvbnRlbnR7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNre1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBwYWRkaW5nOiAzcHggM3B4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbn0qL1xuXG4uYm94LWNlbnRlci1mdWxse1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLypcbi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn1cbiovXG5cbi5tYXAtb25le1xuICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudGFibGV7XG4gICAgbWFyZ2luLXRvcDogMjRwdDtcbn1cbmgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gTWVkaXVtJztcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG5cbi8qXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG5cbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcbiAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDsgXG4gICAgIGJvcmRlci1yYWRpdXM6IDBweDsgXG59Ki8iLCIvKi5idG4tYmFjay1jb250ZW50e1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpOy5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmFja3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgcGFkZGluZzogM3B4IDNweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59Ki9cbi5ib3gtY2VudGVyLWZ1bGwge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG5cbi8qXG4uaXRlbS1hdmF0YXItY2FyZC5oeWRyYXRlZHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG4qL1xuLm1hcC1vbmUge1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjRwdDsgfVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gTWVkaXVtJztcbiAgZm9udC13ZWlnaHQ6IDkwMDsgfVxuXG4vKlxuLnNjLWlvbi1jYXJkLW1kLWgge1xuXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXG4gICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7IFxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7IFxufSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/plan-item/plan-item.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/plan-item/plan-item.page.ts ***!
  \***************************************************/
/*! exports provided: PlanItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanItemPage", function() { return PlanItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");













var PlanItemPage = /** @class */ (function () {
    function PlanItemPage(location, _globalServ, router, actRoute, _planServ, nativeGeocoder, _userServ, iab, calendar) {
        this.location = location;
        this._globalServ = _globalServ;
        this.router = router;
        this.actRoute = actRoute;
        this._planServ = _planServ;
        this.nativeGeocoder = nativeGeocoder;
        this._userServ = _userServ;
        this.iab = iab;
        this.calendar = calendar;
        this.zoom = 14;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.urlImageProfile = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.remainingUsers = 0;
        this.joined = false;
        this.AddedToCalender = false;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.id = getParams.id;
            this.type = getParams.type;
            if (this.type == 'university_plan' || this.type == 'student_plan') {
                if (this._globalServ.org == 'CEU') {
                    this.url = this.url + '/get-image-plan/';
                }
                else if (this._globalServ.org == 'IE') {
                    this.url = this.url + '/get-ie-image-plan/';
                }
            }
            if (this.type == 'club_plan') {
                this.url = this.url + '/get-club-plan-image/';
            }
        }
    }
    PlanItemPage.prototype.ngOnInit = function () {
    };
    PlanItemPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._planServ.getParticipants(this.id, { 'participantlimit': 5, 'entity': this._globalServ.org })
            .subscribe(function (data) {
            _this.getParticipants = data;
            _this.checkingJoinStatus();
        });
        if (this.type == 'university_plan' || this.type == 'student_plan') {
            this._planServ.getItemUniv(this.id)
                .subscribe(function (data) {
                if (_this._globalServ.org == 'CEU') {
                    _this.getItem = data;
                    if (_this.getItem.Place != null) {
                        _this.latitudeInit = Number(_this.getItem.Place.latitude);
                        _this.longitudeInit = Number(_this.getItem.Place.longitude);
                    }
                    else if (_this.getItem.latitude != null && _this.getItem.longitude != null) {
                        _this.latitudeInit = Number(_this.getItem.latitude);
                        _this.longitudeInit = Number(_this.getItem.longitude);
                    }
                    if (_this.getItem.Participants != null) {
                        if (_this.getItem.Participants.length < 6) {
                            _this.remainingUsers = 0;
                        }
                        else {
                            _this.remainingUsers = _this.getItem.Participants.length - 5;
                        }
                    }
                    console.log('map info1: ', _this.getItem);
                    if (_this.getItem.Place != null) {
                        _this.mapFunc(Number(_this.getItem.Place.latitude), Number(_this.getItem.Place.longitude));
                    }
                    else if (_this.getItem.latitude != null && _this.getItem.longitude != null) {
                        _this.mapFunc(Number(_this.getItem.latitude), Number(_this.getItem.longitude));
                    }
                }
                else if (_this._globalServ.org == 'IE') {
                    _this.getItem = data['ie_plan'];
                    if (_this.getItem.Place != null) {
                        _this.latitudeInit = Number(_this.getItem.Place.latitude);
                        _this.longitudeInit = Number(_this.getItem.Place.longitude);
                    }
                    else if (_this.getItem.latitude != null && _this.getItem.longitude != null) {
                        _this.latitudeInit = Number(_this.getItem.latitude);
                        _this.longitudeInit = Number(_this.getItem.longitude);
                    }
                    if (_this.getItem.IE_Participants != null) {
                        if (_this.getItem.IE_Participants.length < 6) {
                            _this.remainingUsers = 0;
                        }
                        else {
                            _this.remainingUsers = _this.getItem.IE_Participants.length - 5;
                        }
                    }
                    console.log('map info2: ', _this.getItem);
                    if (_this.getItem.Place != null) {
                        _this.mapFunc(Number(_this.getItem.Place.latitude), Number(_this.getItem.Place.longitude));
                    }
                    else if (_this.getItem.latitude != null && _this.getItem.longitude != null) {
                        _this.mapFunc(Number(_this.getItem.latitude), Number(_this.getItem.longitude));
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }
        if (this.type == 'club_plan') {
            this._planServ.getItemClub(this.id)
                .subscribe(function (data) {
                _this.getItem = data;
                if (_this.getItem.Place != null) {
                    _this.latitudeInit = Number(_this.getItem.Place.latitude);
                    _this.longitudeInit = Number(_this.getItem.Place.longitude);
                }
                else if (_this.getItem.latitude != null && _this.getItem.longitude != null) {
                    _this.latitudeInit = Number(_this.getItem.latitude);
                    _this.longitudeInit = Number(_this.getItem.longitude);
                }
                if (_this.getItem.Participants != null) {
                    if (_this.getItem.Participants.length < 6) {
                        _this.remainingUsers = 0;
                    }
                    else {
                        _this.remainingUsers = _this.getItem.Participants.length - 5;
                    }
                }
                console.log('map info3: ', _this.getItem);
                if (_this.getItem.Place != null) {
                    _this.mapFunc(Number(_this.getItem.Place.latitude), Number(_this.getItem.Place.longitude));
                }
                else if (_this.getItem.latitude != null && _this.getItem.longitude != null) {
                    _this.mapFunc(Number(_this.getItem.latitude), Number(_this.getItem.longitude));
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    PlanItemPage.prototype.goBack = function () {
        this.location.back();
    };
    PlanItemPage.prototype.checkingJoinStatus = function () {
        var _this = this;
        this._planServ.getParticipations(this._globalServ.idUser).subscribe(function (data) {
            var listParticipations = JSON.parse(JSON.stringify(data));
            for (var _i = 0, listParticipations_1 = listParticipations; _i < listParticipations_1.length; _i++) {
                var item2 = listParticipations_1[_i];
                var itemParticipants = _this._globalServ.org == 'CEU' ? item2.Participants : item2.IE_Participants;
                for (var _a = 0, itemParticipants_1 = itemParticipants; _a < itemParticipants_1.length; _a++) {
                    var item3 = itemParticipants_1[_a];
                    var planId = _this._globalServ.org == 'CEU' ? item3.fk_plan_id : item3.fk_ie_plan_id;
                    if (planId == _this.getItem.id) {
                        _this.getItem.join = true;
                        _this.joined = true;
                        _this.getItem.idParticipation = item3.id;
                    }
                }
            }
        });
    };
    PlanItemPage.prototype.joinPlan = function () {
        var _this = this;
        if (this.type == 'club_plan') {
            if (this.joined == true) {
                this._planServ.leavePlanClub(this.getItem.idParticipation).subscribe(function (data) {
                    console.log(data);
                    _this.joined = false;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(function (data) {
                    _this.getUserLoggedin = data;
                    _this._planServ.joinPlanClub({ 'fk_plan_id': _this.getItem.id, 'ceu_user_id': _this._globalServ.idUser, 'name': _this.getUserLoggedin.user.first_name + ' ' + _this.getUserLoggedin.user.last_name, 'email': _this.getUserLoggedin.user.email, 'fk_club_plan_id': _this.getItem.id }).subscribe(function (data) {
                        console.log(data);
                        _this.joined = true;
                    }, function (error) {
                        console.log(error);
                    });
                });
            }
        }
        if (this.type == 'university_plan' || this.type == 'student_plan') {
            if (this.joined == true) {
                this._planServ.leavePlanUniversity(this.getItem.idParticipation).subscribe(function (data) {
                    console.log(data);
                    _this.joined = false;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(function (data) {
                    _this.getUserLoggedin = data;
                    if (_this._globalServ.org == 'CEU') {
                        _this._planServ.joinPlanUniversity({
                            'fk_plan_id': _this.getItem.id,
                            'ceu_user_id': _this._globalServ.idUser,
                            'name': _this.getUserLoggedin.user.first_name + ' ' + _this.getUserLoggedin.user.last_name,
                            'email': _this.getUserLoggedin.user.email
                        }).subscribe(function (data) {
                            console.log(data);
                            _this.joined = true;
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else if (_this._globalServ.org == 'IE') {
                        _this._planServ.joinPlanUniversity({
                            'fk_ie_plan_id': _this.getItem.id,
                            'ie_user_id': _this._globalServ.idUser,
                            'name': _this.getUserLoggedin.user.first_name + ' ' + _this.getUserLoggedin.user.last_name,
                            'email': _this.getUserLoggedin.user.email
                        }).subscribe(function (data) {
                            console.log(data);
                            _this.joined = true;
                        }, function (error) {
                            console.log(error);
                        });
                    }
                });
            }
        }
    };
    PlanItemPage.prototype.goToViewProfile = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({})
            }
        };
        this.router.navigate(['view-profile'], navigationExtras);
    };
    PlanItemPage.prototype.mapFunc = function (lat, long) {
        //set map
        var coords = new google.maps.LatLng(this.latitudeInit, this.longitudeInit);
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
        console.log('this.mapele: ', this.mapElement);
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: { lat: lat, lng: long },
        });
    };
    PlanItemPage.prototype.goToLink = function () {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.getItem, 'link', '') !== '') {
            this.iab.create(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.getItem, 'link', ''), '_system');
        }
    };
    PlanItemPage.prototype.getControlsOnStyleDisplay = function () {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.getItem, 'Place', '') !== '' || (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.getItem, 'latitude', '') !== '' && Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.getItem, 'longitude', '') != '')) {
            return "block";
        }
        else {
            return "none";
        }
    };
    PlanItemPage.prototype.AddToCalender = function (item) {
        var _this = this;
        console.log(item);
        this.calendar.createEvent(item.title, item.address, item.description, new Date(item.limit_date), new Date(item.plan_date)).then(function (msg) {
            _this.AddedToCalender = true;
            console.log(msg);
        }, function (err) { console.log(err); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlanItemPage.prototype, "mapElement", void 0);
    PlanItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-item',
            template: __webpack_require__(/*! ./plan-item.page.html */ "./src/app/pages/plan-item/plan-item.page.html"),
            styles: [__webpack_require__(/*! ./plan-item.page.scss */ "./src/app/pages/plan-item/plan-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_plan_service__WEBPACK_IMPORTED_MODULE_5__["PlanService"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"],
            _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_11__["Calendar"]])
    ], PlanItemPage);
    return PlanItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plan-item-plan-item-module.js.map