(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/pages/search/search.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/search/search.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col *ngIf=\"showArrow == true\" class=\"row-back\" size=\"1\">\n        <ion-icon name=\"ios-arrow-back\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"{{searchbarSize}}\">\n        <ion-searchbar (keyup)=\"kuSearch($event)\" class=\"searchbar\" mode=\"ios\" showCancelButton=\"focus\"\n          (ionFocus)=\"onFocus($event)\" (ionClear)=\"onClear($event)\" (ionCancel)=\"onCancel($event)\">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <ng-scrollbar *ngIf=\"showRecent != true\" [trackX]=\"true\" [trackY]=\"false\">\n          <div style=\"width: 700px\" class=\"scroll-content\">\n            <div>\n              <ion-chip (click)=\"getAll()\" [ngClass]=\"{'chip-active':selectAll}\" class=\"chip-pasive\" color=\"primary\">\n                <ion-label>{{ 'search.all' | translate }}</ion-label>\n              </ion-chip>\n              <ion-chip (click)=\"getPeople()\" [ngClass]=\"{'chip-active':selectPeople}\" class=\"chip-pasive\"\n                color=\"primary\">\n                <ion-label>{{ 'search.people' | translate }}</ion-label>\n              </ion-chip>\n              <ion-chip (click)=\"getStudentPlan()\" [ngClass]=\"{'chip-active':selectStudentPlan}\" class=\"chip-pasive\"\n                color=\"primary\">\n                <ion-label>{{ 'search.studentPlan' | translate }}</ion-label>\n              </ion-chip>\n              <ion-chip (click)=\"getEvents()\" [ngClass]=\"{'chip-active':selectEvents}\" class=\"chip-pasive\"\n                color=\"primary\">\n                <ion-label>{{ 'search.events' | translate }}</ion-label>\n              </ion-chip>\n              <ion-chip (click)=\"getOfferDiscount()\" [ngClass]=\"{'chip-active':selectOfferDiscount}\" class=\"chip-pasive\"\n                color=\"primary\">\n                <ion-label>{{ 'search.offersAndDiscount' | translate }}</ion-label>\n              </ion-chip>\n            </div>\n          </div>\n        </ng-scrollbar>\n\n        <!--RECENT SEARCHES-->\n        <div *ngIf=\"showRecent == true\">\n          <div class=\"title-search\">\n            {{ 'search.recentSearches' | translate }}\n          </div>\n          <div *ngFor=\"let item of recentList.reverse()\" class=\"box-search-item\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <ion-item lines=\"none\">\n                  <ion-avatar slot=\"start\">\n                    <img src=\"{{item?.image}}\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h2>{{item?.name}}</h2>\n                    <p>{{item?.city}}</p>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col class=\"column-center\" size=\"2\">\n                <div class=\"row-search-recent\">\n                  <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <!--SEARCH-->\n        <!--PEOPLE-->\n        <div *ngIf=\"showRecent != true\">\n          <div *ngIf=\"selectAll == true || selectPeople == true\">\n            <div class=\"title-search\">\n              {{ 'search.peopleCL' | translate }}\n            </div>\n            <div (click)=\"goToPeople(item)\" *ngFor=\"let item of getListPeople; let i = index;\" class=\"box-search-item\">\n              <ion-row>\n                <ion-col class=\"column-left\" size=\"10\">\n                  <ion-item lines=\"none\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"{{item?.image}}\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2>{{item?.name}}</h2>\n                      <p>{{item?.city}}</p>\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col class=\"column-center\" size=\"2\">\n                  <div class=\"row-search-recent\">\n                    <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class=\"toggle-hide-all\">\n              <span (click)=\"getDataByToggle('people')\">{{seeAll.people ? 'Hide All' : 'See All'}}</span>\n            </div>\n          </div>\n          <hr *ngIf=\"selectAll == true\" class=\"hr-search\">\n          <!--STUDENT PLANS-->\n          <div *ngIf=\"selectAll == true || selectStudentPlan == true\">\n            <div class=\"title-search\">\n              {{ 'search.studentPlans' | translate }}\n            </div>\n            <div (click)=\"goToStudentPlan(item)\" *ngFor=\"let item of getListStudentPlan\" class=\"box-search-item\">\n              <ion-row>\n                <ion-col class=\"column-left\" size=\"10\">\n                  <ion-item lines=\"none\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"{{item?.image}}\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2>{{item?.name}}</h2>\n                      <p>{{item?.city}}</p>\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col class=\"column-center\" size=\"2\">\n                  <div class=\"row-search-recent\">\n                    <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class=\"toggle-hide-all\">\n              <span (click)=\"getDataByToggle('student_plan')\">{{seeAll.student_plan ? 'Hide All' : 'See All'}}</span>\n            </div>\n          </div>\n\n          <hr *ngIf=\"selectAll == true\" class=\"hr-search\">\n          <!--EVENTS-->\n          <div *ngIf=\"selectAll == true || selectEvents == true\">\n            <div class=\"title-search\">\n              {{ 'search.eventsCL' | translate }}\n            </div>\n            <div (click)=\"goToEvent(item)\" *ngFor=\"let item of getListEvent\" class=\"box-search-item\">\n              <ion-row>\n                <ion-col class=\"column-left\" size=\"10\">\n                  <ion-item lines=\"none\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"{{item?.eventPhoto}}\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2>{{item?.title}}</h2>\n                      <p>{{item?.address}}</p>\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col class=\"column-center\" size=\"2\">\n                  <div class=\"row-search-recent\">\n                    <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class=\"toggle-hide-all\">\n              <span (click)=\"getDataByToggle('events')\">{{seeAll.events ? 'Hide All' : 'See All'}}</span>\n            </div>\n          </div>\n          <hr *ngIf=\"selectAll == true\" class=\"hr-search\">\n          <!--OFFERS & DISCOUNT-->\n          <div *ngIf=\"selectAll == true || selectOfferDiscount == true\">\n            <div class=\"title-search\">\n              {{ 'search.offersAndDiscountCL' | translate }}\n            </div>\n            <div (click)=\"goToOfferDiscount(item)\" *ngFor=\"let item of getListOfferDiscount\" class=\"box-search-item\">\n              <ion-row>\n                <ion-col class=\"column-left\" size=\"10\">\n                  <ion-item lines=\"none\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"{{item?.image}}\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2>{{item?.name}}</h2>\n                      <p>{{item?.city}}</p>\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col class=\"column-center\" size=\"2\">\n                  <div class=\"row-search-recent\">\n                    <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class=\"toggle-hide-all\">\n              <span (click)=\"getDataByToggle('discount')\">{{seeAll.discount ? 'Hide All' : 'See All'}}</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/search/search.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar {\n  --cancel-button-color: rgb(240, 65, 65); }\n\n.title-search {\n  color: #222428;\n  font-size: 14pt;\n  margin-top: 22pt;\n  font-weight: 500;\n  margin-bottom: 28pt; }\n\n.box-search-item {\n  margin-top: -15pt;\n  margin-left: -15px; }\n\n.toggle-hide-all {\n  text-align: center; }\n\n.toggle-hide-all span {\n    font-weight: bold; }\n\n.row-search-recent {\n  margin: auto;\n  width: 50%;\n  padding: 10px;\n  font-size: 30pt;\n  color: #d8d8d8; }\n\n.row-back {\n  margin: auto;\n  width: 50%;\n  padding: 20px;\n  font-size: 21pt;\n  color: black; }\n\n.hr-search {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important; }\n\nng-scrollbar {\n  max-height: 80px;\n  margin-left: -4px; }\n\n.scroll-content {\n  display: flex; }\n\nion-chip {\n  display: inline-table !important;\n  white-space: nowrap !important;\n  font-size: 14pt; }\n\nion-toolbar {\n  margin-top: 25pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFzQixFQUFBOztBQUkxQjtFQUNJLGNBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBeUIsRUFBQTs7QUFHN0I7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHdCQUF3QjtFQUN4Qiw4QkFBeUM7RUFDekMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBWSxFQUFBOztBQUdoQjtFQUNJLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBOztBQUluQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoYmFyIHtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHJnYigyNDAsIDY1LCA2NSk7XG59XG5cblxuLnRpdGxlLXNlYXJjaHtcbiAgICBjb2xvcjogcmdiKDM0LCAzNiwgNDApO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBtYXJnaW4tdG9wOiAyMnB0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhwdDtcbn1cblxuLmJveC1zZWFyY2gtaXRlbXtcbiAgICBtYXJnaW4tdG9wOiAtMTVwdDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi50b2dnbGUtaGlkZS1hbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAmIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5yb3ctc2VhcmNoLXJlY2VudHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBwdDtcbiAgICBjb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xufVxuXG4ucm93LWJhY2t7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDIxcHQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uaHItc2VhcmNoe1xuICAgIHdpZHRoOiAxNTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI0LCAyMjQsIDIyNCkgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7IFxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxubmctc2Nyb2xsYmFye1xuICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG5cbi5zY3JvbGwtY29udGVudHtcbiAgICBkaXNwbGF5OmZsZXg7XG59XG5cbmlvbi1jaGlwe1xuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgLy9taW4td2lkdGg6IDIwMHB4O1xufVxuXG5pb24tdG9vbGJhcntcbiAgICBtYXJnaW4tdG9wOiAyNXB0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/search/search.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var SearchPage = /** @class */ (function () {
    function SearchPage(_globalServ, _searchServ, storage) {
        var _this = this;
        this._globalServ = _globalServ;
        this._searchServ = _searchServ;
        this.storage = storage;
        this.showArrow = true;
        this.searchbarSize = 10;
        this.showRecent = true;
        this.keyWord = '';
        this.allFirst = true;
        this.recentList = [];
        this.seeAll = {
            people: false,
            student_plan: false,
            events: false,
            discount: false
        };
        this.getAll();
        this.storage.get('recentList').then(function (val) {
            if (val != null) {
                _this.recentList = JSON.parse(val);
            }
        });
    }
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.prototype.onCancel = function () {
        console.log('cancel');
        this.showArrow = true;
        this.showRecent = true;
        this.searchbarSize = 10;
    };
    SearchPage.prototype.onFocus = function () {
        this.showArrow = false;
        this.searchbarSize = 12;
        this.showRecent = false;
    };
    SearchPage.prototype.getAll = function () {
        var _this = this;
        this.selectAll = true;
        this.selectPeople = null;
        this.selectStudentPlan = null;
        this.selectEvents = null;
        this.selectOfferDiscount = null;
        if (this.allFirst == true) {
            this._searchServ.getList({ 'type': 'people' }).subscribe(function (data) {
                _this.getListPeople = data;
                _this.getListPeople = _this.getListPeople.slice(0, 5);
                _this.origListPeople = data;
            });
            this._searchServ.getList({ 'type': 'student_plan' }).subscribe(function (data) {
                _this.getListStudentPlan = data;
                _this.getListStudentPlan = _this.getListStudentPlan.slice(0, 5);
                _this.origListStudentPlan = data;
            });
            this._searchServ.getList({ 'type': 'events' }).subscribe(function (data) {
                _this.getListEvent = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'events', []);
                _this.getListEvent = _this.getListEvent.slice(0, 5);
                _this.origListEvent = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'events', []);
            });
            this._searchServ.getList({ 'type': 'discount' }).subscribe(function (data) {
                _this.getListOfferDiscount = data;
                _this.getListOfferDiscount = _this.getListOfferDiscount.slice(0, 5);
                _this.origListOfferDiscount = data;
            });
            this.allFirst = false;
        }
    };
    SearchPage.prototype.getDataByToggle = function (attr) {
        this.seeAll[attr] = !this.seeAll[attr];
        if (attr === 'people') {
            this.getListPeople = this.origListPeople.slice(0, (this.seeAll[attr] ? this.origListPeople.length : 5));
        }
        if (attr === 'student_plan') {
            this.getListStudentPlan = this.origListStudentPlan.slice(0, (this.seeAll[attr] ? this.origListStudentPlan.length : 5));
        }
        if (attr === 'events') {
            this.getListEvent = this.origListEvent.slice(0, (this.seeAll[attr] ? this.origListEvent.length : 5));
        }
        if (attr === 'discount') {
            this.getListOfferDiscount = this.origListOfferDiscount.slice(0, (this.seeAll[attr] ? this.origListOfferDiscount.length : 5));
        }
    };
    SearchPage.prototype.getPeople = function () {
        var _this = this;
        this.selectAll = null;
        this.selectPeople = true;
        this.selectStudentPlan = null;
        this.selectEvents = null;
        this.selectOfferDiscount = null;
        if (this.keyWord != '') {
            this.getListPeople = this.getListPeople.filter(function (s) { return s.name.toUpperCase().includes(_this.keyWord.toUpperCase()); });
        }
    };
    SearchPage.prototype.getStudentPlan = function () {
        var _this = this;
        this.selectAll = null;
        this.selectPeople = null;
        this.selectStudentPlan = true;
        this.selectEvents = null;
        this.selectOfferDiscount = null;
        if (this.keyWord != '') {
            this.getListStudentPlan = this.getListStudentPlan.filter(function (s) { return s.name.toUpperCase().includes(_this.keyWord.toUpperCase()); });
        }
    };
    //pending
    SearchPage.prototype.getEvents = function () {
        var _this = this;
        this.selectAll = null;
        this.selectPeople = null;
        this.selectStudentPlan = null;
        this.selectEvents = true;
        this.selectOfferDiscount = null;
        if (this.keyWord != '') {
            this.getListEvent = this.getListEvent.filter(function (s) { return s.name.toUpperCase().includes(_this.keyWord.toUpperCase()); });
        }
    };
    SearchPage.prototype.getOfferDiscount = function () {
        var _this = this;
        this.selectAll = null;
        this.selectPeople = null;
        this.selectStudentPlan = null;
        this.selectEvents = null;
        this.selectOfferDiscount = true;
        if (this.keyWord != '') {
            this.getListOfferDiscount = this.getListOfferDiscount.filter(function (s) { return s.name.toUpperCase().includes(_this.keyWord.toUpperCase()); });
        }
    };
    SearchPage.prototype.kuSearch = function (value) {
        this.keyWord = value.target.value;
        if (this.selectAll == true) {
            this.keyPeopleFuc(value);
            this.keyStudentPlanFunc(value);
            this.keyEventFunc(value);
            this.keyOfferDiscountKey(value);
        }
        if (this.selectPeople == true) {
            this.keyPeopleFuc(value);
        }
        if (this.selectStudentPlan == true) {
            this.keyStudentPlanFunc(value);
        }
        if (this.selectEvents == true) {
            this.keyEventFunc(value);
        }
        if (this.selectOfferDiscount == true) {
            this.keyOfferDiscountKey(value);
        }
    };
    SearchPage.prototype.keyPeopleFuc = function (value) {
        this.getListPeople = this.origListPeople;
        this.getListPeople = this.getListPeople.filter(function (s) { return s.name.toUpperCase().includes(value.target.value.toUpperCase()); });
    };
    SearchPage.prototype.keyStudentPlanFunc = function (value) {
        this.getListStudentPlan = this.origListStudentPlan;
        this.getListStudentPlan = this.getListStudentPlan.filter(function (s) { return s.name.toUpperCase().includes(value.target.value.toUpperCase()); });
    };
    SearchPage.prototype.keyEventFunc = function (value) {
        this.getListEvent = this.origListEvent;
        this.getListEvent = this.getListEvent.filter(function (s) { return s.name.toUpperCase().includes(value.target.value.toUpperCase()); });
    };
    SearchPage.prototype.keyOfferDiscountKey = function (value) {
        this.getListOfferDiscount = this.origListOfferDiscount;
        this.getListOfferDiscount = this.getListOfferDiscount.filter(function (s) { return s.name.toUpperCase().includes(value.target.value.toUpperCase()); });
    };
    SearchPage.prototype.onClear = function () {
        this.getListPeople = this.origListPeople;
        this.getListStudentPlan = this.origListStudentPlan;
        this.getListEvent = this.origListEvent;
        this.getListOfferDiscount = this.origListOfferDiscount;
    };
    SearchPage.prototype.goToPeople = function (value) {
        for (var _i = 0, _a = this.recentList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (value.id == item.id) {
                return;
            }
        }
        if (this.recentList.length > 10) {
            this.recentList.splice(0, 1);
        }
        value.type = 'people';
        this.recentList.push(value);
        this.storage.set('recentList', JSON.stringify(this.recentList));
    };
    SearchPage.prototype.goToStudentPlan = function (value) {
        for (var _i = 0, _a = this.recentList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (value.id == item.id) {
                return;
            }
        }
        if (this.recentList.length > 10) {
            this.recentList.splice(0, 1);
        }
        value.type = 'student_plan';
        this.recentList.push(value);
        this.storage.set('recentList', JSON.stringify(this.recentList));
    };
    SearchPage.prototype.goToEvent = function (value) {
        /* for (let item of this.recentList) {
          if (value.id == item.id) {
            return
          }
        }
        if (this.recentList.length > 10) {
          this.recentList.splice(0, 1);
        }
        value.type = 'event';
        this.recentList.push(value);
        this.storage.set('recentList', JSON.stringify(this.recentList)); */
    };
    SearchPage.prototype.goToOfferDiscount = function (value) {
        for (var _i = 0, _a = this.recentList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (value.id == item.id) {
                return;
            }
        }
        if (this.recentList.length > 10) {
            this.recentList.splice(0, 1);
        }
        value.type = 'discount';
        this.recentList.push(value);
        this.storage.set('recentList', JSON.stringify(this.recentList));
    };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/pages/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/pages/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var SearchService = /** @class */ (function () {
    function SearchService(http, _globalServ) {
        this.http = http;
        this._globalServ = _globalServ;
    }
    //type:
    // '' --> list all
    // people --> list people
    // student_plan --> list student plan
    // discount --> list discount
    SearchService.prototype.getList = function (value) {
        if (value.type === 'events') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/ie-club-plans');
        }
        else {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/app-search', { params: value });
        }
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], SearchService);
    return SearchService;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map