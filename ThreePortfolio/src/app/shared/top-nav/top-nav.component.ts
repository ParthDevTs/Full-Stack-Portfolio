import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.animate();
  }

  goToAbout() {
    this.viewportScroller.scrollToAnchor('about');
  }
  goToTechStack() {
    this.viewportScroller.scrollToAnchor('techStack');
  }
  goToProjects() {
    this.viewportScroller.scrollToAnchor('projects');
  }

  animate() {
    var animation = anime({
      targets: '.parth',
      translateX: 50,
      direction: 'alternate',
      loop: true,
      easing: 'steps(6)',
      autoplay: false,
      duration: 1050,
      delay: 2000,
    });

    function loop(t) {
      animation.tick(t);
      let customRAF = requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  }
}
