import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSalePostComponent } from './sale/view-sale-post/view-sale-post.component';

import { StorePage } from './store.page';
import {ViewSearchPostComponent} from "./search/view-search-post/view-search-post.component";

const routes: Routes = [
  {
    path: '',
    component: StorePage
  },
  {
    path: 'sale/:id',
    component: ViewSalePostComponent
  },
  {
    path: 'search/:id',
    component: ViewSearchPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorePageRoutingModule {}
