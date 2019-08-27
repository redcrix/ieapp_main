import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { GroupCreateInvitePage } from './group-create-invite.page'

import { ComponentModule } from '../../components/component.module';

const routes: Routes = [
  {
    path: '',
    component: GroupCreateInvitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Ng2SearchPipeModule
  ],
  declarations: [GroupCreateInvitePage]
})
export class GroupCreateInvitePageModule {}
