import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extension-card-slider',
  templateUrl: './extension-card-slider.component.html',
  styleUrls: ['./extension-card-slider.component.scss'],
})
export class ExtensionCardSliderComponent implements OnInit {

  extensions = [0,0,0,0,0,0,0,0,0]
  constructor() { }

  ngOnInit() {}

}
