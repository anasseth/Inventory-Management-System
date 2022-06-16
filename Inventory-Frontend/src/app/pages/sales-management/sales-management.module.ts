import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesManagementRoutingModule } from './sales-management-routing.module';
import { SalesManagementComponent } from '../sales-management/sales-management.component';


@NgModule({
  declarations: [
    SalesManagementComponent
  ],
  imports: [
    CommonModule,
    SalesManagementRoutingModule
  ]
})
export class SalesManagementModule { }
