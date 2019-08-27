import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { GlobalService } from '../../services/global.service';
import { PlanService } from '../../services/plan.service';
import { get } from 'lodash';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.page.html',
  styleUrls: ['./plan-list.page.scss'],
})
export class PlanListPage implements OnInit {

  getHighlightPlans: any;
  getFilteredPlans: any;
  getClubPlans: any;
  pageTitleName: any = false;

  constructor(
    private splashScreen: SplashScreen,
    private _globalServ: GlobalService,
    private _planServ: PlanService,
    ) {
    //window.scrollTo(0,0);
  }

  ngOnInit() {
    console.log('idUser: ', this._globalServ.idUser);
    this._planServ.getDataPlanList();
    //document.querySelector('ion-tab-bar').style.display = 'none';
    navigator.geolocation.getCurrentPosition(function (position) {
    });
    
    this._planServ.getIEClubPlans().subscribe(data => {
      console.log('data: ', get(data, 'events', []));
      this.getClubPlans = get(data, 'events', []);
      this.getClubPlans = this.getClubPlans.map(o => {
        return {
          ...o,
          type: 'club_plan'
        }
      })
    }, err => {
      console.log(err);
    })
  }


  ionViewDidEnter() {
    this.splashScreen.hide();
  }

  logScrolling(e){
    if(e.detail.scrollTop>50){
      this.pageTitleName = true;
    } else {
      this.pageTitleName = false;
    }
  }

}
