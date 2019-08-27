import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupCreateCategoryPage } from './group-create-category.page'

import { ComponentModule } from '../../components/component.module';

const routes: Routes = [
  {
    path: '',
    component: GroupCreateCategoryPage
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
  declarations: [GroupCreateCategoryPage]
})
export class GroupCreateCategoryPageModule {}
