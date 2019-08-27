(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-offers-discounts-map-offers-discounts-map-module"],{

/***/ "./src/app/pages/offers-discounts-map/offers-discounts-map.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/offers-discounts-map/offers-discounts-map.module.ts ***!
  \***************************************************************************/
/*! exports provided: OffersDiscountsMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDiscountsMapPageModule", function() { return OffersDiscountsMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_discounts_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers-discounts-map.page */ "./src/app/pages/offers-discounts-map/offers-discounts-map.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _offers_discounts_code_offers_discounts_code_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../offers-discounts-code/offers-discounts-code.page */ "./src/app/pages/offers-discounts-code/offers-discounts-code.page.ts");








//modal

var routes = [
    {
        path: '',
        component: _offers_discounts_map_page__WEBPACK_IMPORTED_MODULE_6__["OffersDiscountsMapPage"]
    }
];
var OffersDiscountsMapPageModule = /** @class */ (function () {
    function OffersDiscountsMapPageModule() {
    }
    OffersDiscountsMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _offers_discounts_map_page__WEBPACK_IMPORTED_MODULE_6__["OffersDiscountsMapPage"],
                _offers_discounts_code_offers_discounts_code_page__WEBPACK_IMPORTED_MODULE_8__["OffersDiscountsCodePage"]
            ],
            entryComponents: [
                _offers_discounts_code_offers_discounts_code_page__WEBPACK_IMPORTED_MODULE_8__["OffersDiscountsCodePage"]
            ]
        })
    ], OffersDiscountsMapPageModule);
    return OffersDiscountsMapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/offers-discounts-map/offers-discounts-map.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/offers-discounts-map/offers-discounts-map.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-bounce>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-item fas fa-chevron-left\"></span>\n  </div>\n  <div id=\"map\" class=\"map\" #map></div>\n  <ion-fab (click)=\"refreshLatLong()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <div class=\"fas fa-crosshairs\"></div>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ion-bottom-drawer class=\"drawer\" [state]=\"state\" [minimumHeight]=\"40\" [shouldBounce]=\"true\"\n  [distanceTop]=\"distanceTop\">\n  <input type=\"text\" id=\"all\" hidden=\"hidden\">\n  <input type=\"text\" id=\"latInit\" hidden=\"hidden\">\n  <input type=\"text\" id=\"longInit\" hidden=\"hidden\">\n  <input type=\"number\" id=\"state\" (click)=\"stateFunc()\" hidden=\"hidden\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div class=\"box-center-full\">\n          <span class=\"line-bottom-drawer\"></span>\n        </div>\n        <div id=\"drawer-content\">\n          <ion-row>\n            <ion-col size=\"5\">\n              <ion-card>\n                <img class=\"image-card-odm\" id=\"imgDesc\" src=\"\">\n              </ion-card>\n            </ion-col>\n            <ion-col size=\"7\">\n              <div style=\"margin-top: 15px;\">\n                <table>\n                  <tr>\n                    <td>\n                      <ion-avatar style=\"min-width: 35px;min-height:35px;max-width: 35px;max-height:35px\">\n                        <img id=\"imgProfile\" src=\"\">\n                      </ion-avatar>\n                    </td>\n                    <td><span style=\"margin-right: 15px\"></span>\n                      <span id=\"avatar\"\n                        style=\"text-align: left;max-width: 100%;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\"\n                        class=\"odm-avatar\">\n                      </span></td>\n                  </tr>\n                </table>\n\n                <table style=\"margin-top: 10px;margin-left: 10px;\">\n                  <tr>\n                    <td>\n                      <ion-icon class=\"odm-icon\" name=\"ios-alert\"></ion-icon>\n                    </td>\n                    <td class=\"secondary-text\"><span style=\"margin-right: 23px\"></span>\n                      <span id=\"title\"\n                        style=\"text-align: left;max-width: 100%;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\">\n\n                      </span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <ion-icon class=\"odm-icon\" name=\"md-calendar\"></ion-icon>\n                    </td>\n                    <td class=\"secondary-text\"><span style=\"margin-right: 23px\"></span>\n                      <span id=\"validUntil\"\n                        style=\"text-align: left;max-width: 100%;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\">\n\n                      </span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <ion-icon class=\"odm-icon\" name=\"pin\"></ion-icon>\n                    </td>\n                    <td class=\"secondary-text\"><span style=\"margin-right: 23px\"></span>\n                      <span id=\"address\"\n                        style=\"text-align: left;max-width: 100%;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\">\n\n                      </span>\n                    </td>\n                  </tr>\n                </table>\n\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <div class=\"box-center-full\">\n            <ng-scrollbar [trackX]=\"true\" [trackY]=\"false\">\n              <div style=\"display: flex;width: 550px;\">\n                <ion-button class=\"button-two\" shape=\"round\">\n                  <div class=\"more-box-icon-text\">\n                    <ion-icon class=\"more-icon\" name=\"ios-alert\"></ion-icon> <span class=\"more-item-text\">Info</span>\n                  </div>\n                </ion-button>\n                <ion-button (click)=\"goToDirections()\" class=\"button-two\" shape=\"round\">\n                  <div class=\"more-box-icon-text\">\n                    <ion-icon class=\"more-icon\" name=\"ios-paper-plane\"></ion-icon> <span\n                      class=\"more-item-text\">Directions</span>\n                  </div>\n                </ion-button>\n                <ion-button (click)=\"goToCode()\" class=\"button-two\" shape=\"round\">\n                  <div class=\"more-box-icon-text\">\n                    <ion-icon class=\"more-icon\" name=\"ios-barcode\"></ion-icon> <span class=\"more-item-text\">Code</span>\n                  </div>\n                </ion-button>\n              </div>\n            </ng-scrollbar>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-bottom-drawer>"

/***/ }),

/***/ "./src/app/pages/offers-discounts-map/offers-discounts-map.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/offers-discounts-map/offers-discounts-map.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  background: white;\n  height: 100%; }\n\n.line-bottom-drawer {\n  height: 4pt;\n  background: #cecece;\n  border-radius: 15px;\n  margin-top: 10px;\n  width: 32pt;\n  display: inline-block; }\n\nng-scrollbar {\n  max-height: 90px; }\n\n.drawer {\n  border-radius: 35px;\n  border: 12px solid white; }\n\n.image-card-odm {\n  height: 96pt;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.odm-avatar {\n  font-size: 12pt;\n  font-weight: 600; }\n\n.odm-icon {\n  font-size: 15pt; }\n\n.more-icon {\n  font-size: 18pt;\n  display: inline-block;\n  vertical-align: middle; }\n\n.more-item-text {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 16pt;\n  margin-left: 10px; }\n\n.more-box-icon-text {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n.button-two {\n  margin-left: 7px; }\n\n.btn-back-item {\n  color: black;\n  text-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9vZmZlcnMtZGlzY291bnRzLW1hcC9vZmZlcnMtZGlzY291bnRzLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CO0VBQ25CLHdCQUF3QixFQUFBOztBQUc1QjtFQUVJLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb2ZmZXJzLWRpc2NvdW50cy1tYXAvb2ZmZXJzLWRpc2NvdW50cy1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5saW5lLWJvdHRvbS1kcmF3ZXJ7XG4gICAgaGVpZ2h0OiA0cHQ7XG4gICAgYmFja2dyb3VuZDogI2NlY2VjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IFxuICAgIHdpZHRoOiAzMnB0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxubmctc2Nyb2xsYmFye1xuICAgIG1heC1oZWlnaHQ6IDkwcHg7XG59XG5cbi5kcmF3ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBib3JkZXI6IDEycHggc29saWQgd2hpdGU7XG59XG5cbi5pbWFnZS1jYXJkLW9kbXtcbiAgICAvL3dpZHRoOiAxMDhwdDtcbiAgICBoZWlnaHQ6IDk2cHQ7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cblxuLm9kbS1hdmF0YXJ7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5vZG0taWNvbntcbiAgICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5tb3JlLWljb257XG4gICAgZm9udC1zaXplOjE4cHQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tb3JlLWl0ZW0tdGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tb3JlLWJveC1pY29uLXRleHR7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uYnV0dG9uLXR3b3tcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4uYnRuLWJhY2staXRlbXtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/offers-discounts-map/offers-discounts-map.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/offers-discounts-map/offers-discounts-map.page.ts ***!
  \*************************************************************************/
/*! exports provided: OffersDiscountsMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDiscountsMapPage", function() { return OffersDiscountsMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_offer_discount_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/offer-discount.service */ "./src/app/services/offer-discount.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _offers_discounts_code_offers_discounts_code_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../offers-discounts-code/offers-discounts-code.page */ "./src/app/pages/offers-discounts-code/offers-discounts-code.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");












var OffersDiscountsMapPage = /** @class */ (function () {
    function OffersDiscountsMapPage(platform, _globalServ, _offerDiscountServ, router, launchNavigator, alertController, geolocation, location, modalController) {
        this.platform = platform;
        this._globalServ = _globalServ;
        this._offerDiscountServ = _offerDiscountServ;
        this.router = router;
        this.launchNavigator = launchNavigator;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.location = location;
        this.modalController = modalController;
        this.latitudeInit = 40.644180;
        this.longitudeInit = -3.994090;
        this.zoom = 14;
        this.distanceTop = 0;
        this.state = 0;
        var options = {
            enableHighAccuracy: true,
            timeout: 725000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log('*********', position);
            document.getElementById('latInit').value = String(position.coords.latitude);
            document.getElementById('longInit').value = String(position.coords.longitude);
        });
        if (platform.height() < 800) {
            this.distanceTop = 400;
        }
        if (platform.height() > 800) {
            this.distanceTop = 900;
        }
    }
    OffersDiscountsMapPage.prototype.ngOnInit = function () {
        document.getElementById("drawer-content").style.display = 'none';
    };
    OffersDiscountsMapPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._offerDiscountServ.getListFiltered(this._globalServ.idUser).subscribe(function (data) {
            _this.listOD = data;
            //set map
            var coords = new google.maps.LatLng(_this.latitudeInit, _this.longitudeInit);
            _this.mapOptions = {
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
            var iconPath;
            iconPath = 'assets/img/marker_percent.png';
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, _this.mapOptions);
            _this.markerUser = new google.maps.Marker({
                map: _this.map,
                position: { lat: Number(document.getElementById('latInit').value), lng: Number(document.getElementById('longInit').value) },
                icon: 'assets/img/marker_user.png',
            });
            _this.map.setCenter({ lat: Number(document.getElementById('latInit').value), lng: Number(document.getElementById('longInit').value) });
            var _loop_1 = function (item) {
                marker = new google.maps.Marker({
                    map: _this.map,
                    position: { lat: Number(item.latitude), lng: Number(item.longitude) },
                    icon: iconPath
                });
                /* google.maps.event.addListener(marker, 'click', function() {
                  console.log('clicked marker!1');
                  }
                 ); */
                google.maps.event.addListener(marker, 'click', (function (marker) {
                    return function () {
                        console.log('clicked marker!2');
                        document.getElementById("drawer-content").style.display = 'block';
                        var state = document.getElementById('state');
                        state.click();
                        document.getElementById('all').value = JSON.stringify(item);
                        document.getElementById('avatar').innerHTML = item.company;
                        document.getElementById('title').innerHTML = item.title;
                        document.getElementById('validUntil').innerHTML = 'Valid until ' + item.validUntil;
                        document.getElementById('address').innerHTML = item.address;
                        document.getElementById('imgDesc').src = item.image;
                        document.getElementById('imgProfile').src = item.image;
                    };
                })(marker));
            };
            var marker;
            for (var _i = 0, _a = _this.listOD.discounts; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_1(item);
            }
        });
    };
    OffersDiscountsMapPage.prototype.goToCode = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.code = JSON.parse(document.getElementById('all').value);
                        return [4 /*yield*/, this.modalController.create({
                                component: _offers_discounts_code_offers_discounts_code_page__WEBPACK_IMPORTED_MODULE_8__["OffersDiscountsCodePage"],
                                componentProps: {
                                    'code': this.code.discountCode
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OffersDiscountsMapPage.prototype.goToDirections = function () {
        var _this = this;
        var code = JSON.parse(document.getElementById('all').value);
        var options = {
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate(code.address, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) {
            console.log('Error launching navigator', error);
            _this.messageMap();
        });
    };
    OffersDiscountsMapPage.prototype.stateFunc = function () {
        var _this = this;
        this.state = 0;
        setTimeout(function () {
            _this.state = 2;
        }, 500);
    };
    OffersDiscountsMapPage.prototype.messageMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var titleLabel, message, okLabel, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._globalServ.language == 'en') {
                            titleLabel = 'Message';
                            okLabel = 'Ok';
                            message = 'Install or Activate Google maps';
                        }
                        if (this._globalServ.language == 'es') {
                            titleLabel = 'mensage';
                            okLabel = 'Aceptar';
                            message = 'Instalar o Activar Google maps';
                        }
                        return [4 /*yield*/, this.alertController.create({
                                header: titleLabel,
                                message: message,
                                buttons: [
                                    {
                                        text: okLabel,
                                        handler: function () {
                                            console.log('Confirm Okay');
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
    OffersDiscountsMapPage.prototype.refreshLatLong = function () {
        this.ionViewDidEnter();
    };
    OffersDiscountsMapPage.prototype.goBack = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffersDiscountsMapPage.prototype, "mapElement", void 0);
    OffersDiscountsMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers-discounts-map',
            template: __webpack_require__(/*! ./offers-discounts-map.page.html */ "./src/app/pages/offers-discounts-map/offers-discounts-map.page.html"),
            styles: [__webpack_require__(/*! ./offers-discounts-map.page.scss */ "./src/app/pages/offers-discounts-map/offers-discounts-map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_offer_discount_service__WEBPACK_IMPORTED_MODULE_4__["OfferDiscountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_6__["LaunchNavigator"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], OffersDiscountsMapPage);
    return OffersDiscountsMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-offers-discounts-map-offers-discounts-map-module.js.map