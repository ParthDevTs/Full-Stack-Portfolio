import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HighlightServiceService } from 'src/app/highlight-service.service';

@Component({
  selector: 'app-first-blog',
  templateUrl: './first-blog.component.html',
  styleUrls: ['./first-blog.component.scss', './first-blog.component.css'],
})
export class FirstBlogComponent implements OnInit, AfterViewChecked {
  highlighted: boolean = false;
  constructor(private highlightService: HighlightServiceService) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
