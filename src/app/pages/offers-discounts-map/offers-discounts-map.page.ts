import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { Platform } from '@ionic/angular';
import { GlobalService } from '../../services/global.service';
import { OfferDiscountService } from '../../services/offer-discount.service';
import { Router, NavigationExtras } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { OffersDiscountsCodePage } from '../offers-discounts-code/offers-discounts-code.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-offers-discounts-map',
  templateUrl: './offers-discounts-map.page.html',
  styleUrls: ['./offers-discounts-map.page.scss'],
})
export class OffersDiscountsMapPage implements OnInit {

  latitudeInit: any = 40.644180;
  longitudeInit: any = -3.994090;
  zoom: any = 14;
  distanceTop: any = 0;
  code: any;
  map: any;
  listOD: any;
  markerUser: google.maps.Marker;
  positionsPermission: boolean;
  mapOptions: google.maps.MapOptions;
  state: any = 0;

  @ViewChild("map") mapElement;

  constructor(
    private platform: Platform,
    private _globalServ: GlobalService,
    private _offerDiscountServ: OfferDiscountService,
    private router: Router,
    private launchNavigator: LaunchNavigator,
    private alertController: AlertController,
    private geolocation: Geolocation,
    private location: Location,
    private modalController: ModalController
  ) {
    var options = {
      enableHighAccuracy: true,
      timeout: 725000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('*********', position);
      (<HTMLInputElement>document.getElementById('latInit')).value = String(position.coords.latitude);
      (<HTMLInputElement>document.getElementById('longInit')).value = String(position.coords.longitude);
    });
    if (platform.height() < 800) {
      this.distanceTop = 400;
    }
    if (platform.height() > 800) {
      this.distanceTop = 900;
    }
  }

  ngOnInit() {
    document.getElementById("drawer-content").style.display = 'none';
  }

  ionViewDidEnter() {
    this._offerDiscountServ.getListFiltered(this._globalServ.idUser).subscribe(data => {
      this.listOD = data;
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

      let iconPath;
      iconPath = 'assets/img/marker_percent.png';

      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);


      this.markerUser = new google.maps.Marker({
        map: this.map,
        position: { lat: Number((<HTMLInputElement>document.getElementById('latInit')).value), lng: Number((<HTMLInputElement>document.getElementById('longInit')).value) },
        icon: 'assets/img/marker_user.png',
      });
      this.map.setCenter({ lat: Number((<HTMLInputElement>document.getElementById('latInit')).value), lng: Number((<HTMLInputElement>document.getElementById('longInit')).value) });


      for (let item of this.listOD.discounts) {
        var marker: google.maps.Marker = new google.maps.Marker({
          map: this.map,
          position: { lat: Number(item.latitude), lng: Number(item.longitude) },
          icon: iconPath
        });

        /* google.maps.event.addListener(marker, 'click', function() {
          console.log('clicked marker!1');
          }
         ); */

        google.maps.event.addListener(marker, 'click', (function (marker) {
          return function () {
            console.log('clicked marker!2');
            document.getElementById("drawer-content").style.display = 'block';
            let state: HTMLElement = document.getElementById('state') as HTMLElement;
            state.click();
            (<HTMLInputElement>document.getElementById('all')).value = JSON.stringify(item);
            document.getElementById('avatar').innerHTML = item.company;
            document.getElementById('title').innerHTML = item.title;
            document.getElementById('validUntil').innerHTML = 'Valid until ' + item.validUntil;
            document.getElementById('address').innerHTML = item.address;
            (<HTMLInputElement>document.getElementById('imgDesc')).src = item.image;
            (<HTMLInputElement>document.getElementById('imgProfile')).src = item.image;
          }
        })(marker));
      }

    });
  }

  async goToCode() {
    this.code = JSON.parse((<HTMLInputElement>document.getElementById('all')).value);
    const modal = await this.modalController.create({
      component: OffersDiscountsCodePage,
      componentProps: {
        'code': this.code.discountCode
      }
    });
    return await modal.present();
  }

  goToDirections() {
    let code = JSON.parse((<HTMLInputElement>document.getElementById('all')).value);
    let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS
    }

    this.launchNavigator.navigate(code.address, options)
      .then(
        success => console.log('Launched navigator'),
        error => {
          console.log('Error launching navigator', error);
          this.messageMap();
        }
      );
  }

  stateFunc() {
    this.state = 0;
    setTimeout(() => {
      this.state = 2;
    }, 500); 
  }

  async messageMap() {
    let titleLabel;
    let message;
    let okLabel;
    if (this._globalServ.language == 'en') {
      titleLabel = 'Message';
      okLabel = 'Ok';
      message = 'Install or Activate Google maps';
    }
    if (this._globalServ.language == 'es') {
      titleLabel = 'mensage';
      okLabel = 'Aceptar';
      message = 'Instalar o Activar Google maps';
    }
    const alert = await this.alertController.create({
      header: titleLabel,
      message: message,
      buttons: [
        {
          text: okLabel,
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  refreshLatLong() {
    this.ionViewDidEnter();
  }


  goBack() {
    this.location.back();
  }

}
