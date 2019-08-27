import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.page.html',
	styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

	constructor(
		private router: Router,
		private _globalServ: GlobalService,
		public actionSheetController: ActionSheetController,
		private storage: Storage
	) { }

	ngOnInit() {
	}

	goToOffersAndDiscount() {
		this.router.navigate(['tabs/offers-discounts-list'], {})
	}

	goToCityAgenda() {
		this.router.navigate(['tabs/city-agenda-list'], {})
	}

	goToCityGuide() {
		this.router.navigate(['tabs/city-guide-list'], {})
	}

	goToPlanList() {
		this.router.navigate(['tabs/plan-list'], {})
	}

	async showMore() {
		let titleLabel;
		let cancelLabel;
		let planLabel;
		let groupLabel;

		if (this._globalServ.language == 'en') {
			titleLabel = 'Create';
			cancelLabel = 'Cancel';
			planLabel = 'A Plan';
			groupLabel = 'A Group';
		}
		if (this._globalServ.language == 'es') {
			titleLabel = 'Crear';
			cancelLabel = 'Cancelar';
			planLabel = 'Un Plan';
			groupLabel = 'Un Grupo';
		}
		const actionSheetForCancel = await this.actionSheetController.create({
			cssClass: 'actionsheet2',
			buttons: [{
				text: cancelLabel,
				handler: () => {
					actionSheetForPlan_group.dismiss()
				}
			}
			]
		});


		const actionSheetForPlan_group = await this.actionSheetController.create({
			header: titleLabel,
			cssClass: 'actionSheetForPlan_group',



			buttons: [{
				text: planLabel,

				handler: () => {
					actionSheetForCancel.dismiss()
					this._globalServ.planImagePath = null;
					this._globalServ.planImagePost = null;
					this.storage.set('plan-create-seats', -1);
					this.storage.set('plan-create-groups', -1);
					this.router.navigate(['plan-create'], {});

				}
			}, {
				text: groupLabel,
				handler: () => {
					actionSheetForCancel.dismiss()
					this.router.navigate(['group-create'], {});
					this.storage.set('group-create-category', []);
					this.storage.set('group-create-settings', -1); // null or -1
					this.storage.set('group-create-members', []);
					this._globalServ.groupImagePath = null;
					this._globalServ.groupImagePost = null;
				}
			}
			]
		});
		actionSheetForCancel.present();
		actionSheetForPlan_group.present();

		actionSheetForPlan_group.onDidDismiss().then(() => {
			actionSheetForCancel.dismiss();
		});
		actionSheetForCancel.onDidDismiss().then(() => {
			actionSheetForPlan_group.dismiss();
		});
	}

}
