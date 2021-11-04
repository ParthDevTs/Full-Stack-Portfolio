import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  constructor() {
    this.isDarkTheme = localStorage.getItem('theme') === 'Dark' ? true : false;
    this.setStatus(this.isDarkTheme);
  }
  isDarkTheme;
  darkmode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isdarkMode = this.darkmode.asObservable;

  setStatus(darkStatus: boolean) {
    this.darkmode.next(darkStatus);
  }
}
