(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-profile-groups-view-profile-groups-module"],{

/***/ "./src/app/pages/view-profile-groups/view-profile-groups.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/view-profile-groups/view-profile-groups.module.ts ***!
  \*************************************************************************/
/*! exports provided: ViewProfileGroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileGroupsPageModule", function() { return ViewProfileGroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_profile_groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-profile-groups.page */ "./src/app/pages/view-profile-groups/view-profile-groups.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _view_profile_groups_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfileGroupsPage"]
    }
];
var ViewProfileGroupsPageModule = /** @class */ (function () {
    function ViewProfileGroupsPageModule() {
    }
    ViewProfileGroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_profile_groups_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfileGroupsPage"]]
        })
    ], ViewProfileGroupsPageModule);
    return ViewProfileGroupsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-profile-groups/view-profile-groups.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/view-profile-groups/view-profile-groups.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <toolbar [back]=\"true\" title=\"{{firstName + ' Groups'}}\"></toolbar>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n          <div style=\"margin-top: 40pt;\"></div>\n          \n          <div class=\"group-card-row\" *ngIf=\"groups.length !== 0\">\n            <div class=\"text-center group-card\" *ngFor=\"let group of groups; let i=index\">\n              <img src=\"{{group.image}}\" />\n              <h5 class=\"title\">{{group.title}}</h5>\n              <div class=\"icon-status\">\n                <ion-icon name=\"ios-person\"></ion-icon>\n                <span class=\"status\">{{group.group_members_count}}</span>\n              </div>\n            </div>\n          </div>\n   \n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/view-profile-groups/view-profile-groups.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/view-profile-groups/view-profile-groups.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".group-card-row {\n  display: flex;\n  flex-wrap: wrap; }\n  .group-card-row .group-card {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    width: 29.3%;\n    cursor: pointer;\n    margin-right: 2%;\n    margin-left: 2%; }\n  .group-card-row .group-card img {\n      border-radius: 5px;\n      width: 100%; }\n  .group-card-row .group-card .title {\n      font-size: 12px;\n      font-weight: bold;\n      margin-top: 10px;\n      margin-bottom: 5px; }\n  .group-card-row .group-card .icon-status {\n      display: flex;\n      justify-content: center;\n      font-size: 12px;\n      color: #9b9b9b; }\n  .group-card-row .group-card .icon-status ion-icon {\n        font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy92aWV3LXByb2ZpbGUtZ3JvdXBzL3ZpZXctcHJvZmlsZS1ncm91cHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBQTtFQUZqQjtJQUtJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBVm5CO01BYU0sa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQWRqQjtNQWtCTSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQXJCeEI7TUF5Qk0sYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixlQUFlO01BQ2YsY0FBYyxFQUFBO0VBNUJwQjtRQStCUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWV3LXByb2ZpbGUtZ3JvdXBzL3ZpZXctcHJvZmlsZS1ncm91cHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwLWNhcmQtcm93IHsgLy8gbmV3LXdheSBjYXJkIHJvd1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLmdyb3VwLWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMjkuMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICBcbiAgICAmIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIFxuICAgICYgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gIFxuICAgICYgLmljb24tc3RhdHVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICBcbiAgICAgICYgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/view-profile-groups/view-profile-groups.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/view-profile-groups/view-profile-groups.page.ts ***!
  \***********************************************************************/
/*! exports provided: ViewProfileGroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileGroupsPage", function() { return ViewProfileGroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var ViewProfileGroupsPage = /** @class */ (function () {
    function ViewProfileGroupsPage(_userServ, _globalServ) {
        this._userServ = _userServ;
        this._globalServ = _globalServ;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.firstName = '';
        this.groups = [];
        this.getProfile();
        this.getGroups();
    }
    ViewProfileGroupsPage.prototype.ngOnInit = function () {
    };
    ViewProfileGroupsPage.prototype.getGroups = function () {
        var _this = this;
        this._userServ.getUserGroups(this._globalServ.idUser).subscribe(function (data) {
            _this.groups = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'group', []);
        }, function (err) {
            console.log('err user groups: ', err);
        });
    };
    ViewProfileGroupsPage.prototype.getProfile = function () {
        var _this = this;
        this._userServ.getProfile(this._globalServ.idUser, { 'entity': this._globalServ.org })
            .subscribe(function (dataProf) {
            _this.firstName = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(dataProf, 'user.first_name', '');
        }, function (error) { console.log(error); });
    };
    ViewProfileGroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-profile-groups',
            template: __webpack_require__(/*! ./view-profile-groups.page.html */ "./src/app/pages/view-profile-groups/view-profile-groups.page.html"),
            styles: [__webpack_require__(/*! ./view-profile-groups.page.scss */ "./src/app/pages/view-profile-groups/view-profile-groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ViewProfileGroupsPage);
    return ViewProfileGroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-profile-groups-view-profile-groups-module.js.map