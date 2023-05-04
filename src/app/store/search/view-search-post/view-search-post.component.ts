import { Component } from '@angular/core';
import {SearchPostService} from "../services/searchPost.service";
import {ActivatedRoute} from "@angular/router";
import {SearchPostModel} from "../../../core/models/search-post.model";
import {filter, map, Observable, of, tap} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {UserService} from "../../../core/services/UserService/user.service";

@Component({
  selector: 'app-view-search-post',
  templateUrl: './view-search-post.component.html',
  styleUrls: ['./view-search-post.component.scss']
})
export class ViewSearchPostComponent {

  SearchPost$:Observable<SearchPostModel | null> = of(new SearchPostModel())
  UserSearchPost$:Observable<SearchPostModel[] | null> = of([])
  loading: boolean = true;
  constructor(private searchPostService:SearchPostService,
              private route:ActivatedRoute,
              private userService:UserService) {

  }
  ngOnInit() {
    this.SearchPost$ = this.searchPostService.getSingleSearchPost(this.route.snapshot.params['id']).pipe(
      filter((value) => value !== null),
      tap(_ => this.loading = false),
      map(response => response.body),
    )
    const userID = this.userService.GetCurrentUserID()
    this.UserSearchPost$ = this.searchPostService.getSomeSearchPostForUser(userID, 5).pipe(
      filter((value) => value !== null),
      tap(_ => this.loading = false),
      map(response => response.body),)
  }

}
