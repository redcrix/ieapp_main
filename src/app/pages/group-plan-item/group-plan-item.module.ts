import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupPlanItemPage } from './group-plan-item.page'

import { ComponentModule } from '../../components/component.module';

const routes: Routes = [
  {
    path: '',
    component: GroupPlanItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupPlanItemPage]
})
export class GroupPlanItemPageModule {}
