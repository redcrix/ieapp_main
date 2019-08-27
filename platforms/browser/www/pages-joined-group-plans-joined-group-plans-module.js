(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-joined-group-plans-joined-group-plans-module"],{

/***/ "./src/app/pages/joined-group-plans/joined-group-plans.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/joined-group-plans/joined-group-plans.module.ts ***!
  \***********************************************************************/
/*! exports provided: JoinedGroupPlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedGroupPlansPageModule", function() { return JoinedGroupPlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _joined_group_plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joined-group-plans.page */ "./src/app/pages/joined-group-plans/joined-group-plans.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _joined_group_plans_page__WEBPACK_IMPORTED_MODULE_6__["JoinedGroupPlansPage"]
    }
];
var JoinedGroupPlansPageModule = /** @class */ (function () {
    function JoinedGroupPlansPageModule() {
    }
    JoinedGroupPlansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_joined_group_plans_page__WEBPACK_IMPORTED_MODULE_6__["JoinedGroupPlansPage"]]
        })
    ], JoinedGroupPlansPageModule);
    return JoinedGroupPlansPageModule;
}());



/***/ }),

/***/ "./src/app/pages/joined-group-plans/joined-group-plans.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/joined-group-plans/joined-group-plans.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar [back]=\"true\" title=\"{{('profile.joined' | translate) + ' ' + ('joined.groupPlans' | translate)}}\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div style=\"margin-top: 40pt;\"></div>\n        \n        <div class=\"j-card-row\">\n          <div class=\"text-center j-card\" *ngFor=\"let jGroupPlan of joinedGroupPlans; let i=index\" (click)=\"goToGroupItem(jGroupPlan)\">\n            <img src=\"{{jGroupPlan?.image}}\" />\n            <h5 class=\"title\">{{jGroupPlan?.title}}</h5>\n            <div class=\"icon-status\">\n              <ion-icon name=\"ios-person\"></ion-icon>\n              <span class=\"status\">{{jGroupPlan?.participants_count}}</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"box-center-full btn-pc-box\">\n            <!-- <ion-button (click)=\"goToGroups()\" class=\"button-one\" shape=\"round\">\n              <span>{{ 'joined.viewAllGroups' | translate }}</span>\n            </ion-button> -->\n            <ion-button (click)=\"goToPlan()\" class=\"button-one\" shape=\"round\">\n              <span>{{ 'joined.viewAllGroupPlan' | translate }}</span>\n            </ion-button>\n          </div>\n          \n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/joined-group-plans/joined-group-plans.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/joined-group-plans/joined-group-plans.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".j-card-row {\n  display: flex;\n  flex-wrap: wrap; }\n  .j-card-row .j-card {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    width: 29.3%;\n    cursor: pointer;\n    margin-right: 2%;\n    margin-left: 2%; }\n  .j-card-row .j-card img {\n      border-radius: 5px;\n      width: 100%;\n      min-height: 108px; }\n  .j-card-row .j-card .title {\n      font-size: 12px;\n      font-weight: bold;\n      margin-top: 10px;\n      margin-bottom: 5px; }\n  .j-card-row .j-card .icon-status {\n      display: flex;\n      justify-content: center;\n      font-size: 12px;\n      color: #9b9b9b; }\n  .j-card-row .j-card .icon-status ion-icon {\n        font-size: 15px; }\n  .btn-pc-box {\n  margin-top: 32pt;\n  margin-bottom: 36pt;\n  background: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9qb2luZWQtZ3JvdXAtcGxhbnMvam9pbmVkLWdyb3VwLXBsYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlLEVBQUE7RUFGakI7SUFLSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtFQVZuQjtNQWFNLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsaUJBQWlCLEVBQUE7RUFmdkI7TUFtQk0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7RUF0QnhCO01BMEJNLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLGNBQWMsRUFBQTtFQTdCcEI7UUFnQ1EsZUFBZSxFQUFBO0VBTXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW5lZC1ncm91cC1wbGFucy9qb2luZWQtZ3JvdXAtcGxhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmotY2FyZC1yb3cgeyAvLyBuZXctd2F5IGNhcmQgcm93XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuai1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDI5LjMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBcbiAgICAmIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwOHB4O1xuICAgIH1cbiAgICBcbiAgICAmIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIFxuICAgICYgLmljb24tc3RhdHVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgXG4gICAgICAmIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYnRuLXBjLWJveHtcbiAgbWFyZ2luLXRvcDogMzJwdDtcbiAgbWFyZ2luLWJvdHRvbTogMzZwdDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/joined-group-plans/joined-group-plans.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/joined-group-plans/joined-group-plans.page.ts ***!
  \*********************************************************************/
/*! exports provided: JoinedGroupPlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedGroupPlansPage", function() { return JoinedGroupPlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var JoinedGroupPlansPage = /** @class */ (function () {
    function JoinedGroupPlansPage(router, _groupServ, _globalServ) {
        var _this = this;
        this.router = router;
        this._groupServ = _groupServ;
        this._globalServ = _globalServ;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this._groupServ.joinedGroupPlans(this._globalServ.idUser).subscribe(function (data) {
            _this.joinedGroupPlans = data;
            console.log('joined group plans scc: ', _this.joinedGroupPlans);
        }, function (err) {
            console.log('joined gropu plan err: ', err);
        });
    }
    JoinedGroupPlansPage.prototype.goToGroups = function () {
        this.router.navigate(['groups']);
    };
    JoinedGroupPlansPage.prototype.ngOnInit = function () {
    };
    JoinedGroupPlansPage.prototype.goToPlan = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({})
            }, replaceUrl: true
        };
        this.router.navigate(['tabs/plan-list'], navigationExtras);
    };
    JoinedGroupPlansPage.prototype.goToGroupItem = function (group) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': group.id })
            },
        };
        this.router.navigate(['group-plan-item'], navigationExtras);
    };
    JoinedGroupPlansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joined-group-plans',
            template: __webpack_require__(/*! ./joined-group-plans.page.html */ "./src/app/pages/joined-group-plans/joined-group-plans.page.html"),
            styles: [__webpack_require__(/*! ./joined-group-plans.page.scss */ "./src/app/pages/joined-group-plans/joined-group-plans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], JoinedGroupPlansPage);
    return JoinedGroupPlansPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-joined-group-plans-joined-group-plans-module.js.map