import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HighlightService } from '../highlight.service';
import { FirstBlogComponent } from './first-blog/first-blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ParallaxEffectComponent } from './parallax-effect/parallax-effect.component';

@NgModule({
  declarations: [BlogComponent, FirstBlogComponent, ParallaxEffectComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [HighlightService],
})
export class BlogModule {}
