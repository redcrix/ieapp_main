import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { FilterService } from '../../services/filter.service';
import { GlobalService } from '../../services/global.service';
import { DatePipe } from '@angular/common'
import { PlanService } from '../../services/plan.service';
import { CityGuideService } from '../../services/city-guide.service';
import { CityAgendaService } from '../../services/city-agenda.service';
import { OfferDiscountService } from '../../services/offer-discount.service';
import { Location } from '@angular/common';

@Component({
  selector: 'filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
  providers: [DatePipe]
})
export class FiltersPage implements OnInit {

  getFilters: any;
  listSortBy: any;
  listTypeOfFeed: any;
  listDate: any;
  listCity: any;
  idFiltersPost: any[] = [];
  getFiltersByUser: any;
  customDataValue: any;

  constructor(
    private router: Router,
    private datePicker: DatePicker,
    private _filterServ: FilterService,
    private _globalServ: GlobalService,
    public datepipe: DatePipe,
    private _planServ: PlanService,
    private _cityGuideServ: CityGuideService,
    private _cityAgendaServ: CityAgendaService,
    private _offerDiscountServ: OfferDiscountService,
    private location: Location,
  ) {
    this._filterServ.getFilters().subscribe(data => {
      this.getFilters = data;
      this._filterServ.getFiltersByUser(this._globalServ.idUser).
        subscribe(data => {
          this.getFiltersByUser = data;
          for (let itemOne of this.getFilters.filters) {
            if (this.getFiltersByUser.user_filters != null) {
              for (let itemTwo of this.getFiltersByUser.user_filters) {
                if (itemOne.id == itemTwo.fk_filter_id) {
                  itemOne.checked = true;
                  this.idFiltersPost.push(itemOne.id);
                  if (itemOne.option_en == 'Custom date') {
                    this.customDataValue = new Date(itemTwo.custom_date + 'T00:00:00');
                    console.log('-->', this.customDataValue);
                  }
                }
              }
            }
          }
        })
      this.listSortBy = this.getFilters.filters.filter(s => s.sub_type_en == 'Sort by');
      this.listTypeOfFeed = this.getFilters.filters.filter(s => s.sub_type_en == 'Type of feed');
      this.listDate = this.getFilters.filters.filter(s => s.sub_type_en == 'Date');
      this.listCity = this.getFilters.filters.filter(s => s.sub_type_en == 'City');
    }, error => { console.log(error); })
  }

  ngOnInit() {
  }

  goToPreferences() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'save': true })
      }
    };
    this.router.navigate(['preferences'], navigationExtras)
  }

  customDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date => {
        console.log('Got date: ', date);
        this.customDataValue = date;
      },
      err => console.log('Error occurred while getting the date: ', err)
    ).finally(() => {
      if (this.customDataValue == null) {
        for (let item of this.listDate) {
          if (item.option_en == 'Custom date') {
            item.checked = null;
            let getIndex = this.idFiltersPost.indexOf(item.id);
            this.idFiltersPost.splice(getIndex, 1);
            return;
          }
        }
      }
    });
  }

  //SortBy
  activeSortBy(value: any) {
    console.log('--------------------------------');
    console.log(value);
    for (let item of this.listSortBy) {
      if (item.id != value.id) {
        item.checked = null;
        let getIndex = this.idFiltersPost.indexOf(item.id);
        if (getIndex != -1) {
          this.idFiltersPost.splice(getIndex, 1);
        }
      }
    }
    for (let item of this.listSortBy) {
      if (item.id == value.id) {
        item.checked = true;
        this.idFiltersPost.push(item.id);
      }
    }
    console.log(this.idFiltersPost);
  }

  desactiveSortBy(value: any) {
    for (let item of this.listSortBy) {
      if (item.id == value.id) {
        item.checked = null;
        let getIndex = this.idFiltersPost.indexOf(value.id);
        this.idFiltersPost.splice(getIndex, 1);
        console.log('-->', this.idFiltersPost);
        return;
      }
    }
  }

  //typeOfFeed
  activeTypeOfFeed(value: any) {
    console.log('--------------------------------');
    console.log(value);
    for (let item of this.listTypeOfFeed) {
      if (item.id != value.id) {
        item.checked = null;
        let getIndex = this.idFiltersPost.indexOf(item.id);
        if (getIndex != -1) {
          this.idFiltersPost.splice(getIndex, 1);
        }
      }
    }
    for (let item of this.listTypeOfFeed) {
      if (item.id == value.id) {
        item.checked = true;
        this.idFiltersPost.push(item.id);
      }
    }
    console.log(this.idFiltersPost);
  }

  desactiveTypeOfFeed(value: any) {
    for (let item of this.listTypeOfFeed) {
      if (item.id == value.id) {
        item.checked = null;
        let getIndex = this.idFiltersPost.indexOf(value.id);
        this.idFiltersPost.splice(getIndex, 1);
        console.log('-->', this.idFiltersPost);
        return;
      }
    }
  }

  //Date
  activeDate(value: any) {
    console.log('--------------------------------');
    console.log(value);
    for (let item of this.listDate) {
      if (item.id != value.id) {
        item.checked = null;
        let getIndex = this.idFiltersPost.indexOf(item.id);
        if (getIndex != -1) {
          this.idFiltersPost.splice(getIndex, 1);
          if (item.option_en == 'Custom date') {
            this.customDataValue = null;
          }
        }
      }
    }
    for (let item of this.listDate) {
      if (item.id == value.id) {
        item.checked = true;
        this.idFiltersPost.push(item.id);
        if (value.option_en == 'Custom date') {
          this.customDate();
        }
      }
    }
    console.log(this.idFiltersPost);
  }

  desactiveDate(value: any) {
    for (let item of this.listDate) {
      if (item.id == value.id) {
        item.checked = null;
        let getIndex = this.idFiltersPost.indexOf(value.id);
        this.idFiltersPost.splice(getIndex, 1);
        if (value.option_en == 'Custom date') {
          this.customDataValue = null;
        }
        console.log('-->', this.idFiltersPost);
        return;
      }
    }
  }

  //city
  activeCity(value: any) {
    console.log('--------------------------------');
    console.log(value);
    for (let item of this.listCity) {
      if (item.id != value.id) {
        item.checked = null;
        let getIndex = this.idFiltersPost.indexOf(item.id);
        if (getIndex != -1) {
          this.idFiltersPost.splice(getIndex, 1);
        }
      }
    }
    for (let item of this.listCity) {
      if (item.id == value.id) {
        item.checked = true;
        this.idFiltersPost.push(item.id);
      }
    }
    console.log(this.idFiltersPost);
  }

  desactiveCity(value: any) {
    for (let item of this.listCity) {
      if (item.id == value.id) {
        item.checked = null;
        let getIndex = this.idFiltersPost.indexOf(value.id);
        this.idFiltersPost.splice(getIndex, 1);
        console.log('-->', this.idFiltersPost);
        return;
      }
    }
  }

  saveFilters() {
    let filtersArray = null;
    let customDate = null;
    if (this.idFiltersPost != null) {
      filtersArray = this.idFiltersPost.toString();
    }
    if (this.customDataValue != null) {
      customDate = this.datepipe.transform(this.customDataValue, 'yyyy-MM-dd');//this.customDataValue.toString();
    }
    this._filterServ.saveFilters({ 'id': this._globalServ.idUser, 'filterids': filtersArray, 'customdate': customDate })
      .subscribe(data => {
        data;
        this.reload();
      }, error => {
        console.log(error);
      })
    this.location.back();
  }

  resetFilter() {
   
    this._filterServ.saveFilters({ 'id': this._globalServ.idUser, 'filterids': '4,7,10,15', 'customdate': null })
      .subscribe(data => {
        data;
        this.reload();
      }, error => {
        console.log(error);
      })
    this.location.back();
  }

  reload() {
    this._planServ.getDataPlanList();
    this._cityGuideServ.getDataCityGuideList();
    this._cityAgendaServ.getDataCityAgendaList();
    this._offerDiscountServ.getDataOfferDiscountList();
  }




}
