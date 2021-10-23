import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/highlight.service';

@Component({
  selector: 'position-blog',
  templateUrl: './first-blog.component.html',
  styleUrls: ['./first-blog.component.scss', './first-blog.component.css'],
})
export class FirstBlogComponent implements OnInit, AfterViewChecked {
  constructor(
    private highlightService: HighlightService,
    private scroller: ViewportScroller
  ) {}

  private highlighted: boolean = false;
  ngOnInit(): void {
    this.scroller.scrollToAnchor('nav');
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
