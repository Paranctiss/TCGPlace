import { Component, OnInit } from '@angular/core';
import {SalePostModel} from "../../../core/models/sale-post.model";
import {ItemModel} from "../../../core/models/item.model";
import {PictureModel} from "../../../core/models/picture.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-sale-posts',
  templateUrl: './browse-sale-posts.component.html',
  styleUrls: ['./browse-sale-posts.component.scss'],
})
export class BrowseSalePostsComponent implements OnInit {

  salePosts: SalePostModel[] = []
  pictures: PictureModel[] = []
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
      {"salePostId":1,"price":20,"isPublic":false,"remarks":"Super remarques","gradingId":1,"itemId":itemModel, "userId": 1, "statePostId": "C", "pictures": this.pictures, "merch_remarks" : "cool","merch_public": true, "merch_id": 1,"merch_price":2},
      {"salePostId":2,"price":14,"isPublic":false,"remarks":"Super remarques","gradingId":1,"itemId":itemModel, "userId": 1, "statePostId": "C", "pictures": this.pictures, "merch_remarks" : "cool","merch_public": true,"merch_id":1,"merch_price":2},
      {"salePostId":3,"price":2,"isPublic":false,"remarks":"Super remarques","gradingId":1,"itemId":itemModel, "userId": 1, "statePostId": "C", "pictures": this.pictures, "merch_remarks" : "cool","merch_public": true,"merch_id":1,"merch_price":2},
      {"salePostId":4,"price":15,"isPublic":false,"remarks":"Super remarques","gradingId":1,"itemId":itemModel, "userId": 1, "statePostId": "C", "pictures": this.pictures, "merch_remarks" : "cool","merch_public": true,"merch_id":1,"merch_price":2},
      {"salePostId":5,"price":25,"isPublic":false,"remarks":"Super remarques","gradingId":1,"itemId":itemModel, "userId": 1, "statePostId": "C", "pictures": this.pictures, "merch_remarks" : "cool","merch_public": true,"merch_id":1,"merch_price":2},
      {"salePostId":6,"price":27,"isPublic":false,"remarks":"Super remarques","gradingId":1,"itemId":itemModel, "userId": 1, "statePostId": "C", "pictures": this.pictures, "merch_remarks" : "cool","merch_public": true,"merch_id":1,"merch_price":2},
      {"salePostId":7,"price":234,"isPublic":false,"remarks":"Super remarques","gradingId":1,"itemId":itemModel, "userId": 1, "statePostId": "C", "pictures": this.pictures, "merch_remarks" : "cool","merch_public": true,"merch_id":1,"merch_price":2},
    ];
  }

  redirectToAddPost(sale_post_id: number) {
    console.log(sale_post_id);
    this.router.navigateByUrl(`/tabs/store/sale/${sale_post_id}`)
  }
}


