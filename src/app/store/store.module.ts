import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {SaleComponent} from "./sale/sale.component";
import {BrowseSalePostsComponent} from "./sale/browse-sale-posts/browse-sale-posts.component";
import {SearchComponent} from "./search/search.component";
import {BrowseSearchPostsComponent} from "./search/browse-search-posts/browse-search-posts.component";
import {CoreModule} from "../core/core.module";
import {SearchPostCardComponent} from "../core/components/search-post-card/search-post-card.component";
import {SalePostCardComponent} from "../core/components/sale-post-card/sale-post-card.component";
import { ViewSalePostComponent } from './sale/view-sale-post/view-sale-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StorePageRoutingModule,
    ExploreContainerComponentModule,
    CoreModule
  ],
    exports: [
        SalePostCardComponent,
        SearchPostCardComponent

    ],
  declarations: [StorePage, SaleComponent, BrowseSalePostsComponent, SearchComponent, BrowseSearchPostsComponent, SearchPostCardComponent, SalePostCardComponent, ViewSalePostComponent]
})
export class StorePageModule {}
