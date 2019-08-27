import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { get } from 'lodash';
import { PlanService } from 'src/app/services/plan.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-plan-create',
  templateUrl: './plan-create.page.html',
  styleUrls: ['./plan-create.page.scss'],
})
export class PlanCreatePage implements OnInit {

  title: any = '';
  location: any = '';
  planDate: any;
  limitDate: any;
  details: any = '';
  myForm: FormGroup;
  avalibleSeats: any;
  post: boolean;
  okIdsCategories: boolean;
  createdBy: any = 1;
  groupId: any = null;
  profile: any = {};
  pageTitleName: any = false;

  constructor(
    private datePicker: DatePicker,
    private camera: Camera,
    private sanitizer: DomSanitizer,
    private webview: WebView,
    private router: Router,
    private _globalServ: GlobalService,
    fb: FormBuilder,
    private transfer: FileTransfer,
    private locationUrl: Location,
    private nativeGeocoder: NativeGeocoder,
    private storage: Storage,
    private actRoute: ActivatedRoute,
    private _userServ: UserService,
    private toastController: ToastController,
    private _planServ: PlanService
    ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.groupId = getParams.groupId;
      console.log('groupId: ', this.groupId);
    }

    this.myForm = fb.group({
      'title': ['', Validators.compose([Validators.required])],
      'location': ['', Validators.compose([Validators.required])],
      'details': ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this._globalServ.idsCategories = null;
  }

  logScrolling(e){
    if(e.detail.scrollTop>50){
      this.pageTitleName = true;
    } else {
      this.pageTitleName = false;
    }
  }

  ionViewDidEnter() {
    console.log('hey');

    this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(data => {
      this.profile = get(data, '[0]', {});
    }, err => {
      console.log('err public profile: ', err);
    });

    this.storage.get('plan-create-seats').then((val) => {
      this.avalibleSeats = val;
    });
    this.storage.get('plan-create-groups').then((val) => {
      if (val > 0 || val === -2) { // -2: Me, 0> : selected from group list
        this.groupId = val;
      }
    });
  }

  getPlanCreatedBy() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'groupId': this.groupId })
      }
    };
    this.router.navigate(['plan-create-createdby'], navigationExtras);
  }

  getPlanDate() {
    let date;
    if (this.planDate == null) {
      date = new Date();
    } else {
      date = this.planDate;
    }
    this.datePicker.show({
      date: new Date(date),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      //minDate:new Date()
      allowFutureDates: true,
      allowOldDates: false
    }).then(
    date => {
      console.log('Got date: ', date);
      this.planDate = date;
    },
    err => {
      console.log('Error occurred while getting date: ', err);
    }
    )
  }

  getLimitDate() {
    let date;
    if (this.limitDate == null) {
      date = new Date();
    } else {
      date = this.limitDate;
    }
    this.datePicker.show({
      date: new Date(date),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      allowFutureDates: true,
      allowOldDates: false
    }).then(
    date => {
      console.log('Got date: ', date);
      this.limitDate = date;
    },
    err => {
      console.log('Error occurred while getting date: ', err);
    }
    )
  }

  getavalibleSeats() {
    this.router.navigate(['plan-create-seats']);
  }

  goToselectImage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'plan': true })
      }
    };
    this.router.navigate(['image-cropper'], navigationExtras);
  }

  getSupercategory() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'select': true })
      }
    };
    this.router.navigate(['preferences'], navigationExtras);
  }

  async showAlert(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  doCreatePlan(endpoint, params) {
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
    const fileTransfer: FileTransferObject = this.transfer.create();
    let filename = 'planImage_' + Math.random()*100000000000000000;
    let options: FileUploadOptions = {
      fileKey: 'image',
      fileName: filename + '.jpg',
      params: params,
    }

    fileTransfer.upload(this._globalServ.planImagePost, environment.apiUrl + `/${endpoint}`, options)
    .then((data) => {
      this.showAlert('Created a plan successfully');
      console.log('<<<<created plan successfully !!!>>>>');

      this._globalServ.planImagePath = null;
      this._globalServ.planImagePost = null;
      this.storage.set('plan-create-seats', -1);
      this.storage.set('plan-create-groups', -1);

      this.router.navigate(['plan-create-success']);
    }, (err) => {
      // error
      console.log('error', err);
      this.showAlert(err.message);
    });

  }

  save(value: any) {
    console.log('here:  ', this.groupId);

    this.post = true;
    if (this._globalServ.idsCategories != null) {
      if (this._globalServ.idsCategories.length > 0) {
        this.okIdsCategories = true;
      } else {
        this.okIdsCategories = false;
      }
    } else {
      this.okIdsCategories = false;
    }

    console.log('plan date: ', this.planDate);
    console.log('this._globalServ.planImagePost: ', this._globalServ.planImagePost);
    console.log('this.okIdsCategories:  ', this.okIdsCategories);
    console.log('this.myForm.valid: ', this.myForm.valid);

    if (this.myForm.valid && this._globalServ.planImagePost != null && this.planDate != null && this.okIdsCategories == true) {

      console.log('save step 1');
      let optionsGeo: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 1
      };
      this.nativeGeocoder.forwardGeocode(value.location, optionsGeo)
      .then((result: NativeGeocoderResult[]) => {
        console.log('save step 2');
        console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
        const fileTransfer: FileTransferObject = this.transfer.create();
        let options = {};
        let endpoint = '';

        if (this.groupId === null || this.groupId < 0) { // use app-add-plan
          options = {
            'fk_ceu_user_id': this._globalServ.idUser,
            'ceu_supercategories_ids': this._globalServ.idsCategories.toString(),
            'title': value.title,
            'description': value.details,
            'plan_date': this.planDate,
            'address': value.location,
            'latitude': String(result[0].latitude),
            'longitude':  String(result[0].longitude)
          };
          endpoint = 'app-add-plan';
        } else { // use add-group-plan
          if (this.groupId > 0) {
            options = {
              'fk_user_id': this._globalServ.idUser,
              'email': this.profile.email,
              'seats': this.avalibleSeats,
              'group_plan_supercategory_ids': this._globalServ.idsCategories.toString(),
              'title': value.title,
              'description': value.details,
              'plan_date': this.planDate,
              'address': value.location,
              'latitude': String(result[0].latitude),
              'longitude':  String(result[0].longitude),
              'fk_group_id': this.groupId
            }
          } else {
            options = {
              'fk_user_id': this._globalServ.idUser,
              'email': this.profile.email,
              'seats': this.avalibleSeats,
              'group_plan_supercategory_ids': this._globalServ.idsCategories.toString(),
              'title': value.title,
              'description': value.details,
              'plan_date': this.planDate,
              'address': value.location,
              'latitude': String(result[0].latitude),
              'longitude':  String(result[0].longitude)
            }
          }
          endpoint = 'add-group-plan';
        }
        this.doCreatePlan(endpoint, options);
      })
      .catch((error: any) => console.log(error));
    }
  }

}
