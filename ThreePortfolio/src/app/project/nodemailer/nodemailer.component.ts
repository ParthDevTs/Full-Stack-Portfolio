import { DarkModeService } from 'src/app/dark-mode.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

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

  isDarkmode;

  ngOnInit(): void {
    this.scroller.scrollToAnchor('node__section');
    this.darkmode.darkmode.subscribe((data) => {
      this.isDarkmode = data;
    });
  }
}
