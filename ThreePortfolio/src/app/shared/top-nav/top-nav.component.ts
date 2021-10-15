import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit, AfterViewInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    const target = document.querySelector('.parth');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 90,
      deleteSpeed: 80,
      typeColor: 'white',
      cursorColor: 'grey',
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

  goToAbout() {
    this.viewportScroller.scrollToAnchor('about');
  }
  goToTechStack() {
    this.viewportScroller.scrollToAnchor('techStack');
  }
  goToExperience() {
    this.viewportScroller.scrollToAnchor('experience');
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
