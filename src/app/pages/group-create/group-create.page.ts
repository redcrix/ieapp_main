import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { get } from 'lodash';
import { environment } from '../../../environments/environment';
import { GroupService } from 'src/app/services/group.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.page.html',
  styleUrls: ['./group-create.page.scss'],
})
export class GroupCreatePage implements OnInit {

  chosenImage: any = null;
  title: any = '';
  description: any = '';
  groupCreateSettingsValue: any = '';
  pageTitleName: any = false;

  constructor(
    private router: Router,
    private _globalServ: GlobalService,
    private storage: Storage,
    private toastController: ToastController,
    private _userServ: UserService,
    private _groupServ: GroupService,
    private transfer: FileTransfer) { }

  ngOnInit() {
  }

  logScrolling(e){
    if(e.detail.scrollTop>50){
      this.pageTitleName = true;
    } else {
      this.pageTitleName = false;
    }
  }

  ionViewDidEnter() {
    console.log('this._globalServ.groupImagePath:  ', this._globalServ.groupImagePath);
    this.chosenImage = this._globalServ.groupImagePath;
    this.getGroupSettings();
  }

  goToUpload() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'group': true })
      }
    };
    this.router.navigate(['image-cropper'], navigationExtras)
  }

  createCategory() {
    this.router.navigate(['group-create-category']);
  }

  pickSettings() {
    this.router.navigate(['group-create-settings']);
  }

  invitePeople() {
    this.router.navigate(['group-create-invite']);
  }

  async showAlert(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  doCreateGroup(params) {
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
    const fileTransfer: FileTransferObject = this.transfer.create();
    let filename = 'groupImage_' + Math.random()*100000000000000000;
    let options: FileUploadOptions = {
      fileKey: 'image',
      fileName: filename + '.jpg',
      params: params,
    }

    fileTransfer.upload(this._globalServ.groupImagePost, environment.apiUrl + '/add-group', options)
    .then((data) => {
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
    }, (err) => {
      // error
      console.log('error', err);
      this.showAlert(err.message);
    });
  }

  getGroupSettings() {
    this._groupServ.getGroupSettings().subscribe(data => {
      console.log('group settings data: ', data);
      let groupSettings = [];
      groupSettings = JSON.parse(JSON.stringify(data));
      this.storage.get('group-create-settings').then((groupSettingsVal) => {
        console.log('groupSettingsVal--- : ', groupSettingsVal);
        if (groupSettingsVal > 0) {
          this.groupCreateSettingsValue = groupSettings.filter(o => o.id === groupSettingsVal)[0].name;
        } else {
          this.groupCreateSettingsValue = '';
        }
      });
    }, err => {
      console.log('group settings err: ', err);
    })
  }

  save() {
    let noticeMsg = '';
    let group_supercategory_ids = '';
    let group_settings_ids = '';
    let group_member_ids = '';
    
    let email;
    let fk_user_id;

    this._userServ.getPublicProfile(this._globalServ.idUser).subscribe(data => {
      let profile = get(data, '[0]', {});
      email = get(profile, 'email', '');
      fk_user_id = this._globalServ.idUser;
      
      if (this._globalServ.groupImagePath !== null) {
        this.storage.get('group-create-category').then((groupSuperCategoryVal) => {
          if (groupSuperCategoryVal.length <= 3 && groupSuperCategoryVal.length !== 0) {
            group_supercategory_ids = groupSuperCategoryVal.toString();
            
            this.storage.get('group-create-settings').then((groupSettingsVal) => {
              if (groupSettingsVal > 0) {
                group_settings_ids = groupSettingsVal.toString();
                
                this.storage.get('group-create-members').then((groupMemberVal) => {
                  if (groupMemberVal.length > 0) {
                    group_member_ids = groupMemberVal.toString();
                    
                    if (this.title !== '') {
                      if (this.description !== '') {
                        let params = {
                          fk_user_id,
                          title: this.title,
                          description: this.description,
                          group_settings_ids,
                          group_supercategory_ids,
                          group_member_ids,
                          email
                        }
                        this.doCreateGroup(params);
                      } else {
                        this.showAlert('Please fill in the group description');
                      }
                    } else {
                      this.showAlert('Please fill in the group title');
                    }
                  } else {
                    this.showAlert('Please choose group members');
                  }
                });
              } else {
                this.showAlert('Please choose group setting');
              }
            });
          } else {
            this.showAlert('It is limited to choose 3 categories or Please choose categories');
          }
        });
      } else {
        this.showAlert('Please upload group image');
      }

    }, err => {
      console.log('err public profile: ', err);
    });
  }

}
