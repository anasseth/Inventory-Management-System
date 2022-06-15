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

import { ThemeModule } from '../../@theme/theme.module';
import { SetupsRoutingModule } from './setups-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ColorSetupComponent } from './color-setup/color-setup.component';
import { LocationsSetupComponent } from './locations-setup/locations-setup.component';
import { SizeSetupComponent } from './size-setup/size-setup.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { UsersSetupComponent } from './users-setup/users-setup.component';
import { UnitOfMeasurementSetupComponent } from './unit-of-measurement-setup/unit-of-measurement-setup.component';


@NgModule({
  declarations: [
    ColorSetupComponent,
    LocationsSetupComponent,
    SizeSetupComponent,
    CompanySetupComponent,
    UsersSetupComponent,
    UnitOfMeasurementSetupComponent
  ],
  imports: [
    CommonModule,
    SetupsRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    SetupsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbProgressBarModule,
    NbTabsetModule,
    NbListModule,
  ]
})
export class SetupsModule { }
