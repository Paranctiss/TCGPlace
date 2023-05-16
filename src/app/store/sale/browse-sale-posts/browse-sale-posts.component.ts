import { Component, OnInit } from '@angular/core';
import {SalePostModel} from "../../../core/models/sale-post.model";
import {ItemModel} from "../../../core/models/item.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-sale-posts',
  templateUrl: './browse-sale-posts.component.html',
  styleUrls: ['./browse-sale-posts.component.scss'],
})
export class BrowseSalePostsComponent implements OnInit {

  salePosts: SalePostModel[] = []
  constructor(private router:Router) { }

  ngOnInit() {

    let itemModel:ItemModel = new ItemModel(
      0,
      "MewtwoTest",
      "https://cardcollection.fr/img/cms/Dos_carte_pokemon.jpg",
      "Set de base",
      "20/105"
    )
    this.salePosts = 
    [
      {"sale_post_id":1,"salePostPrice":20,"merch_public":false,"merch_remarks":"Super remarques","sale_post_grading_id":1,"sale_post_item":itemModel,"merch_id":1,"merch_price":2},
      {"sale_post_id":2,"salePostPrice":14,"merch_public":false,"merch_remarks":"Super remarques","sale_post_grading_id":1,"sale_post_item":itemModel,"merch_id":1,"merch_price":2},
      {"sale_post_id":3,"salePostPrice":2,"merch_public":false,"merch_remarks":"Super remarques","sale_post_grading_id":1,"sale_post_item":itemModel,"merch_id":1,"merch_price":2},
      {"sale_post_id":4,"salePostPrice":15,"merch_public":false,"merch_remarks":"Super remarques","sale_post_grading_id":1,"sale_post_item":itemModel,"merch_id":1,"merch_price":2},
      {"sale_post_id":5,"salePostPrice":25,"merch_public":false,"merch_remarks":"Super remarques","sale_post_grading_id":1,"sale_post_item":itemModel,"merch_id":1,"merch_price":2},
      {"sale_post_id":6,"salePostPrice":27,"merch_public":false,"merch_remarks":"Super remarques","sale_post_grading_id":1,"sale_post_item":itemModel,"merch_id":1,"merch_price":2},
      {"sale_post_id":7,"salePostPrice":234,"merch_public":false,"merch_remarks":"Super remarques","sale_post_grading_id":1,"sale_post_item":itemModel,"merch_id":1,"merch_price":2},
    ];
  }

  redirectToAddPost(sale_post_id: number) {
    console.log(sale_post_id);
    this.router.navigateByUrl(`/tabs/store/sale/${sale_post_id}`)
  }
}


