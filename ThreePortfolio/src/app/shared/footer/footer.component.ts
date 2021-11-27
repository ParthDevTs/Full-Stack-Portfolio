import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', 'footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  instagram = 'fa-instagram';

  ngOnInit(): void {}

  scrollAbout() {
    this.scroller.scrollToAnchor('about');
  }
  scrollTech() {
    this.scroller.scrollToAnchor('techStack');
  }
  scrollExp() {
    this.scroller.scrollToAnchor('experience');
  }
}
