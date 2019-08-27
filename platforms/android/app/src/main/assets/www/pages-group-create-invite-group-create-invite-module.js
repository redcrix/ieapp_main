(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-create-invite-group-create-invite-module"],{

/***/ "./src/app/pages/group-create-invite/group-create-invite.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/group-create-invite/group-create-invite.module.ts ***!
  \*************************************************************************/
/*! exports provided: GroupCreateInvitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateInvitePageModule", function() { return GroupCreateInvitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_create_invite_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-create-invite.page */ "./src/app/pages/group-create-invite/group-create-invite.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");









var routes = [
    {
        path: '',
        component: _group_create_invite_page__WEBPACK_IMPORTED_MODULE_7__["GroupCreateInvitePage"]
    }
];
var GroupCreateInvitePageModule = /** @class */ (function () {
    function GroupCreateInvitePageModule() {
    }
    GroupCreateInvitePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"]
            ],
            declarations: [_group_create_invite_page__WEBPACK_IMPORTED_MODULE_7__["GroupCreateInvitePage"]]
        })
    ], GroupCreateInvitePageModule);
    return GroupCreateInvitePageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-create-invite/group-create-invite.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/group-create-invite/group-create-invite.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar\n    [title]=\"'group-create-invite.invite' | translate\"\n    [back]=\"true\"\n    [searchMembers]=\"true\"\n    (memberKeyChange)=\"memberKeyChange($event)\"\n  >\n  </toolbar>\n  <div class=\"container invite-screen\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div class=\"invite\" *ngFor=\"let person of groupPeoples | filter:keyword; let i=index\">\n          <img class=\"invite-avatar\" src=\"{{person.image}}\" />\n          <ion-item (click)=\"changeStatus(i)\">\n            <ion-label>{{person?.name}}</ion-label>\n            <ion-checkbox [checked]=\"person?.value === 1\" slot=\"end\"></ion-checkbox>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-create-invite/group-create-invite.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/group-create-invite/group-create-invite.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content-item{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back-item{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\n/*.sc-ion-card-md-h {\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px;\n}*/\n/*.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}*/\n.invite-screen {\n  margin-top: 160px; }\n.invite {\n  display: flex;\n  align-items: center;\n  margin: 20px 15px; }\n.invite ion-item {\n    width: calc(100% - 55px); }\n.invite ion-item ion-checkbox {\n      --border-radius: 2px;\n      --border-width: 2px; }\n.invite ion-item ion-label {\n      width: 130px; }\n.invite-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  margin-right: 15px; }\n.invite-name {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUtaW52aXRlL2dyb3VwLWNyZWF0ZS1pbnZpdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUtaW52aXRlL2dyb3VwLWNyZWF0ZS1pbnZpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztFQ2lCRTtBREVGO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0csZ0JBQWdCLEVBQUE7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjs7Ozs7RUNDRTtBRE1GOzs7RUNGRTtBRE9GO0VBQ0ksaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0FBSHJCO0lBTVEsd0JBQXdCLEVBQUE7QUFOaEM7TUFTWSxvQkFBZ0I7TUFDaEIsbUJBQWUsRUFBQTtBQVYzQjtNQWNZLFlBQVksRUFBQTtBQUt4QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUtaW52aXRlL2dyb3VwLWNyZWF0ZS1pbnZpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouYnRuLWJhY2stY29udGVudC1pdGVte1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpOy5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmFjay1pdGVte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBwYWRkaW5nOiAzcHggM3B4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbn0qL1xuXG4uYm94LWNlbnRlci1mdWxse1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLm1hcC1vbmV7XG4gICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG50YWJsZXtcbiAgICBtYXJnaW4tdG9wOiAyNHB0O1xufVxuXG4vKi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcbiAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDsgXG4gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn0qL1xuXG4vKi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0qL1xuXG4uaW52aXRlLXNjcmVlbiB7XG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XG59XG5cbi5pbnZpdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMTVweDtcblxuICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTVweCk7XG5cbiAgICAgICAgJiBpb24tY2hlY2tib3gge1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24tbGFiZWwge1xuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW52aXRlLWF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW52aXRlLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qLmJ0bi1iYWNrLWNvbnRlbnQtaXRlbXtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWJhY2staXRlbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgcGFkZGluZzogM3B4IDNweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59Ki9cbi5ib3gtY2VudGVyLWZ1bGwge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG5cbi5tYXAtb25lIHtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDI0cHQ7IH1cblxuLyouc2MtaW9uLWNhcmQtbWQtaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXG4gICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7IFxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59Ki9cbi8qLml0ZW0tYXZhdGFyLWNhcmQuaHlkcmF0ZWR7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufSovXG4uaW52aXRlLXNjcmVlbiB7XG4gIG1hcmdpbi10b3A6IDE2MHB4OyB9XG5cbi5pbnZpdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMTVweDsgfVxuICAuaW52aXRlIGlvbi1pdGVtIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTVweCk7IH1cbiAgICAuaW52aXRlIGlvbi1pdGVtIGlvbi1jaGVja2JveCB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7IH1cbiAgICAuaW52aXRlIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgICB3aWR0aDogMTMwcHg7IH1cblxuLmludml0ZS1hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cblxuLmludml0ZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/group-create-invite/group-create-invite.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/group-create-invite/group-create-invite.page.ts ***!
  \***********************************************************************/
/*! exports provided: GroupCreateInvitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateInvitePage", function() { return GroupCreateInvitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var GroupCreateInvitePage = /** @class */ (function () {
    function GroupCreateInvitePage(location, _globalServ, _groupServ, actRoute, toastController, storage) {
        this.location = location;
        this._globalServ = _globalServ;
        this._groupServ = _groupServ;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.storage = storage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isValidGroupImage = true;
        this.groupPeoples = [];
        this.math = Math;
        this.keyword = '';
        this.groupMembersIds = [];
        /* if (this.actRoute.snapshot.queryParams.data != null) {
          let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
          this.id = getParams.id;
          console.log('id: ', this.id);
        } */
    }
    GroupCreateInvitePage.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.storage.get('group-create-members').then(function (val) {
            _this.groupMembersIds = val;
            _this.getPeoples();
        });
    };
    GroupCreateInvitePage.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    GroupCreateInvitePage.prototype.goBack = function () {
        this.location.back();
    };
    GroupCreateInvitePage.prototype.updateGroupUrl = function () {
        this.isValidGroupImage = false;
    };
    GroupCreateInvitePage.prototype.getPeoples = function () {
        var _this = this;
        this._groupServ.getPeoplesForInvitation().subscribe(function (data) {
            _this.groupPeoples = data;
            _this.groupPeoples = _this.groupPeoples.map(function (o) {
                var value = 0;
                if (_this.groupMembersIds.includes(o.id)) {
                    value = 1;
                }
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { value: value });
            });
            console.log('this.groupGroupCreateCategory: ', _this.groupPeoples);
        }, function (err) {
            console.log('catetgories err: ', err);
        });
    };
    GroupCreateInvitePage.prototype.changeStatus = function (idx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.groupPeoples.length > 0) {
                    this.groupPeoples[idx].value = (this.groupPeoples[idx].value + 1) % 2;
                    this.groupMembersIds = this.groupPeoples.filter(function (o) { return o.value === 1; }).map(function (o) {
                        return o.id;
                    });
                    this.storage.set('group-create-members', this.groupMembersIds);
                }
                return [2 /*return*/];
            });
        });
    };
    GroupCreateInvitePage.prototype.memberKeyChange = function (event) {
        console.log('key changed: ', event);
        this.keyword = event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GroupCreateInvitePage.prototype, "onResize", null);
    GroupCreateInvitePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-create-invite',
            template: __webpack_require__(/*! ./group-create-invite.page.html */ "./src/app/pages/group-create-invite/group-create-invite.page.html"),
            styles: [__webpack_require__(/*! ./group-create-invite.page.scss */ "./src/app/pages/group-create-invite/group-create-invite.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], GroupCreateInvitePage);
    return GroupCreateInvitePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-create-invite-group-create-invite-module.js.map