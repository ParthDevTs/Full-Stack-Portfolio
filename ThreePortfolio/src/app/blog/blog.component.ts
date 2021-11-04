import { DarkModeService } from './../dark-mode.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  highlighted: boolean = false;
  constructor(
    private darkModeService: DarkModeService,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.scroller.scrollToAnchor('nav');
    AOS.init();
    this.darkModeService.darkmode.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }
  isDarkMode;

  scrollToTop() {
    document
      .querySelector('#nav')
      .scrollIntoView({ behavior: 'auto', block: 'start' });
  }
  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeService.setStatus(this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'Dark' : 'Light');
  }
}
