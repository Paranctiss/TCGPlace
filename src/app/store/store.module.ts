import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {SaleComponent} from "./sale/sale.component";
import {BrowseSalePostsComponent} from "./sale/browse-sale-posts/browse-sale-posts.component";
import {AddSalePostComponent} from "../add-post/add-sale-post/add-sale-post.component";
import {AddReferencePostComponent} from "../add-post/add-reference-post/add-reference-post.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    ExploreContainerComponentModule
  ],
  exports: [

  ],
  declarations: [StorePage, SaleComponent, BrowseSalePostsComponent]
})
export class StorePageModule {}
