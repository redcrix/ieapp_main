(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-list-plan-list-module"],{

/***/ "./src/app/pages/plan-list/plan-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/plan-list/plan-list.module.ts ***!
  \*****************************************************/
/*! exports provided: PlanListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanListPageModule", function() { return PlanListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plan_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan-list.page */ "./src/app/pages/plan-list/plan-list.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _plan_list_page__WEBPACK_IMPORTED_MODULE_6__["PlanListPage"]
    }
];
var PlanListPageModule = /** @class */ (function () {
    function PlanListPageModule() {
    }
    PlanListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plan_list_page__WEBPACK_IMPORTED_MODULE_6__["PlanListPage"]]
        })
    ], PlanListPageModule);
    return PlanListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plan-list/plan-list.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/plan-list/plan-list.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <toolbar [setting]=\"true\" [title]=\"pageTitleName? ('plan-list.plans' | translate) : ''\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <h1 class=\"title\">{{ 'plan-list.plans' | translate }}</h1>\n        <ion-row>\n          <ion-col class=\"weight-600\" size=\"6\">{{ 'plan-list.recommended' | translate }}</ion-col>\n          <ion-col class=\"secondary-text view-all\" size=\"6\">{{ 'plan-list.viewMyPlans' | translate }}</ion-col>\n        </ion-row>\n\n        <div *ngIf=\"!_globalServ?.listPlanHighlight?.recommended_plans\" class=\"spinner-div\">\n          <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n        <div *ngIf=\"_globalServ?.listPlanHighlight?.recommended_plans\">\n          <ion-slides style=\"width: 100%;\" [pager]=\"true\">\n            <ion-slide *ngFor=\"let item of _globalServ?.listPlanHighlight?.recommended_plans\" style=\"width: 100%;\">\n              <plan-card [dataPlan]=\"item\" style=\"width: 100%;\"></plan-card>\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <div style=\"margin-top: 66pt;\"></div>\n        <div *ngIf=\"!_globalServ?.listPlanFiltered?.plans\" class=\"spinner-div\">\n          <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n        <div *ngIf=\"_globalServ?.listPlanFiltered?.plans\">\n          <div *ngFor=\"let item of _globalServ?.listPlanFiltered?.plans\">\n            <plan-card style=\"margin-top: 30pt;\" [dataPlan]=\"item\"></plan-card>\n          </div>\n        </div>\n\n        <div style=\"margin-top: 66pt;\"></div>\n        <ion-row>\n          <ion-col class=\"weight-600\" size=\"6\">Club plans</ion-col>\n        </ion-row>\n        <div *ngIf=\"!getClubPlans\" class=\"spinner-div\">\n          <ion-spinner name=\"lines\"></ion-spinner>\n        </div>\n        <div *ngIf=\"getClubPlans\">\n          <div *ngFor=\"let item of getClubPlans\">\n            <plan-card style=\"margin-top: 30pt;\" [dataPlan]=\"item\"></plan-card>\n          </div>\n        </div>\n        \n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plan-list/plan-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/plan-list/plan-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-all {\n  text-align: right; }\n\n.spinner-div {\n  text-align: center; }\n\n.title {\n  margin-top: 0px;\n  margin-left: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9wbGFuLWxpc3QvcGxhbi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGtCQUFrQixFQUFBOztBQUlsQjtFQUNDLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYW4tbGlzdC9wbGFuLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctYWxse1xuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNwaW5uZXItZGl2IHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblx0LnRpdGxle1xuXHRcdG1hcmdpbi10b3A6IDBweDtcblx0XHRtYXJnaW4tbGVmdDogM3B4O1xuXHR9Il19 */"

/***/ }),

/***/ "./src/app/pages/plan-list/plan-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/plan-list/plan-list.page.ts ***!
  \***************************************************/
/*! exports provided: PlanListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanListPage", function() { return PlanListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var PlanListPage = /** @class */ (function () {
    function PlanListPage(splashScreen, _globalServ, _planServ) {
        this.splashScreen = splashScreen;
        this._globalServ = _globalServ;
        this._planServ = _planServ;
        this.pageTitleName = false;
        //window.scrollTo(0,0);
    }
    PlanListPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('idUser: ', this._globalServ.idUser);
        this._planServ.getDataPlanList();
        //document.querySelector('ion-tab-bar').style.display = 'none';
        navigator.geolocation.getCurrentPosition(function (position) {
        });
        this._planServ.getIEClubPlans().subscribe(function (data) {
            console.log('data: ', Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'events', []));
            _this.getClubPlans = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'events', []);
            _this.getClubPlans = _this.getClubPlans.map(function (o) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { type: 'club_plan' });
            });
        }, function (err) {
            console.log(err);
        });
    };
    PlanListPage.prototype.ionViewDidEnter = function () {
        this.splashScreen.hide();
    };
    PlanListPage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    PlanListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-list',
            template: __webpack_require__(/*! ./plan-list.page.html */ "./src/app/pages/plan-list/plan-list.page.html"),
            styles: [__webpack_require__(/*! ./plan-list.page.scss */ "./src/app/pages/plan-list/plan-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_plan_service__WEBPACK_IMPORTED_MODULE_4__["PlanService"]])
    ], PlanListPage);
    return PlanListPage;
}());



/***/ })

}]);
//# sourceMappingURL=plan-list-plan-list-module.js.map