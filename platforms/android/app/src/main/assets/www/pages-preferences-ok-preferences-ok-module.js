(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preferences-ok-preferences-ok-module"],{

/***/ "./src/app/pages/preferences-ok/preferences-ok.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/preferences-ok/preferences-ok.module.ts ***!
  \***************************************************************/
/*! exports provided: PreferencesOkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesOkPageModule", function() { return PreferencesOkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preferences_ok_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preferences-ok.page */ "./src/app/pages/preferences-ok/preferences-ok.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _preferences_ok_page__WEBPACK_IMPORTED_MODULE_6__["PreferencesOkPage"]
    }
];
var PreferencesOkPageModule = /** @class */ (function () {
    function PreferencesOkPageModule() {
    }
    PreferencesOkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_preferences_ok_page__WEBPACK_IMPORTED_MODULE_6__["PreferencesOkPage"]]
        })
    ], PreferencesOkPageModule);
    return PreferencesOkPageModule;
}());



/***/ }),

/***/ "./src/app/pages/preferences-ok/preferences-ok.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/preferences-ok/preferences-ok.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div class=\"box-center-full box-img\">\n          <img width=\"90px\" height=\"90px\" src=\"assets/img/ok-2.png\">\n          <div class=\"box-congrats\">\n            {{ 'preferences-ok.congrats' | translate }}\n          </div>\n        </div>\n\n        <div class=\"box-center-full btn-float-one\">\n          <ion-button (click)=\"goToPlans()\" class=\"button-one\" shape=\"round\">{{ 'preferences-ok.continue' | translate }}</ion-button>\n        </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/preferences-ok/preferences-ok.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/preferences-ok/preferences-ok.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  -webkit-appearance: none; }\n\n.box-img {\n  position: fixed;\n  /* or absolute */\n  top: 40%;\n  left: 50%;\n  right: 0;\n  left: 0; }\n\n.box-congrats {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9wcmVmZXJlbmNlcy1vay9wcmVmZXJlbmNlcy1vay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFFSSxlQUFlO0VBQUUsZ0JBQUE7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTyxFQUFBOztBQUdYO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVmZXJlbmNlcy1vay9wcmVmZXJlbmNlcy1vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5ib3gtaW1ne1xuICAgIC8vbWFyZ2luLXRvcDogNjAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogb3IgYWJzb2x1dGUgKi9cbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmJveC1jb25ncmF0c3tcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/preferences-ok/preferences-ok.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/preferences-ok/preferences-ok.page.ts ***!
  \*************************************************************/
/*! exports provided: PreferencesOkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesOkPage", function() { return PreferencesOkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PreferencesOkPage = /** @class */ (function () {
    function PreferencesOkPage(router) {
        this.router = router;
    }
    PreferencesOkPage.prototype.ngOnInit = function () {
    };
    PreferencesOkPage.prototype.goToPlans = function () {
        var index = window.history.length;
        window.history.go(-index);
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({})
            }, replaceUrl: true
        };
        this.router.navigate(['tabs/plan-list'], navigationExtras);
    };
    PreferencesOkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preferences-ok',
            template: __webpack_require__(/*! ./preferences-ok.page.html */ "./src/app/pages/preferences-ok/preferences-ok.page.html"),
            styles: [__webpack_require__(/*! ./preferences-ok.page.scss */ "./src/app/pages/preferences-ok/preferences-ok.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PreferencesOkPage);
    return PreferencesOkPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-preferences-ok-preferences-ok-module.js.map