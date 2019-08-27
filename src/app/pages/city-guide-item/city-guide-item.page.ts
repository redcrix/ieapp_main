import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { CityGuideService } from '../../services/city-guide.service';
import { } from 'googlemaps';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras } from '@angular/router';
import { get } from 'lodash';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { TruncateModule } from '@yellowspot/ng-truncate';

@Component({
  selector: 'app-city-guide-item',
  templateUrl: './city-guide-item.page.html',
  styleUrls: ['./city-guide-item.page.scss'],
})
export class CityGuideItemPage implements OnInit {

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

  constructor(
    private router: Router,
    private location: Location,
    private _globalServ: GlobalService,
    private _cityGuideServ: CityGuideService,
    private actRoute: ActivatedRoute,
    private iab: InAppBrowser,
    public alertController: AlertController,
    private callNumber: CallNumber
    ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.id = getParams.id;
    }
  }

  ngOnInit() {
  }

  async callWithNumber() {
    const alert = await this.alertController.create({
      subHeader: '18001010101',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Call',
        handler: () => {
          console.log('Confirm Okay');
          this.callNumber.callNumber("18001010101", true)
          .then(res => console.log('Launched dialer!', res))
          .catch(err => console.log('Error launching dialer', err));
        }
      }
      ]
    });

    await alert.present();
  }

  ionViewDidEnter() {
    this._cityGuideServ.getItem(this.id)
    .subscribe(data => {
      this.getItem = data;
      for (let item of this.getItem.article.Places) {
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
      for (let item of this.getItem.article.Places) {
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
    console.log('link: ', get(this.getItem, 'article.website', ''))
    if (get(this.getItem, 'article.website', '') !== '') {
      this.iab.create(get(this.getItem, 'article.website', ''), '_system');
    } 
  }

}
