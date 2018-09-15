import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { Subject } from 'rxjs'

@Injectable()
export class NavigationService {
  private dataUpdatedSubject = new Subject<any>()
  private currentWindow: string

  constructor() {
    this.initialize()
  }

  initialize() {
    this.currentWindow = "Home"
  }

  private alertUpdatedData(data: {subject: string, data: any}): void {
    this.dataUpdatedSubject.next(data)
  }

  public getUpdateAlerts(): Observable<any> {
    return this.dataUpdatedSubject.asObservable()
  }

  public navigate(window: string) {
    this.currentWindow = window
    this.alertUpdatedData({subject:"navigate", data:window})
  }

  public getCurrentWindow() {
    return this.currentWindow
  }
}
