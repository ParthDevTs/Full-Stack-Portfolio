import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, ProjectRoutingModule, MatIconModule],
})
export class ProjectModule {}
