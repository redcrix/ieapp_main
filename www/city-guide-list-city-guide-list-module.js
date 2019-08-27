(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["city-guide-list-city-guide-list-module"],{

/***/ "./src/app/pages/city-guide-list/city-guide-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/city-guide-list/city-guide-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: CityGuideListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityGuideListPageModule", function() { return CityGuideListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _city_guide_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-guide-list.page */ "./src/app/pages/city-guide-list/city-guide-list.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _city_guide_list_page__WEBPACK_IMPORTED_MODULE_6__["CityGuideListPage"]
    }
];
var CityGuideListPageModule = /** @class */ (function () {
    function CityGuideListPageModule() {
    }
    CityGuideListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_city_guide_list_page__WEBPACK_IMPORTED_MODULE_6__["CityGuideListPage"]]
        })
    ], CityGuideListPageModule);
    return CityGuideListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/city-guide-list/city-guide-list.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/city-guide-list/city-guide-list.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrolling($event)\">\n<toolbar [setting]=\"true\" [title]=\"pageTitleName ? ('city-guide-list.cityGuide' | translate) : ''\"></toolbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1 class=\"title\">{{ 'city-guide-list.cityGuide' | translate }}</h1>\n      <div class=\"box-container\">\n\n        <div *ngIf=\"!_globalServ?.listCityGuide?.categories\" class=\"spinner-div\">\n          <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n        <div *ngIf=\"_globalServ?.listCityGuide?.categories\">\n          <div *ngFor=\"let item of _globalServ?.listCityGuide?.categories\" (click)=\"goToCityGuideItemList(item)\" class=\"item\">\n            <ion-card>\n              <img class=\"cg-card-image\" src=\"{{item?.image}}\">\n            </ion-card>\n            <div\n            style=\"display: -webkit-box;max-width: 100%;line-height: 1;-webkit-box-orient: vertical;text-overflow: ellipsis;font-weight: 400\"\n            class=\"box-center-full\">\n            <span *ngIf=\"_globalServ?.language == 'en'\">{{item?.name_EN}}</span>\n            <span *ngIf=\"_globalServ?.language == 'es'\">{{item?.name_ES}}</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-md-2\"></div>\n</div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/city-guide-list/city-guide-list.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/city-guide-list/city-guide-list.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-container .item {\n  float: left;\n  min-height: 170px;\n  width: 50%; }\n\n.item {\n  list-style-type: disc; }\n\n.cg-card-image {\n  max-height: 175px;\n  min-height: 120px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-div {\n  text-align: center;\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9jaXR5LWd1aWRlLWxpc3QvY2l0eS1ndWlkZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVc7RUFDWCxpQkFBaUI7RUFDZCxVQUFVLEVBQUE7O0FBRWQ7RUFDQyxxQkFBcUIsRUFBQTs7QUFHdEI7RUFDQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpdHktZ3VpZGUtbGlzdC9jaXR5LWd1aWRlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1jb250YWluZXIgLml0ZW17XG5cdGZsb2F0OiBsZWZ0O1xuXHRtaW4taGVpZ2h0OiAxNzBweDtcbiAgICB3aWR0aDogNTAlOy8vaGVscHMgdG8gZGV0ZXJtaW5lIG51bWJlciBvZiBjb2x1bW5zLCBmb3IgaW5zdGFuY2UgMzMuMyUgZGlzcGxheXMgMyBjb2x1bW5zXG59XG4uaXRlbXtcblx0bGlzdC1zdHlsZS10eXBlOiBkaXNjO1xufVxuXG4uY2ctY2FyZC1pbWFnZXtcblx0bWF4LWhlaWdodDogMTc1cHg7XG5cdG1pbi1oZWlnaHQ6IDEyMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5zcGlubmVyLWRpdiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/city-guide-list/city-guide-list.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/city-guide-list/city-guide-list.page.ts ***!
  \***************************************************************/
/*! exports provided: CityGuideListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityGuideListPage", function() { return CityGuideListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_city_guide_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/city-guide.service */ "./src/app/services/city-guide.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var CityGuideListPage = /** @class */ (function () {
    function CityGuideListPage(router, _cityGuideServ, _globalServ) {
        this.router = router;
        this._cityGuideServ = _cityGuideServ;
        this._globalServ = _globalServ;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.scrollPos = 0;
        this.pageTitleName = false;
        this._cityGuideServ.getDataCityGuideList();
    }
    CityGuideListPage.prototype.ngOnInit = function () {
    };
    CityGuideListPage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    CityGuideListPage.prototype.goToCityGuideItemList = function (value) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': value.id, 'name_EN': value.name_EN, 'name_ES': value.name_ES })
            },
        };
        this.router.navigate(['tabs/city-guide-item-list'], navigationExtras);
    };
    CityGuideListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-guide-list',
            template: __webpack_require__(/*! ./city-guide-list.page.html */ "./src/app/pages/city-guide-list/city-guide-list.page.html"),
            styles: [__webpack_require__(/*! ./city-guide-list.page.scss */ "./src/app/pages/city-guide-list/city-guide-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_city_guide_service__WEBPACK_IMPORTED_MODULE_3__["CityGuideService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CityGuideListPage);
    return CityGuideListPage;
}());



/***/ })

}]);
//# sourceMappingURL=city-guide-list-city-guide-list-module.js.map