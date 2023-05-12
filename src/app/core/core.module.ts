import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonGridComponent} from "./components/skeleton-grid/skeleton-grid.component";
import {IonicModule} from "@ionic/angular";
import { FullScreenImageComponent } from './components/full-screen-image/full-screen-image.component';



@NgModule({
  declarations: [SkeletonGridComponent, FullScreenImageComponent],
  exports: [
    SkeletonGridComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CoreModule { }
