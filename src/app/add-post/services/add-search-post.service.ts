import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchPostModel} from "../../core/models/search-post.model";

@Injectable({
  providedIn: 'root'
})

export class AddSearchPostService{
  constructor(private http: HttpClient) {}

  PostSearchPost(searchPost: SearchPostModel):Observable<HttpResponse<SearchPostModel>>{
    return this.http.post<SearchPostModel>('https://localhost:7033/SearchPost/add', searchPost, {observe: 'response'})
  }
}
