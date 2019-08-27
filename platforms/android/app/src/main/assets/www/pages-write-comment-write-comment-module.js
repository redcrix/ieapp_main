(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-write-comment-write-comment-module"],{

/***/ "./src/app/pages/write-comment/write-comment.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/write-comment/write-comment.module.ts ***!
  \*************************************************************/
/*! exports provided: WriteCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteCommentPageModule", function() { return WriteCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _write_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./write-comment.page */ "./src/app/pages/write-comment/write-comment.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _write_comment_page__WEBPACK_IMPORTED_MODULE_6__["WriteCommentPage"]
    }
];
var WriteCommentPageModule = /** @class */ (function () {
    function WriteCommentPageModule() {
    }
    WriteCommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_write_comment_page__WEBPACK_IMPORTED_MODULE_6__["WriteCommentPage"]]
        })
    ], WriteCommentPageModule);
    return WriteCommentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/write-comment/write-comment.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/write-comment/write-comment.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <toolbar [back]=\"true\" title=\"{{'write-comment.writeAComment' | translate}}\"></toolbar>\n    <div class=\"container comment-container\">\n      <div class=\"row\" style=\"height: 100%;\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\" style=\"height: 100%;\">\n          <div style=\"margin-top: 40pt;\"></div>\n          \n          <div class=\"comment-row\" *ngFor=\"let comment of comments; let i = index\">\n            <div class=\"comment-body\">\n              <img class=\"comment-avatar\" src=\"{{comment.fk_user_image}}\" />  \n              <div>\n                <span class=\"comment-name\">{{comment.fk_user_first_name}} {{comment.fk_user_last_name}}</span>\n                <span class=\"comment-text\">{{comment.comment}}</span>\n              </div>\n            </div>\n            <div>\n              <span class=\"secondary-text\">{{comment.duration}}</span>\n            </div>\n          </div>\n\n          <div class=\"form-bar\">\n            <div class=\"add-button\">\n              <ion-icon name=\"add\"></ion-icon>\n            </div>\n            <div class=\"comment-input-group\">\n              <ion-input [(ngModel)]=\"commentData\"></ion-input>\n              <span class=\"send-button\" (click)=\"addComment()\">{{ 'write-comment.send' | translate }}</span>\n            </div>\n          </div>\n   \n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/write-comment/write-comment.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/write-comment/write-comment.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-avatar {\n  width: 53px;\n  height: 53px;\n  border-radius: 53px;\n  margin-right: 10px;\n  border: solid 1px #dedede; }\n\n.comment-body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 5px; }\n\n.comment-name {\n  font-weight: bold;\n  margin-right: 10px; }\n\n.comment-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.comment-container {\n  height: calc(100vh - 80px); }\n\n.form-bar {\n  width: calc(100% - 30px);\n  height: 40px;\n  position: fixed;\n  background: white;\n  bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.form-bar .comment-input-group {\n    width: calc(100% - 40px);\n    height: 40px;\n    display: flex;\n    padding: 0px 10px;\n    align-items: center;\n    border: solid 1px #d8d8d8;\n    border-radius: 20px; }\n\n.form-bar .comment-input-group .send-button {\n      color: #009cd7; }\n\n.form-bar .add-button {\n    width: 40px;\n    color: #009cd7;\n    font-size: 30px;\n    height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy93cml0ZS1jb21tZW50L3dyaXRlLWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFSaEM7SUFXSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUFvQztJQUNwQyxtQkFBbUIsRUFBQTs7QUFqQnZCO01Bd0JNLGNBQXVCLEVBQUE7O0FBeEI3QjtJQThCSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93cml0ZS1jb21tZW50L3dyaXRlLWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29tbWVudC1hdmF0YXIge1xuICB3aWR0aDogNTNweDtcbiAgaGVpZ2h0OiA1M3B4O1xuICBib3JkZXItcmFkaXVzOiA1M3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkZWRlZGU7XG59XG4uY29tbWVudC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuLmNvbW1lbnQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jb21tZW50LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbW1lbnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG59XG5cbi5mb3JtLWJhciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICYgLmNvbW1lbnQtaW5wdXQtZ3JvdXAge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigyMTYsIDIxNiwgMjE2KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgJiBpb24taW5wdXQge1xuXG4gICAgfVxuXG4gICAgJiAuc2VuZC1idXR0b24ge1xuICAgICAgY29sb3I6IHJnYigwLCAxNTYsIDIxNSk7XG4gICAgfVxuXG4gIH1cblxuICAmIC5hZGQtYnV0dG9uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBjb2xvcjogIzAwOWNkNztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/write-comment/write-comment.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/write-comment/write-comment.page.ts ***!
  \***********************************************************/
/*! exports provided: WriteCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteCommentPage", function() { return WriteCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var WriteCommentPage = /** @class */ (function () {
    function WriteCommentPage(_userServ, _globalServ, _groupServ, actRoute, toastController) {
        this._userServ = _userServ;
        this._globalServ = _globalServ;
        this._groupServ = _groupServ;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.commentData = '';
        this.groupId = '';
        this.comments = [];
        this.profile = {};
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.groupId = getParams.id;
            console.log('groupId: ', this.groupId);
            this.getProfile();
        }
        // this.keyboard.disableScroll(true);
    }
    WriteCommentPage.prototype.ngOnInit = function () {
    };
    WriteCommentPage.prototype.getProfile = function () {
        var _this = this;
        this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(function (data) {
            _this.profile = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, '[0]', {});
            console.log('this.profile: ', _this.profile);
            _this.getGroupComments();
        }, function (err) {
            console.log('err public profile: ', err);
        });
    };
    WriteCommentPage.prototype.getDuration = function (tcreated) {
        var now = new Date().getTime();
        var created = new Date(tcreated).getTime();
        if (now > created) {
            var hours = new Date(now - created).getHours();
            if (Math.floor(hours / 24) === 0) {
                return '1d';
            }
            return Math.floor(hours / 24) + 'd';
        }
        else {
            return '';
        }
    };
    WriteCommentPage.prototype.getGroupComments = function () {
        var _this = this;
        this._groupServ.getGroupComments(this.groupId).subscribe(function (data) {
            console.log('group comment data: ', data);
            _this.comments = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(data, 'comment', {});
            _this.comments = _this.comments.map(function (o) {
                var duration = _this.getDuration(o.created);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { duration: duration });
            });
        }, function (err) {
            console.log('group comment err: ', err);
        });
    };
    WriteCommentPage.prototype.addComment = function () {
        var _this = this;
        var param = {
            userId: this._globalServ.idUser,
            email: this.profile.email,
            comment: this.commentData
        };
        console.log('param: ', param);
        this._groupServ.addComment(this.groupId, param).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('add comment sucess : ', data);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Added comment successfully.',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.commentData = '';
                        this.getGroupComments();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('add comment err : ', err);
                        return [4 /*yield*/, this.toastController.create({
                                message: err.message,
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.commentData = '';
                        return [2 /*return*/];
                }
            });
        }); });
    };
    WriteCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-write-comment',
            template: __webpack_require__(/*! ./write-comment.page.html */ "./src/app/pages/write-comment/write-comment.page.html"),
            styles: [__webpack_require__(/*! ./write-comment.page.scss */ "./src/app/pages/write-comment/write-comment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            src_app_services_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]])
    ], WriteCommentPage);
    return WriteCommentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-write-comment-write-comment-module.js.map