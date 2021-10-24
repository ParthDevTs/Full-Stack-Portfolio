import { ViewportScroller } from '@angular/common';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from 'src/app/highlight.service';

@Component({
  selector: 'app-smooth-scroll',
  templateUrl: './smooth-scroll.component.html',
  styleUrls: [
    './smooth-scroll.component.css',
    './smooth-scroll.component.scss',
  ],
})
export class SmoothScrollComponent implements OnInit, AfterViewChecked {
  constructor(
    private highlightService: HighlightService,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
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
