import { ViewportScroller } from '@angular/common';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from 'src/app/highlight.service';

@Component({
  selector: 'app-parallax-effect',
  templateUrl: './parallax-effect.component.html',
  styleUrls: [
    './parallax-effect.component.css',
    './parallax-effect.component.scss',
  ],
})
export class ParallaxEffectComponent implements OnInit, AfterViewChecked {
  constructor(
    private highlightService: HighlightService,
    private scroller: ViewportScroller
  ) {}
  private highlighted: boolean = false;
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void {
    this.scroller.scrollToAnchor('display');
  }
}
