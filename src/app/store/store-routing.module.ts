import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorePage } from './store.page';
import {AddSalePostComponent} from "../add-post/add-sale-post/add-sale-post.component";

const routes: Routes = [
  {
    path: '',
    component: StorePage
  },
  {
    path: ':id',
    component: AddSalePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorePageRoutingModule {}
