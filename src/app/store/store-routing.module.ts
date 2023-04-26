import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSalePostComponent } from './sale/view-sale-post/view-sale-post.component';

import { StorePage } from './store.page';

const routes: Routes = [
  {
    path: '',
    component: StorePage
  },
  {
    path: 'sale/:id',
    component: ViewSalePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorePageRoutingModule {}
