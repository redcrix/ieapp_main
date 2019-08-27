import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Location } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../services/global.service';
//import { Platform } from '@ionic/angular';
//import { Base64 } from '@ionic-native/base64/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
//import { File } from '@ionic-native/file';
import { environment } from '../../../environments/environment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.page.html',
  styleUrls: ['./image-cropper.page.scss'],
})
export class ImageCropperPage implements OnInit {

  pathImage: any;
  pathImageCropper: any;
  pathImagePost: any;
  profileBool: boolean;
  planBool: boolean;
  groupBool: boolean;

  constructor(
    private imagePicker: ImagePicker,
    private crop: Crop,
    private webview: WebView,
    private location: Location,
    private router: Router,
    private _globalServ: GlobalService,
    //private platform: Platform,
    //private base64: Base64,
    private sanitizer: DomSanitizer,
    private actRoute: ActivatedRoute,
    private transfer: FileTransfer,
    //private file: File,
    private camera: Camera,
  ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.profileBool = getParams.profile;
      this.planBool = getParams.plan;
      this.groupBool = getParams.group;
    }
  }

  ngOnInit() {

  }

  selectFile() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 2
    }

    this.camera.getPicture(options).then((imageData) => {
      this.pathImage = this.sanitizer.bypassSecurityTrustUrl(this.webview.convertFileSrc(imageData));
      // this.pathImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
      this.pathImageCropper = imageData;
      this.pathImagePost = imageData;
    }, (err) => {
      console.log(err);
    });
  }


  cropFunc() {
    this.crop.crop(this.pathImageCropper, { quality: 75 })
      .then(
        newImage => {
          this.pathImage = this.sanitizer.bypassSecurityTrustUrl(this.webview.convertFileSrc(newImage));
          // this.pathImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + newImage);
          this.pathImageCropper = newImage;
          this.pathImagePost = newImage;
        },
        error => console.error('Error cropping image', error)
      );
  }

  save() {
    if (this.profileBool == true) {
      this._globalServ.profileImagePath = this.pathImage;
      let navigationExtras: NavigationExtras = {
        queryParams: {
          data: JSON.stringify({})
        }, replaceUrl: true
      };
      this.router.navigate(['profile'], navigationExtras);

      const fileTransfer: FileTransferObject = this.transfer.create();

      let filename = 'profileImage_' + Math.random()*100000000000000000 + '.jpg';

      let options: FileUploadOptions = {
        fileKey: 'image',
        fileName: filename,
      }

      fileTransfer.upload(this.pathImagePost, environment.apiUrl + '/app-user-set-profile-image/' + this._globalServ.idUser, options)
        .then((data) => {
          // success
          console.log('success', data);
        }, (err) => {
          // error
          console.log('error', err);
        })
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
  }

  cancel() {
    this._globalServ.profileImagePath = null;
    this.location.back();
  }

}
