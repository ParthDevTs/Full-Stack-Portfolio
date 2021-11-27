import { ViewportScroller } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
import { HighlightService } from 'src/app/highlight.service';

@Component({
  selector: 'app-smooth-scroll',
  templateUrl: './smooth-scroll.component.html',
  styleUrls: [
    './smooth-scroll.component.css',
    './smooth-scroll.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmoothScrollComponent implements OnInit, AfterViewChecked {
  constructor(
    private highlightService: HighlightService,
    private scroller: ViewportScroller,
    private darkmode: DarkModeService,
    private cd: ChangeDetectorRef
  ) {}

  isDarkMode: boolean;
  ngOnInit(): void {
    this.darkmode.darkmode.subscribe((darkmode) => {
      this.isDarkMode = darkmode;
      this.cd.markForCheck();
    });
    this.scroller.scrollToAnchor('display');
  }

  private highlighted: boolean = false;
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  scroll1() {
    this.scroller.scrollToAnchor('section1');
  }
  scroll2() {
    this.scroller.scrollToAnchor('section2');
  }
}
