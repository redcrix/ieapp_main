import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-joined-groups',
  templateUrl: './joined-groups.page.html',
  styleUrls: ['./joined-groups.page.scss'],
})
export class JoinedGroupsPage implements OnInit {

  joinedGroups: any;
  url: any = environment.apiUrl;

  constructor(
    private router: Router,
    private _groupServ: GroupService,
    private _globalServ: GlobalService,
    ) {
    this._groupServ.joinedGroups(this._globalServ.idUser).subscribe(data => {
      this.joinedGroups = data;
      console.log('joined groups scc: ', this.joinedGroups);
    }, err => {
      console.log('joined gropus err: ', err);
    })
  }

  goToGroups() {
    this.router.navigate(['groups']);
  }

  goToGroupDetail(group) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': group.id })
      },
    };
    this.router.navigate(['group-detail'], navigationExtras);
  }


  ngOnInit() {
  }

}
