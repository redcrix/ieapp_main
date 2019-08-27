import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.page.html',
  styleUrls: ['./language-list.page.scss'],
})
export class LanguageListPage implements OnInit {

  english: any;
  spanish: any;
  modalType: any;
  languageCode: any;

  constructor(
    private translate: TranslateService,
    private modalCtrl: ModalController,
  ) {
  }

  ngOnInit() {
  }

  selectEnglish(value: any) {
    this.english = value.target.checked;
    this.spanish = false;
  }

  selectSpanish(value: any) {
    this.spanish = value.target.checked;
    this.english = false;
  }

  selectlanguage(){
    this.translate.setDefaultLang('es');
    this.modalCtrl.dismiss({
      //'dismissed': true
    });
  }

}
