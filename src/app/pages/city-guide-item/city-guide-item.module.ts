import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CityGuideItemPage } from './city-guide-item.page';

import { ComponentModule } from '../../components/component.module';
import { TruncateModule } from '@yellowspot/ng-truncate';

const routes: Routes = [
{
  path: '',
  component: CityGuideItemPage
}
];

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  ComponentModule,
  TruncateModule,
  RouterModule.forChild(routes)
  ],
  declarations: [CityGuideItemPage]
})
export class CityGuideItemPageModule {}
