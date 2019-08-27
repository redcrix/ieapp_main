import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CityGuideService } from '../../services/city-guide.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-city-guide-item-list',
  templateUrl: './city-guide-item-list.page.html',
  styleUrls: ['./city-guide-item-list.page.scss'],
})
export class CityGuideItemListPage implements OnInit {

  id: any;
  getListItem: any;
  name_EN: any;
  name_ES: any;
  url: any = environment.apiUrl;
  pageTitleName: any = false;


  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private _cityGuideServ: CityGuideService,
    private _globalServ: GlobalService,
    ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
      this.name_EN = getParams.name_EN;
      this.name_ES = getParams.name_ES;
    }
    this._cityGuideServ.getArticlesCategory(this.id)
    .subscribe(data => {
      this.getListItem = data;
    }, error => {
      console.log(error);
    })
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

  goToCityGuideItem(value: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': value.id })
      },
    };
    this.router.navigate(['city-guide-item'], navigationExtras)
  }

}
