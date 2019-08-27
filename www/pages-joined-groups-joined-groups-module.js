(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-joined-groups-joined-groups-module"],{

/***/ "./src/app/pages/joined-groups/joined-groups.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/joined-groups/joined-groups.module.ts ***!
  \*************************************************************/
/*! exports provided: JoinedGroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedGroupsPageModule", function() { return JoinedGroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _joined_groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joined-groups.page */ "./src/app/pages/joined-groups/joined-groups.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _joined_groups_page__WEBPACK_IMPORTED_MODULE_6__["JoinedGroupsPage"]
    }
];
var JoinedGroupsPageModule = /** @class */ (function () {
    function JoinedGroupsPageModule() {
    }
    JoinedGroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_joined_groups_page__WEBPACK_IMPORTED_MODULE_6__["JoinedGroupsPage"]]
        })
    ], JoinedGroupsPageModule);
    return JoinedGroupsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/joined-groups/joined-groups.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/joined-groups/joined-groups.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar [back]=\"true\" title=\"{{('profile.joined' | translate) + ' ' + ('joined.groups' | translate)}}\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div style=\"margin-top: 40pt;\"></div>\n        \n        <div class=\"j-card-row\">\n          <div class=\"text-center j-card\" *ngFor=\"let jGroup of joinedGroups; let i=index\" (click)=\"goToGroupDetail(jGroup)\">\n            <img src=\"{{jGroup?.image}}\" />\n            <h5 class=\"title\">{{jGroup?.title}}</h5>\n            <div class=\"icon-status\">\n              <ion-icon name=\"ios-person\"></ion-icon>\n              <span class=\"status\">{{jGroup?.members_count}}</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"box-center-full btn-pc-box\">\n          <ion-button (click)=\"goToGroups()\" class=\"button-one\" shape=\"round\">\n            <span>{{ 'joined.viewAllGroups' | translate }}</span>\n          </ion-button>\n        </div>\n        \n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/joined-groups/joined-groups.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/joined-groups/joined-groups.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".j-card-row {\n  display: flex;\n  flex-wrap: wrap; }\n  .j-card-row .j-card {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    width: 29.3%;\n    cursor: pointer;\n    margin-right: 2%;\n    margin-left: 2%; }\n  .j-card-row .j-card img {\n      border-radius: 5px;\n      width: 100%;\n      min-height: 108px; }\n  .j-card-row .j-card .title {\n      font-size: 12px;\n      font-weight: bold;\n      margin-top: 10px;\n      margin-bottom: 5px; }\n  .j-card-row .j-card .icon-status {\n      display: flex;\n      justify-content: center;\n      font-size: 12px;\n      color: #9b9b9b; }\n  .j-card-row .j-card .icon-status ion-icon {\n        font-size: 15px; }\n  .btn-pc-box {\n  margin-top: 32pt;\n  margin-bottom: 36pt;\n  background: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9qb2luZWQtZ3JvdXBzL2pvaW5lZC1ncm91cHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBQTtFQUZqQjtJQUtJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBVm5CO01BYU0sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTtFQWZ2QjtNQW1CTSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQXRCeEI7TUEwQk0sYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixlQUFlO01BQ2YsY0FBYyxFQUFBO0VBN0JwQjtRQWdDUSxlQUFlLEVBQUE7RUFNdkI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvam9pbmVkLWdyb3Vwcy9qb2luZWQtZ3JvdXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qLWNhcmQtcm93IHsgLy8gbmV3LXdheSBjYXJkIHJvd1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLmotY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAyOS4zJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG5cbiAgICAmIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwOHB4O1xuICAgIH1cblxuICAgICYgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAmIC5pY29uLXN0YXR1cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzliOWI5YjtcblxuICAgICAgJiBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJ0bi1wYy1ib3h7XG4gIG1hcmdpbi10b3A6IDMycHQ7XG4gIG1hcmdpbi1ib3R0b206IDM2cHQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/joined-groups/joined-groups.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/joined-groups/joined-groups.page.ts ***!
  \***********************************************************/
/*! exports provided: JoinedGroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedGroupsPage", function() { return JoinedGroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var JoinedGroupsPage = /** @class */ (function () {
    function JoinedGroupsPage(router, _groupServ, _globalServ) {
        var _this = this;
        this.router = router;
        this._groupServ = _groupServ;
        this._globalServ = _globalServ;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this._groupServ.joinedGroups(this._globalServ.idUser).subscribe(function (data) {
            _this.joinedGroups = data;
            console.log('joined groups scc: ', _this.joinedGroups);
        }, function (err) {
            console.log('joined gropus err: ', err);
        });
    }
    JoinedGroupsPage.prototype.goToGroups = function () {
        this.router.navigate(['groups']);
    };
    JoinedGroupsPage.prototype.goToGroupDetail = function (group) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': group.id })
            },
        };
        this.router.navigate(['group-detail'], navigationExtras);
    };
    JoinedGroupsPage.prototype.ngOnInit = function () {
    };
    JoinedGroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joined-groups',
            template: __webpack_require__(/*! ./joined-groups.page.html */ "./src/app/pages/joined-groups/joined-groups.page.html"),
            styles: [__webpack_require__(/*! ./joined-groups.page.scss */ "./src/app/pages/joined-groups/joined-groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], JoinedGroupsPage);
    return JoinedGroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-joined-groups-joined-groups-module.js.map