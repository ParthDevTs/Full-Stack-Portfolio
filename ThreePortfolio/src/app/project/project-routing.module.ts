import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodemailerComponent } from './nodemailer/nodemailer.component';

import { ProjectComponent } from './project.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'nodemailer', component: NodemailerComponent, data: { depth: 5 } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
