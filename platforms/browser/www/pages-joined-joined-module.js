(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-joined-joined-module"],{

/***/ "./src/app/pages/joined/joined.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/joined/joined.module.ts ***!
  \***********************************************/
/*! exports provided: JoinedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedPageModule", function() { return JoinedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _joined_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joined.page */ "./src/app/pages/joined/joined.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _joined_page__WEBPACK_IMPORTED_MODULE_6__["JoinedPage"]
    }
];
var JoinedPageModule = /** @class */ (function () {
    function JoinedPageModule() {
    }
    JoinedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_joined_page__WEBPACK_IMPORTED_MODULE_6__["JoinedPage"]]
        })
    ], JoinedPageModule);
    return JoinedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/joined/joined.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/joined/joined.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"--background: #f9f9f9\">\n  <toolbar [back]=\"true\" title=\"{{'profile.joined' | translate}}\" style=\"opacity: 1;\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <!-- <div style=\"margin-top: 40pt;\"></div> -->\n        <hr class=\"hr-joined\">\n        <ion-item (click)=\"goToStudentPlan()\" lines=\"none\">\n          <label class=\"join-item\" position=\"fixed\">{{ 'joined.studentPlans' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"fas fa-chevron-right secondary-text\"></span>\n        </ion-item>\n        <ion-item (click)=\"goToGroupPlan()\" lines=\"none\">\n          <label class=\"join-item\" position=\"fixed\">{{ 'joined.groupPlans' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"fas fa-chevron-right secondary-text\"></span>\n        </ion-item>\n        <ion-item *ngIf=\"_globalServ?.org == 'CEU'\" (click)=\"goToClubs()\" lines=\"none\">\n          <label class=\"join-item\" position=\"fixed\">{{ 'joined.clubs' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"fas fa-chevron-right secondary-text\"></span>\n        </ion-item>\n        <ion-item (click)=\"goToGroups()\" lines=\"none\">\n          <label class=\"join-item\" position=\"fixed\">{{ 'joined.groups' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"fas fa-chevron-right secondary-text\"></span>\n        </ion-item>\n        <hr class=\"hr-joined\" style=\"margin-bottom: 0;\">\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/joined/joined.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/joined/joined.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hr-joined {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important; }\n\n.join-item {\n  font-size: 17px; }\n\n.container {\n  background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9qb2luZWQvam9pbmVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdCQUF3QjtFQUN4Qiw4QkFBeUM7RUFDekMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyxlQUFlLEVBQUE7O0FBRWhCO0VBQ0Msc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2luZWQvam9pbmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oci1qb2luZWR7XG5cdHdpZHRoOiAxNTAwcHggIWltcG9ydGFudDtcblx0YmFja2dyb3VuZDogcmdiKDIyNCwgMjI0LCAyMjQpICFpbXBvcnRhbnQ7XG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG5cdG1hcmdpbi1sZWZ0OiAtNDAwcHg7IFxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5qb2luLWl0ZW17XG5cdGZvbnQtc2l6ZTogMTdweDtcbn1cbi5jb250YWluZXJ7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/joined/joined.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/joined/joined.page.ts ***!
  \*********************************************/
/*! exports provided: JoinedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedPage", function() { return JoinedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var JoinedPage = /** @class */ (function () {
    function JoinedPage(router) {
        this.router = router;
    }
    JoinedPage.prototype.ngOnInit = function () {
    };
    JoinedPage.prototype.goToStudentPlan = function () {
        this.router.navigate(['joined-plans'], {});
    };
    JoinedPage.prototype.goToClubs = function () {
        this.router.navigate(['joined-clubs'], {});
    };
    JoinedPage.prototype.goToGroupPlan = function () {
        this.router.navigate(['joined-group-plans'], {});
    };
    JoinedPage.prototype.goToGroups = function () {
        this.router.navigate(['joined-groups'], {});
    };
    JoinedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joined',
            template: __webpack_require__(/*! ./joined.page.html */ "./src/app/pages/joined/joined.page.html"),
            styles: [__webpack_require__(/*! ./joined.page.scss */ "./src/app/pages/joined/joined.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JoinedPage);
    return JoinedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-joined-joined-module.js.map