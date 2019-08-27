(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["city-agenda-list-city-agenda-list-module"],{

/***/ "./src/app/pages/city-agenda-list/city-agenda-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/city-agenda-list/city-agenda-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: CityAgendaListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityAgendaListPageModule", function() { return CityAgendaListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _city_agenda_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-agenda-list.page */ "./src/app/pages/city-agenda-list/city-agenda-list.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _city_agenda_list_page__WEBPACK_IMPORTED_MODULE_6__["CityAgendaListPage"]
    }
];
var CityAgendaListPageModule = /** @class */ (function () {
    function CityAgendaListPageModule() {
    }
    CityAgendaListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_city_agenda_list_page__WEBPACK_IMPORTED_MODULE_6__["CityAgendaListPage"]]
        })
    ], CityAgendaListPageModule);
    return CityAgendaListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/city-agenda-list/city-agenda-list.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/city-agenda-list/city-agenda-list.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrolling($event)\">\n<toolbar [setting]=\"true\" [title]=\"pageTitleName ? ('city-agenda-list.cityAgenda' | translate) : ''\"></toolbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1 class=\"title\">{{ 'city-agenda-list.cityAgenda' | translate }}</h1>\n      <div *ngIf=\"!_globalServ?.listCityAgenda?.events\" class=\"spinner-div\">\n        <ion-spinner name=\"lines\"></ion-spinner>\n      </div>\n      <div *ngIf=\"_globalServ?.listCityAgenda?.events\">\n        <city-agenda-card *ngFor=\"let item of _globalServ?.listCityAgenda?.events\" [dataCAItem]=\"item\"></city-agenda-card>\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/city-agenda-list/city-agenda-list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/city-agenda-list/city-agenda-list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-div {\n  text-align: center;\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9jaXR5LWFnZW5kYS1saXN0L2NpdHktYWdlbmRhLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpdHktYWdlbmRhLWxpc3QvY2l0eS1hZ2VuZGEtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci1kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/city-agenda-list/city-agenda-list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/city-agenda-list/city-agenda-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: CityAgendaListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityAgendaListPage", function() { return CityAgendaListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_city_agenda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/city-agenda.service */ "./src/app/services/city-agenda.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");




var CityAgendaListPage = /** @class */ (function () {
    function CityAgendaListPage(_cityAgendaServ, _globalServ) {
        this._cityAgendaServ = _cityAgendaServ;
        this._globalServ = _globalServ;
        this.pageTitleName = false;
        this._cityAgendaServ.getDataCityAgendaList();
    }
    CityAgendaListPage.prototype.ngOnInit = function () {
    };
    CityAgendaListPage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    CityAgendaListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-agenda-list',
            template: __webpack_require__(/*! ./city-agenda-list.page.html */ "./src/app/pages/city-agenda-list/city-agenda-list.page.html"),
            styles: [__webpack_require__(/*! ./city-agenda-list.page.scss */ "./src/app/pages/city-agenda-list/city-agenda-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_city_agenda_service__WEBPACK_IMPORTED_MODULE_2__["CityAgendaService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], CityAgendaListPage);
    return CityAgendaListPage;
}());



/***/ })

}]);
//# sourceMappingURL=city-agenda-list-city-agenda-list-module.js.map