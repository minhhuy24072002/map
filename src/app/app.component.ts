import { LatLngBounds } from '@agm/core';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'; 
import { data } from "./data";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  openedWindow;
  datas: any[] = data;
  latitude: number = 12.3826401;
  longitude: number = 64.8820801;
  zoom: number = 0;  
  NorthEast_lng: any;
  NorthEast_lat: any;
  SouthWest_lng: any;
  SouthWest_lat: any;

  constructor() { }
  ngOnInit() { }
  openWindow(data) {
    this.latitude = data.address.latitude;
    this.longitude = data.address.longitude;
    this.zoom = 5;
    setTimeout(() => {
      this.openedWindow = data.id;
    }, 100);
  }
  closeWindow(id) {
    this.openedWindow = null;
  }
  isInfoWindowOpen(id) {
    return this.openedWindow == id;
  }

  selectImage = (currData: typeof data[0], index: number) => {
    console.log("Index: " + index);
    currData.selectedIndex = index;
    console.log("Selected Index: " + currData.selectedIndex);
  }
  
  onBoundsChange(bounds: LatLngBounds) {
    this.NorthEast_lng = bounds.getNorthEast().lng();
    this.NorthEast_lat = bounds.getNorthEast().lat();
    this.SouthWest_lng = bounds.getSouthWest().lng();
    this.SouthWest_lat = bounds.getSouthWest().lat();
    console.log(this.NorthEast_lat + ' ' + this.NorthEast_lng);
    console.log(this.SouthWest_lat + ' ' + this.SouthWest_lng);
  }

  check(item: typeof data[0]){
    let temp_lat : number = item.address.latitude;
    let temp_lng : number = item.address.longitude;
    
    if (this.NorthEast_lat < this.SouthWest_lat)
    {
      if (temp_lat >= this.NorthEast_lat && temp_lat <= this.SouthWest_lat)
        return false;
    }
    else
    {
      if (temp_lat >= this.NorthEast_lat || temp_lat <= this.SouthWest_lat)
        return false;
    }

    if (this.NorthEast_lng < this.SouthWest_lng)
    {
      if (temp_lng >= this.NorthEast_lng && temp_lng <= this.SouthWest_lng)
        return false;
    }
    else
    {
      if (temp_lng >= this.NorthEast_lng || temp_lng <= this.SouthWest_lng)
        return false;
    }

    return true;
  }

}
 