(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-filters-filters-module"],{

/***/ "./src/app/pages/filters/filters.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/filters/filters.module.ts ***!
  \*************************************************/
/*! exports provided: FiltersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function() { return FiltersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters.page */ "./src/app/pages/filters/filters.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _filters_page__WEBPACK_IMPORTED_MODULE_6__["FiltersPage"]
    }
];
var FiltersPageModule = /** @class */ (function () {
    function FiltersPageModule() {
    }
    FiltersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_filters_page__WEBPACK_IMPORTED_MODULE_6__["FiltersPage"]]
        })
    ], FiltersPageModule);
    return FiltersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/filters/filters.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/filters/filters.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar title=\"{{ 'filters.filters' | translate }}\" [back]=\"true\" [reset]=\"true\"  (resetEmit)=\"resetFilter($event)\"></toolbar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div class=\"filter-top\"></div>\n\n        <div class=\"filter-by\">\n          {{ 'filters.sortBy' | translate }}\n        </div>\n        <ng-scrollbar [trackX]=\"true\" [trackY]=\"false\">\n          <div class=\"scroll-content\">\n            <div *ngFor=\"let item of listSortBy\">\n              <ion-chip *ngIf=\"item?.checked == null\" (click)=\"activeSortBy(item)\" class=\"chip-pasive\" color=\"primary\">\n                <ion-label *ngIf=\"_globalServ.language == 'en'\">{{item?.option_en}}</ion-label>\n                <ion-label *ngIf=\"_globalServ.language == 'es'\">{{item?.option_es}}</ion-label>\n              </ion-chip>\n              <ion-chip *ngIf=\"item?.checked == true\" (click)=\"desactiveSortBy(item)\" class=\"chip-active\"\n                color=\"primary\">\n                <ion-label *ngIf=\"_globalServ.language == 'en'\">{{item?.option_en}}</ion-label>\n                <ion-label *ngIf=\"_globalServ.language == 'es'\">{{item?.option_es}}</ion-label>\n              </ion-chip>\n            </div>\n          </div>\n        </ng-scrollbar>\n\n        <div class=\"filter-by\">\n          {{ 'filters.typeOfFeed' | translate }}\n        </div>\n        <ng-scrollbar [trackX]=\"true\" [trackY]=\"false\">\n          <div class=\"scroll-content\">\n            <div *ngFor=\"let item of listTypeOfFeed\">\n              <ion-chip *ngIf=\"item.checked == null\" (click)=\"activeTypeOfFeed(item)\" class=\"chip-pasive\"\n                color=\"primary\">\n                <ion-label *ngIf=\"_globalServ.language == 'en'\">{{item?.option_en}}</ion-label>\n                <ion-label *ngIf=\"_globalServ.language == 'es'\">{{item?.option_es}}</ion-label>\n              </ion-chip>\n              <ion-chip *ngIf=\"item.checked == true\" (click)=\"desactiveTypeOfFeed(item)\" class=\"chip-active\"\n                color=\"primary\">\n                <ion-label *ngIf=\"_globalServ.language == 'en'\">{{item?.option_en}}</ion-label>\n                <ion-label *ngIf=\"_globalServ.language == 'es'\">{{item?.option_es}}</ion-label>\n              </ion-chip>\n            </div>\n          </div>\n        </ng-scrollbar>\n\n        <div class=\"filter-by\">\n          {{ 'filters.date' | translate }}\n        </div>\n        <ng-scrollbar [trackX]=\"true\" [trackY]=\"false\">\n          <div class=\"scroll-content\">\n            <div *ngFor=\"let item of listDate\">\n              <ion-chip *ngIf=\"item?.checked == null\" (click)=\"activeDate(item)\" class=\"chip-pasive chip-all\"\n                color=\"primary\">\n                <ion-label *ngIf=\"_globalServ.language == 'en'\">{{item?.option_en}}</ion-label>\n                <ion-label *ngIf=\"_globalServ.language == 'es'\">{{item?.option_es}}</ion-label>\n              </ion-chip>\n              <ion-chip *ngIf=\"item?.checked == true\" (click)=\"desactiveDate(item)\" class=\"chip-active chip-all\"\n                color=\"primary\">\n                <ion-label *ngIf=\"_globalServ.language == 'en'\">{{item?.option_en}}</ion-label>\n                <ion-label *ngIf=\"_globalServ.language == 'es'\">{{item?.option_es}}</ion-label>\n              </ion-chip>\n            </div>\n          </div>\n        </ng-scrollbar>\n\n        <div class=\"filter-by\">\n          {{ 'filters.city' | translate }}\n        </div>\n        <ng-scrollbar [trackX]=\"true\" [trackY]=\"false\">\n          <div class=\"scroll-content\">\n            <div *ngFor=\"let item of listCity\">\n              <ion-chip *ngIf=\"item?.checked == null\" (click)=\"activeCity(item)\" class=\"chip-pasive\" color=\"primary\">\n                <ion-label *ngIf=\"_globalServ.language == 'en'\">{{item?.option_en}}</ion-label>\n                <ion-label *ngIf=\"_globalServ.language == 'es'\">{{item?.option_es}}</ion-label>\n              </ion-chip>\n              <ion-chip *ngIf=\"item?.checked == true\" (click)=\"desactiveCity(item)\" class=\"chip-active\" color=\"primary\">\n                <ion-label *ngIf=\"_globalServ.language == 'en'\">{{item?.option_en}}</ion-label>\n                <ion-label *ngIf=\"_globalServ.language == 'es'\">{{item?.option_es}}</ion-label>\n              </ion-chip>\n            </div>\n\n            <!--<ion-chip class=\"chip-active\" color=\"primary\">\n              <ion-label>{{ 'filters.segovia' | translate }}</ion-label>\n            </ion-chip>-->\n          </div>\n        </ng-scrollbar>\n\n        <ion-row (click)=\"goToPreferences()\">\n          <ion-col class=\"preferences\" size=\"10\">{{ 'filters.preferences' | translate }}</ion-col>\n          <ion-col style=\"font-size: 17pt;text-align: right;\" class=\"secondary-text\" size=\"2\"><span\n              class=\"fas fa-chevron-right\"></span></ion-col>\n        </ion-row>\n        <div class=\"box-center-full box-btn\">\n          <ion-button (click)=\"saveFilters()\" class=\"button-one\" shape=\"round\">{{ 'filters.showResults' | translate }}</ion-button>\n        </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/filters/filters.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/filters/filters.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-by {\n  margin-bottom: 15px;\n  font-size: 18px; }\n\nng-scrollbar {\n  max-height: 80px;\n  margin-left: -4px; }\n\n.box-btn {\n  margin-top: 60px;\n  margin-bottom: 60px; }\n\n.scroll-content {\n  display: flex; }\n\nion-chip {\n  display: inline-table;\n  white-space: nowrap;\n  font-size: 14px; }\n\n.preferences {\n  font-size: 18px; }\n\n.filter-top {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9maWx0ZXJzL2ZpbHRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBcUI7RUFFckIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFLbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWx0ZXJzL2ZpbHRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1ieXtcbiAgICAvLyBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IFxuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxubmctc2Nyb2xsYmFye1xuICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG5cbi5ib3gtYnRue1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLnNjcm9sbC1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1jaGlwe1xuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL21pbi13aWR0aDogMTIwcHg7XG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmVmZXJlbmNlc3tcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5maWx0ZXItdG9we1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/filters/filters.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/filters/filters.page.ts ***!
  \***********************************************/
/*! exports provided: FiltersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPage", function() { return FiltersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_plan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var _services_city_guide_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/city-guide.service */ "./src/app/services/city-guide.service.ts");
/* harmony import */ var _services_city_agenda_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/city-agenda.service */ "./src/app/services/city-agenda.service.ts");
/* harmony import */ var _services_offer_discount_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/offer-discount.service */ "./src/app/services/offer-discount.service.ts");












var FiltersPage = /** @class */ (function () {
    function FiltersPage(router, datePicker, _filterServ, _globalServ, datepipe, _planServ, _cityGuideServ, _cityAgendaServ, _offerDiscountServ, location) {
        var _this = this;
        this.router = router;
        this.datePicker = datePicker;
        this._filterServ = _filterServ;
        this._globalServ = _globalServ;
        this.datepipe = datepipe;
        this._planServ = _planServ;
        this._cityGuideServ = _cityGuideServ;
        this._cityAgendaServ = _cityAgendaServ;
        this._offerDiscountServ = _offerDiscountServ;
        this.location = location;
        this.idFiltersPost = [];
        this._filterServ.getFilters().subscribe(function (data) {
            _this.getFilters = data;
            _this._filterServ.getFiltersByUser(_this._globalServ.idUser).
                subscribe(function (data) {
                _this.getFiltersByUser = data;
                for (var _i = 0, _a = _this.getFilters.filters; _i < _a.length; _i++) {
                    var itemOne = _a[_i];
                    if (_this.getFiltersByUser.user_filters != null) {
                        for (var _b = 0, _c = _this.getFiltersByUser.user_filters; _b < _c.length; _b++) {
                            var itemTwo = _c[_b];
                            if (itemOne.id == itemTwo.fk_filter_id) {
                                itemOne.checked = true;
                                _this.idFiltersPost.push(itemOne.id);
                                if (itemOne.option_en == 'Custom date') {
                                    _this.customDataValue = new Date(itemTwo.custom_date + 'T00:00:00');
                                    console.log('-->', _this.customDataValue);
                                }
                            }
                        }
                    }
                }
            });
            _this.listSortBy = _this.getFilters.filters.filter(function (s) { return s.sub_type_en == 'Sort by'; });
            _this.listTypeOfFeed = _this.getFilters.filters.filter(function (s) { return s.sub_type_en == 'Type of feed'; });
            _this.listDate = _this.getFilters.filters.filter(function (s) { return s.sub_type_en == 'Date'; });
            _this.listCity = _this.getFilters.filters.filter(function (s) { return s.sub_type_en == 'City'; });
        }, function (error) { console.log(error); });
    }
    FiltersPage.prototype.ngOnInit = function () {
    };
    FiltersPage.prototype.goToPreferences = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'save': true })
            }
        };
        this.router.navigate(['preferences'], navigationExtras);
    };
    FiltersPage.prototype.customDate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            console.log('Got date: ', date);
            _this.customDataValue = date;
        }, function (err) { return console.log('Error occurred while getting the date: ', err); }).finally(function () {
            if (_this.customDataValue == null) {
                for (var _i = 0, _a = _this.listDate; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.option_en == 'Custom date') {
                        item.checked = null;
                        var getIndex = _this.idFiltersPost.indexOf(item.id);
                        _this.idFiltersPost.splice(getIndex, 1);
                        return;
                    }
                }
            }
        });
    };
    //SortBy
    FiltersPage.prototype.activeSortBy = function (value) {
        console.log('--------------------------------');
        console.log(value);
        for (var _i = 0, _a = this.listSortBy; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id != value.id) {
                item.checked = null;
                var getIndex = this.idFiltersPost.indexOf(item.id);
                if (getIndex != -1) {
                    this.idFiltersPost.splice(getIndex, 1);
                }
            }
        }
        for (var _b = 0, _c = this.listSortBy; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.id == value.id) {
                item.checked = true;
                this.idFiltersPost.push(item.id);
            }
        }
        console.log(this.idFiltersPost);
    };
    FiltersPage.prototype.desactiveSortBy = function (value) {
        for (var _i = 0, _a = this.listSortBy; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == value.id) {
                item.checked = null;
                var getIndex = this.idFiltersPost.indexOf(value.id);
                this.idFiltersPost.splice(getIndex, 1);
                console.log('-->', this.idFiltersPost);
                return;
            }
        }
    };
    //typeOfFeed
    FiltersPage.prototype.activeTypeOfFeed = function (value) {
        console.log('--------------------------------');
        console.log(value);
        for (var _i = 0, _a = this.listTypeOfFeed; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id != value.id) {
                item.checked = null;
                var getIndex = this.idFiltersPost.indexOf(item.id);
                if (getIndex != -1) {
                    this.idFiltersPost.splice(getIndex, 1);
                }
            }
        }
        for (var _b = 0, _c = this.listTypeOfFeed; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.id == value.id) {
                item.checked = true;
                this.idFiltersPost.push(item.id);
            }
        }
        console.log(this.idFiltersPost);
    };
    FiltersPage.prototype.desactiveTypeOfFeed = function (value) {
        for (var _i = 0, _a = this.listTypeOfFeed; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == value.id) {
                item.checked = null;
                var getIndex = this.idFiltersPost.indexOf(value.id);
                this.idFiltersPost.splice(getIndex, 1);
                console.log('-->', this.idFiltersPost);
                return;
            }
        }
    };
    //Date
    FiltersPage.prototype.activeDate = function (value) {
        console.log('--------------------------------');
        console.log(value);
        for (var _i = 0, _a = this.listDate; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id != value.id) {
                item.checked = null;
                var getIndex = this.idFiltersPost.indexOf(item.id);
                if (getIndex != -1) {
                    this.idFiltersPost.splice(getIndex, 1);
                    if (item.option_en == 'Custom date') {
                        this.customDataValue = null;
                    }
                }
            }
        }
        for (var _b = 0, _c = this.listDate; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.id == value.id) {
                item.checked = true;
                this.idFiltersPost.push(item.id);
                if (value.option_en == 'Custom date') {
                    this.customDate();
                }
            }
        }
        console.log(this.idFiltersPost);
    };
    FiltersPage.prototype.desactiveDate = function (value) {
        for (var _i = 0, _a = this.listDate; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == value.id) {
                item.checked = null;
                var getIndex = this.idFiltersPost.indexOf(value.id);
                this.idFiltersPost.splice(getIndex, 1);
                if (value.option_en == 'Custom date') {
                    this.customDataValue = null;
                }
                console.log('-->', this.idFiltersPost);
                return;
            }
        }
    };
    //city
    FiltersPage.prototype.activeCity = function (value) {
        console.log('--------------------------------');
        console.log(value);
        for (var _i = 0, _a = this.listCity; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id != value.id) {
                item.checked = null;
                var getIndex = this.idFiltersPost.indexOf(item.id);
                if (getIndex != -1) {
                    this.idFiltersPost.splice(getIndex, 1);
                }
            }
        }
        for (var _b = 0, _c = this.listCity; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.id == value.id) {
                item.checked = true;
                this.idFiltersPost.push(item.id);
            }
        }
        console.log(this.idFiltersPost);
    };
    FiltersPage.prototype.desactiveCity = function (value) {
        for (var _i = 0, _a = this.listCity; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == value.id) {
                item.checked = null;
                var getIndex = this.idFiltersPost.indexOf(value.id);
                this.idFiltersPost.splice(getIndex, 1);
                console.log('-->', this.idFiltersPost);
                return;
            }
        }
    };
    FiltersPage.prototype.saveFilters = function () {
        var _this = this;
        var filtersArray = null;
        var customDate = null;
        if (this.idFiltersPost != null) {
            filtersArray = this.idFiltersPost.toString();
        }
        if (this.customDataValue != null) {
            customDate = this.datepipe.transform(this.customDataValue, 'yyyy-MM-dd'); //this.customDataValue.toString();
        }
        this._filterServ.saveFilters({ 'id': this._globalServ.idUser, 'filterids': filtersArray, 'customdate': customDate })
            .subscribe(function (data) {
            data;
            _this.reload();
        }, function (error) {
            console.log(error);
        });
        this.location.back();
    };
    FiltersPage.prototype.resetFilter = function () {
        var _this = this;
        this._filterServ.saveFilters({ 'id': this._globalServ.idUser, 'filterids': '4,7,10,15', 'customdate': null })
            .subscribe(function (data) {
            data;
            _this.reload();
        }, function (error) {
            console.log(error);
        });
        this.location.back();
    };
    FiltersPage.prototype.reload = function () {
        this._planServ.getDataPlanList();
        this._cityGuideServ.getDataCityGuideList();
        this._cityAgendaServ.getDataCityAgendaList();
        this._offerDiscountServ.getDataOfferDiscountList();
    };
    FiltersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'filters',
            template: __webpack_require__(/*! ./filters.page.html */ "./src/app/pages/filters/filters.page.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
            styles: [__webpack_require__(/*! ./filters.page.scss */ "./src/app/pages/filters/filters.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"],
            _services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _services_plan_service__WEBPACK_IMPORTED_MODULE_7__["PlanService"],
            _services_city_guide_service__WEBPACK_IMPORTED_MODULE_8__["CityGuideService"],
            _services_city_agenda_service__WEBPACK_IMPORTED_MODULE_9__["CityAgendaService"],
            _services_offer_discount_service__WEBPACK_IMPORTED_MODULE_10__["OfferDiscountService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], FiltersPage);
    return FiltersPage;
}());



/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var FilterService = /** @class */ (function () {
    function FilterService(http, _globalServ) {
        this.http = http;
        this._globalServ = _globalServ;
    }
    FilterService.prototype.saveFilters = function (value) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/app-set-filters', value);
    };
    FilterService.prototype.getFilters = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/app-filters', { params: null });
    };
    FilterService.prototype.getFiltersByUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/app-filters/' + id);
    };
    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], FilterService);
    return FilterService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-filters-filters-module.js.map