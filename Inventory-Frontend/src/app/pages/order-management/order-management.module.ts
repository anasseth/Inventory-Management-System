import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderManagementRoutingModule } from './order-management-routing.module';
import { OrderManagementComponent } from './order-management.component';
import { OrderTakingComponent } from './order-taking/order-taking.component';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import {
  NbProgressBarModule,
  NbTabsetModule,
  NbListModule,
} from '@nebular/theme';


@NgModule({
  declarations: [
    OrderManagementComponent,
    OrderTakingComponent
  ],
  imports: [
    CommonModule,
    OrderManagementRoutingModule,
    BarcodeScannerLivestreamModule,
    ThemeModule,
    MiscellaneousModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbProgressBarModule,
    NbTabsetModule,
    NbListModule,
  ]
})
export class OrderManagementModule { }
