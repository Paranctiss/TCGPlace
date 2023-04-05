import {Injectable} from "@angular/core";
import {SearchPostModel} from "../../../core/models/search-post.model";
import {Observable, map} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {POST_URL} from "../../../../../config";

@Injectable({
  providedIn: 'root'
})

export class SearchPostService{
  constructor(private http: HttpClient) {}
  private apiURL = POST_URL;

  getPublicSearchPosts(): Observable<HttpResponse<SearchPostModel[]>>{
    return this.http.get<SearchPostModel[]>(`${this.apiURL}/SearchPost/public`,{observe: 'response'})
  }

}
