import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClubDetailPage } from './club-detail.page'

import { ComponentModule } from '../../components/component.module';

const routes: Routes = [
  {
    path: '',
    component: ClubDetailPage
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
  declarations: [ClubDetailPage]
})
export class ClubDetailPageModule {}
