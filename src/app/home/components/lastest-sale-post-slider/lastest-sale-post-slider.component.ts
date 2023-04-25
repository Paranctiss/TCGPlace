import { Component, OnInit } from '@angular/core';
import {SearchPostModel} from "../../../core/models/search-post.model";
import {SalePostModel} from "../../../core/models/sale-post.model";
import {ItemModel} from "../../../core/models/item.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lastest-sale-post-slider',
  templateUrl: './lastest-sale-post-slider.component.html',
  styleUrls: ['./lastest-sale-post-slider.component.scss'],
})
export class LastestSalePostSliderComponent implements OnInit {


  salePosts: SalePostModel[] = []
  constructor(private router:Router) { }

  ngOnInit() {

    let itemModel:ItemModel = new ItemModel(
      0,
      "Mewtwo",
      "https://cardcollection.fr/img/cms/Dos_carte_pokemon.jpg",
      "Set de base",
      "20/105"
    )
    let salepost:SalePostModel = new SalePostModel()
    salepost.salePostPrice = 20;
    salepost.merch_public = false;
    salepost.merch_remarks = "Super remarques"
    salepost.sale_post_item = itemModel
    this.salePosts.push(salepost)
    this.salePosts.push(salepost)
    this.salePosts.push(salepost)
    this.salePosts.push(salepost)
    this.salePosts.push(salepost)
  }

  navigateTo() {
   this.router.navigateByUrl("/tabs/store");
  }
}
