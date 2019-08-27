(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-image-cropper-image-cropper-module"],{

/***/ "./src/app/pages/image-cropper/image-cropper.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/image-cropper/image-cropper.module.ts ***!
  \*************************************************************/
/*! exports provided: ImageCropperPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperPageModule", function() { return ImageCropperPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_cropper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-cropper.page */ "./src/app/pages/image-cropper/image-cropper.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _image_cropper_page__WEBPACK_IMPORTED_MODULE_6__["ImageCropperPage"]
    }
];
var ImageCropperPageModule = /** @class */ (function () {
    function ImageCropperPageModule() {
    }
    ImageCropperPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_image_cropper_page__WEBPACK_IMPORTED_MODULE_6__["ImageCropperPage"]]
        })
    ], ImageCropperPageModule);
    return ImageCropperPageModule;
}());



/***/ }),

/***/ "./src/app/pages/image-cropper/image-cropper.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/image-cropper/image-cropper.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col (click)=\"cancel()\" class=\"column-left-title-cropp blue-text\" size=\"3\">\n        {{ 'image-cropper.cancel' | translate }}\n      </ion-col>\n      <ion-col class=\"column-center-title-cropp\" size=\"6\">\n        {{ 'image-cropper.moveAndScale' | translate }}\n      </ion-col>\n      <ion-col (click)=\"save()\" class=\"column-right-title-cropp blue-text\" size=\"3\">\n        {{ 'image-cropper.save' | translate }}\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n  <div class=\"outer box-center-full\">\n    <div class=\"middle\">\n      <div class=\"inner\">\n        <img *ngIf=\"pathImage != null\" (click)=\"cropFunc()\" [src]=\"pathImage\">\n        <div class=\"box-center-full btns-box\">\n          <span (click)=\"selectFile()\" class=\"fas fa-upload icon-upload\"></span>\n          <span *ngIf=\"pathImageCropper != null\" (click)=\"cropFunc()\" class=\"fas fa-cut icon-cut\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/image-cropper/image-cropper.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/image-cropper/image-cropper.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column-left-title-cropp {\n  text-align: left;\n  padding-top: 25px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  font-size: 16pt;\n  line-height: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.column-center-title-cropp {\n  text-align: center;\n  line-height: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-top: 25px;\n  padding-right: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  color: white;\n  font-size: 18pt; }\n\n.column-right-title-cropp {\n  text-align: right;\n  padding-top: 25px;\n  padding-right: 15px;\n  padding-bottom: 15px;\n  font-size: 16pt;\n  line-height: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\nion-toolbar {\n  height: 75px;\n  position: fixed;\n  --background: black; }\n\n.separator {\n  margin-top: 75px; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\n* {\n  --background: black; }\n\n.btns-box {\n  margin-top: 25px; }\n\n.outer {\n  display: table;\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\n.middle {\n  display: table-cell;\n  vertical-align: middle; }\n\n.inner {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%; }\n\n.icon-upload {\n  color: white;\n  font-size: 30px; }\n\n.icon-cut {\n  color: white;\n  margin-left: 45px;\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FrNDcvaWVhcHAvc3JjL2FwcC9wYWdlcy9pbWFnZS1jcm9wcGVyL2ltYWdlLWNyb3BwZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUVqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBYyxFQUFBOztBQUloQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUVwQixlQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBYSxFQUFBOztBQUlqQjtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBSVg7RUFDRSxtQkFBYSxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlLWNyb3BwZXIvaW1hZ2UtY3JvcHBlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uLWxlZnQtdGl0bGUtY3JvcHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgLy9wYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6MTZwdDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAuY29sdW1uLWNlbnRlci10aXRsZS1jcm9wcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOjE4cHQ7XG4gICAgLy9saW5lLWhlaWdodDogMjFwdDtcbiAgfVxuXG4gIC5jb2x1bW4tcmlnaHQtdGl0bGUtY3JvcHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOjE2cHQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgaW9uLXRvb2xiYXJ7XG4gICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG5cblxuICAuc2VwYXJhdG9ye1xuICAgICAgbWFyZ2luLXRvcDogNzVweDtcbiAgfVxuXG5cbiAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuXG4gICp7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuXG4gIC5idG5zLWJveHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cblxuICAub3V0ZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWlkZGxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pY29uLXVwbG9hZHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLmljb24tY3V0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/image-cropper/image-cropper.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/image-cropper/image-cropper.page.ts ***!
  \***********************************************************/
/*! exports provided: ImageCropperPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperPage", function() { return ImageCropperPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");








//import { Platform } from '@ionic/angular';
//import { Base64 } from '@ionic-native/base64/ngx';



//import { File } from '@ionic-native/file';


var ImageCropperPage = /** @class */ (function () {
    function ImageCropperPage(imagePicker, crop, webview, location, router, _globalServ, 
    //private platform: Platform,
    //private base64: Base64,
    sanitizer, actRoute, transfer, 
    //private file: File,
    camera) {
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.webview = webview;
        this.location = location;
        this.router = router;
        this._globalServ = _globalServ;
        this.sanitizer = sanitizer;
        this.actRoute = actRoute;
        this.transfer = transfer;
        this.camera = camera;
        if (this.actRoute.snapshot.queryParams.data != null) {
            var getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
            this.profileBool = getParams.profile;
            this.planBool = getParams.plan;
            this.groupBool = getParams.group;
        }
    }
    ImageCropperPage.prototype.ngOnInit = function () {
    };
    ImageCropperPage.prototype.selectFile = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: 2
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.pathImage = _this.sanitizer.bypassSecurityTrustUrl(_this.webview.convertFileSrc(imageData));
            // this.pathImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
            _this.pathImageCropper = imageData;
            _this.pathImagePost = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    ImageCropperPage.prototype.cropFunc = function () {
        var _this = this;
        this.crop.crop(this.pathImageCropper, { quality: 75 })
            .then(function (newImage) {
            _this.pathImage = _this.sanitizer.bypassSecurityTrustUrl(_this.webview.convertFileSrc(newImage));
            // this.pathImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + newImage);
            _this.pathImageCropper = newImage;
            _this.pathImagePost = newImage;
        }, function (error) { return console.error('Error cropping image', error); });
    };
    ImageCropperPage.prototype.save = function () {
        if (this.profileBool == true) {
            this._globalServ.profileImagePath = this.pathImage;
            var navigationExtras = {
                queryParams: {
                    data: JSON.stringify({})
                }, replaceUrl: true
            };
            this.router.navigate(['profile'], navigationExtras);
            var fileTransfer = this.transfer.create();
            var filename = 'profileImage_' + Math.random() * 100000000000000000 + '.jpg';
            var options = {
                fileKey: 'image',
                fileName: filename,
            };
            fileTransfer.upload(this.pathImagePost, _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl + '/app-user-set-profile-image/' + this._globalServ.idUser, options)
                .then(function (data) {
                // success
                console.log('success', data);
            }, function (err) {
                // error
                console.log('error', err);
            });
        }
        if (this.planBool == true) {
            this._globalServ.planImagePath = this.pathImage;
            this._globalServ.planImagePost = this.pathImagePost;
            this.location.back();
        }
        if (this.groupBool == true) {
            this._globalServ.groupImagePath = this.pathImage;
            this._globalServ.groupImagePost = this.pathImagePost;
            this.location.back();
        }
    };
    ImageCropperPage.prototype.cancel = function () {
        this._globalServ.profileImagePath = null;
        this.location.back();
    };
    ImageCropperPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-cropper',
            template: __webpack_require__(/*! ./image-cropper.page.html */ "./src/app/pages/image-cropper/image-cropper.page.html"),
            styles: [__webpack_require__(/*! ./image-cropper.page.scss */ "./src/app/pages/image-cropper/image-cropper.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"]])
    ], ImageCropperPage);
    return ImageCropperPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-image-cropper-image-cropper-module.js.map