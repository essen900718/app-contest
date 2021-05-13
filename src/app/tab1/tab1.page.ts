import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // barLoader: boolean;
  // value: number;

  constructor() { }

  // showProgressBar() {
  //   this.barLoader = true;
  // }

  // hideProgressBar() {
  //   this.barLoader = false;
  // }

  // initeProgressBar() {
  //   this.showProgressBar()
  //   for (let index = 0; index <= 100; index++) {
  //     this.addPbar(+index);
  //   }
  // }

  // addPbar(i) {
  //   setTimeout(() => {
  //     let apc = (i / 100)
  //     this.value = apc;
  //   }, 30 * i);
  // }

}
