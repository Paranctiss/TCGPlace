import {Component, Input, OnInit} from '@angular/core';
import {SearchPostModel} from "../../models/search-post.model";

@Component({
  selector: 'app-search-post-card',
  templateUrl: './search-post-card.component.html',
  styleUrls: ['./search-post-card.component.scss'],
})
export class SearchPostCardComponent implements OnInit {

  @Input() searchPost!: SearchPostModel
  constructor() { }

  ngOnInit() {
  }

}
