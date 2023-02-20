import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {SaleComponent} from "./sale/sale.component";
import {BrowseSalePostsComponent} from "./sale/browse-sale-posts/browse-sale-posts.component";
import {AddSalePostComponent} from "./sale/add-sale-post/add-sale-post.component";
import {AddReferenceSalePostComponent} from "./sale/add-reference-sale-post/add-reference-sale-post.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StorePageRoutingModule,
        ExploreContainerComponentModule
    ],
  declarations: [StorePage, SaleComponent, BrowseSalePostsComponent, AddSalePostComponent, AddReferenceSalePostComponent]
})
export class StorePageModule {}
