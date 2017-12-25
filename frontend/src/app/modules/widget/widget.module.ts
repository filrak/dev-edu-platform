import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';

import { WidgetService } from './services/widget.service'

import { WorkshopComponent } from './components/workshop/workshop.component'

@NgModule({
  imports: [
    CommonModule,
    WidgetRoutingModule
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
