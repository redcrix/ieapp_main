(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-create-success-group-create-success-module"],{

/***/ "./src/app/pages/group-create-success/group-create-success.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/group-create-success/group-create-success.module.ts ***!
  \***************************************************************************/
/*! exports provided: GroupCreateSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateSuccessPageModule", function() { return GroupCreateSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_create_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-create-success.page */ "./src/app/pages/group-create-success/group-create-success.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _group_create_success_page__WEBPACK_IMPORTED_MODULE_6__["GroupCreateSuccessPage"]
    }
];
var GroupCreateSuccessPageModule = /** @class */ (function () {
    function GroupCreateSuccessPageModule() {
    }
    GroupCreateSuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_create_success_page__WEBPACK_IMPORTED_MODULE_6__["GroupCreateSuccessPage"]]
        })
    ], GroupCreateSuccessPageModule);
    return GroupCreateSuccessPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-create-success/group-create-success.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/group-create-success/group-create-success.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container nopadding\">\n    <div class=\"row graybg\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8 success-container\">\n\n        <div class=\"msgicon\">\n          <div class=\"icon\">\n            <ion-icon ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\n          </div>\n          <div class=\"comment\">\n            {{ 'group-create-success.successMsg' | translate }}\n          </div>\n        </div>\n\n        <div class=\"box-center-full btn-pc-box\">\n          <ion-button (click)=\"continue()\" class=\"button-one\" shape=\"round\">\n            <span>{{ 'group-create-success.continue' | translate }}</span>\n          </ion-button>\n        </div>\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-create-success/group-create-success.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/group-create-success/group-create-success.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hr-pc {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important;\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.pc-margin-top {\n  margin-top: 34pt;\n  margin-bottom: 20pt; }\n\n.success-container {\n  height: 100vh; }\n\n.success-container .msgicon {\n    height: 70vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center; }\n\n.success-container .msgicon .icon {\n      width: 101px;\n      height: 101px;\n      border-radius: 101px;\n      border: solid #009cd7;\n      color: #009cd7;\n      text-align: center;\n      line-height: 118px; }\n\n.success-container .msgicon .icon ion-icon {\n        font-size: 55px; }\n\n.success-container .msgicon .comment {\n      margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUtc3VjY2Vzcy9ncm91cC1jcmVhdGUtc3VjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0I7RUFDeEIsOEJBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWEsRUFBQTs7QUFEakI7SUFJUSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBOztBQVQxQjtNQVlZLFlBQVk7TUFDWixhQUFhO01BQ2Isb0JBQW9CO01BQ3BCLHFCQUE4QjtNQUM5QixjQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUE7O0FBbEI5QjtRQXFCZ0IsZUFBZSxFQUFBOztBQXJCL0I7TUEwQlksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUtc3VjY2Vzcy9ncm91cC1jcmVhdGUtc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHItcGN7XG4gICAgd2lkdGg6IDE1MDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjQsIDIyNCwgMjI0KSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC00MDBweDsgXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnBjLW1hcmdpbi10b3B7XG4gICAgbWFyZ2luLXRvcDogMzRwdDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB0O1xufVxuXG4uc3VjY2Vzcy1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAubXNnaWNvbiB7XG4gICAgICAgIGhlaWdodDogNzB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmIC5pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDFweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAxcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDFweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgcmdiKDAsIDE1NiwgMjE1KTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMTU2LCAyMTUpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExOHB4O1xuICAgIFxuICAgICAgICAgICAgJiBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiAuY29tbWVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/group-create-success/group-create-success.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/group-create-success/group-create-success.page.ts ***!
  \*************************************************************************/
/*! exports provided: GroupCreateSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateSuccessPage", function() { return GroupCreateSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GroupCreateSuccessPage = /** @class */ (function () {
    function GroupCreateSuccessPage(router) {
        this.router = router;
    }
    GroupCreateSuccessPage.prototype.ngOnInit = function () {
    };
    GroupCreateSuccessPage.prototype.continue = function () {
        this.router.navigate(['tabs/plan-list']);
    };
    GroupCreateSuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-create-success',
            template: __webpack_require__(/*! ./group-create-success.page.html */ "./src/app/pages/group-create-success/group-create-success.page.html"),
            styles: [__webpack_require__(/*! ./group-create-success.page.scss */ "./src/app/pages/group-create-success/group-create-success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GroupCreateSuccessPage);
    return GroupCreateSuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-create-success-group-create-success-module.js.map