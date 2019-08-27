(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-create-group-create-module"],{

/***/ "./src/app/pages/group-create/group-create.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/group-create/group-create.module.ts ***!
  \***********************************************************/
/*! exports provided: GroupCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreatePageModule", function() { return GroupCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-create.page */ "./src/app/pages/group-create/group-create.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _group_create_page__WEBPACK_IMPORTED_MODULE_6__["GroupCreatePage"]
    }
];
var GroupCreatePageModule = /** @class */ (function () {
    function GroupCreatePageModule() {
    }
    GroupCreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_create_page__WEBPACK_IMPORTED_MODULE_6__["GroupCreatePage"]]
        })
    ], GroupCreatePageModule);
    return GroupCreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-create/group-create.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/group-create/group-create.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content \n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrolling($event)\">\n<toolbar [back]=\"true\" [title]=\"pageTitleName ? ('group-create.createaGroup' | translate) : ''\"></toolbar>\n<div class=\"container nopadding\">\n  <div class=\"row graybg\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <h1 class=\"title\">{{ 'group-create.createaGroup' | translate }}</h1>\n      <hr class=\"hr-pc mtop\">\n      <div class=\"box-center-full\">\n        <span *ngIf=\"chosenImage === null\" class=\"circle\" (click)=\"goToUpload()\">\n          <span class=\"icon fas fa-camera\"></span>\n        </span>\n        <img *ngIf=\"chosenImage !== null\" class=\"circle\" [src]=\"chosenImage\"/>\n      </div>\n      <hr class=\"hr-pc mbottom\">\n      <form>\n\n        <ion-item-divider mode=\"md\">\n          <ion-input [(ngModel)]=\"title\" name=\"title\" placeholder=\"{{ 'group-create.title' | translate }}\"></ion-input>\n        </ion-item-divider>\n\n        <hr class=\"hr-pc mtop\">\n        <div class=\"line-item\">\n          <label style=\"font-size: 17pt;\">{{ 'group-create.category' | translate }}</label>\n          <span style=\"font-size: 17pt;\" class=\"secondary-text\" (click)=\"createCategory()\">\n            {{ 'group-create.pick' | translate }} <span class=\"fas fa-chevron-right\"></span>\n          </span>\n        </div>\n\n        <div class=\"line-item\">\n          <label style=\"font-size: 17pt;\">{{ 'group-create.settings' | translate }}</label>\n          <span style=\"font-size: 17pt;\" class=\"secondary-text\" (click)=\"pickSettings()\">\n            {{ groupCreateSettingsValue }} <span class=\"fas fa-chevron-right\"></span>\n          </span>\n        </div>\n\n        <div class=\"line-item\">\n          <label style=\"font-size: 17pt;\">{{ 'group-create.invitePeople' | translate }}</label>\n          <span style=\"font-size: 17pt;\" class=\"secondary-text\" (click)=\"invitePeople()\">\n            {{ 'group-create.invite' | translate }} <span class=\"fas fa-chevron-right\"></span>\n          </span>\n        </div>\n        <hr class=\"hr-pc mbottom\">\n        \n        <ion-textarea [(ngModel)]=\"description\" name=\"description\" placeholder=\"{{ 'group-create.details' | translate }}\"></ion-textarea>\n        <hr class=\"hr-pc\">\n\n        <div class=\"box-center-full btn-pc-box\">\n          <ion-button (click)=\"save()\" class=\"button-one\" shape=\"round\">\n            <span>{{ 'group-create.createTheGroup' | translate }}</span>\n          </ion-button>\n        </div>\n\n      </form>\n\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-create/group-create.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/group-create/group-create.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  padding: 15px 15px;\n  background: white; }\n\n.graybg {\n  background: #f9f9f9; }\n\n.nopadding {\n  padding: 0; }\n\n.box-center-full {\n  background: white;\n  padding: 30px 15px; }\n\n.hr-pc {\n  width: 1500px !important;\n  background: #e0e0e0 !important;\n  display: block !important;\n  margin-left: -400px;\n  visibility: visible !important;\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.mbottom {\n  margin-bottom: 15px; }\n\n.mtop {\n  margin-top: 15px; }\n\n.pc-margin-top {\n  margin-top: 34pt;\n  margin-bottom: 20pt; }\n\nion-input {\n  font-size: 17pt; }\n\nion-textarea {\n  font-size: 17pt;\n  color: #c8c7cc;\n  background: white;\n  padding: 0px 15px; }\n\n.btn-pc-box {\n  margin-top: 32pt;\n  margin-bottom: 36pt;\n  background: none !important; }\n\n.line-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 15px;\n  background: white; }\n\n.line-item label {\n    margin-right: 30px; }\n\n.line-item .secondary-text {\n    text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUvZ3JvdXAtY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksd0JBQXdCO0VBQ3hCLDhCQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGNBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUpyQjtJQU9RLGtCQUFrQixFQUFBOztBQVAxQjtJQVVRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JvdXAtY3JlYXRlL2dyb3VwLWNyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmdyYXliZyB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuLm5vcGFkZGluZyB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmJveC1jZW50ZXItZnVsbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xufVxuXG4uaHItcGN7XG4gICAgd2lkdGg6IDE1MDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjQsIDIyNCwgMjI0KSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC00MDBweDsgXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm1ib3R0b20ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5tdG9wIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5cbi5wYy1tYXJnaW4tdG9we1xuICAgIG1hcmdpbi10b3A6IDM0cHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBwdDtcbn1cblxuaW9uLWlucHV0e1xuICAgIGZvbnQtc2l6ZTogMTdwdDtcbn1cblxuaW9uLXRleHRhcmVhe1xuICAgIGZvbnQtc2l6ZTogMTdwdDtcbiAgICBjb2xvcjogcmdiKDIwMCwgMTk5LCAyMDQpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uYnRuLXBjLWJveHtcbiAgICBtYXJnaW4tdG9wOiAzMnB0O1xuICAgIG1hcmdpbi1ib3R0b206IDM2cHQ7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGluZS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICAmIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAmIC5zZWNvbmRhcnktdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/group-create/group-create.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/group-create/group-create.page.ts ***!
  \*********************************************************/
/*! exports provided: GroupCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreatePage", function() { return GroupCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");











var GroupCreatePage = /** @class */ (function () {
    function GroupCreatePage(router, _globalServ, storage, toastController, _userServ, _groupServ, transfer) {
        this.router = router;
        this._globalServ = _globalServ;
        this.storage = storage;
        this.toastController = toastController;
        this._userServ = _userServ;
        this._groupServ = _groupServ;
        this.transfer = transfer;
        this.chosenImage = null;
        this.title = '';
        this.description = '';
        this.groupCreateSettingsValue = '';
        this.pageTitleName = false;
    }
    GroupCreatePage.prototype.ngOnInit = function () {
    };
    GroupCreatePage.prototype.logScrolling = function (e) {
        if (e.detail.scrollTop > 50) {
            this.pageTitleName = true;
        }
        else {
            this.pageTitleName = false;
        }
    };
    GroupCreatePage.prototype.ionViewDidEnter = function () {
        console.log('this._globalServ.groupImagePath:  ', this._globalServ.groupImagePath);
        this.chosenImage = this._globalServ.groupImagePath;
        this.getGroupSettings();
    };
    GroupCreatePage.prototype.goToUpload = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'group': true })
            }
        };
        this.router.navigate(['image-cropper'], navigationExtras);
    };
    GroupCreatePage.prototype.createCategory = function () {
        this.router.navigate(['group-create-category']);
    };
    GroupCreatePage.prototype.pickSettings = function () {
        this.router.navigate(['group-create-settings']);
    };
    GroupCreatePage.prototype.invitePeople = function () {
        this.router.navigate(['group-create-invite']);
    };
    GroupCreatePage.prototype.showAlert = function (msg) {
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
    GroupCreatePage.prototype.doCreateGroup = function (params) {
        var _this = this;
        console.log('<<<  starting group creating....   >>>');
        /* this._groupServ.createGroup(params, this._globalServ.groupImagePost).subscribe(data => {
          this.showAlert('Created a group successfully');
          console.log('<<<<created group successfully !!!>>>>');
    
          this.storage.set('group-create-category', []);
          this.storage.set('group-create-settings', -1); // null or -1
          this.storage.set('group-create-members', []);
          this._globalServ.groupImagePath = null;
          this._globalServ.groupImagePost = null;
          this.title = this.description = '';
    
          this.chosenImage = null;
    
          this.router.navigate(['group-create-success']);
        }, err => {
          console.log('err: ', err);
          this.showAlert(err.message);
        }) */
        var fileTransfer = this.transfer.create();
        var filename = 'groupImage_' + Math.random() * 100000000000000000;
        var options = {
            fileKey: 'image',
            fileName: filename + '.jpg',
            params: params,
        };
        fileTransfer.upload(this._globalServ.groupImagePost, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + '/add-group', options)
            .then(function (data) {
            _this.showAlert('Created a group successfully');
            console.log('<<<<created group successfully !!!>>>>');
            _this.storage.set('group-create-category', []);
            _this.storage.set('group-create-settings', -1); // null or -1
            _this.storage.set('group-create-members', []);
            _this._globalServ.groupImagePath = null;
            _this._globalServ.groupImagePost = null;
            _this.title = _this.description = '';
            _this.chosenImage = null;
            _this.router.navigate(['group-create-success']);
        }, function (err) {
            // error
            console.log('error', err);
            _this.showAlert(err.message);
        });
    };
    GroupCreatePage.prototype.getGroupSettings = function () {
        var _this = this;
        this._groupServ.getGroupSettings().subscribe(function (data) {
            console.log('group settings data: ', data);
            var groupSettings = [];
            groupSettings = JSON.parse(JSON.stringify(data));
            _this.storage.get('group-create-settings').then(function (groupSettingsVal) {
                console.log('groupSettingsVal--- : ', groupSettingsVal);
                if (groupSettingsVal > 0) {
                    _this.groupCreateSettingsValue = groupSettings.filter(function (o) { return o.id === groupSettingsVal; })[0].name;
                }
                else {
                    _this.groupCreateSettingsValue = '';
                }
            });
        }, function (err) {
            console.log('group settings err: ', err);
        });
    };
    GroupCreatePage.prototype.save = function () {
        var _this = this;
        var noticeMsg = '';
        var group_supercategory_ids = '';
        var group_settings_ids = '';
        var group_member_ids = '';
        var email;
        var fk_user_id;
        this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(function (data) {
            var profile = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(data, '[0]', {});
            email = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(profile, 'email', '');
            fk_user_id = _this._globalServ.idUser;
            if (_this._globalServ.groupImagePath !== null) {
                _this.storage.get('group-create-category').then(function (groupSuperCategoryVal) {
                    if (groupSuperCategoryVal.length <= 3 && groupSuperCategoryVal.length !== 0) {
                        group_supercategory_ids = groupSuperCategoryVal.toString();
                        _this.storage.get('group-create-settings').then(function (groupSettingsVal) {
                            if (groupSettingsVal > 0) {
                                group_settings_ids = groupSettingsVal.toString();
                                _this.storage.get('group-create-members').then(function (groupMemberVal) {
                                    if (groupMemberVal.length > 0) {
                                        group_member_ids = groupMemberVal.toString();
                                        if (_this.title !== '') {
                                            if (_this.description !== '') {
                                                var params = {
                                                    fk_user_id: fk_user_id,
                                                    title: _this.title,
                                                    description: _this.description,
                                                    group_settings_ids: group_settings_ids,
                                                    group_supercategory_ids: group_supercategory_ids,
                                                    group_member_ids: group_member_ids,
                                                    email: email
                                                };
                                                _this.doCreateGroup(params);
                                            }
                                            else {
                                                _this.showAlert('Please fill in the group description');
                                            }
                                        }
                                        else {
                                            _this.showAlert('Please fill in the group title');
                                        }
                                    }
                                    else {
                                        _this.showAlert('Please choose group members');
                                    }
                                });
                            }
                            else {
                                _this.showAlert('Please choose group setting');
                            }
                        });
                    }
                    else {
                        _this.showAlert('It is limited to choose 3 categories or Please choose categories');
                    }
                });
            }
            else {
                _this.showAlert('Please upload group image');
            }
        }, function (err) {
            console.log('err public profile: ', err);
        });
    };
    GroupCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-create',
            template: __webpack_require__(/*! ./group-create.page.html */ "./src/app/pages/group-create/group-create.page.html"),
            styles: [__webpack_require__(/*! ./group-create.page.scss */ "./src/app/pages/group-create/group-create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            src_app_services_group_service__WEBPACK_IMPORTED_MODULE_9__["GroupService"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]])
    ], GroupCreatePage);
    return GroupCreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-create-group-create-module.js.map