// import { Component, ViewChild,ElementRef} from '@angular/core';
// import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from '@ionic-native/google-maps';
// import { Platform } from '@ionic/angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

declare let google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // sliderOpts ={
  //   zoom:{
  //     maxRatio:3
  //   }
  // };
  // x: number = 0;
  // y: number = 0;

  map: any;
  infoWindows: any=[];
  // options: GeolocationOptions;
  // currentPos: Geoposition;
  markers: any = [
    {
        title: "四系之夜",
        latitude: "24.9708062491169",
        longitude: "121.26778620883391",
        time: "5/20",
        locate: "六館有庠聽"
    },
    {
        title: "畢業典禮",
        latitude: "24.970124647538494",
        longitude: "121.26787662998946",
        time: "6/5",
        locate: "五館前"
    },
    {
      title: "風華之夜",
      latitude: "24.965475368106453",
      longitude: "121.26751561180531",
      time: "6/4",
      locate: "女二宿前廣場"
    },
  ];

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  // constructor(public navCtrl: NavController , private geolocation: Geolocation) {}
  constructor(){}

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers){
    for(let marker of markers){
      let position= new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        time: marker.time,
        locate: marker.locate
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id ="content">'+
                            '<h3 id="firstHeading" class"firstHeading">'+marker.title+'</h3>'+
                            '<h5>' + marker.time + '</h5>'+
                            '<h5>' + marker.locate + '</h5>'+
                            '<ion-button id = "navigate"> Navigate </ion-button>'+
                            '</div>';
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);

    google.maps.event.addListenerOnce(infoWindow, 'domready',() =>{
      document.getElementById('navigate').addEventListener('click',()=>{
        console.log('navigate button clicked!');
        window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.latitude + ',' + marker.longitude)
        ;
      })
    });
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(24.968766963665786, 121.26639196168011);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }
}
