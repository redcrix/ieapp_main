(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preferences-preferences-module"],{

/***/ "./src/app/pages/preferences/preferences.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/preferences/preferences.module.ts ***!
  \*********************************************************/
/*! exports provided: PreferencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesPageModule", function() { return PreferencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preferences_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preferences.page */ "./src/app/pages/preferences/preferences.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _preferences_page__WEBPACK_IMPORTED_MODULE_6__["PreferencesPage"]
    }
];
var PreferencesPageModule = /** @class */ (function () {
    function PreferencesPageModule() {
    }
    PreferencesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_preferences_page__WEBPACK_IMPORTED_MODULE_6__["PreferencesPage"]]
        })
    ], PreferencesPageModule);
    return PreferencesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/preferences/preferences.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/preferences/preferences.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar *ngIf=\"showTitle == true\" [back]=\"true\"></toolbar>\n  <toolbar *ngIf=\"showTitle == null\" title=\"{{ 'preferences.preferences' | translate }}\" [back]=\"true\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div *ngIf=\"showText != true\" class=\"preferences-top\"></div>\n        <h1 *ngIf=\"showTitle == true\" class=\"title\">{{ 'preferences.preferences' | translate }}</h1>\n        <div *ngIf=\"showText == true\" class=\"secondary-text\">\n          {{ 'preferences.explanation' | translate }}\n        </div>\n        <form>\n          <ion-list lines=\"none\">\n            <ion-item *ngFor=\"let item of getSupercategories;let i = index\" (click)=\"changeStatus(item,i)\">\n              <ion-label *ngIf=\"_globalServ?.language == 'es'\">{{item?.name_ES}}</ion-label>\n              <ion-label *ngIf=\"_globalServ?.language == 'en'\">{{item?.name_EN}}</ion-label>\n              <ion-checkbox [checked]=\"item?.checked == true\" slot=\"end\"></ion-checkbox>\n            </ion-item>\n            <div class=\"box-center-full\">\n              <ion-button *ngIf=\"save == true\" (click)=\"saveFirstTime()\" class=\"button-one\" shape=\"round\">\n                <span *ngIf=\"fromSetting != true\">{{ 'preferences.saveAndContinue' | translate }}</span>\n                <span *ngIf=\"fromSetting == true\">{{ 'preferences.save' | translate }}</span>\n              </ion-button>\n              <ion-button *ngIf=\"selectBtn == true\" (click)=\"select()\" class=\"button-one\" shape=\"round\">\n                <span>Select</span>\n              </ion-button>\n            </div>\n          </ion-list>\n        </form>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/preferences/preferences.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/preferences/preferences.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".secondary-text {\n  margin-top: 10px; }\n\n.button-one {\n  margin-top: 15PX; }\n\n.preferences-top {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWZlcmVuY2VzL3ByZWZlcmVuY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWNvbmRhcnktdGV4dHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnV0dG9uLW9uZXtcbiAgICBtYXJnaW4tdG9wOiAxNVBYO1xufVxuXG4ucHJlZmVyZW5jZXMtdG9we1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/preferences/preferences.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/preferences/preferences.page.ts ***!
  \*******************************************************/
/*! exports provided: PreferencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesPage", function() { return PreferencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_preferences_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/preferences.service */ "./src/app/services/preferences.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var PreferencesPage = /** @class */ (function () {
    function PreferencesPage(router, actRoute, _preferencesServ, _globalServ, location) {
        var _this = this;
        this.router = router;
        this.actRoute = actRoute;
        this._preferencesServ = _preferencesServ;
        this._globalServ = _globalServ;
        this.location = location;
        this.idsSupCat = [];
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.showText = getParams.showText;
            this.showTitle = getParams.showTitle;
            this.fromSetting = getParams.fromSetting;
            this.save = getParams.save;
            this.selectBtn = getParams.select;
        }
        this._preferencesServ.getSupercategories({ 'active': 1 }).subscribe(function (data) {
            _this.getSupercategories = data;
            if (_this.selectBtn != true) {
                _this._preferencesServ.getSupercategoriesByUser(_this._globalServ.idUser).subscribe(function (dataSupById) {
                    _this.getSupCatById = dataSupById;
                    for (var _i = 0, _a = _this.getSupercategories; _i < _a.length; _i++) {
                        var itemOne = _a[_i];
                        for (var _b = 0, _c = _this.getSupCatById.user_preferences; _b < _c.length; _b++) {
                            var itemTwo = _c[_b];
                            if (itemOne.id == itemTwo.fk_supercategory_id) {
                                itemOne.checked = true;
                                _this.idsSupCat.push(itemOne.id);
                            }
                        }
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                if (_this._globalServ.idsCategories != null) {
                    for (var _i = 0, _a = _this.getSupercategories; _i < _a.length; _i++) {
                        var itemOne = _a[_i];
                        for (var _b = 0, _c = _this._globalServ.idsCategories; _b < _c.length; _b++) {
                            var itemTwo = _c[_b];
                            if (itemOne.id == itemTwo) {
                                itemOne.checked = true;
                                _this.idsSupCat.push(itemOne.id);
                            }
                        }
                    }
                }
            }
        }, function (error) {
            console.log(error);
        });
    }
    PreferencesPage.prototype.ngOnInit = function () {
    };
    PreferencesPage.prototype.changeStatus = function (value, index) {
        for (var _i = 0, _a = this.getSupercategories; _i < _a.length; _i++) {
            var item = _a[_i];
            if (value.checked == null) {
                if (item.id == value.id) {
                    item.checked = true;
                    this.idsSupCat.push(item.id);
                    return;
                }
            }
            if (value.checked == true) {
                if (item.id == value.id) {
                    item.checked = null;
                    var getIndex = this.idsSupCat.indexOf(value.id);
                    this.idsSupCat.splice(getIndex, 1);
                    return;
                }
            }
        }
    };
    PreferencesPage.prototype.saveFirstTime = function () {
        var _this = this;
        this._preferencesServ.saveSupercategories({ 'id': this._globalServ.idUser, 'supercategoryids': this.idsSupCat.toString() })
            .subscribe(function (data) {
            data;
            var navigationExtras = {
                queryParams: {
                    data: JSON.stringify({})
                }, replaceUrl: true
            };
            if (_this.fromSetting == true) {
                _this.location.back();
            }
            else {
                _this.router.navigate(['preferences-ok'], navigationExtras);
            }
        }, function (error) {
            console.log(error);
        });
    };
    PreferencesPage.prototype.select = function () {
        this._globalServ.idsCategories = this.idsSupCat;
        this.location.back();
    };
    PreferencesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preferences',
            template: __webpack_require__(/*! ./preferences.page.html */ "./src/app/pages/preferences/preferences.page.html"),
            styles: [__webpack_require__(/*! ./preferences.page.scss */ "./src/app/pages/preferences/preferences.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_preferences_service__WEBPACK_IMPORTED_MODULE_3__["PreferencesService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], PreferencesPage);
    return PreferencesPage;
}());



/***/ }),

/***/ "./src/app/services/preferences.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/preferences.service.ts ***!
  \*************************************************/
/*! exports provided: PreferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesService", function() { return PreferencesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var PreferencesService = /** @class */ (function () {
    function PreferencesService(http, _globalServ) {
        this.http = http;
        this._globalServ = _globalServ;
    }
    PreferencesService.prototype.getSupercategories = function (value) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/supercategories', { params: value });
    };
    PreferencesService.prototype.getSupercategoriesByUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/app-user-preferences/' + id);
    };
    PreferencesService.prototype.saveSupercategories = function (value) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/app-user-set-preferences', value);
    };
    PreferencesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], PreferencesService);
    return PreferencesService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-preferences-preferences-module.js.map