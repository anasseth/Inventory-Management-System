import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockInComponent } from './stock-in/stock-in.component';
import { StockManagementComponent } from './stock-management.component';

const routes: Routes = [
  {
    path: '',
    component: StockManagementComponent,
    children: [
      {
        path: 'stock-in',
        component: StockInComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockManagementRoutingModule { }
