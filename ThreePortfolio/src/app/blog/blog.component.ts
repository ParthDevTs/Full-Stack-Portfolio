import { DarkModeService } from './../dark-mode.service';
import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {
  highlighted: boolean = false;
  constructor(
    private darkModeService: DarkModeService,
    private scroller: ViewportScroller,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.scroller.scrollToAnchor('nav');
    AOS.init();
    this.darkModeService.darkmode.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.cd.markForCheck();
    });
  }
  isDarkMode;

  scrollToTop() {
    document
      .querySelector('#nav')
      .scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}
