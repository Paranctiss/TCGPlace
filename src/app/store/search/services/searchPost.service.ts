import {Injectable} from "@angular/core";
import {SearchPostModel} from "../../../core/models/search-post.model";
import {Observable, map} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class SearchPostService{
  constructor(private http: HttpClient) {}

  getPublicSearchPosts(): Observable<HttpResponse<SearchPostModel[]>>{
    return this.http.get<SearchPostModel[]>('https://localhost:7033/SearchPost/getPublics',{observe: 'response'})
  }

}
