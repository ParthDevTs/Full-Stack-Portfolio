import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animation';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  animations: [slideInAnimation],
})
export class DefaultComponent implements OnInit {
  topIcon: boolean = false;
  constructor(
    public loader: LoaderService,
    private scroller: ViewportScroller
  ) {}
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['depth'];
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 1000) {
      this.topIcon = true;
    } else {
      this.topIcon = false;
    }
  }

  goToTop() {
    this.scroller.scrollToAnchor('top');
  }
  ngOnInit(): void {}
}
