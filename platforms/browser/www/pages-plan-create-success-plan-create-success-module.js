(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plan-create-success-plan-create-success-module"],{

/***/ "./src/app/pages/plan-create-success/plan-create-success.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/plan-create-success/plan-create-success.module.ts ***!
  \*************************************************************************/
/*! exports provided: PlanCreateSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanCreateSuccessPageModule", function() { return PlanCreateSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plan_create_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan-create-success.page */ "./src/app/pages/plan-create-success/plan-create-success.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _plan_create_success_page__WEBPACK_IMPORTED_MODULE_6__["PlanCreateSuccessPage"]
    }
];
var PlanCreateSuccessPageModule = /** @class */ (function () {
    function PlanCreateSuccessPageModule() {
    }
    PlanCreateSuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plan_create_success_page__WEBPACK_IMPORTED_MODULE_6__["PlanCreateSuccessPage"]]
        })
    ], PlanCreateSuccessPageModule);
    return PlanCreateSuccessPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plan-create-success/plan-create-success.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/plan-create-success/plan-create-success.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container nopadding\">\n    <div class=\"row graybg\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8 success-container\">\n\n        <div class=\"msgicon\">\n          <div class=\"icon\">\n            <ion-icon ios=\"ios-checkmark\" md=\"md-checkmark\"></ion-icon>\n          </div>\n          <div class=\"comment\">\n            {{ 'plan-create-success.successMsg' | translate }}\n          </div>\n        </div>\n\n        <div class=\"box-center-full btn-pc-box\">\n          <ion-button (click)=\"continue()\" class=\"button-one\" shape=\"round\">\n            <span>{{ 'plan-create-success.continue' | translate }}</span>\n          </ion-button>\n        </div>\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plan-create-success/plan-create-success.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/plan-create-success/plan-create-success.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hr-pc {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important;\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.pc-margin-top {\n  margin-top: 34pt;\n  margin-bottom: 20pt; }\n\n.success-container {\n  height: 100vh; }\n\n.success-container .msgicon {\n    height: 70vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center; }\n\n.success-container .msgicon .icon {\n      width: 101px;\n      height: 101px;\n      border-radius: 101px;\n      border: solid #009cd7;\n      color: #009cd7;\n      text-align: center;\n      line-height: 118px; }\n\n.success-container .msgicon .icon ion-icon {\n        font-size: 55px; }\n\n.success-container .msgicon .comment {\n      margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9wbGFuLWNyZWF0ZS1zdWNjZXNzL3BsYW4tY3JlYXRlLXN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCO0VBQ3hCLDhCQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhLEVBQUE7O0FBRGpCO0lBSVEsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTs7QUFUMUI7TUFZWSxZQUFZO01BQ1osYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixxQkFBOEI7TUFDOUIsY0FBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBOztBQWxCOUI7UUFxQmdCLGVBQWUsRUFBQTs7QUFyQi9CO01BMEJZLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxhbi1jcmVhdGUtc3VjY2Vzcy9wbGFuLWNyZWF0ZS1zdWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oci1wY3tcbiAgICB3aWR0aDogMTUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyNCwgMjI0LCAyMjQpICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogLTQwMHB4OyBcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucGMtbWFyZ2luLXRvcHtcbiAgICBtYXJnaW4tdG9wOiAzNHB0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHQ7XG59XG5cbi5zdWNjZXNzLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIC5tc2dpY29uIHtcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICYgLmljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDFweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCByZ2IoMCwgMTU2LCAyMTUpO1xuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAxNTYsIDIxNSk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTE4cHg7XG4gICAgXG4gICAgICAgICAgICAmIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmIC5jb21tZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/plan-create-success/plan-create-success.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/plan-create-success/plan-create-success.page.ts ***!
  \***********************************************************************/
/*! exports provided: PlanCreateSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanCreateSuccessPage", function() { return PlanCreateSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PlanCreateSuccessPage = /** @class */ (function () {
    function PlanCreateSuccessPage(router) {
        this.router = router;
    }
    PlanCreateSuccessPage.prototype.ngOnInit = function () {
    };
    PlanCreateSuccessPage.prototype.continue = function () {
        this.router.navigate(['tabs/plan-list']);
    };
    PlanCreateSuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-create-success',
            template: __webpack_require__(/*! ./plan-create-success.page.html */ "./src/app/pages/plan-create-success/plan-create-success.page.html"),
            styles: [__webpack_require__(/*! ./plan-create-success.page.scss */ "./src/app/pages/plan-create-success/plan-create-success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlanCreateSuccessPage);
    return PlanCreateSuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plan-create-success-plan-create-success-module.js.map