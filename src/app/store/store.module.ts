import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {SaleComponent} from "./sale/sale.component";
import {BrowseSalePostsComponent} from "./sale/browse-sale-posts/browse-sale-posts.component";
import {SearchComponent} from "./search/search.component";
import {BrowseSearchPostsComponent} from "./search/browse-search-posts/browse-search-posts.component";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    ExploreContainerComponentModule,
    CoreModule
  ],
  exports: [

  ],
  declarations: [StorePage, SaleComponent, BrowseSalePostsComponent, SearchComponent, BrowseSearchPostsComponent]
})
export class StorePageModule {}
