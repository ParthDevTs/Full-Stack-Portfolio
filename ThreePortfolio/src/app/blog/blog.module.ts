import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HighlightService } from '../highlight.service';
import { FirstBlogComponent } from './first-blog/first-blog.component';

@NgModule({
  declarations: [BlogComponent, FirstBlogComponent],
  imports: [CommonModule, BlogRoutingModule],
  providers: [HighlightService],
})
export class BlogModule {}
