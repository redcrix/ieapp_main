import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { GroupService } from '../../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { get } from 'lodash';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-group-create-category',
  templateUrl: './group-create-category.page.html',
  styleUrls: ['./group-create-category.page.scss'],
})
export class GroupCreateCategoryPage implements OnInit {

  id: any;
  url: any = environment.apiUrl;
  isValidGroupImage: any = true;
  groupCreateCategory: any = [];

  innerWidth: any;
  math = Math;

  groupSuperCategoryIds: any = [];

  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
    private storage: Storage
  ) {
    /* if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
      console.log('id: ', this.id);
    } */
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    this.storage.get('group-create-category').then((val) => {
      this.groupSuperCategoryIds = val;
      this.getAllCategories();
    });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  getAllCategories() {
    this._groupServ.getGroupCategories().subscribe(data => {
      this.groupCreateCategory = data;
      this.groupCreateCategory = this.groupCreateCategory.map(o => {
        let value = 0;
        if (this.groupSuperCategoryIds.includes(o.id)) {
          value = 1;
        }
        return {
          ...o,
          value
        }
      });
      console.log('this.groupGroupCreateCategory: ', this.groupCreateCategory);
    }, err => { 
      console.log('catetgories err: ', err);
    })
  }

  async changeStatus(idx) {
    if (this.groupCreateCategory.length > 0) {
      this.groupCreateCategory[idx].value = (this.groupCreateCategory[idx].value + 1) % 2;
      this.groupSuperCategoryIds = this.groupCreateCategory.filter(o => o.value === 1).map(o => {
        return o.id
      });
      if (this.groupSuperCategoryIds.length > 3) {
        const toast = await this.toastController.create({
          message: `It's limited to choose 3 categories.`,
          duration: 2000
        });
        toast.present();
      }
      this.storage.set('group-create-category', this.groupSuperCategoryIds);
    }
  }

}
