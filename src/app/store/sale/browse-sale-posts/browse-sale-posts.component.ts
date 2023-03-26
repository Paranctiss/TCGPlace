import { Component, OnInit } from '@angular/core';
import {SalePostModel} from "../../../core/models/sale-post.model";
import {ItemModel} from "../../../core/models/item.model";

@Component({
  selector: 'app-browse-sale-posts',
  templateUrl: './browse-sale-posts.component.html',
  styleUrls: ['./browse-sale-posts.component.scss'],
})
export class BrowseSalePostsComponent implements OnInit {

  salePosts: SalePostModel[] = []
  constructor() { }

  ngOnInit() {

    let itemModel:ItemModel = new ItemModel()
    itemModel.item_img = "https://cardcollection.fr/img/cms/Dos_carte_pokemon.jpg";
    itemModel.item_extension = "SDB"
    itemModel.item_name = "Mewtwo 20/105"

    let salepost:SalePostModel = new SalePostModel()
    salepost.merch_price = 20;
    salepost.merch_public = false;
    salepost.merch_remarks = "Super remarques"
    salepost.sale_post_item = itemModel
    this.salePosts.push(salepost)
    this.salePosts.push(salepost)
    this.salePosts.push(salepost)
    this.salePosts.push(salepost)
    this.salePosts.push(salepost)

  }

}
