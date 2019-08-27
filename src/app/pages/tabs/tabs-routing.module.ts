import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
{
  path: '',
  component: TabsPage,
  children:
  [
  {
    path: 'plan-list',
    children:
    [
    {
      path: '',
      loadChildren: '../plan-list/plan-list.module#PlanListPageModule'
    }
    ]
  }, {
    path: 'city-guide-list',
    children:
    [
    {
      path: '',
      loadChildren: '../city-guide-list/city-guide-list.module#CityGuideListPageModule'
    }
    ]
  }, 

  {
    path: 'city-agenda-list',
    children:
    [
    {
      path: '',
      loadChildren: '../city-agenda-list/city-agenda-list.module#CityAgendaListPageModule'
    }
    ]
  }, {
    path: 'offers-discounts-list',
    children:
    [
    {
      path: '',
      loadChildren: '../offers-discounts-list/offers-discounts-list.module#OffersDiscountsListPageModule'
    }
    ]
  }, {
    path: 'more',
    children:
    [
    {
      path: '',
      loadChildren: '../more/more.module#MorePageModule'
    }
    ]
  }, {
    path: 'profile',
    children:
    [
    {
      path: '',
      loadChildren: '../profile/profile.module#ProfilePageModule'
    }
    ]
  },
  {
    path: 'city-guide-item-list',
    children:
    [
    {
      path: '',
      loadChildren: '../city-guide-item-list/city-guide-item-list.module#CityGuideItemListPageModule'
    }
    ]
  },
  {
    path: 'search',
    children:
    [
    {
      path: '',
      loadChildren: '../search/search.module#SearchPageModule'
    }
    ]
  }, {
    path: 'notifications',
    children:
    [
    {
      path: '',
      loadChildren: '../notifications/notifications.module#NotificationsPageModule'
    }
    ]
  }, {
    path: 'about',
    children:
    [
    {
      path: '',
      loadChildren: '../about/about.module#AboutPageModule'
    }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/plan-list',
    pathMatch: 'full'
  }
  ]
},
{
  path: '',
  redirectTo: '/tabs/plan-list',
  pathMatch: 'full'
}
];

@NgModule({
  imports:
  [
  RouterModule.forChild(routes)
  ],
  exports:
  [
  RouterModule
  ]
})
export class TabsPageRoutingModule { }