import { DarkModeService } from 'src/app/dark-mode.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-nodemailer',
  templateUrl: './nodemailer.component.html',
  styleUrls: ['./nodemailer.component.css', './nodemailer.component.scss'],
})
export class NodemailerComponent implements OnInit, OnDestroy {
  constructor(
    private scroller: ViewportScroller,
    public darkmode: DarkModeService
  ) {}
  ngOnDestroy(): void {
    this.darkmode.darkmode.unsubscribe;
  }

  isDarkMode;

  ngOnInit(): void {
    this.scroller.scrollToAnchor('node__section');
    this.darkmode.darkmode.subscribe((data) => {
      this.isDarkMode = data;
    });
    AOS.init();
  }
}
