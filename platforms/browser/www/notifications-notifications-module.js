(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/pages/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/notifications/notifications.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <h1 class=\"title\">{{ 'notifications.notifications' | translate }}</h1>\n\n        <!--TODAY-->\n        <div class=\"title-noti\">\n          {{ 'notifications.todayCL' | translate }}\n        </div>\n        <div class=\"box-noti-item\">\n          <div *ngFor=\"let todayNotification of notifications; let i=index\">\n            <ion-row *ngIf=\"todayNotification.date_group === 'TODAY'\">\n              <ion-col size=\"10\">\n                <ion-item lines=\"none\">\n                  <ion-avatar slot=\"start\">\n                    <img src=\"{{todayNotification.author_image}}\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2 class=\"noti-one\">{{todayNotification.message}}</h2>\n                    <p class=\"noti-two\">{{getDuration(todayNotification.created)}}</p>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col class=\"column-center\" size=\"2\">\n                <div class=\"row-noti-recent\">\n                  <ion-icon name=\"ios-close\" (click)=\"readNotification(todayNotification)\"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <hr class=\"hr-noti\">\n        <!--THIS WEEK-->\n        <div class=\"title-noti\">\n          {{ 'notifications.thisWeekCL' | translate }}\n        </div>\n        <div class=\"box-noti-item\">\n          <div *ngFor=\"let weekNotification of notifications; let i=index\">\n            <ion-row *ngIf=\"weekNotification.date_group === 'THIS WEEK'\">\n              <ion-col size=\"10\">\n                <ion-item lines=\"none\">\n                  <ion-avatar slot=\"start\">\n                    <img src=\"{{weekNotification.author_image}}\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2 class=\"noti-one\">{{weekNotification.message}}</h2>\n                    <p class=\"noti-two\">{{getDuration(weekNotification.created)}}</p>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col class=\"column-center\" size=\"2\">\n                <div class=\"row-noti-recent\">\n                  <ion-icon name=\"ios-close\" (click)=\"readNotification(weekNotification)\"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <hr class=\"hr-noti\">\n        <!--THIS MONTH-->\n        <div class=\"title-noti\">\n          {{ 'notifications.thisMonthCL' | translate }}\n        </div>\n        <div class=\"box-noti-item\">\n          <div *ngFor=\"let monthNotification of notifications; let i=index\">\n            <ion-row *ngIf=\"monthNotification.date_group === 'THIS MONTH'\">\n              <ion-col size=\"10\">\n                <ion-item lines=\"none\">\n                  <ion-avatar slot=\"start\">\n                    <img src=\"{{monthNotification.author_image}}\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2 class=\"noti-one\">{{monthNotification.message}}</h2>\n                    <p class=\"noti-two\">{{getDuration(monthNotification.created)}}</p>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col class=\"column-center\" size=\"2\">\n                <div class=\"row-noti-recent\">\n                  <ion-icon name=\"ios-close\" (click)=\"readNotification(monthNotification)\"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <div class=\"margin-bottom\"></div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-noti {\n  font-size: 14pt;\n  color: #222428;\n  margin-top: 27pt; }\n\n.row-noti-recent {\n  margin: auto;\n  width: 50%;\n  padding: 25px;\n  font-size: 30pt;\n  color: #d8d8d8; }\n\n.row-back {\n  margin: auto;\n  width: 50%;\n  padding: 20px;\n  font-size: 21pt;\n  color: black; }\n\n.hr-noti {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important; }\n\n.noti-one {\n  font-size: 16pt;\n  font-family: 600;\n  display: block;\n  width: 100%;\n  height: 50px;\n  overflow: hidden; }\n\n.noti-two {\n  font-size: 12pt;\n  color: #9b9b9b;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.item-noti-margin {\n  margin-top: 21pt; }\n\n.box-noti-item {\n  margin-top: 21pt;\n  margin-left: -15px; }\n\n.hr-noti {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important; }\n\n.item.sc-ion-label-md-h, .item .sc-ion-label-md-h {\n  white-space: normal; }\n\n.title {\n  margin-top: 78pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQU1wQjtFQUNJLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUF5QixFQUFBOztBQUc3QjtFQUNJLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksd0JBQXdCO0VBQ3hCLDhCQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQUlsQztFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBaUM7RUFDakMsV0FBZ0M7RUFDaEMsWUFBZ0M7RUFDaEMsZ0JBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksZUFBZTtFQUNmLGNBQXlCO0VBQ3pCLHVCQUF1QjtFQUFDLG1CQUFtQixFQUFBOztBQUkvQztFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx3QkFBd0I7RUFDeEIsOEJBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBSWxDO0VBQ0ssbUJBQW1CLEVBQUE7O0FBR3hCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLW5vdGl7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGNvbG9yOiByZ2IoMzQsIDM2LCA0MCk7XG4gICAgbWFyZ2luLXRvcDogMjdwdDtcbn1cblxuXG5cblxuLnJvdy1ub3RpLXJlY2VudHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBwdDtcbiAgICBjb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xufVxuXG4ucm93LWJhY2t7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDIxcHQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uaHItbm90aXtcbiAgICB3aWR0aDogMTUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyNCwgMjI0LCAyMjQpICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogLTQwMHB4OyBcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cblxuLm5vdGktb25le1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICBmb250LWZhbWlseTogNjAwO1xuICAgIGRpc3BsYXk6ICAgICAgICAgICAgICAgICAgICBibG9jaztcbiAgICB3aWR0aDogICAgICAgICAgICAgICAgICAgICAgMTAwJTtcbiAgICBoZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgNTBweDtcbiAgICBvdmVyZmxvdzogICAgICAgICAgICAgICAgICAgaGlkZGVuO1xufVxuXG4ubm90aS10d297XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIGNvbG9yOiByZ2IoMTU1LCAxNTUsIDE1NSk7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4uaXRlbS1ub3RpLW1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiAyMXB0O1xufVxuXG4uYm94LW5vdGktaXRlbXtcbiAgICBtYXJnaW4tdG9wOiAyMXB0O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmhyLW5vdGl7XG4gICAgd2lkdGg6IDE1MDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjQsIDIyNCwgMjI0KSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC00MDBweDsgXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG5cbi5pdGVtLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyBcbn1cblxuLnRpdGxle1xuICAgIG1hcmdpbi10b3A6IDc4cHQ7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(_globalServ, _notificationServ, _userServ) {
        this._globalServ = _globalServ;
        this._notificationServ = _notificationServ;
        this._userServ = _userServ;
        this.profile = {};
        this.notifications = [];
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.getProfile();
    };
    NotificationsPage.prototype.getProfile = function () {
        var _this = this;
        this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(function (data) {
            _this.profile = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, '[0]', {});
            _this.getNotifications();
            console.log('this.profile: ', _this.profile);
        }, function (err) {
            console.log('profile err:', err);
        });
    };
    NotificationsPage.prototype.getDuration = function (createdDateStr) {
        var now = new Date().getTime();
        var created = new Date(createdDateStr).getTime();
        if (now > created) {
            var days = Math.round((now - created) / 3600 / 1000 / 24);
            var origDays = (now - created) / 3600 / 1000 / 24;
            if (days === 0) {
                return Math.round((now - created) / 3600 / 1000) + ' hours ago';
            }
            else if (days > 0 && origDays <= 6 && days <= 6) {
                if (days === 1) {
                    return 'yesterday';
                }
                else {
                    var days_1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    return days_1[new Date(createdDateStr).getDay()];
                }
            }
            else {
                return Math.round(((now - created) / 3600 / 1000 / 24 / 7)) + ' week ago';
            }
        }
        else {
            return '';
        }
    };
    NotificationsPage.prototype.readNotification = function (notification) {
        var _this = this;
        var param = {
            userId: this._globalServ.idUser,
            email: this.profile.email
        };
        this._notificationServ.readNotifications(notification.id, param).subscribe(function (data) {
            console.log('read success: ', data);
            _this.getNotifications();
        }, function (err) {
            console.log('read err: ', err);
        });
    };
    NotificationsPage.prototype.getNotifications = function () {
        var _this = this;
        this._notificationServ.getNotifications(this.profile.email).subscribe(function (data) {
            console.log('notification data: ', data);
            _this.notifications = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'notifications', []);
        }, function (err) {
            console.log('notification err: ', err);
        });
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/pages/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/pages/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var NotificationService = /** @class */ (function () {
    function NotificationService(http, _globalServ) {
        this.http = http;
        this._globalServ = _globalServ;
    }
    NotificationService.prototype.getNotifications = function (email) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + ("/user-notifications/" + this._globalServ.idUser + "?email=" + email));
    };
    NotificationService.prototype.readNotifications = function (notificationId, param) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + ("/read-notification/" + notificationId), param);
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map