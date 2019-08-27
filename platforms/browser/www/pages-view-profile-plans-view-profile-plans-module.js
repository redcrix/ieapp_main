(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-profile-plans-view-profile-plans-module"],{

/***/ "./src/app/pages/view-profile-plans/view-profile-plans.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/view-profile-plans/view-profile-plans.module.ts ***!
  \***********************************************************************/
/*! exports provided: ViewProfilePlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePlansPageModule", function() { return ViewProfilePlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_profile_plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-profile-plans.page */ "./src/app/pages/view-profile-plans/view-profile-plans.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _view_profile_plans_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfilePlansPage"]
    }
];
var ViewProfilePlansPageModule = /** @class */ (function () {
    function ViewProfilePlansPageModule() {
    }
    ViewProfilePlansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_profile_plans_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfilePlansPage"]]
        })
    ], ViewProfilePlansPageModule);
    return ViewProfilePlansPageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-profile-plans/view-profile-plans.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/view-profile-plans/view-profile-plans.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <toolbar [back]=\"true\" title=\"{{firstName + ' Groups'}}\"></toolbar>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n          <div style=\"margin-top: 40pt;\"></div>\n          \n          <div style=\"width: 100%;\" *ngFor=\"let plan of plans; let i = index\">\n            <plan-card [dataPlan]=\"plan\" style=\"width: 100%;\"></plan-card>\n          </div>\n   \n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/view-profile-plans/view-profile-plans.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/view-profile-plans/view-profile-plans.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctcHJvZmlsZS1wbGFucy92aWV3LXByb2ZpbGUtcGxhbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/view-profile-plans/view-profile-plans.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/view-profile-plans/view-profile-plans.page.ts ***!
  \*********************************************************************/
/*! exports provided: ViewProfilePlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePlansPage", function() { return ViewProfilePlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var ViewProfilePlansPage = /** @class */ (function () {
    function ViewProfilePlansPage(_userServ, _globalServ) {
        this._userServ = _userServ;
        this._globalServ = _globalServ;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.firstName = '';
        this.plans = [];
        this.getProfile();
        this.getPlans();
    }
    ViewProfilePlansPage.prototype.ngOnInit = function () {
    };
    ViewProfilePlansPage.prototype.getPlans = function () {
        var _this = this;
        this._userServ.getUserPlans(this._globalServ.idUser).subscribe(function (data) {
            _this.plans = data;
            console.log('user plans: ', _this.plans);
        }, function (err) {
            console.log('err user plans: ', err);
        });
    };
    ViewProfilePlansPage.prototype.getProfile = function () {
        var _this = this;
        this._userServ.getProfile(this._globalServ.idUser, { 'entity': this._globalServ.org })
            .subscribe(function (dataProf) {
            _this.firstName = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(dataProf, 'user.first_name', '');
        }, function (error) { console.log(error); });
    };
    ViewProfilePlansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-profile-plans',
            template: __webpack_require__(/*! ./view-profile-plans.page.html */ "./src/app/pages/view-profile-plans/view-profile-plans.page.html"),
            styles: [__webpack_require__(/*! ./view-profile-plans.page.scss */ "./src/app/pages/view-profile-plans/view-profile-plans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ViewProfilePlansPage);
    return ViewProfilePlansPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-profile-plans-view-profile-plans-module.js.map