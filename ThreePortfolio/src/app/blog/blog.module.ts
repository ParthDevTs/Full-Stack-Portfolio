import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HighlightServiceService } from '../highlight-service.service';
import { FirstBlogComponent } from './first-blog/first-blog.component';

@NgModule({
  declarations: [BlogComponent, FirstBlogComponent],
  imports: [CommonModule, BlogRoutingModule],
  providers: [HighlightServiceService],
})
export class BlogModule {}
