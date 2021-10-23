import { ViewportScroller } from '@angular/common';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.style.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {
    console.log(this.scroller.getScrollPosition());
  }
  ngOnInit(): void {
    if (this.scroller.getScrollPosition()[1] > 0) {
      this.scroller.scrollToAnchor('about');
    }

    AOS.init();
  }

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section).scrollIntoView();
  }
}
