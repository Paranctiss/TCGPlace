import {Component, Input, OnInit} from '@angular/core';
import {SalePostModel} from "../../models/sale-post.model";

@Component({
  selector: 'app-sale-post-card',
  templateUrl: './sale-post-card.component.html',
  styleUrls: ['./sale-post-card.component.scss'],
})
export class SalePostCardComponent implements OnInit {

  @Input() salePost!: SalePostModel
  constructor() { }

  ngOnInit() {}

}
