import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WidgetComponent } from './widget/widget.component'

@NgModule({
  imports: [
    CommonModule,
    WorkshopsRoutingModule,
  ],
  declarations: [
    WidgetComponent
  ],
  exports: [
    WidgetComponent
  ]
})
export class WorkshopsModule { }
