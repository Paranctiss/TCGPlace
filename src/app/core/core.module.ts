import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonGridComponent} from "./components/skeleton-grid/skeleton-grid.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [SkeletonGridComponent],
  exports: [
    SkeletonGridComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CoreModule { }
