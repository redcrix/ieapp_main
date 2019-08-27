import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CityGuideService } from '../../services/city-guide.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-city-guide-list',
  templateUrl: './city-guide-list.page.html',
  styleUrls: ['./city-guide-list.page.scss'],
})
export class CityGuideListPage implements OnInit {

  getCat: any;
  url: any = environment.apiUrl;
  scrollPos: any = 0;
  pageTitleName: any = false;

  constructor(
    private router: Router,
    private _cityGuideServ: CityGuideService,
    private _globalServ: GlobalService,
    ) {
    this._cityGuideServ.getDataCityGuideList();
  }

  ngOnInit() {
  }


  logScrolling(e){
    if(e.detail.scrollTop>50){
      this.pageTitleName = true;
    } else {
      this.pageTitleName = false;
    }
  }

  goToCityGuideItemList(value: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': value.id,'name_EN':value.name_EN,'name_ES':value.name_ES })
      },
    };
    this.router.navigate(['tabs/city-guide-item-list'], navigationExtras)
  }

}
