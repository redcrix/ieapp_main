import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CityAgendaItemPage } from './city-agenda-item.page';

import { ComponentModule } from '../../components/component.module';
import { TruncateModule } from '@yellowspot/ng-truncate';

const routes: Routes = [
  {
    path: '',
    component: CityAgendaItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    IonicModule,
    TruncateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CityAgendaItemPage]
})
export class CityAgendaItemPageModule {}
