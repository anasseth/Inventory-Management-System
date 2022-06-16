import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
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
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';

import { StockManagementRoutingModule } from './stock-management-routing.module';
import { StockInComponent } from './stock-in/stock-in.component';

@NgModule({
  declarations: [
    StockInComponent
  ],
  imports: [
    CommonModule,
    StockManagementRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbProgressBarModule,
    NbTabsetModule,
    NbListModule,
  ]
})
export class StockManagementModule { }
