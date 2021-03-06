import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  constructor(
    private scroller: ViewportScroller,
    private darkModeService: DarkModeService,
    private cd: ChangeDetectorRef
  ) {}
  isDarkMode;
  ngOnInit(): void {
    this.scroller.scrollToAnchor('comingSoon');
    this.darkModeService.darkmode.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.cd.markForCheck();
    });
  }
}
