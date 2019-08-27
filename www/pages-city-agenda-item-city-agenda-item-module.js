(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-city-agenda-item-city-agenda-item-module"],{

/***/ "./src/app/pages/city-agenda-item/city-agenda-item.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/city-agenda-item/city-agenda-item.module.ts ***!
  \*******************************************************************/
/*! exports provided: CityAgendaItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityAgendaItemPageModule", function() { return CityAgendaItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _city_agenda_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-agenda-item.page */ "./src/app/pages/city-agenda-item/city-agenda-item.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _city_agenda_item_page__WEBPACK_IMPORTED_MODULE_6__["CityAgendaItemPage"]
    }
];
var CityAgendaItemPageModule = /** @class */ (function () {
    function CityAgendaItemPageModule() {
    }
    CityAgendaItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_city_agenda_item_page__WEBPACK_IMPORTED_MODULE_6__["CityAgendaItemPage"]]
        })
    ], CityAgendaItemPageModule);
    return CityAgendaItemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/city-agenda-item/city-agenda-item.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/city-agenda-item/city-agenda-item.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-item fas fa-chevron-left\"></span>\n  </div>\n  <div>\n    <img class=\"main-item-image\" src=\"{{url}}/get-image/{{getItem?.event?.image}}\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n\n        <div class=\"item-title\">\n          <h2>\n            <span *ngIf=\"_globalServ?.language == 'en'\">{{getItem?.event?.name_EN}}</span>\n            <span *ngIf=\"_globalServ?.language == 'es'\">{{getItem?.event?.name_ES}}</span>\n          </h2>\n        </div>\n        <div class=\"box-center-full\">\n          <div class=\"box-blue-circle\" (click)=\"goToCreatePlan()\">\n            <span class=\"blue-circle icon-blue far fa-calendar\"></span>\n            <div class=\"blue-text\">{{ 'city-agenda-item.createPlan' | translate }}</div>\n          </div>\n        </div>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"information-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'city-agenda-item.details' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">\n              <span *ngIf=\"_globalServ?.language == 'en'\">{{getItem?.event?.description_EN}}</span>\n              <span *ngIf=\"_globalServ?.language == 'es'\">{{getItem?.event?.description_ES}}</span></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"blue-text size-18-pt\">{{ 'city-agenda-item.readMore' | translate }}</td>\n          </tr>\n        </table>\n\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"clock\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'city-agenda-item.dateAndTime' | translate }}</td>\n          </tr>\n          <tbody *ngFor=\"let item of getItem?.event?.Places\">\n            <tr class=\"secondary-text weight-600\">\n              <td></td>\n              <td *ngIf=\"_globalServ?.language == 'en'\">{{item?.hours_EN}} <span\n                  *ngIf=\"item?.hours_EN != ''\">({{item?.name_EN}})</span></td>\n              <td *ngIf=\"_globalServ?.language == 'es'\">{{item?.hours_ES}} <span\n                  *ngIf=\"item?.hours_ES != ''\">({{item?.name_ES}})</span></td>\n            </tr>\n            <tr>\n              <td></td>\n              <td>\n                <ion-chip class=\"btn-blue-general\">\n                  <!--<ion-label>{{ 'city-agenda-item.addToCalendar' | translate }}</ion-label>-->\n                  <ion-label *ngIf=\"!AddedToCalender\" (click)=\"AddToCalender(getItem)\">{{ 'city-agenda-item.addToCalendar' | translate }}</ion-label>\n\t\t\t\t          <ion-label *ngIf=\"AddedToCalender\" >{{ 'city-agenda-item.addedToCalendar' | translate }}</ion-label>\n                </ion-chip>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"pin\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'city-agenda-item.location' | translate }}</td>\n          </tr>\n          <tbody *ngFor=\"let item of getItem?.event?.Places\">\n            <tr class=\"secondary-text\">\n              <td></td>\n              <td *ngIf=\"_globalServ?.language == 'en'\">{{item?.name_EN}}</td>\n              <td *ngIf=\"_globalServ?.language == 'es'\">{{item?.name_ES}}</td>\n            </tr>\n            <tr>\n            <tr class=\"secondary-text\">\n              <td></td>\n              <td>{{item?.street}} {{item?.number}}</td>\n            </tr>\n            <tr>\n              <td></td>\n              <td>\n                <ion-chip class=\"btn-blue-general\" (click)=\"goToSite()\">\n                  <ion-label>{{ 'city-agenda-item.website' | translate }}</ion-label>\n                </ion-chip>\n                <ion-chip class=\"btn-blue-general\">\n                  <ion-label>{{ 'city-agenda-item.directions' | translate }}</ion-label>\n                </ion-chip>\n              </td>\n            </tr>\n          </tbody>\n\n        </table>\n\n        <div class=\"box-map-one\">\n          <div id=\"map\" class=\"map-one\" #map></div>\n        </div>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-pricetag\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'city-agenda-item.price' | translate }}</td>\n          </tr>\n          <tr *ngFor=\"let item of getItem?.event?.Places\" class=\"secondary-text\">\n            <td></td>\n            <td *ngIf=\"_globalServ?.language == 'en'\">{{item.price_EN}} <span\n              *ngIf=\"item?.price_EN != ''\">({{item?.name_EN}})</span></td>\n            <td *ngIf=\"_globalServ?.language == 'es'\">{{item.price_ES}} <span\n              *ngIf=\"item?.price_ES != ''\">({{item?.name_ES}})</span></td>\n          </tr>\n          <tr>\n        </table>\n\n        <table class=\"margin-last-table\">\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"ios-share\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'city-agenda-item.share' | translate }}</td>\n          </tr>\n          <tr class=\"secondary-text\">\n            <td></td>\n            <td>\n              <ion-chip class=\"btn-facebook\">\n                <ion-label>Facebook</ion-label>\n              </ion-chip>\n              <ion-chip class=\"btn-twitter\">\n                <ion-label>Twitter</ion-label>\n              </ion-chip>\n              <ion-chip class=\"btn-email\">\n                <ion-label>Email</ion-label>\n              </ion-chip>\n              <ion-chip class=\"btn-whatsapp\">\n                <ion-label>WhatsApp</ion-label>\n              </ion-chip>\n            </td>\n          </tr>\n          <tr>\n        </table>\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/city-agenda-item/city-agenda-item.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/city-agenda-item/city-agenda-item.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content-item{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back-item{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\n/*.sc-ion-card-md-h {\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px;\n}*/\n/*.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9jaXR5LWFnZW5kYS1pdGVtL2NpdHktYWdlbmRhLWl0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaXR5LWFnZW5kYS1pdGVtL2NpdHktYWdlbmRhLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztFQ2lCRTtBREVGO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0csZ0JBQWdCLEVBQUE7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjs7Ozs7RUNDRTtBRE1GOzs7RUNGRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpdHktYWdlbmRhLWl0ZW0vY2l0eS1hZ2VuZGEtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG5cbi5ib3gtY2VudGVyLWZ1bGx7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ubWFwLW9uZXtcbiAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnRhYmxle1xuICAgIG1hcmdpbi10b3A6IDI0cHQ7XG59XG5cbi8qLnNjLWlvbi1jYXJkLW1kLWgge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxuICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4OyBcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSovXG5cbi8qLml0ZW0tYXZhdGFyLWNhcmQuaHlkcmF0ZWR7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufSovXG4iLCIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG4uYm94LWNlbnRlci1mdWxsIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4ubWFwLW9uZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxudGFibGUge1xuICBtYXJnaW4tdG9wOiAyNHB0OyB9XG5cbi8qLnNjLWlvbi1jYXJkLW1kLWgge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxuICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4OyBcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSovXG4vKi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0qL1xuIl19 */"

/***/ }),

/***/ "./src/app/pages/city-agenda-item/city-agenda-item.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/city-agenda-item/city-agenda-item.page.ts ***!
  \*****************************************************************/
/*! exports provided: CityAgendaItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityAgendaItemPage", function() { return CityAgendaItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_city_agenda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/city-agenda.service */ "./src/app/services/city-agenda.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");











var CityAgendaItemPage = /** @class */ (function () {
    function CityAgendaItemPage(router, location, _globalServ, _cityAgendaServ, actRoute, iab, calendar) {
        this.router = router;
        this.location = location;
        this._globalServ = _globalServ;
        this._cityAgendaServ = _cityAgendaServ;
        this.actRoute = actRoute;
        this.iab = iab;
        this.calendar = calendar;
        this.zoom = 14;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.AddedToCalender = false;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.id = getParams.id;
        }
    }
    CityAgendaItemPage.prototype.ngOnInit = function () {
    };
    CityAgendaItemPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._cityAgendaServ.getItem(this.id)
            .subscribe(function (data) {
            _this.getItem = data;
            for (var _i = 0, _a = _this.getItem.event.Places; _i < _a.length; _i++) {
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
            for (var _b = 0, _c = _this.getItem.event.Places; _b < _c.length; _b++) {
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
    CityAgendaItemPage.prototype.goBack = function () {
        this.location.back();
    };
    CityAgendaItemPage.prototype.goToCreatePlan = function () {
        this.router.navigate(['plan-create']);
    };
    CityAgendaItemPage.prototype.goToSite = function () {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(this.getItem, 'event.website', '') !== '') {
            this.iab.create(Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(this.getItem, 'event.website', ''), '_system');
        }
    };
    CityAgendaItemPage.prototype.AddToCalender = function (item) {
        var _this = this;
        console.log(item);
        var title = '';
        var address = '';
        var description = '';
        if (this._globalServ.language == 'en') {
            title = item.name_EN;
            description = item.description_EN;
            if (item.Places) {
                address = item.Places.name_EN;
            }
        }
        else if (this._globalServ.language == 'es') {
            title = item.name_ES;
            description = item.description_ES;
            if (item.Places) {
                address = item.Places.name_ES;
            }
        }
        if (item.valid_until) {
            this.calendar.createEvent(title, address, description, new Date(item.valid_until), new Date(item.valid_until)).then(function (msg) {
                _this.AddedToCalender = true;
                console.log(msg);
            }, function (err) { console.log(err); });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CityAgendaItemPage.prototype, "mapElement", void 0);
    CityAgendaItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-agenda-item',
            template: __webpack_require__(/*! ./city-agenda-item.page.html */ "./src/app/pages/city-agenda-item/city-agenda-item.page.html"),
            styles: [__webpack_require__(/*! ./city-agenda-item.page.scss */ "./src/app/pages/city-agenda-item/city-agenda-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_city_agenda_service__WEBPACK_IMPORTED_MODULE_4__["CityAgendaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
            _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_9__["Calendar"]])
    ], CityAgendaItemPage);
    return CityAgendaItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-city-agenda-item-city-agenda-item-module.js.map