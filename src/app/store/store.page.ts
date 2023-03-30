import {Component, OnInit, ViewChild} from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  constructor() { }
  saleSelected = true;

  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }

  ngOnInit() {
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
