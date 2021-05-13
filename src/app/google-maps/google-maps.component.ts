import { Component, OnInit, ViewChild } from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  @ViewChild ('map') mapElement;
  map: any;
  constructor() {

   }

  ngOnInit() { this.initMap();}


   initMap(){
     this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
   }


}
