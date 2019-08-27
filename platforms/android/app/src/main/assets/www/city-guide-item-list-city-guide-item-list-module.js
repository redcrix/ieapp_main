(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["city-guide-item-list-city-guide-item-list-module"],{

/***/ "./src/app/pages/city-guide-item-list/city-guide-item-list.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/city-guide-item-list/city-guide-item-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: CityGuideItemListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityGuideItemListPageModule", function() { return CityGuideItemListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _city_guide_item_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-guide-item-list.page */ "./src/app/pages/city-guide-item-list/city-guide-item-list.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _city_guide_item_list_page__WEBPACK_IMPORTED_MODULE_6__["CityGuideItemListPage"]
    }
];
var CityGuideItemListPageModule = /** @class */ (function () {
    function CityGuideItemListPageModule() {
    }
    CityGuideItemListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_city_guide_item_list_page__WEBPACK_IMPORTED_MODULE_6__["CityGuideItemListPage"]]
        })
    ], CityGuideItemListPageModule);
    return CityGuideItemListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/city-guide-item-list/city-guide-item-list.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/city-guide-item-list/city-guide-item-list.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrolling($event)\">\n<toolbar [back]=\"true\" [setting]=\"true\" [title]=\"pageTitleName ? name_EN : ''\"></toolbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1 class=\"title\" *ngIf=\"_globalServ?.language == 'en'\">{{name_EN}}</h1>\n      <h1 class=\"title\" *ngIf=\"_globalServ?.language == 'es'\">{{name_ES}}</h1>\n      <div class=\"box-container\">\n\n        <div *ngIf=\"!getListItem?.articles\" class=\"spinner-div\">\n          <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n        <div *ngIf=\"getListItem?.articles\">\n          <div *ngFor=\"let item of getListItem?.articles\" (click)=\"goToCityGuideItem(item)\" class=\"item\">\n            <ion-card>\n              <img class=\"img-cgi\" src=\"{{url}}/get-image/{{item?.image}}\">\n            </ion-card>\n            <div class=\"box-center-full one-line-two\">\n              <span *ngIf=\"_globalServ?.language == 'en'\">{{item?.name_EN}}</span> \n              <span *ngIf=\"_globalServ?.language == 'es'\">{{item?.name_ES}}</span> \n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/city-guide-item-list/city-guide-item-list.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/city-guide-item-list/city-guide-item-list.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-container .item {\n  float: left;\n  min-height: 200px;\n  width: 50%; }\n\n.item {\n  list-style-type: disc; }\n\n.img-cgi {\n  max-height: 250px;\n  min-height: 120px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-div {\n  text-align: center;\n  margin: 15px; }\n\n.title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.one-line-two {\n  white-space: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9jaXR5LWd1aWRlLWl0ZW0tbGlzdC9jaXR5LWd1aWRlLWl0ZW0tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2QsVUFBVSxFQUFBOztBQUVkO0VBQ0MscUJBQXFCLEVBQUE7O0FBR3RCO0VBQ0MsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHYjtFQUNDLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaXR5LWd1aWRlLWl0ZW0tbGlzdC9jaXR5LWd1aWRlLWl0ZW0tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWNvbnRhaW5lciAuaXRlbXtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiA1MCU7Ly9oZWxwcyB0byBkZXRlcm1pbmUgbnVtYmVyIG9mIGNvbHVtbnMsIGZvciBpbnN0YW5jZSAzMy4zJSBkaXNwbGF5cyAzIGNvbHVtbnNcbn1cbi5pdGVte1xuXHRsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG5cbi5pbWctY2dpe1xuXHRtYXgtaGVpZ2h0OiAyNTBweDtcblx0bWluLWhlaWdodDogMTIwcHg7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc3Bpbm5lci1kaXYge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMTVweDtcbn1cblxuLnRpdGxle1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm9uZS1saW5lLXR3b3tcblx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/city-guide-item-list/city-guide-item-list.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/city-guide-item-list/city-guide-item-list.page.ts ***!
  \*************************************************************************/
/*! exports provided: CityGuideItemListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityGuideItemListPage", function() { return CityGuideItemListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_city_guide_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/city-guide.service */ "./src/app/services/city-guide.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var CityGuideItemListPage = /** @class */ (function () {
    function CityGuideItemListPage(router, actRoute, _cityGuideServ, _globalServ) {
        var _this = this;
        this.router = router;
        this.actRoute = actRoute;
        this._cityGuideServ = _cityGuideServ;
        this._globalServ = _globalServ;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.pageTitleName = false;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.id = getParams.id;
            this.name_EN = getParams.name_EN;
            this.name_ES = getParams.name_ES;
        }
        this._cityGuideServ.getArticlesCategory(this.id)
            .subscribe(function (data) {
            _this.getListItem = data;
        }, function (error) {
            console.log(error);
        });
    }
    CityGuideItemListPage.prototype.ngOnInit = function () {
    };
    CityGuideItemListPage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    CityGuideItemListPage.prototype.goToCityGuideItem = function (value) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': value.id })
            },
        };
        this.router.navigate(['city-guide-item'], navigationExtras);
    };
    CityGuideItemListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-guide-item-list',
            template: __webpack_require__(/*! ./city-guide-item-list.page.html */ "./src/app/pages/city-guide-item-list/city-guide-item-list.page.html"),
            styles: [__webpack_require__(/*! ./city-guide-item-list.page.scss */ "./src/app/pages/city-guide-item-list/city-guide-item-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_city_guide_service__WEBPACK_IMPORTED_MODULE_3__["CityGuideService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CityGuideItemListPage);
    return CityGuideItemListPage;
}());



/***/ })

}]);
//# sourceMappingURL=city-guide-item-list-city-guide-item-list-module.js.map