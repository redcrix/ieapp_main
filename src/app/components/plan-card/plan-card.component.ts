import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { environment } from '../../../environments/environment';
import { UserService } from '../../services/user.service';
import { PlanService } from '../../services/plan.service';
import { GroupService } from '../../services/group.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { get } from 'lodash';

@Component({
  selector: 'plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
})
export class PlanCardComponent implements OnInit {

  @Input() dataPlan: any;
  url: any = environment.apiUrl;
  dataUser: any;
  getParticipants: any;
  getJoin: any;
  getUserLoggedin: any;

  constructor(
    private router: Router,
    private _globalServ: GlobalService,
    private _userServ: UserService,
    private _planServ: PlanService,
    private _groupServ: GroupService,
    private toastController: ToastController,
    private iab: InAppBrowser
  ) {

  }

  async ngOnInit() {
    if (this.dataPlan.type !== 'club_plan') {
      if(this._globalServ.org == 'IE') {
        await this._userServ.getProfile(this.dataPlan.fk_ie_user_id, null)
        .subscribe(data => {
          this.dataUser = data;
        }, error => {
          console.log(error);
        });
      } else if(this._globalServ.org == 'CEU') {
        await this._userServ.getProfile(this.dataPlan.fk_ceu_user_id, null)
        .subscribe(data => {
          this.dataUser = data;
        }, error => {
          console.log(error);
        });
      }
      await this._planServ.getParticipants(this.dataPlan.id, { 'participantlimit': 5, 'entity': this._globalServ.org})
        .subscribe(data => {
          this.getParticipants = data;
        }, error => {
          console.log(error);
        });
    }
  }

  goToItemPlan() {
    if (this.dataPlan.type !== 'group_plan') {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          data: JSON.stringify({ 'id': this.dataPlan.id, 'type': this.dataPlan.type })
        },
      };
      this.router.navigate(['plan-item'], navigationExtras)
    }
  }

  goToEventLink() {
    if (get(this.dataPlan, 'eventLink', '') !== '') {
      this.iab.create(get(this.dataPlan, 'eventLink', ''), '_system');
    } 
  }

  join() {
    if (this.dataPlan.type == 'club_plan' || this.dataPlan.type == 'student_plan') {
      if (this.dataPlan.join == true) {
        this._planServ.leavePlanClub(this.dataPlan.idParticipation).subscribe(data => {
          console.log(data);
          this.dataPlan.join = null;
          this.dataPlan.idParticipation = null;
        }, error => {
          console.log(error);
        })
      } else {
        this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(data => {
          this.getUserLoggedin = data;
          this._planServ.joinPlanClub({ 'fk_plan_id': this.dataPlan.id, 'ceu_user_id': this._globalServ.idUser, 'name': this.getUserLoggedin.user.first_name + ' ' + this.getUserLoggedin.user.last_name, 'email': this.getUserLoggedin.user.email, 'fk_club_plan_id': this.dataPlan.id }).subscribe(data => {
            console.log(data);
            this.getJoin = data;
            this.dataPlan.join = true;
            this.dataPlan.idParticipation = this.getJoin.id;
          }, error => {
            console.log(error);
          })
        });
      }
    }
    if (this.dataPlan.type == 'university_plan') {
      if (this.dataPlan.join == true) {
        this._planServ.leavePlanUniversity(this.dataPlan.idParticipation).subscribe(data => {
          console.log(data);
          this.dataPlan.join = null;
          this.dataPlan.idParticipation = null;
        }, error => {
          console.log(error);
        })
      } else {
        this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(data => {
          this.getUserLoggedin = data;
          if(this._globalServ.org == 'CEU') {
            this._planServ.joinPlanUniversity({ 
              'fk_plan_id': this.dataPlan.id, 
              'ceu_user_id': this._globalServ.idUser, 
              'name': this.getUserLoggedin.user.first_name + ' ' + this.getUserLoggedin.user.last_name, 
              'email': this.getUserLoggedin.user.email 
            }).subscribe(data => {
              console.log('ceu s:', data);
              this.getJoin = data;
              this.dataPlan.join = true;
              this.dataPlan.idParticipation = this.getJoin.id;
            }, error => {
              console.log('ceu e:', error);
            })
          } else if(this._globalServ.org == 'IE') {
            this._planServ.joinPlanUniversity({ 
              'fk_ie_plan_id': this.dataPlan.id, 
              'ie_user_id': this._globalServ.idUser, 
              'name': this.getUserLoggedin.user.first_name + ' ' + this.getUserLoggedin.user.last_name, 
              'email': this.getUserLoggedin.user.email 
            }).subscribe(data => {
              console.log('i s:', data);
              this.getJoin = data;
              this.dataPlan.join = true;
              this.dataPlan.idParticipation = this.getJoin.id;
            }, error => {
              console.log('i e:', error);
            })
          }
        });
      }
    }
    if (this.dataPlan.type == 'group_plan') {
      this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(data => {
        this.getUserLoggedin = data;
        this._groupServ.joinGroupPlan(this.dataPlan.id, {'userId': this._globalServ.idUser, 'email': this.getUserLoggedin.user.email}).subscribe(async data => {
          console.log(data);
          this.getJoin = data;
          this.dataPlan.join = true;
          this.dataPlan.idParticipation = this.getJoin.id;
          const toast = await this.toastController.create({
            message: 'Joined successfully.',
            duration: 2000
          });
          toast.present();
        }, async error => {
          console.log(error);
          const toast = await this.toastController.create({
            message: error.message,
            duration: 2000
          });
          toast.present();
        })
      });
    }
  }

}
