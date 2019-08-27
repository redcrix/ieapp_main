import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {

  assetsBaseUrl: any = environment.apiUrl + '/get-ceu-club-image/';
  allClubs: any = [];
  recommendedClubs: any = [];

  scrollPos: any = 0;

  isViewAllForClubs: any = false;
  isViewAllForRecommend: any = false;

  constructor(
    private _clubServ: ClubService,
    private _globalServ: GlobalService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.loadAllClubs();
    this.loadRecommendedClubs();
  }

  ngOnInit() {
    
  }

  loadAllClubs() {
    this._clubServ.getClubList().subscribe(data => {
      console.log('club list: ', data);
      this.allClubs = data;
    }, err => {
      console.log('get club err: ', err);
    });
  }

  loadRecommendedClubs() {
    this._clubServ.getRecommendedClubList().subscribe(data => {
      console.log('recommendedClubs list: ', data);
      this.recommendedClubs = data;
    }, err => {
      console.log('get recommendedClubs err: ', err);
    });
  }

  showFixedHeader() {
    if (this.scrollPos > 50) {
      return true;
    }
    return false;
  }

  logScrolling(ev) {
    this.scrollPos = ev.detail.scrollTop;
  }

  logScrollStart() {

  }

  logScrollEnd() {

  }

  goToClubDetail(value) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': value.id })
      },
    };
    this.router.navigate(['club-detail'], navigationExtras)
  }

  getNumberOfLimitForClubs(type) {
    if (type === 'clubs') {
      return this.isViewAllForClubs ? this.allClubs.length : 9;
    } else {
      return this.isViewAllForRecommend ? this.recommendedClubs.length : 3; 
    }
  }

  getFixedHeaderTitle() {
    return this.translate.instant('clubs.clubs')
  }

}
