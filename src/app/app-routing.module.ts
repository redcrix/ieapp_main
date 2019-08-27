import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
{ path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
{ path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
{ path: 'preferences', loadChildren: './pages/preferences/preferences.module#PreferencesPageModule' },
{ path: 'preferences-ok', loadChildren: './pages/preferences-ok/preferences-ok.module#PreferencesOkPageModule' },
{ path: 'filters', loadChildren: './pages/filters/filters.module#FiltersPageModule' },
//{ path: 'city-guide-list', loadChildren: './pages/city-guide-list/city-guide-list.module#CityGuideListPageModule' },
{ path: 'city-guide-item-list', loadChildren: './pages/city-guide-item-list/city-guide-item-list.module#CityGuideItemListPageModule' },
{ path: 'city-guide-item', loadChildren: './pages/city-guide-item/city-guide-item.module#CityGuideItemPageModule' },
//{ path: 'city-agenda-list', loadChildren: './pages/city-agenda-list/city-agenda-list.module#CityAgendaListPageModule' },
{ path: 'city-agenda-item', loadChildren: './pages/city-agenda-item/city-agenda-item.module#CityAgendaItemPageModule' },
//{ path: 'offers-discounts-list', loadChildren: './pages/offers-discounts-list/offers-discounts-list.module#OffersDiscountsListPageModule' },
//{ path: 'plan-list', loadChildren: './pages/plan-list/plan-list.module#PlanListPageModule' },
{ path: 'plan-item', loadChildren: './pages/plan-item/plan-item.module#PlanItemPageModule' },
{ path: 'offers-discounts-map', loadChildren: './pages/offers-discounts-map/offers-discounts-map.module#OffersDiscountsMapPageModule' },
{ path: 'image-cropper', loadChildren: './pages/image-cropper/image-cropper.module#ImageCropperPageModule' },
{ path: 'language-list', loadChildren: './pages/language-list/language-list.module#LanguageListPageModule' },
{ path: 'view-profile', loadChildren: './pages/view-profile/view-profile.module#ViewProfilePageModule' },
{ path: 'view-profile-groups', loadChildren: './pages/view-profile-groups/view-profile-groups.module#ViewProfileGroupsPageModule' },
{ path: 'view-profile-plans', loadChildren: './pages/view-profile-plans/view-profile-plans.module#ViewProfilePlansPageModule' },
{ path: 'offers-discoutns-item', loadChildren: './pages/offers-discoutns-item/offers-discoutns-item.module#OffersDiscoutnsItemPageModule' },
{ path: 'plan-create', loadChildren: './pages/plan-create/plan-create.module#PlanCreatePageModule' },
{ path: 'plan-create-groups', loadChildren: './pages/plan-create-groups/plan-create-groups.module#PlanCreateGroupsPageModule' },
{ path: 'plan-create-createdby', loadChildren: './pages/plan-create-createdby/plan-create-createdby.module#PlanCreateCreatedbyPageModule' },
{ path: 'plan-create-seats', loadChildren: './pages/plan-create-seats/plan-create-seats.module#PlanCreateSeatsPageModule' },
{ path: 'plan-create-success', loadChildren: './pages/plan-create-success/plan-create-success.module#PlanCreateSuccessPageModule' },
{ path: 'clubs', loadChildren: './pages/clubs/clubs.module#ClubsPageModule' },
{ path: 'club-detail', loadChildren: './pages/club-detail/club-detail.module#ClubDetailPageModule' },
{ path: 'groups', loadChildren: './pages/groups/groups.module#GroupsPageModule' },
{ path: 'group-detail', loadChildren: './pages/group-detail/group-detail.module#GroupDetailPageModule' },
{ path: 'group-create', loadChildren: './pages/group-create/group-create.module#GroupCreatePageModule' },
{ path: 'group-create-category', loadChildren: './pages/group-create-category/group-create-category.module#GroupCreateCategoryPageModule' },
{ path: 'group-create-settings', loadChildren: './pages/group-create-settings/group-create-settings.module#GroupCreateSettingsPageModule' },
{ path: 'group-create-invite', loadChildren: './pages/group-create-invite/group-create-invite.module#GroupCreateInvitePageModule' },
{ path: 'group-create-success', loadChildren: './pages/group-create-success/group-create-success.module#GroupCreateSuccessPageModule' },
{ path: 'group-plan-item', loadChildren: './pages/group-plan-item/group-plan-item.module#GroupPlanItemPageModule' },
{ path: 'members', loadChildren: './pages/members/members.module#MembersPageModule' },
{ path: 'joined', loadChildren: './pages/joined/joined.module#JoinedPageModule' },
{ path: 'joined-plans', loadChildren: './pages/joined-plans/joined-plans.module#JoinedPlansPageModule' },
{ path: 'joined-clubs', loadChildren: './pages/joined-clubs/joined-clubs.module#JoinedClubsPageModule' },
{ path: 'joined-group-plans', loadChildren: './pages/joined-group-plans/joined-group-plans.module#JoinedGroupPlansPageModule' },
{ path: 'joined-groups', loadChildren: './pages/joined-groups/joined-groups.module#JoinedGroupsPageModule' },
{ path: 'change-password', loadChildren: './pages/change-password/change-password.module#ChangePasswordPageModule' },
{ path: 'write-comment', loadChildren: './pages/write-comment/write-comment.module#WriteCommentPageModule' },
{ path: 'change-password', loadChildren: './pages/change-password/change-password.module#ChangePasswordPageModule' },
{ path: 'offers-discounts-code', loadChildren: './pages/offers-discounts-code/offers-discounts-code.module#OffersDiscountsCodePageModule' },

//{ path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },

//{ path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },

//{ path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },

//{ path: 'more', loadChildren: './pages/more/more.module#MorePageModule' },


];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
