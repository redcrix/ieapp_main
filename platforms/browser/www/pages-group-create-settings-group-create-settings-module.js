(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-create-settings-group-create-settings-module"],{

/***/ "./src/app/pages/group-create-settings/group-create-settings.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/group-create-settings/group-create-settings.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GroupCreateSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateSettingsPageModule", function() { return GroupCreateSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_create_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-create-settings.page */ "./src/app/pages/group-create-settings/group-create-settings.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _group_create_settings_page__WEBPACK_IMPORTED_MODULE_6__["GroupCreateSettingsPage"]
    }
];
var GroupCreateSettingsPageModule = /** @class */ (function () {
    function GroupCreateSettingsPageModule() {
    }
    GroupCreateSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_group_create_settings_page__WEBPACK_IMPORTED_MODULE_6__["GroupCreateSettingsPage"]]
        })
    ], GroupCreateSettingsPageModule);
    return GroupCreateSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-create-settings/group-create-settings.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/group-create-settings/group-create-settings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <toolbar\n    [title]=\"'group-create-settings.settings' | translate\"\n    [back]=\"true\"\n  >\n  </toolbar>\n  <div class=\"container settings-screen\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <ion-radio-group allow-empty-selection [(ngModel)]=\"groupSettingValue\">\n          <ion-item class=\"checkbox-item\" lines=\"none\" *ngFor=\"let item of groupCreateSettings; let i = index\" (click)=\"changeStatus(i, $event)\">\n            <ion-label>{{item.name}}</ion-label>\n            <ion-radio [ngClass]=\"{'checked': item.id === groupSettingValue}\" [value]=\"item.id\" [checked]=\"item.id === groupSettingValue\" slot=\"end\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n  <div class=\"container note-container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <span class=\"note\">\n          You can change group settings later by going to the group and clicking \n          <ion-icon name=\"more\"></ion-icon>\n        </span>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-create-settings/group-create-settings.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/group-create-settings/group-create-settings.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.btn-back-content-item{\n    height: 75px;\n    position: fixed;\n    margin-top: 15px;\n    margin-left: 15px;\n    z-index: 9999;\n    //background: rgba(255,255,255,0.8);.\n    text-align: center;\n}\n\n.btn-back-item{\n    display: inline-block;\n    border-radius: 60px;\n    box-shadow: 0px 0px 2px rgba(255,255,255,0.8);\n    padding: 3px 3px;\n    width: 21px;\n    background: rgba(255,255,255,0.8);\n}*/\nion-content {\n  background: #f9f9f9; }\n.box-center-full {\n  margin-top: 35px;\n  margin-bottom: 25px; }\n.map-one {\n  margin-top: 20px; }\ntable {\n  margin-top: 24pt; }\n.checkbox-item {\n  margin: 5px 0px; }\n.note-container {\n  background: #f9f9f9;\n  height: calc(100vh - 237px);\n  padding-top: 10px; }\n.note-container .note {\n    color: #aaaaaa; }\n/*.sc-ion-card-md-h {\n    margin-left: 0px; \n     margin-right: 0px;\n     margin-top: 0px; \n     border-radius: 0px;\n}*/\n/*.item-avatar-card.hydrated{\n    --inner-border-width: 0;\n    --padding-start: 0;\n}*/\n.settings-screen {\n  margin-top: 100px;\n  padding: 0;\n  border-top: solid 1px #e0e0e0;\n  border-bottom: solid 1px #e0e0e0; }\n.settings {\n  display: flex;\n  align-items: center;\n  margin: 20px 0px; }\n.settings-name {\n  font-weight: bold; }\n.settings-heading {\n  margin-top: 100px;\n  border-bottom: solid 1px #cccccc;\n  font-weight: bold;\n  padding: 5px 15px; }\nion-radio {\n  width: 26px;\n  height: 26px;\n  border: solid 2px #c8c7cc;\n  border-radius: 26px;\n  --color: #009cd8;\n  --color-checked: white; }\n.checked {\n  background: #009cd8;\n  border-color: #009cd8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9ncm91cC1jcmVhdGUtc2V0dGluZ3MvZ3JvdXAtY3JlYXRlLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvdXAtY3JlYXRlLXNldHRpbmdzL2dyb3VwLWNyZWF0ZS1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDaUJFO0FERUY7RUFDSSxtQkFBOEIsRUFBQTtBQUlsQztFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtBQUd2QjtFQUNHLGdCQUFnQixFQUFBO0FBR25CO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxlQUFlLEVBQUE7QUFHbkI7RUFDSSxtQkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGlCQUFpQixFQUFBO0FBSHJCO0lBTVEsY0FBeUIsRUFBQTtBQUlqQzs7Ozs7RUNMRTtBRFlGOzs7RUNSRTtBRGFGO0VBQ0ksaUJBQWlCO0VBQ2pCLFVBQVU7RUFDViw2QkFBd0M7RUFDeEMsZ0NBQTJDLEVBQUE7QUFHL0M7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBUTtFQUNSLHNCQUFnQixFQUFBO0FBR3BCO0VBQ0ksbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JvdXAtY3JlYXRlLXNldHRpbmdzL2dyb3VwLWNyZWF0ZS1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAyNDksIDI0OSk7XG59XG5cblxuLmJveC1jZW50ZXItZnVsbHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5tYXAtb25le1xuICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudGFibGV7XG4gICAgbWFyZ2luLXRvcDogMjRwdDtcbn1cblxuLmNoZWNrYm94LWl0ZW0ge1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLm5vdGUtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAyNDksIDI0OSk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM3cHgpO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgJiAubm90ZSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XG4gICAgfVxufVxuXG4vKi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcbiAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDsgXG4gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn0qL1xuXG4vKi5pdGVtLWF2YXRhci1jYXJkLmh5ZHJhdGVke1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbn0qL1xuXG4uc2V0dGluZ3Mtc2NyZWVuIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2IoMjI0LCAyMjQsIDIyNCk7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYigyMjQsIDIyNCwgMjI0KTtcbn1cblxuLnNldHRpbmdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLnNldHRpbmdzLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2V0dGluZ3MtaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICNjOGM3Y2M7XG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgICAtLWNvbG9yOiAjMDA5Y2Q4O1xuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG59XG5cbi5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Y2Q4O1xuICAgIGJvcmRlci1jb2xvcjogIzAwOWNkODtcbn0iLCIvKi5idG4tYmFjay1jb250ZW50LWl0ZW17XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7LlxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrLWl0ZW17XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIHBhZGRpbmc6IDNweCAzcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufSovXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7IH1cblxuLmJveC1jZW50ZXItZnVsbCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cblxuLm1hcC1vbmUge1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjRwdDsgfVxuXG4uY2hlY2tib3gtaXRlbSB7XG4gIG1hcmdpbjogNXB4IDBweDsgfVxuXG4ubm90ZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzdweCk7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XG4gIC5ub3RlLWNvbnRhaW5lciAubm90ZSB7XG4gICAgY29sb3I6ICNhYWFhYWE7IH1cblxuLyouc2MtaW9uLWNhcmQtbWQtaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXG4gICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7IFxuICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59Ki9cbi8qLml0ZW0tYXZhdGFyLWNhcmQuaHlkcmF0ZWR7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufSovXG4uc2V0dGluZ3Mtc2NyZWVuIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTBlMGUwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2UwZTBlMDsgfVxuXG4uc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMHB4OyB9XG5cbi5zZXR0aW5ncy1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnNldHRpbmdzLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA1cHggMTVweDsgfVxuXG5pb24tcmFkaW8ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjYzhjN2NjO1xuICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAtLWNvbG9yOiAjMDA5Y2Q4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlOyB9XG5cbi5jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzAwOWNkODtcbiAgYm9yZGVyLWNvbG9yOiAjMDA5Y2Q4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/group-create-settings/group-create-settings.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/group-create-settings/group-create-settings.page.ts ***!
  \***************************************************************************/
/*! exports provided: GroupCreateSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateSettingsPage", function() { return GroupCreateSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var GroupCreateSettingsPage = /** @class */ (function () {
    function GroupCreateSettingsPage(location, _globalServ, _groupServ, actRoute, toastController, storage) {
        this.location = location;
        this._globalServ = _globalServ;
        this._groupServ = _groupServ;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.storage = storage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.isValidGroupImage = true;
        this.groupCreateSettings = [];
        this.math = Math;
        this.groupSettingsIds = [];
        this.groupSettingValue = -1;
        /* if (this.actRoute.snapshot.queryParams.data != null) {
          let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
          this.id = getParams.id;
          console.log('id: ', this.id);
        } */
    }
    GroupCreateSettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.storage.get('group-create-settings').then(function (val) {
            _this.groupSettingValue = val;
            _this.getGroupSettings();
        });
    };
    GroupCreateSettingsPage.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    GroupCreateSettingsPage.prototype.getGroupSettings = function () {
        var _this = this;
        this._groupServ.getGroupSettings().subscribe(function (data) {
            console.log('group settings data: ', data);
            _this.groupCreateSettings = data;
        }, function (err) {
            console.log('group settings err: ', err);
        });
    };
    GroupCreateSettingsPage.prototype.changeStatus = function () {
        this.storage.set('group-create-settings', this.groupSettingValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GroupCreateSettingsPage.prototype, "onResize", null);
    GroupCreateSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-create-settings',
            template: __webpack_require__(/*! ./group-create-settings.page.html */ "./src/app/pages/group-create-settings/group-create-settings.page.html"),
            styles: [__webpack_require__(/*! ./group-create-settings.page.scss */ "./src/app/pages/group-create-settings/group-create-settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], GroupCreateSettingsPage);
    return GroupCreateSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-create-settings-group-create-settings-module.js.map