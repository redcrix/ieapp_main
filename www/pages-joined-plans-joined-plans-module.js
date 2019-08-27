(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-joined-plans-joined-plans-module"],{

/***/ "./src/app/pages/joined-plans/joined-plans.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/joined-plans/joined-plans.module.ts ***!
  \***********************************************************/
/*! exports provided: JoinedPlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedPlansPageModule", function() { return JoinedPlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _joined_plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joined-plans.page */ "./src/app/pages/joined-plans/joined-plans.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _joined_plans_page__WEBPACK_IMPORTED_MODULE_6__["JoinedPlansPage"]
    }
];
var JoinedPlansPageModule = /** @class */ (function () {
    function JoinedPlansPageModule() {
    }
    JoinedPlansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_joined_plans_page__WEBPACK_IMPORTED_MODULE_6__["JoinedPlansPage"]]
        })
    ], JoinedPlansPageModule);
    return JoinedPlansPageModule;
}());



/***/ }),

/***/ "./src/app/pages/joined-plans/joined-plans.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/joined-plans/joined-plans.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <toolbar [back]=\"true\" title=\"Joined Student Plans\"></toolbar>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n          <div style=\"margin-top: 40pt;\"></div>\n          \n          <div *ngFor=\"let item of Participations\">\n            <plan-card [dataPlan]=\"item\"></plan-card>\n          </div>\n   \n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/joined-plans/joined-plans.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/joined-plans/joined-plans.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW5lZC1wbGFucy9qb2luZWQtcGxhbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/joined-plans/joined-plans.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/joined-plans/joined-plans.page.ts ***!
  \*********************************************************/
/*! exports provided: JoinedPlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedPlansPage", function() { return JoinedPlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var JoinedPlansPage = /** @class */ (function () {
    function JoinedPlansPage(_planServ, _globalServ) {
        var _this = this;
        this._planServ = _planServ;
        this._globalServ = _globalServ;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this._planServ.getParticipations(this._globalServ.idUser).subscribe(function (data) {
            _this.Participations = data;
            for (var _i = 0, _a = _this.Participations; _i < _a.length; _i++) {
                var item = _a[_i];
                item.image = _this.url + '/get-image-plan/' + item.image;
                item.join = true;
                item.type = 'student_plan';
            }
        });
    }
    JoinedPlansPage.prototype.ngOnInit = function () {
    };
    JoinedPlansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joined-plans',
            template: __webpack_require__(/*! ./joined-plans.page.html */ "./src/app/pages/joined-plans/joined-plans.page.html"),
            styles: [__webpack_require__(/*! ./joined-plans.page.scss */ "./src/app/pages/joined-plans/joined-plans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_plan_service__WEBPACK_IMPORTED_MODULE_2__["PlanService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], JoinedPlansPage);
    return JoinedPlansPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-joined-plans-joined-plans-module.js.map