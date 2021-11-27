import { ViewportScroller } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
import { HighlightService } from 'src/app/highlight.service';

@Component({
  selector: 'app-parallax-effect',
  templateUrl: './parallax-effect.component.html',
  styleUrls: [
    './parallax-effect.component.css',
    './parallax-effect.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParallaxEffectComponent implements OnInit, AfterViewChecked {
  isDarkMode: boolean;
  constructor(
    private highlightService: HighlightService,
    private scroller: ViewportScroller,
    private darkmode: DarkModeService,
    private cd: ChangeDetectorRef
  ) {}
  private highlighted: boolean = false;
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void {
    this.darkmode.darkmode.subscribe((darkmode) => {
      this.isDarkMode = darkmode;
      this.cd.markForCheck();
    });
    this.scroller.scrollToAnchor('display');
  }
}
