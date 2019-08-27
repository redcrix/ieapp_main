import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { GroupService } from '../../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { get } from 'lodash';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-plan-create-seats',
  templateUrl: './plan-create-seats.page.html',
  styleUrls: ['./plan-create-seats.page.scss'],
})
export class PlanCreateSeatsPage implements OnInit {

  id: any;
  url: any = environment.apiUrl;
  isValidGroupImage: any = true;
  PlanCreateSeats: any = [];

  innerWidth: any;
  math = Math;

  PlanCreateSeatsValue: any = -1;

  constructor(
    private location: Location,
    private _globalServ: GlobalService,
    private _groupServ: GroupService,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
    private storage: Storage
  ) {
    /* if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
      console.log('id: ', this.id);
    } */
  }

  ngOnInit() {
    console.log('wwww');
    this.innerWidth = window.innerWidth;

    this.storage.get('plan-create-seats').then((val) => {
      console.log('load val: ', val);
      if (val > 0) {
        this.PlanCreateSeatsValue = val;
      } else {
        this.PlanCreateSeatsValue = '';
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  seatValueChanged(val) {
    console.log('dd', val);
    if (val > 0) {
      this.storage.set('plan-create-seats', val);
    } else {
      this.storage.set('plan-create-seats', -1);
    }
  }

}
