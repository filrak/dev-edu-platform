import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WidgetComponent } from './components/widget/widget.component'

@NgModule({
  imports: [
    CommonModule,
    WorkshopRoutingModule
  ],
  declarations: [
    WidgetComponent
  ],
  exports: [
    WidgetComponent
  ]
})
export class WorkshopModule { }
