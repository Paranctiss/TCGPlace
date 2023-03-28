import { Component, OnInit } from '@angular/core';
import {SearchPostModel} from "../../../core/models/search-post.model";
import {ItemModel} from "../../../core/models/item.model";
import {filter, map, Observable, of, tap} from "rxjs";
import {SearchPostService} from "../services/searchPost.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-browse-search-posts',
  templateUrl: './browse-search-posts.component.html',
  styleUrls: ['./browse-search-posts.component.scss'],
})
export class BrowseSearchPostsComponent implements OnInit {

  loading:boolean = true;
  skeletons = [0,0,0,0]
  searchPosts$: Observable<SearchPostModel[] | null> = of([])

  constructor(private searchPostService:SearchPostService) { }

  ngOnInit() {
    this.searchPosts$ = this.searchPostService.getPublicSearchPosts().pipe(
      filter((value) => value !== null),
      tap(_ => this.loading = false),
      map(response => response.body)
    )

  }

}
