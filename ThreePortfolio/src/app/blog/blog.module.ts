import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HighlightService } from '../highlight.service';
import { FirstBlogComponent } from './first-blog/first-blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ParallaxEffectComponent } from './parallax-effect/parallax-effect.component';
import { SmoothScrollComponent } from './smooth-scroll/smooth-scroll.component';

@NgModule({
  declarations: [
    BlogComponent,
    FirstBlogComponent,
    ParallaxEffectComponent,
    SmoothScrollComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  providers: [HighlightService],
})
export class BlogModule {}
