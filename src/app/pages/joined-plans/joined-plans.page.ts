import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-joined-plans',
  templateUrl: './joined-plans.page.html',
  styleUrls: ['./joined-plans.page.scss'],
})
export class JoinedPlansPage implements OnInit {

  Participations: any;
  url: any = environment.apiUrl;

  constructor(
    private _planServ: PlanService,
    private _globalServ: GlobalService,
  ) {
    this._planServ.getParticipations(this._globalServ.idUser).subscribe(data => {
      this.Participations = data;
      for (let item of this.Participations) {
        item.image = this.url + '/get-image-plan/' + item.image;
        item.join = true;
        item.type = 'student_plan';
      }
    })
  }

  ngOnInit() {
  }

}
