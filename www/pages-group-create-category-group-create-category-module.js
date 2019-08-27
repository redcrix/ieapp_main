(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-create-category-group-create-category-module"],{

/***/ "./src/app/pages/group-create-category/group-create-category.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/group-create-category/group-create-category.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GroupCreateCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateCategoryPageModule", function() { return GroupCreateCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_create_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-create-category.page */ "./src/app/pages/group-create-category/group-create-category.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _group_create_category_page__WEBPACK_IMPORTED_MODULE_6__["GroupCreateCategoryPage"]
    }
];
var GroupCreateCategoryPageModule = /** @class */ (function () {
    function GroupCreateCategoryPageModule() {
    }
    GroupCreateCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_create_category_page__WEBPACK_IMPORTED_MODULE_6__["GroupCreateCategoryPage"]]
        })
    ], GroupCreateCategoryPageModule);
    return GroupCreateCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-create-category/group-create-category.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/group-create-category/group-create-category.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar\n    [title]=\"'group-create-category.category' | translate\"\n    [back]=\"true\"\n  >\n  </toolbar>\n  <div class=\"category-heading\">\n    <ion-item class=\"heading-txt\" lines=\"none\">{{'group-create-category.pickup3' | translate}}</ion-item>\n  </div>\n  <div class=\"container category-screen\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <ion-item lines=\"none\" *ngFor=\"let item of groupCreateCategory; let i = index\" (click)=\"changeStatus(i)\">\n          <ion-label *ngIf=\"_globalServ?.language == 'es'\">{{item?.name_ES}}</ion-label>\n          <ion-label *ngIf=\"_globalServ?.language == 'en'\">{{item?.name_EN}}</ion-label>\n          <ion-checkbox [checked]=\"item?.value === 1\" slot=\"end\"></ion-checkbox>\n        </ion-item>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-create-category/group-create-category.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/group-create-category/group-create-category.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content-item{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back-item{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\n/*.sc-ion-card-md-h {\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px;\n}*/\n/*.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}*/\n.category-screen {\n  margin-top: 10px; }\n.category {\n  display: flex;\n  align-items: center;\n  margin: 20px 0px; }\n.category-name {\n  font-weight: bold; }\nion-checkbox {\n  --border-radius: 2px;\n  --border-width: 2px; }\n.category-heading {\n  margin-top: 100px;\n  border-bottom: solid 1px #cccccc;\n  font-weight: bold;\n  padding: 5px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUtY2F0ZWdvcnkvZ3JvdXAtY3JlYXRlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvdXAtY3JlYXRlLWNhdGVnb3J5L2dyb3VwLWNyZWF0ZS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDaUJFO0FERUY7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDRyxnQkFBZ0IsRUFBQTtBQUduQjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCOzs7OztFQ0NFO0FETUY7OztFQ0ZFO0FET0Y7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLG9CQUFnQjtFQUNoQixtQkFBZSxFQUFBO0FBR25CO0VBQ0ksaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUtY2F0ZWdvcnkvZ3JvdXAtY3JlYXRlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmJ0bi1iYWNrLWNvbnRlbnQtaXRlbXtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWJhY2staXRlbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgcGFkZGluZzogM3B4IDNweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59Ki9cblxuLmJveC1jZW50ZXItZnVsbHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5tYXAtb25le1xuICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudGFibGV7XG4gICAgbWFyZ2luLXRvcDogMjRwdDtcbn1cblxuLyouc2MtaW9uLWNhcmQtbWQtaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXG4gICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7IFxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59Ki9cblxuLyouaXRlbS1hdmF0YXItY2FyZC5oeWRyYXRlZHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Ki9cblxuLmNhdGVnb3J5LXNjcmVlbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmNhdGVnb3J5LW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbi5jYXRlZ29yeS1oZWFkaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbn0iLCIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG4uYm94LWNlbnRlci1mdWxsIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4ubWFwLW9uZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxudGFibGUge1xuICBtYXJnaW4tdG9wOiAyNHB0OyB9XG5cbi8qLnNjLWlvbi1jYXJkLW1kLWgge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxuICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4OyBcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSovXG4vKi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0qL1xuLmNhdGVnb3J5LXNjcmVlbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cblxuLmNhdGVnb3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDBweDsgfVxuXG4uY2F0ZWdvcnktbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAtLWJvcmRlci13aWR0aDogMnB4OyB9XG5cbi5jYXRlZ29yeS1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjY2NjO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4IDE1cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/group-create-category/group-create-category.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/group-create-category/group-create-category.page.ts ***!
  \***************************************************************************/
/*! exports provided: GroupCreateCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateCategoryPage", function() { return GroupCreateCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var GroupCreateCategoryPage = /** @class */ (function () {
    function GroupCreateCategoryPage(location, _globalServ, _groupServ, actRoute, toastController, storage) {
        this.location = location;
        this._globalServ = _globalServ;
        this._groupServ = _groupServ;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.storage = storage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isValidGroupImage = true;
        this.groupCreateCategory = [];
        this.math = Math;
        this.groupSuperCategoryIds = [];
        /* if (this.actRoute.snapshot.queryParams.data != null) {
          let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
          this.id = getParams.id;
          console.log('id: ', this.id);
        } */
    }
    GroupCreateCategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.storage.get('group-create-category').then(function (val) {
            _this.groupSuperCategoryIds = val;
            _this.getAllCategories();
        });
    };
    GroupCreateCategoryPage.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    GroupCreateCategoryPage.prototype.getAllCategories = function () {
        var _this = this;
        this._groupServ.getGroupCategories().subscribe(function (data) {
            _this.groupCreateCategory = data;
            _this.groupCreateCategory = _this.groupCreateCategory.map(function (o) {
                var value = 0;
                if (_this.groupSuperCategoryIds.includes(o.id)) {
                    value = 1;
                }
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { value: value });
            });
            console.log('this.groupGroupCreateCategory: ', _this.groupCreateCategory);
        }, function (err) {
            console.log('catetgories err: ', err);
        });
    };
    GroupCreateCategoryPage.prototype.changeStatus = function (idx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.groupCreateCategory.length > 0)) return [3 /*break*/, 3];
                        this.groupCreateCategory[idx].value = (this.groupCreateCategory[idx].value + 1) % 2;
                        this.groupSuperCategoryIds = this.groupCreateCategory.filter(function (o) { return o.value === 1; }).map(function (o) {
                            return o.id;
                        });
                        if (!(this.groupSuperCategoryIds.length > 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: "It's limited to choose 3 categories.",
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 2;
                    case 2:
                        this.storage.set('group-create-category', this.groupSuperCategoryIds);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GroupCreateCategoryPage.prototype, "onResize", null);
    GroupCreateCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-create-category',
            template: __webpack_require__(/*! ./group-create-category.page.html */ "./src/app/pages/group-create-category/group-create-category.page.html"),
            styles: [__webpack_require__(/*! ./group-create-category.page.scss */ "./src/app/pages/group-create-category/group-create-category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], GroupCreateCategoryPage);
    return GroupCreateCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-create-category-group-create-category-module.js.map