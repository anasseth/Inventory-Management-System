import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderManagementComponent } from './order-management.component';
import { OrderTakingComponent } from './order-taking/order-taking.component';

const routes: Routes = [
  {
    path: '',
    component: OrderManagementComponent,
    children: [
      {
        path: 'order-taking',
        component: OrderTakingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
