import {
  AfterContentChecked,
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  highlighted: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  scrollToTop() {
    document
      .querySelector('#nav')
      .scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}
