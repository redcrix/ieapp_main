(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clubs-clubs-module"],{

/***/ "./src/app/pages/clubs/clubs.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/clubs/clubs.module.ts ***!
  \*********************************************/
/*! exports provided: ClubsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubsPageModule", function() { return ClubsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clubs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clubs.page */ "./src/app/pages/clubs/clubs.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _clubs_page__WEBPACK_IMPORTED_MODULE_6__["ClubsPage"]
    }
];
var ClubsPageModule = /** @class */ (function () {
    function ClubsPageModule() {
    }
    ClubsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_clubs_page__WEBPACK_IMPORTED_MODULE_6__["ClubsPage"]]
        })
    ], ClubsPageModule);
    return ClubsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/clubs/clubs.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/clubs/clubs.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content\n  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"\n>\n  <toolbar [title]=\"showFixedHeader() ? getFixedHeaderTitle() : ''\" [back]=\"true\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <h1 class=\"title\">{{ 'clubs.clubs' | translate }}</h1>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"all-club-header\">\n          <h4 class=\"title\">{{ 'clubs.recommendedClubs' | translate }}</h4>\n          <span class=\"view-all\" (click)=\"isViewAllForRecommend = !isViewAllForRecommend\">\n            {{isViewAllForRecommend ? ('clubs.hideAll' | translate) : ('clubs.viewAll' | translate)}}\n          </span>\n        </div>\n        <div class=\"club-card-row\" *ngIf=\"recommendedClubs.length !== 0\">\n          <div class=\"text-center club-card\" *ngFor=\"let rClub of recommendedClubs; let i=index\" (click)=\"goToClubDetail(rClub)\">\n            <div *ngIf=\"i < getNumberOfLimitForClubs('recommendedClubs')\">\n              <img src=\"{{rClub?.image}}\" />\n              <h5 class=\"title\">{{rClub?.title}}</h5>\n              <div class=\"icon-status\">\n                <ion-icon name=\"ios-person\"></ion-icon>\n                <span class=\"status\">{{rClub?.club_member_count}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"club-card-row\" *ngIf=\"recommendedClubs.length === 0\">\n          <div class=\"empty-text\">\n            {{ 'clubs.noClubs' | translate }}\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"all-club-header\">\n          <h4 class=\"title\">{{ 'clubs.yourClubs' | translate }}</h4>\n          <span class=\"view-all\" (click)=\"isViewAllForClubs = !isViewAllForClubs\">\n            {{isViewAllForClubs ? ('clubs.hideAll' | translate) : ('clubs.viewAll' | translate)}}\n          </span>\n        </div>\n        <div class=\"club-card-row\" *ngIf=\"allClubs.length !== 0\">\n          <div class=\"text-center club-card\" *ngFor=\"let allClub of allClubs; let i=index\" (click)=\"goToClubDetail(allClub)\">\n            <div *ngIf=\"i < getNumberOfLimitForClubs('clubs')\">\n              <img src=\"{{allClub?.image}}\" />\n              <h5 class=\"title\">{{allClub?.title}}</h5>\n              <div class=\"icon-status\">\n                <ion-icon name=\"ios-person\"></ion-icon>\n                <span class=\"status\">{{allClub?.club_member_count}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"club-card-row\" *ngIf=\"allClubs.length === 0\">\n          <div class=\"empty-text\">\n            {{ 'clubs.noClubs' | translate }}\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/clubs/clubs.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/clubs/clubs.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-text {\n  color: #9b9b9b;\n  font-size: 12px;\n  margin: auto; }\n\n.club-card-row {\n  display: flex;\n  flex-wrap: wrap; }\n\n.club-card-row .club-card {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    width: 29.3%;\n    cursor: pointer;\n    margin-right: 2%;\n    margin-left: 2%; }\n\n.club-card-row .club-card img {\n      border-radius: 5px;\n      width: 100%; }\n\n.club-card-row .club-card .title {\n      font-size: 12px;\n      font-weight: bold;\n      margin-top: 10px;\n      margin-bottom: 5px; }\n\n.club-card-row .club-card .icon-status {\n      display: flex;\n      justify-content: center;\n      font-size: 12px;\n      color: #9b9b9b; }\n\n.club-card-row .club-card .icon-status ion-icon {\n        font-size: 15px; }\n\n.all-club-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.all-club-header .title,\n  .all-club-header .view-all {\n    font-size: 18px; }\n\n.all-club-header .view-all {\n    color: #9b9b9b;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9jbHVicy9jbHVicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBRmpCO0lBS0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7O0FBVm5CO01BYU0sa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTs7QUFkakI7TUFrQk0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7O0FBckJ4QjtNQXlCTSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixjQUFjLEVBQUE7O0FBNUJwQjtRQStCUSxlQUFlLEVBQUE7O0FBTXZCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFIckI7O0lBT0ksZUFBZSxFQUFBOztBQVBuQjtJQVdJLGNBQWM7SUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbHVicy9jbHVicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktdGV4dCB7XG4gIGNvbG9yOiAjOWI5YjliO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNsdWItY2FyZC1yb3cgeyAvLyBuZXctd2F5IGNhcmQgcm93XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuY2x1Yi1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDI5LjMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgXG4gICAgJiBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBcbiAgICAmIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICBcbiAgICAmIC5pY29uLXN0YXR1cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzliOWI5YjtcbiAgXG4gICAgICAmIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYWxsLWNsdWItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgLnRpdGxlLFxuICAmIC52aWV3LWFsbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgJiAudmlldy1hbGwge1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/clubs/clubs.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/clubs/clubs.page.ts ***!
  \*******************************************/
/*! exports provided: ClubsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubsPage", function() { return ClubsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_club_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/club.service */ "./src/app/services/club.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







var ClubsPage = /** @class */ (function () {
    function ClubsPage(_clubServ, _globalServ, router, translate) {
        this._clubServ = _clubServ;
        this._globalServ = _globalServ;
        this.router = router;
        this.translate = translate;
        this.assetsBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/get-ceu-club-image/';
        this.allClubs = [];
        this.recommendedClubs = [];
        this.scrollPos = 0;
        this.isViewAllForClubs = false;
        this.isViewAllForRecommend = false;
        this.loadAllClubs();
        this.loadRecommendedClubs();
    }
    ClubsPage.prototype.ngOnInit = function () {
    };
    ClubsPage.prototype.loadAllClubs = function () {
        var _this = this;
        this._clubServ.getClubList().subscribe(function (data) {
            console.log('club list: ', data);
            _this.allClubs = data;
        }, function (err) {
            console.log('get club err: ', err);
        });
    };
    ClubsPage.prototype.loadRecommendedClubs = function () {
        var _this = this;
        this._clubServ.getRecommendedClubList().subscribe(function (data) {
            console.log('recommendedClubs list: ', data);
            _this.recommendedClubs = data;
        }, function (err) {
            console.log('get recommendedClubs err: ', err);
        });
    };
    ClubsPage.prototype.showFixedHeader = function () {
        if (this.scrollPos > 50) {
            return true;
        }
        return false;
    };
    ClubsPage.prototype.logScrolling = function (ev) {
        this.scrollPos = ev.detail.scrollTop;
    };
    ClubsPage.prototype.logScrollStart = function () {
    };
    ClubsPage.prototype.logScrollEnd = function () {
    };
    ClubsPage.prototype.goToClubDetail = function (value) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': value.id })
            },
        };
        this.router.navigate(['club-detail'], navigationExtras);
    };
    ClubsPage.prototype.getNumberOfLimitForClubs = function (type) {
        if (type === 'clubs') {
            return this.isViewAllForClubs ? this.allClubs.length : 9;
        }
        else {
            return this.isViewAllForRecommend ? this.recommendedClubs.length : 3;
        }
    };
    ClubsPage.prototype.getFixedHeaderTitle = function () {
        return this.translate.instant('clubs.clubs');
    };
    ClubsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clubs',
            template: __webpack_require__(/*! ./clubs.page.html */ "./src/app/pages/clubs/clubs.page.html"),
            styles: [__webpack_require__(/*! ./clubs.page.scss */ "./src/app/pages/clubs/clubs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_club_service__WEBPACK_IMPORTED_MODULE_2__["ClubService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ClubsPage);
    return ClubsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-clubs-clubs-module.js.map