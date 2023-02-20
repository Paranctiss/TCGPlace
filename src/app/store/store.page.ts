import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor() { }

  saleSelected = true;

  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }

  ngOnInit() {
  }

}
