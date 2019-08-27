(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-groups-groups-module"],{

/***/ "./src/app/pages/groups/groups.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.module.ts ***!
  \***********************************************/
/*! exports provided: GroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups.page */ "./src/app/pages/groups/groups.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]
    }
];
var GroupsPageModule = /** @class */ (function () {
    function GroupsPageModule() {
    }
    GroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]]
        })
    ], GroupsPageModule);
    return GroupsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/groups/groups.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content\n  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"\n>\n  <toolbar [title]=\"showFixedHeader() ? ('groups.groups' | translate) : ''\" [back]=\"true\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <h1 class=\"title\">{{'groups.groups' | translate}}</h1>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"all-group-header\">\n          <h4 class=\"title\">{{'groups.recommendedGroups' | translate}}</h4>\n          <span class=\"view-all\" (click)=\"isViewAllForRecommend = !isViewAllForRecommend\">\n            {{isViewAllForRecommend ? ('groups.hideAll' | translate) : ('groups.viewAll' | translate)}}\n          </span>\n        </div>\n        <div class=\"group-card-row\" *ngIf=\"recommendedGroups.length !== 0\">\n          <div class=\"text-center group-card\" *ngFor=\"let rGroup of recommendedGroups; let i=index\" (click)=\"goToGroupDetail(rGroup)\">\n            <div *ngIf=\"i < getNumberOfLimitForGroups('recommendedGroups')\">\n              <img src=\"{{rGroup?.image}}\" />\n              <h5 class=\"title\">{{rGroup?.title}}</h5>\n              <div class=\"icon-status\">\n                <ion-icon name=\"ios-person\"></ion-icon>\n                <span class=\"status\">{{rGroup?.group_members_count}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"group-card-row\" *ngIf=\"recommendedGroups.length === 0\">\n          <div class=\"empty-text\">\n            {{'groups.noGroups' | translate}}\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"all-group-header\">\n          <h4 class=\"title\">{{'groups.yourGroups' | translate}}</h4>\n          <span class=\"view-all\" (click)=\"isViewAllForGroups = !isViewAllForGroups\">\n            {{isViewAllForGroups ? ('groups.hideAll' | translate) : ('groups.viewAll' | translate)}}\n          </span>\n        </div>\n        <div class=\"group-card-row\" *ngIf=\"allGroups.length !== 0\">\n          <div class=\"text-center group-card\" *ngFor=\"let allGroup of allGroups; let i=index\" (click)=\"goToGroupDetail(allGroup)\">\n            <div *ngIf=\"i < getNumberOfLimitForGroups('groups')\">\n              <img src=\"{{allGroup?.image}}\" />\n              <h5 class=\"title\">{{allGroup?.title}}</h5>\n              <div class=\"icon-status\">\n                <ion-icon name=\"ios-person\"></ion-icon>\n                <span class=\"status\">{{allGroup?.group_members_count}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"group-card-row\" *ngIf=\"allGroups.length === 0\">\n          <div class=\"empty-text\">\n            {{'groups.noGroups' | translate}}\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/groups/groups.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-text {\n  color: #9b9b9b;\n  font-size: 12px;\n  margin: auto; }\n\n.group-card-row {\n  display: flex;\n  flex-wrap: wrap; }\n\n.group-card-row .group-card {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    width: 29.3%;\n    cursor: pointer;\n    margin-right: 2%;\n    margin-left: 2%; }\n\n.group-card-row .group-card img {\n      border-radius: 5px;\n      width: 100%; }\n\n.group-card-row .group-card .title {\n      font-size: 12px;\n      font-weight: bold;\n      margin-top: 10px;\n      margin-bottom: 5px; }\n\n.group-card-row .group-card .icon-status {\n      display: flex;\n      justify-content: center;\n      font-size: 12px;\n      color: #9b9b9b; }\n\n.group-card-row .group-card .icon-status ion-icon {\n        font-size: 15px; }\n\n.all-group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.all-group-header .title,\n  .all-group-header .view-all {\n    font-size: 18px; }\n\n.all-group-header .view-all {\n    color: #9b9b9b;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ncm91cHMvZ3JvdXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFGakI7SUFLSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFWbkI7TUFhTSxrQkFBa0I7TUFDbEIsV0FBVyxFQUFBOztBQWRqQjtNQWtCTSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTs7QUFyQnhCO01BeUJNLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLGNBQWMsRUFBQTs7QUE1QnBCO1FBK0JRLGVBQWUsRUFBQTs7QUFNdkI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUhyQjs7SUFPSSxlQUFlLEVBQUE7O0FBUG5CO0lBV0ksY0FBYztJQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3Vwcy9ncm91cHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcHR5LXRleHQge1xuICBjb2xvcjogIzliOWI5YjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ncm91cC1jYXJkLXJvdyB7IC8vIG5ldy13YXkgY2FyZCByb3dcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC5ncm91cC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDI5LjMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgXG4gICAgJiBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBcbiAgICAmIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICBcbiAgICAmIC5pY29uLXN0YXR1cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzliOWI5YjtcbiAgXG4gICAgICAmIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYWxsLWdyb3VwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmIC50aXRsZSxcbiAgJiAudmlldy1hbGwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gICYgLnZpZXctYWxsIHtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/groups/groups.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/groups/groups.page.ts ***!
  \*********************************************/
/*! exports provided: GroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPage", function() { return GroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var GroupsPage = /** @class */ (function () {
    function GroupsPage(_groupServ, _globalServ, router) {
        this._groupServ = _groupServ;
        this._globalServ = _globalServ;
        this.router = router;
        this.assetsBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/get-ceu-club-image/';
        this.allGroups = [];
        this.recommendedGroups = [];
        this.scrollPos = 0;
        this.isViewAllForGroups = false;
        this.isViewAllForRecommend = false;
        this.loadAllGroups();
        this.loadRecommendedGroups();
    }
    GroupsPage.prototype.ngOnInit = function () {
    };
    GroupsPage.prototype.loadAllGroups = function () {
        var _this = this;
        this._groupServ.getGroupList().subscribe(function (data) {
            console.log('group list: ', data);
            _this.allGroups = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(data, 'group', []);
        }, function (err) {
            console.log('get group err: ', err);
        });
    };
    GroupsPage.prototype.loadRecommendedGroups = function () {
        var _this = this;
        this._groupServ.getRecommendedGroupList().subscribe(function (data) {
            console.log('recommendedGroups list: ', data);
            _this.recommendedGroups = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(data, 'group', []);
        }, function (err) {
            console.log('get recommendedGroups err: ', err);
        });
    };
    GroupsPage.prototype.showFixedHeader = function () {
        if (this.scrollPos > 50) {
            return true;
        }
        return false;
    };
    GroupsPage.prototype.logScrolling = function (ev) {
        this.scrollPos = ev.detail.scrollTop;
    };
    GroupsPage.prototype.logScrollStart = function () {
    };
    GroupsPage.prototype.logScrollEnd = function () {
    };
    GroupsPage.prototype.goToGroupDetail = function (value) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': value.id })
            },
        };
        this.router.navigate(['group-detail'], navigationExtras);
    };
    GroupsPage.prototype.getNumberOfLimitForGroups = function (type) {
        if (type === 'groups') {
            return this.isViewAllForGroups ? this.allGroups.length : 9;
        }
        else {
            return this.isViewAllForRecommend ? this.recommendedGroups.length : 3;
        }
    };
    GroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.page.html */ "./src/app/pages/groups/groups.page.html"),
            styles: [__webpack_require__(/*! ./groups.page.scss */ "./src/app/pages/groups/groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], GroupsPage);
    return GroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-groups-groups-module.js.map