import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../../services/plan.service';
import { environment } from '../../../environments/environment';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { get } from 'lodash';
import { UserService } from '../../services/user.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
	selector: 'app-plan-item',
	templateUrl: './plan-item.page.html',
	styleUrls: ['./plan-item.page.scss'],
})
export class PlanItemPage implements OnInit {

	latitudeInit: any;
	longitudeInit: any;
	zoom: any = 14;
	id: any;
	getItem: any;
	url: any = environment.apiUrl;
	urlImageProfile: any = environment.apiUrl;
	remainingUsers: number = 0;
	getParticipants: any;
	type: any;
	map: any;
	mapOptions: google.maps.MapOptions;
	joined: any = false;
	getUserLoggedin: any;

	@ViewChild('map') mapElement;
	AddedToCalender: boolean = false;

	constructor(
		private location: Location,
		private _globalServ: GlobalService,
		private router: Router,
		private actRoute: ActivatedRoute,
		private _planServ: PlanService,
		private nativeGeocoder: NativeGeocoder,
		private _userServ: UserService,
		private iab: InAppBrowser,
		private calendar: Calendar
	) {
		if (this.actRoute.snapshot.queryParams.data != null) {
			let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
			this.id = getParams.id;
			this.type = getParams.type;
			if (this.type == 'university_plan' || this.type == 'student_plan') {
				if (this._globalServ.org == 'CEU') {
					this.url = this.url + '/get-image-plan/';
				} else if (this._globalServ.org == 'IE') {
					this.url = this.url + '/get-ie-image-plan/';
				}
			}
			if (this.type == 'club_plan') {
				this.url = this.url + '/get-club-plan-image/';
			}
		}
	}

	ngOnInit() {

	}

	ionViewDidEnter() {
		this._planServ.getParticipants(this.id, { 'participantlimit': 5, 'entity': this._globalServ.org })
			.subscribe(data => {
				this.getParticipants = data;
				this.checkingJoinStatus();
			});
		if (this.type == 'university_plan' || this.type == 'student_plan') {
			this._planServ.getItemUniv(this.id)
				.subscribe(data => {
					if (this._globalServ.org == 'CEU') {
						this.getItem = data;
						if (this.getItem.Place != null) {
							this.latitudeInit = Number(this.getItem.Place.latitude);
							this.longitudeInit = Number(this.getItem.Place.longitude);
						} else if (this.getItem.latitude != null && this.getItem.longitude != null) {
							this.latitudeInit = Number(this.getItem.latitude);
							this.longitudeInit = Number(this.getItem.longitude);
						}

						if (this.getItem.Participants != null) {
							if (this.getItem.Participants.length < 6) {
								this.remainingUsers = 0;
							} else {
								this.remainingUsers = this.getItem.Participants.length - 5;
							}
						}
						console.log('map info1: ', this.getItem);

						if (this.getItem.Place != null) {
							this.mapFunc(Number(this.getItem.Place.latitude), Number(this.getItem.Place.longitude));
						} else if (this.getItem.latitude != null && this.getItem.longitude != null) {
							this.mapFunc(Number(this.getItem.latitude), Number(this.getItem.longitude));
						}
					} else if (this._globalServ.org == 'IE') {
						this.getItem = data['ie_plan'];

						if (this.getItem.Place != null) {
							this.latitudeInit = Number(this.getItem.Place.latitude);
							this.longitudeInit = Number(this.getItem.Place.longitude);
						} else if (this.getItem.latitude != null && this.getItem.longitude != null) {
							this.latitudeInit = Number(this.getItem.latitude);
							this.longitudeInit = Number(this.getItem.longitude);
						}

						if (this.getItem.IE_Participants != null) {
							if (this.getItem.IE_Participants.length < 6) {
								this.remainingUsers = 0;
							} else {
								this.remainingUsers = this.getItem.IE_Participants.length - 5;
							}
						}
						console.log('map info2: ', this.getItem);

						if (this.getItem.Place != null) {
							this.mapFunc(Number(this.getItem.Place.latitude), Number(this.getItem.Place.longitude));
						} else if (this.getItem.latitude != null && this.getItem.longitude != null) {
							this.mapFunc(Number(this.getItem.latitude), Number(this.getItem.longitude));
						}
					}
				}, error => {
					console.log(error);
				});
		}
		if (this.type == 'club_plan') {
			this._planServ.getItemClub(this.id)
				.subscribe(data => {
					this.getItem = data;
					if (this.getItem.Place != null) {
						this.latitudeInit = Number(this.getItem.Place.latitude);
						this.longitudeInit = Number(this.getItem.Place.longitude);
					} else if (this.getItem.latitude != null && this.getItem.longitude != null) {
						this.latitudeInit = Number(this.getItem.latitude);
						this.longitudeInit = Number(this.getItem.longitude);
					}

					if (this.getItem.Participants != null) {
						if (this.getItem.Participants.length < 6) {
							this.remainingUsers = 0;
						} else {
							this.remainingUsers = this.getItem.Participants.length - 5;
						}
					}

					console.log('map info3: ', this.getItem);

					if (this.getItem.Place != null) {
						this.mapFunc(Number(this.getItem.Place.latitude), Number(this.getItem.Place.longitude));
					} else if (this.getItem.latitude != null && this.getItem.longitude != null) {
						this.mapFunc(Number(this.getItem.latitude), Number(this.getItem.longitude));
					}
				}, error => {
					console.log(error);
				});
		}
	}

	goBack() {
		this.location.back();
	}

	checkingJoinStatus() {
		this._planServ.getParticipations(this._globalServ.idUser).subscribe(data => {
			let listParticipations = JSON.parse(JSON.stringify(data));
			for (let item2 of listParticipations) {
				let itemParticipants = this._globalServ.org == 'CEU' ? item2.Participants : item2.IE_Participants;
				for (let item3 of itemParticipants) {
					let planId = this._globalServ.org == 'CEU' ? item3.fk_plan_id : item3.fk_ie_plan_id;
					if (planId == this.getItem.id) {
						this.getItem.join = true;
						this.joined = true;
						this.getItem.idParticipation = item3.id;
					}
				}
			}
		});
	}

	joinPlan() {
		if (this.type == 'club_plan') {
			if (this.joined == true) {
				this._planServ.leavePlanClub(this.getItem.idParticipation).subscribe(data => {
					console.log(data);
					this.joined = false;
				}, error => {
					console.log(error);
				})
			} else {
				this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(data => {
					this.getUserLoggedin = data;
					this._planServ.joinPlanClub({ 'fk_plan_id': this.getItem.id, 'ceu_user_id': this._globalServ.idUser, 'name': this.getUserLoggedin.user.first_name + ' ' + this.getUserLoggedin.user.last_name, 'email': this.getUserLoggedin.user.email, 'fk_club_plan_id': this.getItem.id }).subscribe(data => {
						console.log(data);
						this.joined = true;
					}, error => {
						console.log(error);
					})
				});
			}
		}
		if (this.type == 'university_plan' || this.type == 'student_plan') {
			if (this.joined == true) {
				this._planServ.leavePlanUniversity(this.getItem.idParticipation).subscribe(data => {
					console.log(data);
					this.joined = false;
				}, error => {
					console.log(error);
				})
			} else {
				this._userServ.getProfile(this._globalServ.idUser, {}).subscribe(data => {
					this.getUserLoggedin = data;
					if (this._globalServ.org == 'CEU') {
						this._planServ.joinPlanUniversity({
							'fk_plan_id': this.getItem.id,
							'ceu_user_id': this._globalServ.idUser,
							'name': this.getUserLoggedin.user.first_name + ' ' + this.getUserLoggedin.user.last_name,
							'email': this.getUserLoggedin.user.email
						}).subscribe(data => {
							console.log(data);
							this.joined = true;
						}, error => {
							console.log(error);
						})
					} else if (this._globalServ.org == 'IE') {
						this._planServ.joinPlanUniversity({
							'fk_ie_plan_id': this.getItem.id,
							'ie_user_id': this._globalServ.idUser,
							'name': this.getUserLoggedin.user.first_name + ' ' + this.getUserLoggedin.user.last_name,
							'email': this.getUserLoggedin.user.email
						}).subscribe(data => {
							console.log(data);
							this.joined = true;
						}, error => {
							console.log(error);
						})
					}
				});
			}
		}
	}

	goToViewProfile() {
		let navigationExtras: NavigationExtras = {
			queryParams: {
				data: JSON.stringify({})
			}
		};
		this.router.navigate(['view-profile'], navigationExtras)
	}

	mapFunc(lat: number, long: number) {
		//set map
		let coords = new google.maps.LatLng(this.latitudeInit, this.longitudeInit);
		this.mapOptions = {
			center: coords,
			zoom: this.zoom,
			maxZoom: 17,
			minZoom: 3,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			styles: [
				{
					"featureType": "landscape",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
			]
		}

		console.log('this.mapele: ', this.mapElement);

		this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
		var marker: google.maps.Marker = new google.maps.Marker({
			map: this.map,
			position: { lat: lat, lng: long },
		});
	}

	goToLink() {
		if (get(this.getItem, 'link', '') !== '') {
			this.iab.create(get(this.getItem, 'link', ''), '_system');
		}
	}

	getControlsOnStyleDisplay() {
		if (get(this.getItem, 'Place', '') !== '' || (get(this.getItem, 'latitude', '') !== '' && get(this.getItem, 'longitude', '') != '')) {
			return "block";
		} else {
			return "none";
		}
	}
	AddToCalender(item) {
		console.log(item);
		this.calendar.createEvent(item.title, item.address, item.description, new Date(item.limit_date), new Date(item.plan_date)).then(
			(msg) => {
				this.AddedToCalender = true;
				console.log(msg);
			},
			(err) => { console.log(err); }
		);
	}
}
