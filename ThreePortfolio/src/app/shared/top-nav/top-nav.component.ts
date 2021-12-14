import { LoaderService } from './../../loader.service';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import Typewriter from 't-writer.js';
import {
  NavigationEnd,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent implements OnInit, AfterViewInit {
  isDarkMode;
  showDarkMode = false;

  constructor(
    public loader: LoaderService,
    private router: Router,
    private darkmode: DarkModeService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loader.setStatus(true);
      } else if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.loader.setStatus(false);
        }, 700);
      }
    });

    this.darkmode.darkmode.subscribe(
      (darkmode) => (this.isDarkMode = darkmode)
    );

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url == '' || this.router.url == '/') {
          this.showDarkMode = false;
        } else {
          this.showDarkMode = true;
        }
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

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkmode.setStatus(this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'Dark' : 'Light');
  }
}
