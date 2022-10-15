import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelocomePageComponent } from './welocome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelocomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelocomePageRoutingModule { }
