import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OffersDiscountsMapPage } from './offers-discounts-map.page';

import { ComponentModule } from '../../components/component.module';

//modal
import { OffersDiscountsCodePage } from '../offers-discounts-code/offers-discounts-code.page';

const routes: Routes = [
  {
    path: '',
    component: OffersDiscountsMapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OffersDiscountsMapPage,
    OffersDiscountsCodePage
  ],
  entryComponents:[
    OffersDiscountsCodePage
  ]
})
export class OffersDiscountsMapPageModule {}
