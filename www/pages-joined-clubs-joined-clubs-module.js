(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-joined-clubs-joined-clubs-module"],{

/***/ "./src/app/pages/joined-clubs/joined-clubs.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/joined-clubs/joined-clubs.module.ts ***!
  \***********************************************************/
/*! exports provided: JoinedClubsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedClubsPageModule", function() { return JoinedClubsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _joined_clubs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joined-clubs.page */ "./src/app/pages/joined-clubs/joined-clubs.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _joined_clubs_page__WEBPACK_IMPORTED_MODULE_6__["JoinedClubsPage"]
    }
];
var JoinedClubsPageModule = /** @class */ (function () {
    function JoinedClubsPageModule() {
    }
    JoinedClubsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_joined_clubs_page__WEBPACK_IMPORTED_MODULE_6__["JoinedClubsPage"]]
        })
    ], JoinedClubsPageModule);
    return JoinedClubsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/joined-clubs/joined-clubs.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/joined-clubs/joined-clubs.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar [back]=\"true\" title=\"Joined clubs\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div style=\"margin-top: 40pt;\"></div>\n        <div class=\"joined-club-header\">\n          <span class=\"view-all\" (click)=\"goToClubList()\">\n            {{ 'view-profile.viewAll' | translate }}\n          </span>\n        </div>\n\n        <div class=\"box-container\">\n          <div *ngFor=\"let item of itemClub\" class=\"item\" (click)=\"goToClubDetail(item)\">\n            <ion-card>\n              <img src=\"{{url}}/get-ceu-club-image/{{item?.image}}\">\n            </ion-card>\n            <div\n              style=\"display: -webkit-box;max-width: 100%;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;text-overflow: ellipsis;font-weight: 500;white-space: nowrap;\"\n              class=\"box-center-full\" [ngClass]=\"{'vp-ios-text-card':_globalServ?.iosDivice}\">\n              {{item?.title}}\n            </div>\n            <div class=\"box-center-full\">\n              <div class=\"secondary-text\">\n                <ion-icon class=\"jc-icon\" name=\"ios-person\"></ion-icon> <span class=\"jc-item-text\"> {{item?.countUser}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/joined-clubs/joined-clubs.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/joined-clubs/joined-clubs.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-container .item {\n  float: left;\n  width: 33.3%; }\n\n.item {\n  list-style-type: disc; }\n\n.jc-item-text {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12pt;\n  margin-left: 10px; }\n\n.jc-icon {\n  font-size: 18pt;\n  display: inline-block;\n  vertical-align: middle; }\n\n.joined-club-header {\n  text-align: right; }\n\n.joined-club-header .view-all {\n    color: #9b9b9b;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9qb2luZWQtY2x1YnMvam9pbmVkLWNsdWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBYztFQUNkLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxjQUFjO0lBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvam9pbmVkLWNsdWJzL2pvaW5lZC1jbHVicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWNvbnRhaW5lciAuaXRlbXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzMuMyU7Ly9oZWxwcyB0byBkZXRlcm1pbmUgbnVtYmVyIG9mIGNvbHVtbnMsIGZvciBpbnN0YW5jZSAzMy4zJSBkaXNwbGF5cyAzIGNvbHVtbnNcbn1cbi5pdGVte1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbn1cblxuLmpjLWl0ZW0tdGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDEycHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5qYy1pY29ue1xuICAgIGZvbnQtc2l6ZToxOHB0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uam9pbmVkLWNsdWItaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAmIC52aWV3LWFsbCB7XG4gICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/joined-clubs/joined-clubs.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/joined-clubs/joined-clubs.page.ts ***!
  \*********************************************************/
/*! exports provided: JoinedClubsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinedClubsPage", function() { return JoinedClubsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_clubs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clubs.service */ "./src/app/services/clubs.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var JoinedClubsPage = /** @class */ (function () {
    function JoinedClubsPage(_globalServ, _clubServ, router) {
        var _this = this;
        this._globalServ = _globalServ;
        this._clubServ = _clubServ;
        this.router = router;
        this.itemClub = [];
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        console.log('this._globalServ.idUser:  ', this._globalServ.idUser);
        this._clubServ.getJoined(this._globalServ.idUser).subscribe(function (data) {
            console.log('joined clubs: ', data);
            _this.clubs = data;
            _this.itemClub = _this.clubs.map(function (o) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { countUser: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(o, 'Ceu_Club_Members', []).length });
            });
            console.log(_this.itemClub);
        });
    }
    JoinedClubsPage.prototype.ngOnInit = function () {
    };
    JoinedClubsPage.prototype.goToClubList = function () {
        this.router.navigate(['clubs']);
    };
    JoinedClubsPage.prototype.goToClubDetail = function (item) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': item.id })
            },
        };
        this.router.navigate(['club-detail'], navigationExtras);
    };
    JoinedClubsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joined-clubs',
            template: __webpack_require__(/*! ./joined-clubs.page.html */ "./src/app/pages/joined-clubs/joined-clubs.page.html"),
            styles: [__webpack_require__(/*! ./joined-clubs.page.scss */ "./src/app/pages/joined-clubs/joined-clubs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _services_clubs_service__WEBPACK_IMPORTED_MODULE_3__["ClubsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], JoinedClubsPage);
    return JoinedClubsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-joined-clubs-joined-clubs-module.js.map