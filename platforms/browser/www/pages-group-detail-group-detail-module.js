(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-detail-group-detail-module"],{

/***/ "./src/app/pages/group-detail/group-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/group-detail/group-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: GroupDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPageModule", function() { return GroupDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-detail.page */ "./src/app/pages/group-detail/group-detail.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _group_detail_page__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPage"]
    }
];
var GroupDetailPageModule = /** @class */ (function () {
    function GroupDetailPageModule() {
    }
    GroupDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_detail_page__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPage"]]
        })
    ], GroupDetailPageModule);
    return GroupDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-detail/group-detail.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/group-detail/group-detail.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"btn-back-content-item\" [ngClass]=\"{'btn-back-content-item-ios':_globalServ?.iosDivice}\">\n    <span (click)=\"goBack()\" class=\"btn-back-item fas fa-chevron-left\"></span>\n  </div>\n  <div>\n    <img *ngIf=\"getItem?.image && isValidGroupImage\" class=\"main-item-image\" src=\"{{getItem?.image}}\" (error)=\"updateGroupUrl($event)\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n\n        <div class=\"item-title\">\n          <h2>\n            <span>{{getItem?.title}}</span>\n          </h2>\n        </div>\n        <div class=\"box-center-full\">\n          <div *ngIf=\"isJoined\" class=\"box-blue-circle\" (click)=\"joinGroup()\">\n            <img src=\"../../../assets/img/fab_checked.png\"/>\n            <p class=\"secondary-text\" style=\"color: #179ed5; margin-top: 5px\">{{'group-detail.joined' | translate}}</p>\n          </div>\n          <div *ngIf=\"!isJoined\" class=\"box-blue-circle\" (click)=\"joinGroup()\">\n            <img src=\"../../../assets/img/fab.png\"/>\n            <p class=\"secondary-text\" style=\"color: #179ed5; margin-top: 5px\">{{'group-detail.join' | translate}}</p>\n          </div>\n          <div class=\"box-blue-circle\" (click)=\"goToCreatePlan()\">\n            <img src=\"../../../assets/img/fab_calendar.png\"/>\n            <p class=\"secondary-text\" style=\"color: #179ed5; margin-top: 5px\">{{'group-detail.createPlan' | translate}}</p>\n          </div>\n        </div>\n        <table>\n          <tr class=\"weight-600\">\n            <td>\n              <ion-icon class=\"icon-item\" name=\"information-circle\"></ion-icon>\n            </td>\n            <td class=\"title-item\">{{ 'group-detail.details' | translate }}</td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"secondary-text\">\n              <span *ngIf=\"_globalServ?.language == 'en'\">{{getItem?.description}}</span>\n              <span *ngIf=\"_globalServ?.language == 'es'\">{{getItem?.description}}</span></td>\n            </tr>\n            <tr>\n              <td></td>\n              <td class=\"blue-text size-18-pt\">{{ 'group-detail.readMore' | translate }}</td>\n            </tr>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr class=\"weight-600\">\n              <td class=\"member-h-icon\">\n                <ion-icon class=\"icon-item\" name=\"ios-person\"></ion-icon>\n              </td>\n              <td class=\"title-item\">\n                <span>{{ 'group-detail.members' | translate }}: {{groupMembers.length}}</span>\n                <span class=\"invite-member\" (click)=\"goToMembers()\">Invite</span>\n              </td>\n            </tr>\n            <tr>\n              <td></td>\n              <td>\n                <span *ngFor=\"let member of groupMembers; let i = index\">\n                  <img *ngIf=\"i < math.round((innerWidth - 70 - 2*37) / 37)\" class=\"members-avatar\" src=\"{{member?.image}}\" />\n                </span>\n                <span *ngIf=\"groupMembers.length > math.round((innerWidth - 70 - 2*37) / 37)\" class=\"more-member\" (click)=\"goToMembers()\">\n                  +{{groupMembers.length - math.round((innerWidth - 70 - 2*37) / 37)}}\n                </span>\n              </td>\n            </tr>\n          </table>\n          <table>\n            <tr class=\"weight-600\">\n              <td>\n                <ion-icon class=\"icon-item\" name=\"text\"></ion-icon>\n              </td>\n              <td class=\"title-item\">{{ 'group-detail.comments' | translate }}</td>\n            </tr>\n            <tbody>\n              <tr *ngFor=\"let comment of comments; let i = index\">\n                <td width=\"5%\"></td>\n                <td class=\"comment-body\">\n                  <img class=\"comment-avatar\" src=\"{{comment.fk_user_image}}\" />  \n                  <div>\n                    <span class=\"comment-name\">{{comment.fk_user_first_name}} {{comment.fk_user_last_name}}</span>\n                    <span class=\"comment-text\">{{comment.comment}}</span>\n                  </div>\n                </td>\n                <td>\n                  <span class=\"secondary-text\">{{comment.duration}}</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"add-comment-section\">\n            <span class=\"add-comment\" (click)=\"writeComment()\">{{ 'group-detail.addAComment' | translate }}</span>\n          </div>\n\n          <table>\n            <tr class=\"weight-600\">\n              <td>\n                <ion-icon class=\"icon-item\" name=\"pin\"></ion-icon>\n              </td>\n              <td class=\"title-item\">{{ 'group-detail.plans' | translate }}</td>\n            </tr>\n            <tbody>\n              <tr>\n                <td></td>\n                <td></td>\n              </tr>\n            </tbody>\n          </table>\n          <ion-slides *ngIf=\"plans.length !== 0\" style=\"width: 100%;\" [pager]=\"true\">\n            <ion-slide style=\"width: 100%;\" *ngFor=\"let plan of plans;\">\n              <plan-card [dataPlan]=\"plan\" style=\"width: 100%;\" (click)=\"goToGroupPlanItem(plan)\"></plan-card>\n            </ion-slide>\n          </ion-slides>\n\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/group-detail/group-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/group-detail/group-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content-item{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back-item{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\n/*.sc-ion-card-md-h {\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px;\n}*/\n/*.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}*/\n.members-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 32px;\n  margin-right: 5px; }\n.comment-avatar {\n  width: 53px;\n  height: 53px;\n  border-radius: 53px;\n  margin-right: 10px;\n  border: solid 1px #dedede; }\n.comment-body {\n  display: flex;\n  align-items: center;\n  padding: 10px 5px;\n  width: 90%; }\n.comment-name {\n  font-weight: bold;\n  margin-right: 10px; }\n.add-comment-section {\n  text-align: center;\n  margin-top: 15px; }\n.add-comment {\n  font-weight: bold; }\n.more-member {\n  width: 32px;\n  height: 32px;\n  text-align: center;\n  font-size: 14px;\n  background-color: #f4f5f8;\n  border-radius: 32px;\n  padding: 9px;\n  font-weight: bold;\n  cursor: pointer; }\n.title-item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n.invite-member {\n  color: #009cd7;\n  font-weight: normal;\n  font-size: 17px; }\n.member-h-icon {\n  width: 34px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ncm91cC1kZXRhaWwvZ3JvdXAtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvdXAtZGV0YWlsL2dyb3VwLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDaUJFO0FERUY7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDRyxnQkFBZ0IsRUFBQTtBQUduQjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCOzs7OztFQ0NFO0FETUY7OztFQ0ZFO0FET0Y7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtBQUVyQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTtBQUU3QjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFVBQVUsRUFBQTtBQUVkO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBRXBCO0VBQ0ksaUJBQWlCLEVBQUE7QUFFckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtBQUduQjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBO0FBR2xDO0VBQ0ksY0FBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtBQUduQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWRldGFpbC9ncm91cC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouYnRuLWJhY2stY29udGVudC1pdGVte1xuICAgIGhlaWdodDogNzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpOy5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmFjay1pdGVte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBwYWRkaW5nOiAzcHggM3B4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbn0qL1xuXG4uYm94LWNlbnRlci1mdWxse1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLm1hcC1vbmV7XG4gICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG50YWJsZXtcbiAgICBtYXJnaW4tdG9wOiAyNHB0O1xufVxuXG4vKi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcbiAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDsgXG4gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn0qL1xuXG4vKi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0qL1xuXG4ubWVtYmVycy1hdmF0YXIge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbW1lbnQtYXZhdGFyIHtcbiAgICB3aWR0aDogNTNweDtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RlZGVkZTtcbn1cbi5jb21tZW50LWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICB3aWR0aDogOTAlO1xufVxuLmNvbW1lbnQtbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmFkZC1jb21tZW50LXNlY3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmFkZC1jb21tZW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb3JlLW1lbWJlciB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRsZS1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW52aXRlLW1lbWJlciB7XG4gICAgY29sb3I6IHJnYigwLCAxNTYsIDIxNSk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5tZW1iZXItaC1pY29uIHtcbiAgICB3aWR0aDogMzRweDtcbn0iLCIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG4uYm94LWNlbnRlci1mdWxsIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4ubWFwLW9uZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxudGFibGUge1xuICBtYXJnaW4tdG9wOiAyNHB0OyB9XG5cbi8qLnNjLWlvbi1jYXJkLW1kLWgge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxuICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4OyBcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSovXG4vKi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0qL1xuLm1lbWJlcnMtYXZhdGFyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuLmNvbW1lbnQtYXZhdGFyIHtcbiAgd2lkdGg6IDUzcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGVkZWRlOyB9XG5cbi5jb21tZW50LWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgd2lkdGg6IDkwJTsgfVxuXG4uY29tbWVudC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4uYWRkLWNvbW1lbnQtc2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxuXG4uYWRkLWNvbW1lbnQge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4ubW9yZS1tZW1iZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgcGFkZGluZzogOXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi50aXRsZS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuXG4uaW52aXRlLW1lbWJlciB7XG4gIGNvbG9yOiAjMDA5Y2Q3O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7IH1cblxuLm1lbWJlci1oLWljb24ge1xuICB3aWR0aDogMzRweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/group-detail/group-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/group-detail/group-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: GroupDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPage", function() { return GroupDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");












var GroupDetailPage = /** @class */ (function () {
    function GroupDetailPage(location, _globalServ, _groupServ, actRoute, toastController, router, _userServ, storage) {
        this.location = location;
        this._globalServ = _globalServ;
        this._groupServ = _groupServ;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.router = router;
        this._userServ = _userServ;
        this.storage = storage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.getItem = {};
        this.isValidGroupImage = true;
        this.groupMembers = [];
        this.plans = [];
        this.comments = [];
        this.math = Math;
        this.isJoined = false;
        this.profile = {};
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.id = getParams.id;
            console.log('id: ', this.id);
        }
    }
    GroupDetailPage.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
    };
    GroupDetailPage.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    GroupDetailPage.prototype.ionViewDidEnter = function () {
        this.getProfile();
    };
    GroupDetailPage.prototype.getProfile = function () {
        var _this = this;
        this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(function (data) {
            _this.profile = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(data, '[0]', {});
            console.log('this.profile: ', _this.profile);
            _this.getGroupDetail();
            _this.getGroupComments();
            _this.getGroupPlans();
        }, function (err) {
            console.log('err public profile: ', err);
        });
    };
    GroupDetailPage.prototype.getGroupDetail = function () {
        var _this = this;
        this._groupServ.getGroupDetail(this.id).subscribe(function (data) {
            console.log('group detail data: ', data);
            _this.getItem = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(data, 'group', {});
            _this.groupMembers = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(data, 'members', []);
            console.log('user id: ', _this._globalServ.idUser);
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(_this.groupMembers, ['id', _this._globalServ.idUser])) {
                _this.isJoined = true;
            }
            else {
                _this.isJoined = false;
            }
        }, function (err) {
            console.log('group detail err: ', err);
        });
    };
    GroupDetailPage.prototype.getDuration = function (tcreated) {
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
    GroupDetailPage.prototype.getGroupComments = function () {
        var _this = this;
        this._groupServ.getGroupComments(this.id).subscribe(function (data) {
            console.log('group comment data: ', data);
            _this.comments = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["get"])(data, 'comment', {});
            _this.comments = _this.comments.map(function (o) {
                var duration = _this.getDuration(o.created);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { duration: duration });
            });
        }, function (err) {
            console.log('group comment err: ', err);
        });
    };
    GroupDetailPage.prototype.getGroupPlans = function () {
        var _this = this;
        this._groupServ.getGroupPlans(this.id, this.profile.email).subscribe(function (data) {
            console.log('group plans data: ', data);
            if (_this._globalServ.org == 'CEU') {
                _this.plans = data;
            }
            else {
                _this.plans = data['groupPlans'];
            }
            _this.plans = _this.plans.map(function (o) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o, { type: 'group_plan' });
            });
        }, function (err) {
            console.log('group plans err: ', err);
        });
    };
    GroupDetailPage.prototype.goToGroupPlanItem = function (plan) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': plan.id, 'email': this.profile.email })
            }
        };
        this.router.navigate(['group-plan-item'], navigationExtras);
    };
    GroupDetailPage.prototype.goBack = function () {
        this.location.back();
    };
    GroupDetailPage.prototype.updateGroupUrl = function () {
        this.isValidGroupImage = false;
    };
    GroupDetailPage.prototype.joinGroup = function () {
        var _this = this;
        if (this.isJoined == true) {
            this._groupServ.leaveGroupPlan(this.id, null).subscribe(function (data) {
                console.log(data);
                _this.isJoined = false;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            var param = {
                userId: this._globalServ.idUser,
                email: this.profile.email
            };
            this._groupServ.joinGroup(this.id, param).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var toast;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('joined success: ', data);
                            return [4 /*yield*/, this.toastController.create({
                                    message: 'Joined successfully.',
                                    duration: 2000
                                })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            this.isJoined = true;
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
                            this.isJoined = false;
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    GroupDetailPage.prototype.writeComment = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': this.id })
            }
        };
        this.router.navigate(['write-comment'], navigationExtras);
    };
    GroupDetailPage.prototype.goToMembers = function () {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'id': this.id })
            }
        };
        this.router.navigate(['members'], navigationExtras);
    };
    GroupDetailPage.prototype.goToCreatePlan = function () {
        this.storage.set('plan-create-seats', -1);
        this.storage.set('plan-create-createdby', 1);
        this.storage.set('plan-create-groups', -1);
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify({ 'groupId': this.id })
            }
        };
        this.router.navigate(['plan-create'], navigationExtras);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GroupDetailPage.prototype, "onResize", null);
    GroupDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-detail',
            template: __webpack_require__(/*! ./group-detail.page.html */ "./src/app/pages/group-detail/group-detail.page.html"),
            styles: [__webpack_require__(/*! ./group-detail.page.scss */ "./src/app/pages/group-detail/group-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
    ], GroupDetailPage);
    return GroupDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-detail-group-detail-module.js.map