import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { } from 'googlemaps';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-discoutns-item',
  templateUrl: './offers-discoutns-item.page.html',
  styleUrls: ['./offers-discoutns-item.page.scss'],
})
export class OffersDiscoutnsItemPage implements OnInit {

  //latitudeInit: any = 40.4530541;
  //longitudeInit: any = -3.6883445;
  zoom: any = 14;
  item: any;

  @ViewChild("map") mapElement;

  constructor(
    private location: Location,
    private actRoute: ActivatedRoute,
  ) {
    if (this.actRoute.snapshot.queryParams.data != null) {
      let getParams = JSON.parse(this.actRoute.snapshot.queryParams.data);
      this.item = getParams.item;
    }
  }

  ngOnInit() {
  }

  ionViewDidEnter() {

    //set map
    let coords = new google.maps.LatLng(Number(this.item.latitude), Number(this.item.longitude));
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
    var marker: google.maps.Marker = new google.maps.Marker({
      map: map,
      position: { lat: Number(this.item.latitude), lng: Number(this.item.longitude) },
    });
   // marker.setPosition({ lat: this.item.latitude, lng: this.longitudeInit })
  }

  goBack() {
    this.location.back();
  }

}
