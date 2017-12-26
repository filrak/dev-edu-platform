import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopComponent } from './workshop.component'

export const routes: Routes = [
  {
    path: '',
    component: WorkshopComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
   ],
  declarations: [
    WorkshopComponent
  ]
})
export class WorkshopModule { }
