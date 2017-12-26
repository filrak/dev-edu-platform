import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetService } from './services/widget.service'

import { WorkshopComponent } from './components/workshop/workshop.component'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WidgetService
  ],
  declarations: [
    WorkshopComponent
  ],
  exports: [
    WorkshopComponent
  ]
})
export class WidgetModule { }
