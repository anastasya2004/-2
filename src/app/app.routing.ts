
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { NgModule } from '@angular/core';
import { ViewProuctsComponent } from './view-proucts/view-proucts.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'view/:id', component: ViewProuctsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}