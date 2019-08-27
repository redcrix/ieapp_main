import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PreferencesService } from '../../services/preferences.service';
import { GlobalService } from '../../services/global.service';
import { Location } from '@angular/common';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  showText: boolean;
  showTitle: boolean;
  save: boolean;
  selectBtn: boolean;

  getSupercategories: any;
  getSupCatById: any;
  idsSupCat: any[] = [];
  fromSetting: any;
  checkedAll:boolean;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private _preferencesServ: PreferencesService,
    private _globalServ: GlobalService,
    private location: Location,
  ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.showText = getParams.showText;
      this.showTitle = getParams.showTitle;
      this.fromSetting = getParams.fromSetting;
      this.save = getParams.save;
      this.selectBtn = getParams.select;
    }
    this._preferencesServ.getSupercategories({ 'active': 1 }).subscribe(data => {
      this.getSupercategories = data;
      if (this.selectBtn != true) {
        this._preferencesServ.getSupercategoriesByUser(this._globalServ.idUser).subscribe(dataSupById => {
          this.getSupCatById = dataSupById;
          for (let itemOne of this.getSupercategories) {
            for (let itemTwo of this.getSupCatById.user_preferences) {
              if (itemOne.id == itemTwo.fk_supercategory_id) {
                itemOne.checked = true;
                this.idsSupCat.push(itemOne.id);
              }
            }
          }
        }, error => {
          console.log(error);
        });
      } else {
        if (this._globalServ.idsCategories != null) {
          for (let itemOne of this.getSupercategories) {
            for (let itemTwo of this._globalServ.idsCategories) {
              if (itemOne.id == itemTwo) {
                itemOne.checked = true;
                this.idsSupCat.push(itemOne.id);
              }
            }
          }
        }
      }
    }, error => {
      console.log(error);
    })
  }

  ngOnInit() {
  }
  selectAllItem(){
    if(this.checkedAll==true){
      this.getSupercategories.forEach(item => {
        item.checked = null;
        this.checkedAll=null;
        this.idsSupCat.splice(0, this.getSupercategories.length);  
      });

      return;   
    }
    this.getSupercategories.forEach(item => {
      item.checked = true;
      this.checkedAll=true;
      this.idsSupCat.push(item.id);
      
    });
    //  for (var i = 0; i < this.getSupercategories.length; i++) {
    //    if(this.getSupercategories[i].checked == true){
    //     this.getSupercategories[i].checked = false;
    //    }
    //    else{
    //   this.getSupercategories[i].checked = true;
    //    }
    // }
          return;      
  }
  changeStatus(value: any, index: any) {
    for (let item of this.getSupercategories) {
      if (value.checked == null) {
        if (item.id == value.id) {
          item.checked = true;
          console.log(item);
          this.idsSupCat.push(item.id);
          return;
        }
      }
      if (value.checked == true) {
        if (item.id == value.id) {
          item.checked = null;
          let getIndex = this.idsSupCat.indexOf(value.id);
          this.idsSupCat.splice(getIndex, 1);
          return;
        }
      }
    }
  }

  saveFirstTime() {
    this._preferencesServ.saveSupercategories({ 'id': this._globalServ.idUser, 'supercategoryids': this.idsSupCat.toString() })
      .subscribe(data => {
        data;
        console.log(this.idsSupCat.toString());
        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify({})
          }, replaceUrl: true
        };
        if (this.fromSetting == true) {
          this.location.back();
        } else {
          this.router.navigate(['preferences-ok'], navigationExtras)
        }
      }, error => {
        console.log(error);
      })
  }

  select() {
    this._globalServ.idsCategories = this.idsSupCat;
    this.location.back();
  }
  resetFilter() {
    this._preferencesServ.saveSupercategories({ 'id': this._globalServ.idUser, 'supercategoryids': ''})
    .subscribe(data => {
      data;
        this.location.back();
      }, error => {
        console.log(error);
      })
  }



}
