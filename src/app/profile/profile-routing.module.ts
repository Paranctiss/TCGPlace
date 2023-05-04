import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import {LikesComponent} from "./components/likes/likes.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'likes',
    component: LikesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
