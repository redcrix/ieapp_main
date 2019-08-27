import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanCreateSeatsPage } from './plan-create-seats.page'

import { ComponentModule } from '../../components/component.module';

const routes: Routes = [
  {
    path: '',
    component: PlanCreateSeatsPage
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
  declarations: [PlanCreateSeatsPage]
})
export class PlanCreateSeatsPageModule {}
