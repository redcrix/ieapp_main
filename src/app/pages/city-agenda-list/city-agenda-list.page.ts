import { Component, OnInit } from '@angular/core';
import { CityAgendaService } from '../../services/city-agenda.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-city-agenda-list',
  templateUrl: './city-agenda-list.page.html',
  styleUrls: ['./city-agenda-list.page.scss'],
})
export class CityAgendaListPage implements OnInit {

  getList: any;
  pageTitleName: any = false;

  constructor(
    private _cityAgendaServ: CityAgendaService,
    private _globalServ: GlobalService,
    ) {
    this._cityAgendaServ.getDataCityAgendaList();
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

}
