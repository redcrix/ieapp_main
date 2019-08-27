(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-city-guide-item-city-guide-item-module"],{

/***/ "./node_modules/@yellowspot/ng-truncate/fesm5/yellowspot-ng-truncate.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@yellowspot/ng-truncate/fesm5/yellowspot-ng-truncate.js ***!
  \******************************************************************************/
/*! exports provided: TRUNCATE_PIPES, TruncateModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUNCATE_PIPES", function() { return TRUNCATE_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateModule", function() { return TruncateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TruncateCharactersPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TruncateWordsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TruncateCharactersPipe = /** @class */ (function () {
    function TruncateCharactersPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    TruncateCharactersPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        if (!value) {
            value = '';
        }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
        }
        else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    TruncateCharactersPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'truncate'
                },] }
    ];
    return TruncateCharactersPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TruncateWordsPipe = /** @class */ (function () {
    function TruncateWordsPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    TruncateWordsPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} limit
     * @param {?=} trail
     * @return {?}
     */
    function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        /** @type {?} */
        var result = value || '';
        if (value) {
            /** @type {?} */
            var words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    };
    TruncateWordsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'words'
                },] }
    ];
    return TruncateWordsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TRUNCATE_PIPES = [TruncateCharactersPipe, TruncateWordsPipe];
var TruncateModule = /** @class */ (function () {
    function TruncateModule() {
    }
    TruncateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [TRUNCATE_PIPES],
                    exports: [TRUNCATE_PIPES]
                },] }
    ];
    return TruncateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=yellowspot-ng-truncate.js.map

/***/ }),

/***/ "./src/app/pages/city-guide-item/city-guide-item.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/city-guide-item/city-guide-item.module.ts ***!
  \*****************************************************************/
/*! exports provided: CityGuideItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityGuideItemPageModule", function() { return CityGuideItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _city_guide_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-guide-item.page */ "./src/app/pages/city-guide-item/city-guide-item.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @yellowspot/ng-truncate */ "./node_modules/@yellowspot/ng-truncate/fesm5/yellowspot-ng-truncate.js");









var routes = [
    {
        path: '',
        component: _city_guide_item_page__WEBPACK_IMPORTED_MODULE_6__["CityGuideItemPage"]
    }
];
var CityGuideItemPageModule = /** @class */ (function () {
    function CityGuideItemPageModule() {
    }
    CityGuideItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_8__["TruncateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_city_guide_item_page__WEBPACK_IMPORTED_MODULE_6__["CityGuideItemPage"]]
        })
    ], CityGuideItemPageModule);
    return CityGuideItemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/city-guide-item/city-guide-item.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/city-guide-item/city-guide-item.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-item fas fa-chevron-left\"></span>\n  </div>\n  <div>\n    <img class=\"main-item-image\" src=\"{{url}}/get-image/{{getItem?.article?.image}}\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n\n        <div class=\"item-title\">\n          <h2>\n            <span *ngIf=\"_globalServ?.language == 'en'\">{{getItem?.article?.name_EN}}</span>\n            <span *ngIf=\"_globalServ?.language == 'es'\">{{getItem?.article?.name_ES}}</span>\n          </h2>\n        </div>\n\n        <div class=\"box-center-full four-icons\">\n          <div class=\"box-blue-circle\" (click)=\"goToSite()\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/website.png\">\n            <div class=\"blue-text\">{{ 'city-guide-item.Website' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\" (click)=\"callWithNumber()\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/call.png\">\n            <div class=\"blue-text\">{{ 'city-guide-item.Call' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/direction.png\">\n            <div class=\"blue-text\">{{ 'city-guide-item.Directions' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\" (click)=\"goToCreatePlan()\">\n            <img width=\"48px\" height=\"48px\" src=\"assets/img/plan.png\">\n            <div class=\"blue-text\">{{ 'city-guide-item.createPlan' | translate }}</div>\n          </div>\n        </div>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"information-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'city-guide-item.details' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">\n              <span *ngIf=\"_globalServ?.language == 'en' && (truncating && getItem?.article?.description_EN.length > limit)\">{{getItem?.article?.description_EN | truncate : limit}}</span>\n              <span *ngIf=\"_globalServ?.language == 'es' && (truncating && getItem?.article?.description_ES.length > limit)\">{{getItem?.article?.description_ES | truncate : limit}}</span>\n\n              <span *ngIf=\"_globalServ?.language == 'en' && (!truncating && getItem?.article?.description_EN.length > limit)\">{{getItem?.article?.description_EN}}</span>\n              <span *ngIf=\"_globalServ?.language == 'es' && (!truncating && getItem?.article?.description_ES.length > limit)\">{{getItem?.article?.description_ES}}</span>\n            </td>\n          </tr>\n          <tr *ngIf=\"truncating\">\n            <td></td>\n            <td class=\"blue-text size-18-pt\" (click)=\"truncating = false\">{{ 'city-guide-item.readMore' | translate }}</td>\n          </tr>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"clock\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'city-guide-item.openingHours' | translate }}</td>\n          </tr>\n          <tr *ngFor=\"let item of getItem?.article?.Places\" class=\"secondary-text weight-600\">\n            <td></td>\n            <td *ngIf=\"_globalServ?.language == 'en'\">{{item?.hours_EN}} <span *ngIf=\"item?.hours_EN != ''\">({{item?.name_EN}})</span></td>\n            <td *ngIf=\"_globalServ?.language == 'es'\">{{item?.hours_ES}} <span *ngIf=\"item?.hours_ES != ''\">({{item?.name_ES}})</span></td>\n          </tr>\n          <tr>\n            <!--<tr class=\"secondary-text\">\n            <td></td>\n            <td>10:00 - 11:00</td>\n          </tr>\n          <tr class=\"secondary-text weight-600\">\n            <td></td>\n            <td>Sunday</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>Closed</td>\n          </tr>-->\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"pin\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'city-guide-item.location' | translate }}</td>\n          </tr>\n          <tbody *ngFor=\"let item of getItem?.article?.Places\">\n            <tr class=\"secondary-text\">\n              <td></td>\n              <td *ngIf=\"_globalServ?.language == 'en'\">{{item?.name_EN}}</td>\n              <td *ngIf=\"_globalServ?.language == 'es'\">{{item?.name_ES}}</td>\n            </tr>\n            <tr>\n              <tr class=\"secondary-text\">\n                <td></td>\n                <td>{{item?.street}} {{item?.number}}</td>\n              </tr>\n              <tr>\n                <td></td>\n                <td>\n                  <ion-chip class=\"btn-blue-general\">\n                    <ion-label>{{ 'city-guide-item.Website' | translate }}</ion-label>\n                  </ion-chip>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"box-map-one\">\n            <div id=\"map\" class=\"map-one\" #map></div>\n          </div>\n\n          <table>\n            <tr class=\"weight-600\">\n              <td>\n                <ion-icon class=\"icon-item\" name=\"ios-bus\"></ion-icon>\n              </td>\n              <td class=\"title-item\">{{ 'city-guide-item.howToGetThere' | translate }}</td>\n            </tr>\n            <tr class=\"secondary-text weight-600\">\n              <td></td>\n              <td>{{ 'city-guide-item.bus' | translate }}</td>\n            </tr>\n            <tr *ngFor=\"let item of getItem?.article?.Places\" class=\"secondary-text\">\n              <td></td>\n              <td>{{item?.bus}} (<span *ngIf=\"_globalServ?.language == 'en'\">{{item?.name_EN}}</span><span *ngIf=\"_globalServ?.language == 'es'\">{{item?.name_ES}}</span>)</td>\n            </tr>\n            <tr class=\"secondary-text weight-600\">\n              <td></td>\n              <td>{{ 'city-guide-item.metro' | translate }}</td>\n            </tr>\n            <tr *ngFor=\"let item of getItem?.article?.Places\" class=\"secondary-text\">\n              <td></td>\n              <td>{{item?.metro}} (<span *ngIf=\"_globalServ?.language == 'en'\">{{item?.name_EN}}</span><span *ngIf=\"_globalServ?.language == 'es'\">{{item?.name_ES}}</span>)</td>\n            </tr>\n          </table>\n\n          <table class=\"margin-last-table\">\n            <tr class=\"weight-600\">\n              <td>\n                <ion-icon class=\"icon-item\" name=\"ios-share\"></ion-icon>\n              </td>\n              <td class=\"title-item\">{{ 'city-guide-item.share' | translate }}</td>\n            </tr>\n            <tr class=\"secondary-text\">\n              <td></td>\n              <td>\n                <ion-chip class=\"btn-facebook\">\n                  <ion-label>Facebook</ion-label>\n                </ion-chip>\n                <ion-chip class=\"btn-twitter\">\n                  <ion-label>Twitter</ion-label>\n                </ion-chip>\n                <ion-chip class=\"btn-email\">\n                  <ion-label>Email</ion-label>\n                </ion-chip>\n                <ion-chip class=\"btn-whatsapp\">\n                  <ion-label>WhatsApp</ion-label>\n                </ion-chip>\n              </td>\n            </tr>\n            <tr>\n            </table>\n\n          </div>\n          <div class=\"col-md-2\"></div>\n        </div>\n      </div>\n    </ion-content>"

/***/ }),

/***/ "./src/app/pages/city-guide-item/city-guide-item.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/city-guide-item/city-guide-item.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n/*\n.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}\n*/\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\n.four-icons {\n  display: flex;\n  justify-content: space-evenly; }\n.four-icons .box-blue-circle {\n  margin: unset; }\n.four-icons .icon-blue {\n  font-size: 20px;\n  height: 40px;\n  width: 40px;\n  padding-top: 10px; }\nh2 {\n  font-family: 'SF Pro Heavy';\n  font-size: 20px; }\n.blue-text {\n  font-size: 12px; }\n.description {\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  height: 70px;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 1;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n/*\n.sc-ion-card-md-h {\n\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px; \n}\n*/\n.btn-facebook,\n.btn-twitter,\n.btn-email,\n.btn-whatsapp,\n.btn-blue-general {\n  line-height: 0;\n  padding: 12px 22px;\n  height: auto;\n  margin: 5px 5px 5px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9jaXR5LWd1aWRlLWl0ZW0vY2l0eS1ndWlkZS1pdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2l0eS1ndWlkZS1pdGVtL2NpdHktZ3VpZGUtaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDaUJFO0FERUY7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdkI7Ozs7O0NDR0M7QURJRDtFQUNHLGdCQUFnQixFQUFBO0FBR25CO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCLEVBQUE7QUFHakM7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7QUFFbkI7RUFDSSxlQUFlLEVBQUE7QUFHbkI7RUFDSSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBRXJCLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUUzQjs7Ozs7Ozs7Q0NEQztBRFdEOzs7OztFQUtJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2l0eS1ndWlkZS1pdGVtL2NpdHktZ3VpZGUtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5idG4tYmFjay1jb250ZW50e1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpOy5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmFja3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgcGFkZGluZzogM3B4IDNweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59Ki9cblxuLmJveC1jZW50ZXItZnVsbHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qXG4uaXRlbS1hdmF0YXItY2FyZC5oeWRyYXRlZHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG4qL1xuXG4ubWFwLW9uZXtcbiAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnRhYmxle1xuICAgIG1hcmdpbi10b3A6IDI0cHQ7XG59XG5cbi5mb3VyLWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZm91ci1pY29ucyAuYm94LWJsdWUtY2lyY2xlIHtcbiAgICBtYXJnaW46IHVuc2V0O1xufVxuXG4uZm91ci1pY29ucyAuaWNvbi1ibHVlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5oMntcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBIZWF2eSc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJsdWUtdGV4dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLy8gZm9udC1mYW1pbHk6ICdTRiBQcm8gSGVhdnknO1xufVxuLmRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4vKlxuLnNjLWlvbi1jYXJkLW1kLWgge1xuXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXG4gICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7IFxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7IFxufVxuKi9cblxuLmJ0bi1mYWNlYm9vayxcbi5idG4tdHdpdHRlcixcbi5idG4tZW1haWwsXG4uYnRuLXdoYXRzYXBwLFxuLmJ0bi1ibHVlLWdlbmVyYWx7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTJweCAyMnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDA7XG59XG4iLCIvKi5idG4tYmFjay1jb250ZW50e1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpOy5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmFja3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgcGFkZGluZzogM3B4IDNweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59Ki9cbi5ib3gtY2VudGVyLWZ1bGwge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG5cbi8qXG4uaXRlbS1hdmF0YXItY2FyZC5oeWRyYXRlZHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG4qL1xuLm1hcC1vbmUge1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjRwdDsgfVxuXG4uZm91ci1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XG5cbi5mb3VyLWljb25zIC5ib3gtYmx1ZS1jaXJjbGUge1xuICBtYXJnaW46IHVuc2V0OyB9XG5cbi5mb3VyLWljb25zIC5pY29uLWJsdWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gSGVhdnknO1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuLmJsdWUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG4vKlxuLnNjLWlvbi1jYXJkLW1kLWgge1xuXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXG4gICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7IFxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7IFxufVxuKi9cbi5idG4tZmFjZWJvb2ssXG4uYnRuLXR3aXR0ZXIsXG4uYnRuLWVtYWlsLFxuLmJ0bi13aGF0c2FwcCxcbi5idG4tYmx1ZS1nZW5lcmFsIHtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEycHggMjJweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDVweCA1cHggNXB4IDA7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/city-guide-item/city-guide-item.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/city-guide-item/city-guide-item.page.ts ***!
  \***************************************************************/
/*! exports provided: CityGuideItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityGuideItemPage", function() { return CityGuideItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_city_guide_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/city-guide.service */ "./src/app/services/city-guide.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");












var CityGuideItemPage = /** @class */ (function () {
    function CityGuideItemPage(router, location, _globalServ, _cityGuideServ, actRoute, iab, alertController, callNumber) {
        this.router = router;
        this.location = location;
        this._globalServ = _globalServ;
        this._cityGuideServ = _cityGuideServ;
        this.actRoute = actRoute;
        this.iab = iab;
        this.alertController = alertController;
        this.callNumber = callNumber;
        this.zoom = 14;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.limit = 250;
        this.truncating = true;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.id = getParams.id;
        }
    }
    CityGuideItemPage.prototype.ngOnInit = function () {
    };
    CityGuideItemPage.prototype.callWithNumber = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            subHeader: '18001010101',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Call',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.callNumber.callNumber("18001010101", true)
                                            .then(function (res) { return console.log('Launched dialer!', res); })
                                            .catch(function (err) { return console.log('Error launching dialer', err); });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CityGuideItemPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._cityGuideServ.getItem(this.id)
            .subscribe(function (data) {
            _this.getItem = data;
            for (var _i = 0, _a = _this.getItem.article.Places; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.latitudeInit = Number(item.latitude);
                _this.longitudeInit = Number(item.longitude);
                break;
            }
            //set map
            var coords = new google.maps.LatLng(_this.latitudeInit, _this.longitudeInit);
            var mapOptions = {
                center: coords,
                zoom: _this.zoom,
                maxZoom: 17,
                minZoom: 3,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                styles: [
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
            };
            var map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            for (var _b = 0, _c = _this.getItem.article.Places; _b < _c.length; _b++) {
                var item = _c[_b];
                var marker = new google.maps.Marker({
                    map: map,
                    position: { lat: Number(item.latitude), lng: Number(item.longitude) },
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    CityGuideItemPage.prototype.goBack = function () {
        this.location.back();
    };
    CityGuideItemPage.prototype.goToCreatePlan = function () {
        this.router.navigate(['plan-create']);
    };
    CityGuideItemPage.prototype.goToSite = function () {
        console.log('link: ', Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(this.getItem, 'article.website', ''));
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(this.getItem, 'article.website', '') !== '') {
            this.iab.create(Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(this.getItem, 'article.website', ''), '_system');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CityGuideItemPage.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CityGuideItemPage.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CityGuideItemPage.prototype, "limit", void 0);
    CityGuideItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-guide-item',
            template: __webpack_require__(/*! ./city-guide-item.page.html */ "./src/app/pages/city-guide-item/city-guide-item.page.html"),
            styles: [__webpack_require__(/*! ./city-guide-item.page.scss */ "./src/app/pages/city-guide-item/city-guide-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_city_guide_service__WEBPACK_IMPORTED_MODULE_4__["CityGuideService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]])
    ], CityGuideItemPage);
    return CityGuideItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-city-guide-item-city-guide-item-module.js.map