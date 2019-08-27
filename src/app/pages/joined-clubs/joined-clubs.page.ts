import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ClubsService } from '../../services/clubs.service';
import { environment } from '../../../environments/environment';
import { get } from 'lodash';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-joined-clubs',
  templateUrl: './joined-clubs.page.html',
  styleUrls: ['./joined-clubs.page.scss'],
})
export class JoinedClubsPage implements OnInit {

  clubs: any;
  itemClub: any[] = [];
  url: any = environment.apiUrl;

  constructor(
    private _globalServ: GlobalService,
    private _clubServ: ClubsService,
    private router: Router
  ) {
    console.log('this._globalServ.idUser:  ', this._globalServ.idUser);
    this._clubServ.getJoined(this._globalServ.idUser).subscribe(data => {
      console.log('joined clubs: ', data);
      this.clubs = data;
      this.itemClub = this.clubs.map(o => {
        return {
          ...o,
          countUser: get(o, 'Ceu_Club_Members', []).length
        }
      });
      console.log(this.itemClub);
    });
  }

  ngOnInit() {
  }

  goToClubList() {
    this.router.navigate(['clubs'])
  }

  goToClubDetail(item) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': item.id })
      },
    };
    this.router.navigate(['club-detail'], navigationExtras)
  }

}
