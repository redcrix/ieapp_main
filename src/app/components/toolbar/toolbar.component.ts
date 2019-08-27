import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationExtras, Event } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Input() title: any;
  @Input() reset: boolean;
  @Input() back: boolean;
  @Input() closeModalArrow: boolean;
  @Input() menu: boolean;
  @Input() search: boolean;
  @Input() bell: boolean;
  @Input() setting: boolean;
  @Input() cancel: boolean;
  @Input() map: boolean;
  @Output() resetEmit: EventEmitter<any>;
  @Input() cancelMembers: boolean;
  @Input() inviteMembers: boolean;
  @Input() searchMembers: boolean;
  @Input() searchGroups: boolean;
  @Output() memberKeyChange: EventEmitter<any>;
  @Output() inviteMemberEvent: EventEmitter<any>;

  groupMemberKey: any = '';
  isHeaderTitle:any;

  constructor(
    private location: Location,
    private router: Router,
    private _globalServ: GlobalService,
    private modalCtrl: ModalController,
  ) { 
    this.resetEmit = new EventEmitter();
    this.memberKeyChange = new EventEmitter();
    this.inviteMemberEvent = new EventEmitter();
  }

  ngOnInit() { }

  goBack() {
    this.location.back();
  }

  closeModalArrowFunc(){
    this.modalCtrl.dismiss({});
  }

  close() {
    this.modalCtrl.dismiss({
      //'dismissed': true
    });
  }

  goToSetting() {
    this.router.navigate(['filters'], {})
  }

  goToOfferDiscountMap() {
    this.router.navigate(['offers-discounts-map'], {})
  }

  resetFunc(){
    this.resetEmit.emit();
  }

  inviteMember() {
    this.inviteMemberEvent.emit();
  }

  changeSearchGroupMembers() {
    this.memberKeyChange.emit(this.groupMemberKey);
  }
  

}
