import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skeleton-grid',
  templateUrl: './skeleton-grid.component.html',
  styleUrls: ['./skeleton-grid.component.scss'],
})
export class SkeletonGridComponent implements OnInit {

  skeletons = [0,0,0,0]
  constructor() { }

  ngOnInit() {}

}
