import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import { IonContent } from '@ionic/angular';
import {PokemonService} from "../core/services/pokemon.service";
import {ToastService} from "../core/services/toast.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  constructor(private toastService:ToastService) { }
  saleSelected = false;

  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }

  ngOnInit() {
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
