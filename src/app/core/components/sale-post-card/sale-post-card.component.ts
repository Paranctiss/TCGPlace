import {Component, Input, OnInit} from '@angular/core';
import {SalePostModel} from "../../models/sale-post.model";
import {LikedSalePostService} from "../../services/LikedSalePostService/liked-sale-post.service";

@Component({
  selector: 'app-sale-post-card',
  templateUrl: './sale-post-card.component.html',
  styleUrls: ['./sale-post-card.component.scss'],
})
export class SalePostCardComponent implements OnInit {

  @Input() salePost!: SalePostModel
  constructor(private likedSalePostService:LikedSalePostService) {
  }

  ngOnInit() {}

  LikeSalePost(salePostId: string, event: MouseEvent) {
    event.stopPropagation();
    this.salePost.liked = true;
    this.likedSalePostService.LikeSalePost(salePostId).subscribe()
  }

  UnLikeSalePost(salePostId:string, event: MouseEvent){
    event.stopPropagation();
    this.salePost.liked = false;
    this.likedSalePostService.UnLikeSalePost(salePostId).subscribe()
  }
}
