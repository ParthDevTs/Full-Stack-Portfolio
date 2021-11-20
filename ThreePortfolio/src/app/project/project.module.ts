import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { MatIconModule } from '@angular/material/icon';
import { NodemailerComponent } from './nodemailer/nodemailer.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ProjectComponent, NodemailerComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
})
export class ProjectModule {}
