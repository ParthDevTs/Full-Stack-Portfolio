import { LoaderService } from './../../loader.service';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit, AfterViewInit {
  constructor(public loader: LoaderService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loader.setStatus(true);
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loader.setStatus(false);
      }
    });
  }

  ngAfterViewInit() {
    const target = document.querySelector('.parth');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 90,
      deleteSpeed: 80,
      typeColor: 'white',
      cursorColor: 'black',
    });
    writer
      .type('Parth')
      .rest(500)
      .type(' Kathuria')
      .rest(5000)
      .changeOps({ deleteSpeed: 80 })
      .clear()
      .type('Full')
      .rest(500)
      .type(' Stack')
      .rest(500)
      .clear()
      .type('Developer')
      .rest(500)
      .clear()
      .start();
  }

  navbarFixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 700) {
      this.navbarFixed = true;
    } else {
      this.navbarFixed = false;
    }
  }
}
