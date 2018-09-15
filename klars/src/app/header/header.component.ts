import { Component } from '@angular/core';

import { NavigationService } from '../navigation.service'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private navigationService: NavigationService
  ) {}

  public onReroute(event) {
    if (!event) {
      this.navigationService.navigate("Home")
    } else {
      this.navigationService.navigate(event.target.innerHTML)
    }
  }
}
