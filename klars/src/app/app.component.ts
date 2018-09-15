import { Component, OnInit } from '@angular/core'
import { WindowType } from './types/window-types.type'

import { Subscription } from 'rxjs'

import { NavigationService } from './navigation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KLARS Photography'

  private currentWindow: WindowType
  private navigationSubscription: Subscription

  constructor(
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.currentWindow = "Home"
    this.navigationSubscription = this.navigationService.getUpdateAlerts().subscribe(
      (data) => {
        this.currentWindow = data.data
      }
    )
  }
}
