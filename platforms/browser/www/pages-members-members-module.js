(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-members-members-module"],{

/***/ "./src/app/pages/members/members.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/members/members.module.ts ***!
  \*************************************************/
/*! exports provided: MembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageModule", function() { return MembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members.page */ "./src/app/pages/members/members.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");









var routes = [
    {
        path: '',
        component: _members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]
    }
];
var MembersPageModule = /** @class */ (function () {
    function MembersPageModule() {
    }
    MembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]
            ],
            declarations: [_members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]]
        })
    ], MembersPageModule);
    return MembersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/members/members.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/members/members.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar\n    [title]=\"'Members'\"\n    [cancelMembers]=\"true\"\n    [inviteMembers]=\"true\"\n    [searchMembers]=\"true\"\n    (memberKeyChange)=\"memberKeyChange($event)\"\n    (inviteMemberEvent)=\"inviteMemberEvent($event)\"\n  >\n  </toolbar>\n  <div class=\"container member-screen\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div class=\"member\" [ngClass]=\"{'selected': isSelected(member)}\" *ngFor=\"let member of groupMembers | filter:keyword; let i=index\" (click)=\"selectPeople(member)\" >\n          <img class=\"member-avatar\" src=\"{{member.image}}\" />\n          <span class=\"member-name\">{{member.name}}</span>\n        </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/members/members.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/members/members.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content-item{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back-item{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\n/*.sc-ion-card-md-h {\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px;\n}*/\n/*.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}*/\n.member-screen {\n  margin-top: 160px; }\n.member {\n  display: flex;\n  align-items: center;\n  margin: 15px 0px;\n  padding: 5px; }\n.member-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  margin-right: 15px; }\n.member-name {\n  font-weight: bold; }\n.selected {\n  background: #009cd80d;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9tZW1iZXJzL21lbWJlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW1iZXJzL21lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztFQ2lCRTtBREVGO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0csZ0JBQWdCLEVBQUE7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjs7Ozs7RUNDRTtBRE1GOzs7RUNGRTtBRE9GO0VBQ0ksaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVtYmVycy9tZW1iZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmJ0bi1iYWNrLWNvbnRlbnQtaXRlbXtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWJhY2staXRlbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgcGFkZGluZzogM3B4IDNweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59Ki9cblxuLmJveC1jZW50ZXItZnVsbHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5tYXAtb25le1xuICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudGFibGV7XG4gICAgbWFyZ2luLXRvcDogMjRwdDtcbn1cblxuLyouc2MtaW9uLWNhcmQtbWQtaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXG4gICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7IFxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59Ki9cblxuLyouaXRlbS1hdmF0YXItY2FyZC5oeWRyYXRlZHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Ki9cblxuLm1lbWJlci1zY3JlZW4ge1xuICAgIG1hcmdpbi10b3A6IDE2MHB4O1xufVxuXG4ubWVtYmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tZW1iZXItYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tZW1iZXItbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZDogIzAwOWNkODBkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iLCIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG4uYm94LWNlbnRlci1mdWxsIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4ubWFwLW9uZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxudGFibGUge1xuICBtYXJnaW4tdG9wOiAyNHB0OyB9XG5cbi8qLnNjLWlvbi1jYXJkLW1kLWgge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxuICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4OyBcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSovXG4vKi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0qL1xuLm1lbWJlci1zY3JlZW4ge1xuICBtYXJnaW4tdG9wOiAxNjBweDsgfVxuXG4ubWVtYmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbiAgcGFkZGluZzogNXB4OyB9XG5cbi5tZW1iZXItYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XG5cbi5tZW1iZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMwMDljZDgwZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/members/members.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/members/members.page.ts ***!
  \***********************************************/
/*! exports provided: MembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPage", function() { return MembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");










var MembersPage = /** @class */ (function () {
    function MembersPage(location, _globalServ, _groupServ, _userServ, actRoute, toastController) {
        this.location = location;
        this._globalServ = _globalServ;
        this._groupServ = _groupServ;
        this._userServ = _userServ;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isValidGroupImage = true;
        this.groupMembers = [];
        this.math = Math;
        this.profile = {};
        this.selectedPeople = [];
        this.keyword = '';
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.groupId = getParams.id;
            console.log('id: ', this.groupId);
        }
    }
    MembersPage.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.getProfile();
    };
    MembersPage.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    MembersPage.prototype.goBack = function () {
        this.location.back();
    };
    MembersPage.prototype.updateGroupUrl = function () {
        this.isValidGroupImage = false;
    };
    MembersPage.prototype.getProfile = function () {
        var _this = this;
        this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(function (data) {
            _this.profile = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(data, '[0]', {});
            _this.getAllPeople();
            console.log('this.profile: ', _this.profile);
        }, function (err) {
            console.log('profile err:', err);
        });
    };
    MembersPage.prototype.getAllPeople = function () {
        var _this = this;
        this._groupServ.getAllPeople().subscribe(function (data) {
            console.log('get all peopel success: ', data);
            _this.groupMembers = data;
            _this.getExistingMembers();
        }, function (err) {
            console.log('get all people error : ', err);
        });
    };
    MembersPage.prototype.getExistingMembers = function () {
        var _this = this;
        this._groupServ.getExistingGroupMembers(this.groupId).subscribe(function (data) {
            console.log('get group members: ', data);
            var existingMembers = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(data, 'groupMembers', []);
            _this.groupMembers = _this.groupMembers.filter(function (o) {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(existingMembers, ['id', o.id])) {
                    return false;
                }
                return true;
            });
        }, function (err) {
            console.log('get grup members err: ', err);
        });
    };
    MembersPage.prototype.memberKeyChange = function (event) {
        console.log('key changed: ', event);
        this.keyword = event;
    };
    MembersPage.prototype.selectPeople = function (member) {
        if (!this.selectedPeople.includes(member.id)) {
            this.selectedPeople.push(member.id);
        }
        else {
            this.selectedPeople = this.selectedPeople.filter(function (o) { return o !== member.id; });
        }
    };
    MembersPage.prototype.isSelected = function (member) {
        return this.selectedPeople.includes(member.id);
    };
    MembersPage.prototype.inviteMemberEvent = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var param, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedPeople) return [3 /*break*/, 1];
                        param = {
                            userId: this._globalServ.idUser,
                            email: this.profile.email,
                            group_member_ids: this.selectedPeople.toString()
                        };
                        this._groupServ.joinGroup(this.groupId, param).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('join group success: ', data);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Invited user successfully.',
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        this.getAllPeople();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('join group err: ', err);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: err.message,
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastController.create({
                            message: 'Please select one people at least for the invitation',
                            duration: 2000
                        })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
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
    ], MembersPage.prototype, "onResize", null);
    MembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.page.html */ "./src/app/pages/members/members.page.html"),
            styles: [__webpack_require__(/*! ./members.page.scss */ "./src/app/pages/members/members.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
    ], MembersPage);
    return MembersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-members-members-module.js.map