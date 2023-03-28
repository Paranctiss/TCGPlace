import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostPageRoutingModule } from './add-post-routing.module';

import { AddPostPage } from './add-post.page';
import {AddReferencePostComponent} from "./add-reference-post/add-reference-post.component";
import {AddSalePostComponent} from "./add-sale-post/add-sale-post.component";
import {AddSearchPostComponent} from "./add-search-post/add-search-post.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPostPageRoutingModule
  ],
  exports: [
    AddReferencePostComponent,
    AddSalePostComponent,
    AddSearchPostComponent,
  ],
  declarations: [AddPostPage, AddSalePostComponent, AddSearchPostComponent, AddReferencePostComponent]
})
export class AddPostPageModule {}
