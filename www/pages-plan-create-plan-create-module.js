(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plan-create-plan-create-module"],{

/***/ "./src/app/pages/plan-create/plan-create.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/plan-create/plan-create.module.ts ***!
  \*********************************************************/
/*! exports provided: PlanCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanCreatePageModule", function() { return PlanCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plan_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan-create.page */ "./src/app/pages/plan-create/plan-create.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _plan_create_page__WEBPACK_IMPORTED_MODULE_6__["PlanCreatePage"]
    }
];
var PlanCreatePageModule = /** @class */ (function () {
    function PlanCreatePageModule() {
    }
    PlanCreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plan_create_page__WEBPACK_IMPORTED_MODULE_6__["PlanCreatePage"]]
        })
    ], PlanCreatePageModule);
    return PlanCreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/plan-create/plan-create.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/plan-create/plan-create.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrolling($event)\">\n<toolbar [back]=\"true\" [title]=\"pageTitleName ? ('plan-create.createaPlan' | translate) : ''\"></toolbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1 class=\"title\">{{ 'plan-create.createaPlan' | translate }}</h1>\n      <hr class=\"hr-pc pc-margin-top\">\n      <div *ngIf=\"_globalServ.planImagePath == null\" (click)=\"goToselectImage()\" class=\"box-center-full\">\n        <span [ngClass]=\"{'circle-req':_globalServ.planImagePost == null && post == true}\" class=\"circle\">\n          <span class=\"icon fas fa-camera\"></span>\n        </span>\n      </div>\n      <img class=\"image-plan\" (click)=\"goToselectImage()\" *ngIf=\"_globalServ.planImagePath != null\" [src]=\"_globalServ.planImagePath\">\n      <hr class=\"hr-pc\">\n\n      <form>\n\n        <ion-item-divider mode=\"md\"></ion-item-divider>\n        <ion-item-divider mode=\"md\">\n          <ion-label class=\"req\" *ngIf=\"title == '' && post == true\">*</ion-label>\n          <ion-input [(ngModel)]=\"title\" [formControl]=\"myForm.get('title')\" placeholder=\"{{ 'plan-create.title' | translate }}\"></ion-input>\n        </ion-item-divider>\n        <ion-item-divider mode=\"md\">\n          <ion-label class=\"req\" *ngIf=\"location == '' && post == true\">*</ion-label>\n          <ion-input [(ngModel)]=\"location\" [formControl]=\"myForm.get('location')\" placeholder=\"{{ 'plan-create.location' | translate }}\"></ion-input>\n        </ion-item-divider>\n\n        <hr class=\"hr-pc\">\n        <ion-item (click)=\"getPlanCreatedBy()\" lines=\"none\">\n          <label style=\"font-size: 17pt;\" position=\"fixed\">{{ 'plan-create.createBy' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"secondary-text\">\n            {{ 'plan-create.pick' | translate }} <span class=\"fas fa-chevron-right\"></span>\n          </span>\n        </ion-item>\n\n        <ion-item (click)=\"getPlanDate()\" lines=\"none\">\n          <label style=\"font-size: 17pt;\" position=\"fixed\"><span class=\"req\" *ngIf=\"planDate == null && post == true\">*</span> {{ 'plan-create.planDate' | translate }}</label>\n          <span slot=\"end\" style=\"font-size: 17pt;\" class=\"secondary-text\">\n           <span *ngIf=\"planDate == null\">{{ 'plan-create.pick' | translate }}</span><span *ngIf=\"planDate != null\">{{planDate | date:'MM/dd/yy'}}</span> <span class=\"fas fa-chevron-right\"></span>\n         </span>\n       </ion-item>\n\n       <ion-item (click)=\"getLimitDate()\" lines=\"none\">\n        <label style=\"font-size: 17pt;\" position=\"fixed\">{{ 'plan-create.limitDate' | translate }}</label>\n        <span slot=\"end\" style=\"font-size: 17pt;\" class=\"secondary-text\">\n          {{ 'plan-create.noLimitDate' | translate }} <span class=\"fas fa-chevron-right\"></span>\n        </span>\n      </ion-item>\n\n      <ion-item (click)=\"getSupercategory()\" lines=\"none\">\n        <label style=\"font-size: 17pt;\" position=\"fixed\"><span class=\"req\" *ngIf=\"okIdsCategories == false\">*</span> {{ 'plan-create.category' | translate }}</label>\n        <span slot=\"end\" style=\"font-size: 17pt;\" class=\"secondary-text\">\n          {{ 'plan-create.pick' | translate }} <span class=\"fas fa-chevron-right\"></span>\n        </span>\n      </ion-item>\n\n      <ion-item (click)=\"getavalibleSeats()\" lines=\"none\">\n        <label style=\"font-size: 17pt;\" position=\"fixed\">{{ 'plan-create.avalibleSeats' | translate }}</label>\n        <span *ngIf=\"avalibleSeats === -1\" slot=\"end\" style=\"font-size: 17pt;\" class=\"secondary-text\">\n          {{ 'plan-create.noLimits' | translate }} <span class=\"fas fa-chevron-right\"></span>\n        </span>\n        <span *ngIf=\"avalibleSeats !== -1\" slot=\"end\" style=\"font-size: 17pt;\" class=\"secondary-text\">\n          {{ avalibleSeats }} <span class=\"fas fa-chevron-right\"></span>\n        </span>\n      </ion-item>\n\n      <hr class=\"hr-pc\">\n      <span class=\"req\" *ngIf=\"details == '' && post == true\">*</span>\n      <ion-textarea [(ngModel)]=\"details\" [formControl]=\"myForm.get('details')\" placeholder=\"{{ 'plan-create.details' | translate }}\"></ion-textarea>\n      <hr class=\"hr-pc\">\n\n      <div class=\"box-center-full btn-pc-box\">\n        <ion-button (click)=\"save(myForm.value)\" class=\"button-one\" shape=\"round\">\n          <span>{{ 'plan-create.plublishThePlan' | translate }}</span>\n        </ion-button>\n      </div>\n\n    </form>\n\n  </div>\n  <div class=\"col-md-2\"></div>\n</div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/plan-create/plan-create.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/plan-create/plan-create.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hr-pc {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important; }\n\n.pc-margin-top {\n  margin-top: 34pt;\n  margin-bottom: 20pt; }\n\nion-input {\n  font-size: 17pt; }\n\nion-textarea {\n  font-size: 17pt;\n  color: #c8c7cc; }\n\n.btn-pc-box {\n  margin-top: 32pt;\n  margin-bottom: 36pt; }\n\n.image-plan {\n  width: 95%;\n  height: 259pt;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9wbGFuLWNyZWF0ZS9wbGFuLWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0I7RUFDeEIsOEJBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsY0FBeUIsRUFBQTs7QUFHN0I7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYW4tY3JlYXRlL3BsYW4tY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oci1wY3tcbiAgICB3aWR0aDogMTUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyNCwgMjI0LCAyMjQpICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogLTQwMHB4OyBcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5wYy1tYXJnaW4tdG9we1xuICAgIG1hcmdpbi10b3A6IDM0cHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBwdDtcbn1cblxuaW9uLWlucHV0e1xuICAgIGZvbnQtc2l6ZTogMTdwdDtcbn1cblxuaW9uLXRleHRhcmVhe1xuICAgIGZvbnQtc2l6ZTogMTdwdDtcbiAgICBjb2xvcjogcmdiKDIwMCwgMTk5LCAyMDQpO1xufVxuXG4uYnRuLXBjLWJveHtcbiAgICBtYXJnaW4tdG9wOiAzMnB0O1xuICAgIG1hcmdpbi1ib3R0b206IDM2cHQ7XG59XG5cbi5pbWFnZS1wbGFue1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAyNTlwdDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/plan-create/plan-create.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/plan-create/plan-create.page.ts ***!
  \*******************************************************/
/*! exports provided: PlanCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanCreatePage", function() { return PlanCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



















var PlanCreatePage = /** @class */ (function () {
    function PlanCreatePage(datePicker, camera, sanitizer, webview, router, _globalServ, fb, transfer, locationUrl, nativeGeocoder, storage, actRoute, _userServ, toastController, _planServ) {
        this.datePicker = datePicker;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.webview = webview;
        this.router = router;
        this._globalServ = _globalServ;
        this.transfer = transfer;
        this.locationUrl = locationUrl;
        this.nativeGeocoder = nativeGeocoder;
        this.storage = storage;
        this.actRoute = actRoute;
        this._userServ = _userServ;
        this.toastController = toastController;
        this._planServ = _planServ;
        this.title = '';
        this.location = '';
        this.details = '';
        this.createdBy = 1;
        this.groupId = null;
        this.profile = {};
        this.pageTitleName = false;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.groupId = getParams.groupId;
            console.log('groupId: ', this.groupId);
        }
        this.myForm = fb.group({
            'title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            'location': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            'details': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
        });
    }
    PlanCreatePage.prototype.ngOnInit = function () {
        this._globalServ.idsCategories = null;
    };
    PlanCreatePage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    PlanCreatePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('hey');
        this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(function (data) {
            _this.profile = Object(lodash__WEBPACK_IMPORTED_MODULE_15__["get"])(data, '[0]', {});
        }, function (err) {
            console.log('err public profile: ', err);
        });
        this.storage.get('plan-create-seats').then(function (val) {
            _this.avalibleSeats = val;
        });
        this.storage.get('plan-create-groups').then(function (val) {
            if (val > 0 || val === -2) { // -2: Me, 0> : selected from group list
                _this.groupId = val;
            }
        });
    };
    PlanCreatePage.prototype.getPlanCreatedBy = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'groupId': this.groupId })
            }
        };
        this.router.navigate(['plan-create-createdby'], navigationExtras);
    };
    PlanCreatePage.prototype.getPlanDate = function () {
        var _this = this;
        var date;
        if (this.planDate == null) {
            date = new Date();
        }
        else {
            date = this.planDate;
        }
        this.datePicker.show({
            date: new Date(date),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
            //minDate:new Date()
            allowFutureDates: true,
            allowOldDates: false
        }).then(function (date) {
            console.log('Got date: ', date);
            _this.planDate = date;
        }, function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    PlanCreatePage.prototype.getLimitDate = function () {
        var _this = this;
        var date;
        if (this.limitDate == null) {
            date = new Date();
        }
        else {
            date = this.limitDate;
        }
        this.datePicker.show({
            date: new Date(date),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
            allowFutureDates: true,
            allowOldDates: false
        }).then(function (date) {
            console.log('Got date: ', date);
            _this.limitDate = date;
        }, function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    PlanCreatePage.prototype.getavalibleSeats = function () {
        this.router.navigate(['plan-create-seats']);
    };
    PlanCreatePage.prototype.goToselectImage = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'plan': true })
            }
        };
        this.router.navigate(['image-cropper'], navigationExtras);
    };
    PlanCreatePage.prototype.getSupercategory = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'select': true })
            }
        };
        this.router.navigate(['preferences'], navigationExtras);
    };
    PlanCreatePage.prototype.showAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlanCreatePage.prototype.doCreatePlan = function (endpoint, params) {
        var _this = this;
        console.log('<<<  starting plan creating....   >>>');
        /* this._planServ.createPlan(endpoint, params, this._globalServ.planImagePost).subscribe(data => {
          
          console.log('<<<<created plan successfully !!!>>>>');
    
          this._globalServ.planImagePath = null;
          this._globalServ.planImagePost = null;
          this.storage.set('plan-create-seats', -1);
          this.storage.set('plan-create-groups', -1);
    
          this.router.navigate(['plan-create-success']);
        }, err => {
          console.log('err: ', err);
        }) */
        var fileTransfer = this.transfer.create();
        var filename = 'planImage_' + Math.random() * 100000000000000000;
        var options = {
            fileKey: 'image',
            fileName: filename + '.jpg',
            params: params,
        };
        fileTransfer.upload(this._globalServ.planImagePost, _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl + ("/" + endpoint), options)
            .then(function (data) {
            _this.showAlert('Created a plan successfully');
            console.log('<<<<created plan successfully !!!>>>>');
            _this._globalServ.planImagePath = null;
            _this._globalServ.planImagePost = null;
            _this.storage.set('plan-create-seats', -1);
            _this.storage.set('plan-create-groups', -1);
            _this.router.navigate(['plan-create-success']);
        }, function (err) {
            // error
            console.log('error', err);
            _this.showAlert(err.message);
        });
    };
    PlanCreatePage.prototype.save = function (value) {
        var _this = this;
        console.log('here:  ', this.groupId);
        this.post = true;
        if (this._globalServ.idsCategories != null) {
            if (this._globalServ.idsCategories.length > 0) {
                this.okIdsCategories = true;
            }
            else {
                this.okIdsCategories = false;
            }
        }
        else {
            this.okIdsCategories = false;
        }
        console.log('plan date: ', this.planDate);
        console.log('this._globalServ.planImagePost: ', this._globalServ.planImagePost);
        console.log('this.okIdsCategories:  ', this.okIdsCategories);
        console.log('this.myForm.valid: ', this.myForm.valid);
        if (this.myForm.valid && this._globalServ.planImagePost != null && this.planDate != null && this.okIdsCategories == true) {
            console.log('save step 1');
            var optionsGeo = {
                useLocale: true,
                maxResults: 1
            };
            this.nativeGeocoder.forwardGeocode(value.location, optionsGeo)
                .then(function (result) {
                console.log('save step 2');
                console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
                var fileTransfer = _this.transfer.create();
                var options = {};
                var endpoint = '';
                if (_this.groupId === null || _this.groupId < 0) { // use app-add-plan
                    options = {
                        'fk_ceu_user_id': _this._globalServ.idUser,
                        'ceu_supercategories_ids': _this._globalServ.idsCategories.toString(),
                        'title': value.title,
                        'description': value.details,
                        'plan_date': _this.planDate,
                        'address': value.location,
                        'latitude': String(result[0].latitude),
                        'longitude': String(result[0].longitude)
                    };
                    endpoint = 'app-add-plan';
                }
                else { // use add-group-plan
                    if (_this.groupId > 0) {
                        options = {
                            'fk_user_id': _this._globalServ.idUser,
                            'email': _this.profile.email,
                            'seats': _this.avalibleSeats,
                            'group_plan_supercategory_ids': _this._globalServ.idsCategories.toString(),
                            'title': value.title,
                            'description': value.details,
                            'plan_date': _this.planDate,
                            'address': value.location,
                            'latitude': String(result[0].latitude),
                            'longitude': String(result[0].longitude),
                            'fk_group_id': _this.groupId
                        };
                    }
                    else {
                        options = {
                            'fk_user_id': _this._globalServ.idUser,
                            'email': _this.profile.email,
                            'seats': _this.avalibleSeats,
                            'group_plan_supercategory_ids': _this._globalServ.idsCategories.toString(),
                            'title': value.title,
                            'description': value.details,
                            'plan_date': _this.planDate,
                            'address': value.location,
                            'latitude': String(result[0].latitude),
                            'longitude': String(result[0].longitude)
                        };
                    }
                    endpoint = 'add-group-plan';
                }
                _this.doCreatePlan(endpoint, options);
            })
                .catch(function (error) { return console.log(error); });
        }
    };
    PlanCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-create',
            template: __webpack_require__(/*! ./plan-create.page.html */ "./src/app/pages/plan-create/plan-create.page.html"),
            styles: [__webpack_require__(/*! ./plan-create.page.scss */ "./src/app/pages/plan-create/plan-create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["DatePicker"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeGeocoder"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ToastController"],
            src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_16__["PlanService"]])
    ], PlanCreatePage);
    return PlanCreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plan-create-plan-create-module.js.map