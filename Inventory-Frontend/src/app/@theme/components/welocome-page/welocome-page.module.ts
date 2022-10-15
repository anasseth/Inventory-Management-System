import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelocomePageRoutingModule } from './welocome-page-routing.module';
import { WelocomePageComponent } from './welocome-page.component';


@NgModule({
  declarations: [
    WelocomePageComponent
  ],
  imports: [
    CommonModule,
    WelocomePageRoutingModule
  ]
})
export class WelocomePageModule { }
