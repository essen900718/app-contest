import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  homeIcon = '../assets/svg/footsteps-outline.svg';
  mapIcon = '../assets/svg/footsteps-outline.svg';
  backpackIcon = '../assets/svg/footsteps-outline.svg';
  constructor() {}


changehomeIcon(): void {
  // change news icon
  this.homeIcon = '../assets/svg/logo-tux.svg';

  // reset others icon
  this.mapIcon = '../assets/svg/footsteps-outline.svg';
  this.backpackIcon = '../assets/svg/footsteps-outline.svg';
}

changemapIcon(): void {
  // change user icon
  this.mapIcon = '../assets/svg/map-outline.svg';

  // reset others icon
  this.homeIcon = '../assets/svg/footsteps-outline.svg';
  this.backpackIcon = '../assets/svg/footsteps-outline.svg';
}

changebackpackIcon(): void {
  // change user icon
  this.backpackIcon = '../assets/svg/people-outline.svg';

  // reset others icon
  this.homeIcon = '../assets/svg/footsteps-outline.svg';
  this.mapIcon = '../assets/svg/footsteps-outline.svg';
}
}

