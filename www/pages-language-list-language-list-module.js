(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-language-list-language-list-module"],{

/***/ "./src/app/pages/language-list/language-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/language-list/language-list.module.ts ***!
  \*************************************************************/
/*! exports provided: LanguageListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageListPageModule", function() { return LanguageListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _language_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language-list.page */ "./src/app/pages/language-list/language-list.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _language_list_page__WEBPACK_IMPORTED_MODULE_6__["LanguageListPage"]
    }
];
var LanguageListPageModule = /** @class */ (function () {
    function LanguageListPageModule() {
    }
    LanguageListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_language_list_page__WEBPACK_IMPORTED_MODULE_6__["LanguageListPage"]]
        })
    ], LanguageListPageModule);
    return LanguageListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/language-list/language-list.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/language-list/language-list.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar *ngIf=\"modalType == null\" title=\"{{ 'language-list.language' | translate }}\" [back]=\"true\"></toolbar>\n  <toolbar *ngIf=\"modalType == true\" title=\"{{ 'language-list.language' | translate }}\" [cancel]=\"true\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <form>\n          <ion-list lines=\"none\">\n            <ion-item (click)=\"selectEnglish($event)\">\n              <ion-label>{{ 'language-list.english' | translate }}</ion-label>\n              <ion-radio [checked]=\"english\" slot=\"end\"></ion-radio>\n            </ion-item>\n            <ion-item (click)=\"selectSpanish($event)\">\n              <ion-label>{{ 'language-list.spanish' | translate }}</ion-label>\n              <ion-radio [checked]=\"spanish\" slot=\"end\"></ion-radio>\n            </ion-item>\n          </ion-list>\n          <div class=\"box-center-full btn-float-one\">\n            <ion-button (click)=\"selectlanguage()\" class=\"button-one\" shape=\"round\">\n              {{ 'language-list.select' | translate }}</ion-button>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/language-list/language-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/language-list/language-list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmd1YWdlLWxpc3QvbGFuZ3VhZ2UtbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/language-list/language-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/language-list/language-list.page.ts ***!
  \***********************************************************/
/*! exports provided: LanguageListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageListPage", function() { return LanguageListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var LanguageListPage = /** @class */ (function () {
    function LanguageListPage(translate, modalCtrl) {
        this.translate = translate;
        this.modalCtrl = modalCtrl;
    }
    LanguageListPage.prototype.ngOnInit = function () {
    };
    LanguageListPage.prototype.selectEnglish = function (value) {
        this.english = value.target.checked;
        this.spanish = false;
    };
    LanguageListPage.prototype.selectSpanish = function (value) {
        this.spanish = value.target.checked;
        this.english = false;
    };
    LanguageListPage.prototype.selectlanguage = function () {
        this.translate.setDefaultLang('es');
        this.modalCtrl.dismiss({
        //'dismissed': true
        });
    };
    LanguageListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language-list',
            template: __webpack_require__(/*! ./language-list.page.html */ "./src/app/pages/language-list/language-list.page.html"),
            styles: [__webpack_require__(/*! ./language-list.page.scss */ "./src/app/pages/language-list/language-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], LanguageListPage);
    return LanguageListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-language-list-language-list-module.js.map