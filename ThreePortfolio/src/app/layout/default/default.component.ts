import { Location, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
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
  goBackIcon: boolean = false;
  backIcon;
  constructor(
    public loader: LoaderService,
    private scroller: ViewportScroller,
    private location: Location,
    private router: Router
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

    if (window.scrollY > 700) {
      this.backIcon = true;
    } else {
      this.backIcon = false;
    }
  }

  goToTop() {
    this.scroller.scrollToAnchor('top');
  }

  goBack = () => {
    this.location.back();
  };
  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url == '/home') {
          this.goBackIcon = false;
        } else {
          this.goBackIcon = true;
        }
      }
    });
  }
}
