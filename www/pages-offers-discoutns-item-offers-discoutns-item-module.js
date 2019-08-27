(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-offers-discoutns-item-offers-discoutns-item-module"],{

/***/ "./src/app/pages/offers-discoutns-item/offers-discoutns-item.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/offers-discoutns-item/offers-discoutns-item.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OffersDiscoutnsItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDiscoutnsItemPageModule", function() { return OffersDiscoutnsItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_discoutns_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers-discoutns-item.page */ "./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _offers_discoutns_item_page__WEBPACK_IMPORTED_MODULE_6__["OffersDiscoutnsItemPage"]
    }
];
var OffersDiscoutnsItemPageModule = /** @class */ (function () {
    function OffersDiscoutnsItemPageModule() {
    }
    OffersDiscoutnsItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_offers_discoutns_item_page__WEBPACK_IMPORTED_MODULE_6__["OffersDiscoutnsItemPage"]]
        })
    ], OffersDiscoutnsItemPageModule);
    return OffersDiscoutnsItemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-item fas fa-chevron-left\"></span>\n  </div>\n  <div>\n    <img class=\"main-item-image\" src=\"{{item?.image}}\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n\n        <div class=\"item-title\">\n          <h2>{{item?.title}}</h2>\n        </div>\n\n        <div class=\"box-center-full\">\n          <div class=\"box-blue-circle\">\n            <span class=\"blue-circle icon-blue fas fa-globe\"></span>\n            <div class=\"blue-text\">{{ 'offers-discounts-item.Website' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <span class=\"blue-circle icon-blue fas fa-phone\"></span>\n            <div class=\"blue-text\">{{ 'offers-discounts-item.Call' | translate }}</div>\n          </div>\n          <div class=\"box-blue-circle\">\n            <span class=\"blue-circle icon-blue fas fa-location-arrow\"></span>\n            <div class=\"blue-text\">{{ 'offers-discounts-item.Directions' | translate }}</div>\n          </div>\n        </div>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"information-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'offers-discounts-item.details' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">{{item?.description}}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"blue-text size-18-pt\">{{ 'offers-discounts-item.readMore' | translate }}</td>\n          </tr>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"md-calendar\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'offers-discounts-item.validUntil' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>{{item?.validUntil | date:'medium'}}</td>\n          </tr>\n          <tr>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-pricetag\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'offers-discounts-item.price' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>{{item?.price}}</td>\n          </tr>\n          <tr>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"clock\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'offers-discounts-item.openingHours' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text weight-600\">\n            <td></td>\n            <td>{{item?.openingHours}}</td>\n          </tr>\n          <tr>\n            <!--\n <tr class=\"secondary-text\">\n            <td></td>\n            <td>10:00 - 11:00</td>\n          </tr>\n            -->\n         \n          <!--<tr class=\"secondary-text weight-600\">\n            <td></td>\n            <td>Sunday</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>Closed</td>\n          </tr>-->\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"pin\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'offers-discounts-item.location' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>{{item?.address}}</td>\n          </tr>\n          <tr>\n          <!--<tr class=\"secondary-text\">\n            <td></td>\n            <td>Calle abc 45</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>ABC</td>\n          </tr>\n          <tr>-->\n            <td></td>\n            <td>\n              <ion-chip class=\"btn-blue-general\">\n                <ion-label>{{ 'offers-discounts-item.Website' | translate }}</ion-label>\n              </ion-chip>\n            </td>\n          </tr>\n        </table>\n\n        <div class=\"box-map-one\">\n          <div id=\"map\" class=\"map-one\" #map></div>\n        </div>\n\n        <!--\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-bus\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'offers-discounts-item.howToGetThere' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text weight-600\">\n            <td></td>\n            <td>Bus</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>21 , 74</td>\n          </tr>\n          <tr class=\"secondary-text weight-600\">\n            <td></td>\n            <td>Metro</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>21 , 74</td>\n          </tr>\n        </table>\n      -->\n\n        <table class=\"margin-last-table\">\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-share\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'offers-discounts-item.share' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>\n              <ion-chip class=\"btn-facebook\">\n                <ion-label>Facebook</ion-label>\n              </ion-chip>\n              <ion-chip class=\"btn-twitter\">\n                <ion-label>Twitter</ion-label>\n              </ion-chip>\n              <ion-chip class=\"btn-email\">\n                <ion-label>Email</ion-label>\n              </ion-chip>\n              <ion-chip class=\"btn-whatsapp\">\n                <ion-label>WhatsApp</ion-label>\n              </ion-chip>\n            </td>\n          </tr>\n          <tr>\n        </table>\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n\n.map-one {\n  margin-top: 20px; }\n\ntable {\n  margin-top: 24pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9vZmZlcnMtZGlzY291dG5zLWl0ZW0vb2ZmZXJzLWRpc2NvdXRucy1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDRyxnQkFBZ0IsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29mZmVycy1kaXNjb3V0bnMtaXRlbS9vZmZlcnMtZGlzY291dG5zLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1jZW50ZXItZnVsbHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5tYXAtb25le1xuICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudGFibGV7XG4gICAgbWFyZ2luLXRvcDogMjRwdDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.ts ***!
  \***************************************************************************/
/*! exports provided: OffersDiscoutnsItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDiscoutnsItemPage", function() { return OffersDiscoutnsItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OffersDiscoutnsItemPage = /** @class */ (function () {
    function OffersDiscoutnsItemPage(location, actRoute) {
        this.location = location;
        this.actRoute = actRoute;
        //latitudeInit: any = 40.4530541;
        //longitudeInit: any = -3.6883445;
        this.zoom = 14;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.item = getParams.item;
        }
    }
    OffersDiscoutnsItemPage.prototype.ngOnInit = function () {
    };
    OffersDiscoutnsItemPage.prototype.ionViewDidEnter = function () {
        //set map
        var coords = new google.maps.LatLng(Number(this.item.latitude), Number(this.item.longitude));
        var mapOptions = {
            center: coords,
            zoom: this.zoom,
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
        var map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: { lat: Number(this.item.latitude), lng: Number(this.item.longitude) },
        });
        // marker.setPosition({ lat: this.item.latitude, lng: this.longitudeInit })
    };
    OffersDiscoutnsItemPage.prototype.goBack = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffersDiscoutnsItemPage.prototype, "mapElement", void 0);
    OffersDiscoutnsItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers-discoutns-item',
            template: __webpack_require__(/*! ./offers-discoutns-item.page.html */ "./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.html"),
            styles: [__webpack_require__(/*! ./offers-discoutns-item.page.scss */ "./src/app/pages/offers-discoutns-item/offers-discoutns-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OffersDiscoutnsItemPage);
    return OffersDiscoutnsItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-offers-discoutns-item-offers-discoutns-item-module.js.map