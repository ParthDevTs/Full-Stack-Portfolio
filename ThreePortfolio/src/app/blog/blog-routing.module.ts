import { SmoothScrollComponent } from './smooth-scroll/smooth-scroll.component';
import { FirstBlogComponent } from './first-blog/first-blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { ParallaxEffectComponent } from './parallax-effect/parallax-effect.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'positioning', component: FirstBlogComponent, data: { depth: 3 } },
  { path: 'parallax', component: ParallaxEffectComponent, data: { depth: 3 } },
  {
    path: 'smoothScroll',
    component: SmoothScrollComponent,
    data: { depth: 3 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
