import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { } from 'googlemaps';
import { CityAgendaService } from '../../services/city-agenda.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras } from '@angular/router';
import { get } from 'lodash';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { TruncateModule } from '@yellowspot/ng-truncate';

@Component({
  selector: 'app-city-agenda-item',
  templateUrl: './city-agenda-item.page.html',
  styleUrls: ['./city-agenda-item.page.scss'],
})
export class CityAgendaItemPage implements OnInit {

  latitudeInit: any;
  longitudeInit: any;
  zoom: any = 14;
  getItem: any;
  id: any;
  url: any = environment.apiUrl;

  @ViewChild("map") mapElement;
  @Input() text: string;
  @Input() limit: number = 250;
  truncating = true;
  AddedToCalender: boolean = false;


  constructor(
    private router: Router,
    private location: Location,
    private _globalServ: GlobalService,
    private _cityAgendaServ: CityAgendaService,
    private actRoute: ActivatedRoute,
    private iab: InAppBrowser,
    private calendar: Calendar
  ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
    }
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this._cityAgendaServ.getItem(this.id)
      .subscribe(data => {
        this.getItem = data;
        for (let item of this.getItem.event.Places) {
          this.latitudeInit = Number(item.latitude);
          this.longitudeInit = Number(item.longitude);
          break;
        }
        //set map
        let coords = new google.maps.LatLng(this.latitudeInit, this.longitudeInit);
        let mapOptions: google.maps.MapOptions = {
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

        var map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        for (let item of this.getItem.event.Places) {
          var marker: google.maps.Marker = new google.maps.Marker({
            map: map,
            position: { lat: Number(item.latitude), lng: Number(item.longitude) },
          });
        }
      }, error => {
        console.log(error);
      });

  }

  goBack() {
    this.location.back();
  }

  goToCreatePlan() {
    this.router.navigate(['plan-create']);
  }

  goToSite() {
    if (get(this.getItem, 'event.website', '') !== '') {
      this.iab.create(get(this.getItem, 'event.website', ''), '_system');
    } 
  }

  AddToCalender(item) {
    console.log(item);
    let title = '';
    let address = '';
    let description = '';
    if(this._globalServ.language == 'en') {
      title = item.name_EN;
      description = item.description_EN;
      if(item.Places) {
        address = item.Places.name_EN;
      }
    } else if(this._globalServ.language == 'es') {
      title = item.name_ES;
      description = item.description_ES;
      if(item.Places) {
        address = item.Places.name_ES;
      }
    }

    if(item.valid_until) {
      this.calendar.createEvent(title, address, description, new Date(item.valid_until), new Date(item.valid_until)).then(
        (msg) => {
          this.AddedToCalender = true;
          console.log(msg);
        },
        (err) => { console.log(err); }
      );
    }
	}

}
