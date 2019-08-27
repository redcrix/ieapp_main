(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'plan-list',
                children: [
                    {
                        path: '',
                        loadChildren: '../plan-list/plan-list.module#PlanListPageModule'
                    }
                ]
            }, {
                path: 'city-guide-list',
                children: [
                    {
                        path: '',
                        loadChildren: '../city-guide-list/city-guide-list.module#CityGuideListPageModule'
                    }
                ]
            },
            {
                path: 'city-agenda-list',
                children: [
                    {
                        path: '',
                        loadChildren: '../city-agenda-list/city-agenda-list.module#CityAgendaListPageModule'
                    }
                ]
            }, {
                path: 'offers-discounts-list',
                children: [
                    {
                        path: '',
                        loadChildren: '../offers-discounts-list/offers-discounts-list.module#OffersDiscountsListPageModule'
                    }
                ]
            }, {
                path: 'more',
                children: [
                    {
                        path: '',
                        loadChildren: '../more/more.module#MorePageModule'
                    }
                ]
            }, {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: 'city-guide-item-list',
                children: [
                    {
                        path: '',
                        loadChildren: '../city-guide-item-list/city-guide-item-list.module#CityGuideItemListPageModule'
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: '../search/search.module#SearchPageModule'
                    }
                ]
            }, {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: '../notifications/notifications.module#NotificationsPageModule'
                    }
                ]
            }, {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: '../about/about.module#AboutPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/plan-list',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/plan-list',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








//add these (extras)


//import { TranslateModule } from '@ngx-translate/core';
var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                //TranslateModule,
                _components_component_module__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_7__["TabsPageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"search\">\n      <div class=\"bg-background search-tab icon-tab\"></div>\n      <ion-label></ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"notifications\">\n      <div class=\"bg-background bell-tab icon-tab\"></div>\n      <ion-label></ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"\">\n    </ion-tab-button>\n    <ion-tab-button (click)=\"showMore()\">\n      <div class=\"bg-background plus-tab icon-tab\"></div>\n      <ion-label></ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"more\">\n      <div class=\"bg-background menu-tab icon-tab\"></div>\n      <ion-label></ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" [ngClass]=\"{'ios-fab':_globalServ?.iosDivice,'android-fab':_globalServ?.androidDivice}\" slot=\"fixed\">\n  <ion-fab-button>\n    <div style=\"font-size: 25px;\" class=\"far fa-dot-circle\"></div>\n  </ion-fab-button>\n  <ion-fab-list side=\"top\">\n    <ion-fab-button (click)=\"goToOffersAndDiscount()\" class=\"offer-discount\">\n      <ion-icon name=\"md-pricetags\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button (click)=\"goToCityAgenda()\" class=\"city-agenda\">\n      <div class=\"fas fa-copy\"></div>\n    </ion-fab-button>\n    <ion-fab-button (click)=\"goToCityGuide()\" class=\"city-guide\">\n      <ion-icon name=\"ios-map\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button (click)=\"goToPlanList()\" tab=\"plan-list\" class=\"plan-list\">\n      <div class=\"far fa-calendar\"></div>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ion-tab-bar {\n    border: none;\n}\n\nion-tab-button {\n    // border-top: solid 1px;\n    border-color: #989aa2;\n    background: white;\n} */\n/* .no-border {\n    border: none;\n    background: transparent;\n    \n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    height: 50%;\n    // background: radial-gradient(at top,rgba(252, 248, 70, 0),rgba(252, 248, 70, 0) 18%,rgba(252, 248, 70, 0),rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));\n    z-index: 1;\n}\n\n.no-border2 {\n    border: none;\n    \n    bottom: -20px;\n    left: 0px;\n    width: 100%;\n    height: 50%;\n    \n    z-index: 1;\n    position: absolute;\n    @media (max-width: 414px) {\n        bottom: 0px;\n        width: 86px;\n        left: calc(50% - 43px);\n        background: radial-gradient(at top, rgba(252, 248, 70, 0), rgba(252, 248, 70, 0) 63%, white 1%);\n    }\n    @media (max-width: 411px) {\n        bottom: 0px;\n        width: 90px;\n        left: calc(50% - 45px);\n        background: radial-gradient(at top, rgba(252, 248, 70, 0), rgba(252, 248, 70, 0) 62%, white 1%);\n    }\n    @media (max-width: 375px) {\n        bottom: 0px;\n        width: 76px;\n        left: calc(50% - 38px);\n        background: radial-gradient(at top, rgba(252, 248, 70, 0), rgba(252, 248, 70, 0) 68%, white 1%);\n    }\n    @media (max-width: 360px) {\n        bottom: 0px;\n        width: 75px;\n        left: calc(50% - 39px);\n        background: radial-gradient(at top, rgba(252, 248, 70, 0), rgba(252, 248, 70, 0) 61%, white 1%);\n    }\n    @media (max-width: 320px) {\n        bottom: 0px;\n        width: 66px;\n        left: calc(50% - 33px);\n        background: radial-gradient(at top,rgba(252, 248, 70, 0),rgba(252, 248, 70, 0) 64%,white 1%);\n    }\n}\n\n.notifications-tab-button {\n    border-top-right-radius: 100px;\n    border-top: solid 1px;\n    border-color: #989aa2;\n    \n    @media (max-width: 414px) {\n        border-top-right-radius: 20px;\n        border-top: solid 1px;\n        border-color: #989aa2;\n    }\n}\n\n.plus-tab-button {\n    border-top-left-radius: 100px;\n    border-top: solid 1px;\n    border-color: #989aa2;\n    \n    @media (max-width: 414px) {\n        border-top-left-radius: 20px;\n        border-top: solid 1px;\n        border-color: #989aa2;\n    }\n}\n\nion-fab {\n    transform: translateX(-8%);\n    border-bottom: solid 1px;\n    border-radius: 76px;\n    position: absolute;\n    bottom: -42px;\n    padding: 5px;\n\n    @media (max-width: 414px) {\n        transform: translateX(-8%);\n        border-bottom: solid 1px;\n        border-radius: 84px;\n        position: absolute;\n        bottom: -45px;\n        padding: 15px;\n        left: 198px;\n    }\n\n    @media (max-width: 411px) {\n        transform: translateX(-8%);\n        border-bottom: solid 1px;\n        border-radius: 84px;\n        position: absolute;\n        bottom: -12px;\n        padding: 16px;\n        left: 197px;\n    }\n\n    @media (max-width: 375px) {\n        transform: translateX(-8%);\n        border-bottom: solid 1px;\n        border-radius: 76px;\n        position: absolute;\n        bottom: -48px;\n        padding: 10px;\n        left: 184px;\n    }\n\n    @media (max-width: 360px) {\n        transform: translateX(-8%);\n        border-bottom: solid 1px;\n        border-radius: 76px;\n        position: absolute;\n        bottom: -10px;\n        padding: 9px;\n        left: 176px;\n    }\n\n    @media (max-width: 320px) {\n        transform: translateX(-8%);\n        border-bottom: solid 1px;\n        border-radius: 76px;\n        position: absolute;\n        bottom: -42px;\n        padding: 5px;\n        left: 160px;\n    }\n} */\n.icon-tab {\n  font-size: 25px; }\nion-fab-list ion-fab-button {\n  --color: white;\n  font-size: 15px; }\nion-fab-list ion-fab-button.plan-list {\n  --background: #009CD7; }\nion-fab-list ion-fab-button.city-guide {\n  --background: #05A754; }\nion-fab-list ion-fab-button.city-agenda {\n  --background: #EC71A8; }\nion-fab-list ion-fab-button.offer-discount {\n  --background: #F5AB28; }\n.ios-fab {\n  margin-bottom: 45px; }\n.android-fab {\n  margin-bottom: 15px; }\n/* .mtabs {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    color: rgb(140, 140, 140);\n    background-color: rgba(255, 255, 255, 0);\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQ1FHO0FERUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQ3NJRztBREdIO0VBQ0ksZUFBZSxFQUFBO0FBR25CO0VBQ0ksY0FBUTtFQUNSLGVBQWUsRUFBQTtBQUduQjtFQUNJLHFCQUFhLEVBQUE7QUFHakI7RUFDSSxxQkFBYSxFQUFBO0FBR2pCO0VBQ0kscUJBQWEsRUFBQTtBQUdqQjtFQUNJLHFCQUFhLEVBQUE7QUFHakI7RUFDSSxtQkFBa0IsRUFBQTtBQUd0QjtFQUNJLG1CQUFrQixFQUFBO0FBSXRCOzs7Ozs7Ozs7R0NGRyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpb24tdGFiLWJhciB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgLy8gYm9yZGVyLXRvcDogc29saWQgMXB4O1xuICAgIGJvcmRlci1jb2xvcjogIzk4OWFhMjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0gKi9cblxuLyogLm5vLWJvcmRlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIFxuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICAvLyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wLHJnYmEoMjUyLCAyNDgsIDcwLCAwKSxyZ2JhKDI1MiwgMjQ4LCA3MCwgMCkgMTglLHJnYmEoMjUyLCAyNDgsIDcwLCAwKSxyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubm8tYm9yZGVyMiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIFxuICAgIGJvdHRvbTogLTIwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIFxuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgd2lkdGg6IDg2cHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDNweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AsIHJnYmEoMjUyLCAyNDgsIDcwLCAwKSwgcmdiYSgyNTIsIDI0OCwgNzAsIDApIDYzJSwgd2hpdGUgMSUpO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDExcHgpIHtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDQ1cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wLCByZ2JhKDI1MiwgMjQ4LCA3MCwgMCksIHJnYmEoMjUyLCAyNDgsIDcwLCAwKSA2MiUsIHdoaXRlIDElKTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB3aWR0aDogNzZweDtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAzOHB4KTtcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IHRvcCwgcmdiYSgyNTIsIDI0OCwgNzAsIDApLCByZ2JhKDI1MiwgMjQ4LCA3MCwgMCkgNjglLCB3aGl0ZSAxJSk7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzlweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AsIHJnYmEoMjUyLCAyNDgsIDcwLCAwKSwgcmdiYSgyNTIsIDI0OCwgNzAsIDApIDYxJSwgd2hpdGUgMSUpO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDMzcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wLHJnYmEoMjUyLCAyNDgsIDcwLCAwKSxyZ2JhKDI1MiwgMjQ4LCA3MCwgMCkgNjQlLHdoaXRlIDElKTtcbiAgICB9XG59XG5cbi5ub3RpZmljYXRpb25zLXRhYi1idXR0b24ge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTg5YWEyO1xuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4O1xuICAgICAgICBib3JkZXItY29sb3I6ICM5ODlhYTI7XG4gICAgfVxufVxuXG4ucGx1cy10YWItYnV0dG9uIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTg5YWEyO1xuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzk4OWFhMjtcbiAgICB9XG59XG5cbmlvbi1mYWIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOCUpO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA3NnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC00MnB4O1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTglKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4NHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTQ1cHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGxlZnQ6IDE5OHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTFweCkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTglKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4NHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE5N3B4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTglKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3NnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTQ4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGxlZnQ6IDE4NHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTglKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3NnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgbGVmdDogMTc2cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOCUpO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDc2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtNDJweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBsZWZ0OiAxNjBweDtcbiAgICB9XG59ICovXG5cbi5pY29uLXRhYntcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1mYWItbGlzdCBpb24tZmFiLWJ1dHRvbntcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1mYWItbGlzdCBpb24tZmFiLWJ1dHRvbi5wbGFuLWxpc3R7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5Q0Q3O1xufVxuXG5pb24tZmFiLWxpc3QgaW9uLWZhYi1idXR0b24uY2l0eS1ndWlkZXtcbiAgICAtLWJhY2tncm91bmQ6ICMwNUE3NTQ7XG59XG5cbmlvbi1mYWItbGlzdCBpb24tZmFiLWJ1dHRvbi5jaXR5LWFnZW5kYXtcbiAgICAtLWJhY2tncm91bmQ6ICNFQzcxQTg7XG59XG5cbmlvbi1mYWItbGlzdCBpb24tZmFiLWJ1dHRvbi5vZmZlci1kaXNjb3VudHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNUFCMjg7XG59XG5cbi5pb3MtZmFie1xuICAgIG1hcmdpbi1ib3R0b206NDVweDtcbn1cblxuLmFuZHJvaWQtZmFie1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuXG4vKiAubXRhYnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDE0MCwgMTQwLCAxNDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59ICovIiwiLyogaW9uLXRhYi1iYXIge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAgIC8vIGJvcmRlci10b3A6IHNvbGlkIDFweDtcbiAgICBib3JkZXItY29sb3I6ICM5ODlhYTI7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59ICovXG4vKiAubm8tYm9yZGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIC8vIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AscmdiYSgyNTIsIDI0OCwgNzAsIDApLHJnYmEoMjUyLCAyNDgsIDcwLCAwKSAxOCUscmdiYSgyNTIsIDI0OCwgNzAsIDApLHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5uby1ib3JkZXIyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgXG4gICAgYm90dG9tOiAtMjBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgXG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB3aWR0aDogODZweDtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA0M3B4KTtcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IHRvcCwgcmdiYSgyNTIsIDI0OCwgNzAsIDApLCByZ2JhKDI1MiwgMjQ4LCA3MCwgMCkgNjMlLCB3aGl0ZSAxJSk7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTFweCkge1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDVweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AsIHJnYmEoMjUyLCAyNDgsIDcwLCAwKSwgcmdiYSgyNTIsIDI0OCwgNzAsIDApIDYyJSwgd2hpdGUgMSUpO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHdpZHRoOiA3NnB4O1xuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDM4cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wLCByZ2JhKDI1MiwgMjQ4LCA3MCwgMCksIHJnYmEoMjUyLCAyNDgsIDcwLCAwKSA2OCUsIHdoaXRlIDElKTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAzOXB4KTtcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IHRvcCwgcmdiYSgyNTIsIDI0OCwgNzAsIDApLCByZ2JhKDI1MiwgMjQ4LCA3MCwgMCkgNjElLCB3aGl0ZSAxJSk7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzNweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AscmdiYSgyNTIsIDI0OCwgNzAsIDApLHJnYmEoMjUyLCAyNDgsIDcwLCAwKSA2NCUsd2hpdGUgMSUpO1xuICAgIH1cbn1cblxuLm5vdGlmaWNhdGlvbnMtdGFiLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweDtcbiAgICBib3JkZXItY29sb3I6ICM5ODlhYTI7XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzk4OWFhMjtcbiAgICB9XG59XG5cbi5wbHVzLXRhYi1idXR0b24ge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweDtcbiAgICBib3JkZXItY29sb3I6ICM5ODlhYTI7XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTg5YWEyO1xuICAgIH1cbn1cblxuaW9uLWZhYiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04JSk7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDc2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQycHg7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOCUpO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDg0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtNDVweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbGVmdDogMTk4cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQxMXB4KSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOCUpO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDg0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgbGVmdDogMTk3cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOCUpO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDc2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtNDhweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbGVmdDogMTg0cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOCUpO1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDc2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgICBsZWZ0OiAxNzZweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04JSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNzZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC00MnB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGxlZnQ6IDE2MHB4O1xuICAgIH1cbn0gKi9cbi5pY29uLXRhYiB7XG4gIGZvbnQtc2l6ZTogMjVweDsgfVxuXG5pb24tZmFiLWxpc3QgaW9uLWZhYi1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbmlvbi1mYWItbGlzdCBpb24tZmFiLWJ1dHRvbi5wbGFuLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6ICMwMDlDRDc7IH1cblxuaW9uLWZhYi1saXN0IGlvbi1mYWItYnV0dG9uLmNpdHktZ3VpZGUge1xuICAtLWJhY2tncm91bmQ6ICMwNUE3NTQ7IH1cblxuaW9uLWZhYi1saXN0IGlvbi1mYWItYnV0dG9uLmNpdHktYWdlbmRhIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRUM3MUE4OyB9XG5cbmlvbi1mYWItbGlzdCBpb24tZmFiLWJ1dHRvbi5vZmZlci1kaXNjb3VudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y1QUIyODsgfVxuXG4uaW9zLWZhYiB7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7IH1cblxuLmFuZHJvaWQtZmFiIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuXG4vKiAubXRhYnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDE0MCwgMTQwLCAxNDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var TabsPage = /** @class */ (function () {
    function TabsPage(router, _globalServ, actionSheetController, storage) {
        this.router = router;
        this._globalServ = _globalServ;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage.prototype.goToOffersAndDiscount = function () {
        this.router.navigate(['tabs/offers-discounts-list'], {});
    };
    TabsPage.prototype.goToCityAgenda = function () {
        this.router.navigate(['tabs/city-agenda-list'], {});
    };
    TabsPage.prototype.goToCityGuide = function () {
        this.router.navigate(['tabs/city-guide-list'], {});
    };
    TabsPage.prototype.goToPlanList = function () {
        this.router.navigate(['tabs/plan-list'], {});
    };
    TabsPage.prototype.showMore = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var titleLabel, cancelLabel, planLabel, groupLabel, actionSheetForCancel, actionSheetForPlan_group;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._globalServ.language == 'en') {
                            titleLabel = 'Create';
                            cancelLabel = 'Cancel';
                            planLabel = 'A Plan';
                            groupLabel = 'A Group';
                        }
                        if (this._globalServ.language == 'es') {
                            titleLabel = 'Crear';
                            cancelLabel = 'Cancelar';
                            planLabel = 'Un Plan';
                            groupLabel = 'Un Grupo';
                        }
                        return [4 /*yield*/, this.actionSheetController.create({
                                cssClass: 'actionsheet2',
                                buttons: [{
                                        text: cancelLabel,
                                        handler: function () {
                                            actionSheetForPlan_group.dismiss();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheetForCancel = _a.sent();
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: titleLabel,
                                cssClass: 'actionSheetForPlan_group',
                                buttons: [{
                                        text: planLabel,
                                        handler: function () {
                                            actionSheetForCancel.dismiss();
                                            _this._globalServ.planImagePath = null;
                                            _this._globalServ.planImagePost = null;
                                            _this.storage.set('plan-create-seats', -1);
                                            _this.storage.set('plan-create-groups', -1);
                                            _this.router.navigate(['plan-create'], {});
                                        }
                                    }, {
                                        text: groupLabel,
                                        handler: function () {
                                            actionSheetForCancel.dismiss();
                                            _this.router.navigate(['group-create'], {});
                                            _this.storage.set('group-create-category', []);
                                            _this.storage.set('group-create-settings', -1); // null or -1
                                            _this.storage.set('group-create-members', []);
                                            _this._globalServ.groupImagePath = null;
                                            _this._globalServ.groupImagePost = null;
                                        }
                                    }
                                ]
                            })];
                    case 2:
                        actionSheetForPlan_group = _a.sent();
                        actionSheetForCancel.present();
                        actionSheetForPlan_group.present();
                        actionSheetForPlan_group.onDidDismiss().then(function () {
                            actionSheetForCancel.dismiss();
                        });
                        actionSheetForCancel.onDidDismiss().then(function () {
                            actionSheetForPlan_group.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/pages/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map