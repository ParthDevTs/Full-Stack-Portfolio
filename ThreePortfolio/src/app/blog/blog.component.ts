import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  highlighted: boolean = false;
  constructor(private router: Router, private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.scroller.scrollToAnchor('nav');
    AOS.init();
  }

  scrollToTop() {
    document
      .querySelector('#nav')
      .scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}
