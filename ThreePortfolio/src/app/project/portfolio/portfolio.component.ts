import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {
  isDarkMode: boolean;

  constructor(
    private scroller: ViewportScroller,
    private darkmode: DarkModeService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.scroller.scrollToAnchor('header');

    this.darkmode.darkmode.subscribe((isDark) => {
      this.isDarkMode = isDark;
      this.change.detectChanges();
    });
  }
}
