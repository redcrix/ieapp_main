(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-discounts-list-offers-discounts-list-module"],{

/***/ "./src/app/pages/offers-discounts-list/offers-discounts-list.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/offers-discounts-list/offers-discounts-list.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OffersDiscountsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDiscountsListPageModule", function() { return OffersDiscountsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_discounts_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers-discounts-list.page */ "./src/app/pages/offers-discounts-list/offers-discounts-list.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _offers_discounts_list_page__WEBPACK_IMPORTED_MODULE_6__["OffersDiscountsListPage"]
    }
];
var OffersDiscountsListPageModule = /** @class */ (function () {
    function OffersDiscountsListPageModule() {
    }
    OffersDiscountsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_offers_discounts_list_page__WEBPACK_IMPORTED_MODULE_6__["OffersDiscountsListPage"]]
        })
    ], OffersDiscountsListPageModule);
    return OffersDiscountsListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/offers-discounts-list/offers-discounts-list.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/offers-discounts-list/offers-discounts-list.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrolling($event)\">\n<toolbar [map]=\"true\" [setting]=\"true\" [title]=\"pageTitleName ? ('offers-discounts-list.offersAndDiscounts' | translate) : ''\"></toolbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1 class=\"title\">{{ 'offers-discounts-list.offersAndDiscounts' | translate }}</h1>\n      <div *ngIf=\"!_globalServ.listOfferAndDisc?.discounts\" class=\"spinner-div\">\n        <ion-spinner name=\"lines\"></ion-spinner>\n      </div>\n      <div *ngIf=\"_globalServ.listOfferAndDisc?.discounts\" class=\"spinner-div\">\n        <offer-discount-card *ngFor=\"let item of _globalServ.listOfferAndDisc?.discounts\" [dataOffDisc]=\"item\"></offer-discount-card>\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/offers-discounts-list/offers-discounts-list.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/offers-discounts-list/offers-discounts-list.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-div {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9vZmZlcnMtZGlzY291bnRzLWxpc3Qvb2ZmZXJzLWRpc2NvdW50cy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb2ZmZXJzLWRpc2NvdW50cy1saXN0L29mZmVycy1kaXNjb3VudHMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci1kaXYge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIG1hcmdpbjogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/offers-discounts-list/offers-discounts-list.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/offers-discounts-list/offers-discounts-list.page.ts ***!
  \***************************************************************************/
/*! exports provided: OffersDiscountsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDiscountsListPage", function() { return OffersDiscountsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_offer_discount_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/offer-discount.service */ "./src/app/services/offer-discount.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");




var OffersDiscountsListPage = /** @class */ (function () {
    function OffersDiscountsListPage(_offerDiscountServ, _globalServ) {
        this._offerDiscountServ = _offerDiscountServ;
        this._globalServ = _globalServ;
        this.pageTitleName = false;
        this._offerDiscountServ.getDataOfferDiscountList();
    }
    OffersDiscountsListPage.prototype.ngOnInit = function () {
    };
    OffersDiscountsListPage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    OffersDiscountsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers-discounts-list',
            template: __webpack_require__(/*! ./offers-discounts-list.page.html */ "./src/app/pages/offers-discounts-list/offers-discounts-list.page.html"),
            styles: [__webpack_require__(/*! ./offers-discounts-list.page.scss */ "./src/app/pages/offers-discounts-list/offers-discounts-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_offer_discount_service__WEBPACK_IMPORTED_MODULE_2__["OfferDiscountService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], OffersDiscountsListPage);
    return OffersDiscountsListPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-discounts-list-offers-discounts-list-module.js.map