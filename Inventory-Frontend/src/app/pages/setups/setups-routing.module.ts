import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorSetupComponent } from './color-setup/color-setup.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { LocationsSetupComponent } from './locations-setup/locations-setup.component';
import { SetupsComponent } from './setups.component';
import { SizeSetupComponent } from './size-setup/size-setup.component';
import { UnitOfMeasurementSetupComponent } from './unit-of-measurement-setup/unit-of-measurement-setup.component';
import { UsersSetupComponent } from './users-setup/users-setup.component';

const routes: Routes = [
  {
    path: '',
    component: SetupsComponent,
    children: [
      {
        path: 'color',
        component: ColorSetupComponent,
      },
      {
        path: 'location',
        component: LocationsSetupComponent,
      },
      {
        path: 'size',
        component: SizeSetupComponent,
      },
      {
        path: 'uom',
        component: UnitOfMeasurementSetupComponent,
      },
      {
        path: 'user',
        component: UsersSetupComponent,
      },
      {
        path: 'company',
        component: CompanySetupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupsRoutingModule { }
