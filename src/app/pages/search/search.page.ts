import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { SearchService } from '../../services/search.service';
import { Storage } from '@ionic/storage';
import { get } from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  showArrow: boolean = true;
  searchbarSize: number = 10;
  showRecent: boolean = true;

  selectAll: any;
  selectPeople: any;
  selectStudentPlan: any;
  selectEvents: any;
  selectOfferDiscount: any;

  keyWord: any = '';

  getListPeople: any;
  getListStudentPlan: any;
  getListOfferDiscount: any;
  getListEvent: any;

  origListPeople: any;
  origListStudentPlan: any;
  origListOfferDiscount: any;
  origListEvent: any;

  allFirst: any = true;

  recentList: any[] = [];

  seeAll: any = {
    people: false,
    student_plan: false,
    events: false,
    discount: false
  };

  constructor(
    private _globalServ: GlobalService,
    private _searchServ: SearchService,
    private storage: Storage,
  ) {
    this.getAll();
    this.storage.get('recentList').then((val) => {
      if (val != null) {
        this.recentList = JSON.parse(val)
      }
    });
  }

  ngOnInit() {
  }

  onCancel() {
    console.log('cancel');
    this.showArrow = true;
    this.showRecent = true;
    this.searchbarSize = 10;
  }

  onFocus() {
    this.showArrow = false;
    this.searchbarSize = 12;
    this.showRecent = false;
  }

  getAll() {
    this.selectAll = true;
    this.selectPeople = null;
    this.selectStudentPlan = null;
    this.selectEvents = null;
    this.selectOfferDiscount = null;
    if (this.allFirst == true) {
      this._searchServ.getList({ 'type': 'people' }).subscribe(data => {
        this.getListPeople = data;
        this.getListPeople = this.getListPeople.slice(0, 5);
        this.origListPeople = data;
      });
      this._searchServ.getList({ 'type': 'student_plan' }).subscribe(data => {
        this.getListStudentPlan = data;
        this.getListStudentPlan = this.getListStudentPlan.slice(0, 5);
        this.origListStudentPlan = data;
      });
      
      this._searchServ.getList({ 'type': 'events' }).subscribe(data => {
        this.getListEvent = get(data, 'events', []);
        this.getListEvent = this.getListEvent.slice(0, 5);
        this.origListEvent = get(data, 'events', []);
      });
    
      this._searchServ.getList({ 'type': 'discount' }).subscribe(data => {
        this.getListOfferDiscount = data;
        this.getListOfferDiscount = this.getListOfferDiscount.slice(0, 5);
        this.origListOfferDiscount = data;
      });
      this.allFirst = false;
    }
  }

  getDataByToggle(attr) {
    this.seeAll[attr] = !this.seeAll[attr];
    if (attr === 'people') {
      this.getListPeople = this.origListPeople.slice(0, (this.seeAll[attr] ? this.origListPeople.length : 5));
    }
    if (attr === 'student_plan') {
      this.getListStudentPlan = this.origListStudentPlan.slice(0, (this.seeAll[attr] ? this.origListStudentPlan.length : 5));
    }
    if (attr === 'events') {
      this.getListEvent = this.origListEvent.slice(0, (this.seeAll[attr] ? this.origListEvent.length : 5));
    }
    if (attr === 'discount') {
      this.getListOfferDiscount = this.origListOfferDiscount.slice(0, (this.seeAll[attr] ? this.origListOfferDiscount.length : 5));
    }
  }

  getPeople() {
    this.selectAll = null;
    this.selectPeople = true;
    this.selectStudentPlan = null;
    this.selectEvents = null;
    this.selectOfferDiscount = null;
    if (this.keyWord != '') {
      this.getListPeople = this.getListPeople.filter(s => s.name.toUpperCase().includes(this.keyWord.toUpperCase()));
    }
  }

  getStudentPlan() {
    this.selectAll = null;
    this.selectPeople = null;
    this.selectStudentPlan = true;
    this.selectEvents = null;
    this.selectOfferDiscount = null;
    if (this.keyWord != '') {
      this.getListStudentPlan = this.getListStudentPlan.filter(s => s.name.toUpperCase().includes(this.keyWord.toUpperCase()));
    }
  }

  //pending
  getEvents() {
    this.selectAll = null;
    this.selectPeople = null;
    this.selectStudentPlan = null;
    this.selectEvents = true;
    this.selectOfferDiscount = null;
    if (this.keyWord != '') {
      this.getListEvent = this.getListEvent.filter(s => s.name.toUpperCase().includes(this.keyWord.toUpperCase()));
    }
  }

  getOfferDiscount() {
    this.selectAll = null;
    this.selectPeople = null;
    this.selectStudentPlan = null;
    this.selectEvents = null;
    this.selectOfferDiscount = true;
    if (this.keyWord != '') {
      this.getListOfferDiscount = this.getListOfferDiscount.filter(s => s.name.toUpperCase().includes(this.keyWord.toUpperCase()));
    }
  }

  kuSearch(value: any) {
    this.keyWord = value.target.value;
    if (this.selectAll == true) {
      this.keyPeopleFuc(value);
      this.keyStudentPlanFunc(value);
      this.keyEventFunc(value);
      this.keyOfferDiscountKey(value);
    }
    if (this.selectPeople == true) {
      this.keyPeopleFuc(value);
    }
    if (this.selectStudentPlan == true) {
      this.keyStudentPlanFunc(value);
    }
    if (this.selectEvents == true) {
      this.keyEventFunc(value);
    }
    if (this.selectOfferDiscount == true) {
      this.keyOfferDiscountKey(value);
    }
  }

  keyPeopleFuc(value: any) {
    this.getListPeople = this.origListPeople;
    this.getListPeople = this.getListPeople.filter(s => s.name.toUpperCase().includes(value.target.value.toUpperCase()));
  }

  keyStudentPlanFunc(value: any) {
    this.getListStudentPlan = this.origListStudentPlan;
    this.getListStudentPlan = this.getListStudentPlan.filter(s => s.name.toUpperCase().includes(value.target.value.toUpperCase()));
  }

  keyEventFunc(value: any) {
    this.getListEvent = this.origListEvent;
    this.getListEvent = this.getListEvent.filter(s => s.name.toUpperCase().includes(value.target.value.toUpperCase()));
  }

  keyOfferDiscountKey(value: any) {
    this.getListOfferDiscount = this.origListOfferDiscount;
    this.getListOfferDiscount = this.getListOfferDiscount.filter(s => s.name.toUpperCase().includes(value.target.value.toUpperCase()));
  }

  onClear() {
    this.getListPeople = this.origListPeople;
    this.getListStudentPlan = this.origListStudentPlan;
    this.getListEvent = this.origListEvent;
    this.getListOfferDiscount = this.origListOfferDiscount;
  }

  goToPeople(value: any) {
    for (let item of this.recentList) {
      if (value.id == item.id) {
        return
      }
    }
    if (this.recentList.length > 10) {
      this.recentList.splice(0, 1);
    }
    value.type = 'people';
    this.recentList.push(value);
    this.storage.set('recentList', JSON.stringify(this.recentList));
  }

  goToStudentPlan(value: any) {
    for (let item of this.recentList) {
      if (value.id == item.id) {
        return
      }
    }
    if (this.recentList.length > 10) {
      this.recentList.splice(0, 1);
    }
    value.type = 'student_plan';
    this.recentList.push(value);
    this.storage.set('recentList', JSON.stringify(this.recentList));
  }

  goToEvent(value: any) {
    /* for (let item of this.recentList) {
      if (value.id == item.id) {
        return
      }
    }
    if (this.recentList.length > 10) {
      this.recentList.splice(0, 1);
    }
    value.type = 'event';
    this.recentList.push(value);
    this.storage.set('recentList', JSON.stringify(this.recentList)); */
  }

  goToOfferDiscount(value: any) {
    for (let item of this.recentList) {
      if (value.id == item.id) {
        return
      }
    }
    if (this.recentList.length > 10) {
      this.recentList.splice(0, 1);
    }
    value.type = 'discount';
    this.recentList.push(value);
    this.storage.set('recentList', JSON.stringify(this.recentList));
  }

}




