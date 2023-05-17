import { Component } from '@angular/core';
import {LikedSearchPostService} from "../../../core/services/LikedSearchPostService/liked-search-post.service";
import {
  LikedSearchPostResponseModel
} from "../../../core/models/liked-search-post.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent {
  constructor(private likedSearchPostService:LikedSearchPostService) {
  }

  likedSearchPosts$!: Observable<LikedSearchPostResponseModel[]>
  likedSalePosts$!: Observable<LikedSearchPostResponseModel[]>
  loading: boolean = true;
  saleSelected: boolean = true;
  ngOnInit() {
      this.likedSearchPosts$ = this.likedSearchPostService.GetLikedSearchPost()
      this.likedSalePosts$ = this.likedSearchPostService.GetLikedSearchPost()
  }
}
