import {Component, OnDestroy, OnInit} from '@angular/core';
import {SalePostModel} from "../../../core/models/sale-post.model";
import {ItemModel} from "../../../core/models/item.model";
import {PictureModel} from "../../../core/models/picture.model";
import { Router } from '@angular/router';
import {SalePostService} from "../services/sale-post.service";
import {filter, map, Observable, of, scan, Subscription, tap} from "rxjs";
import {SearchPostModel} from "../../../core/models/search-post.model";
import {da, ta, th} from "date-fns/locale";
import {InfiniteScrollCustomEvent} from "@ionic/angular";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-browse-sale-posts',
  templateUrl: './browse-sale-posts.component.html',
  styleUrls: ['./browse-sale-posts.component.scss'],
})
export class BrowseSalePostsComponent implements OnInit, OnDestroy {

  pictures: PictureModel[] = []
  isLoading : boolean = true
  currentPage : number = 1
  list : SalePostModel[] = []
  private subscription: Subscription = new Subscription();

  constructor(private router:Router, private saleService : SalePostService) { }

  ngOnInit() {
    this.subscription.add(
      this.getSales().subscribe()
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onIonInfinite(ev : any) {
    this.currentPage++
    setTimeout(() => {
      if(ev !== null) {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }
      this.subscription.add(
        this.getSales().subscribe()
      );
    }, 1000);
  }
  getSales() {
   return this.saleService.getPublicSalePosts(this.currentPage).pipe(
     filter(value => value !== null),
     tap(val => {
       this.isLoading = false
       if(val.body !== null){
         this.list = this.list.concat(val.body);
       }
     }),
     map(response => response.body),
   )
  }

  redirectToAddPost(sale_post_id: number) {
    console.log(sale_post_id);
    this.router.navigateByUrl(`/tabs/store/sale/${sale_post_id}`)
  }
}


