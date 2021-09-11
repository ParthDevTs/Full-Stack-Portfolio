import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.animate();
  }

  animate() {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.parth',
        translateX: 60,
        duration: 750,
        // delay: anime.stagger(300, { easing: 'easeOutQuad' }), // increase delay by 100ms for each elements.
      })
      .add({
        targets: '.parth',
        translateX: 0,
        delay: anime.stagger(10000), // increase delay by 100ms for each elements.
      })
      .add({
        targets: '.parth',
        translateX: 0,
        delay: anime.stagger(10000), // increase delay by 100ms for each elements.
      })
      .add({
        targets: '.parth',
        translateX: 0,
        delay: anime.stagger(20000), // increase delay by 100ms for each elements.
      });
  }
}
