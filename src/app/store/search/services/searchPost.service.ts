import {Injectable} from "@angular/core";
import {SearchPostModel} from "../../../core/models/search-post.model";
import {Observable, map} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {API_URL} from "../../../../../config";

@Injectable({
  providedIn: 'root'
})

export class SearchPostService{
  constructor(private http: HttpClient) {}
  private apiURL = API_URL;

  getPublicSearchPosts(): Observable<HttpResponse<SearchPostModel[]>>{
    return this.http.get<SearchPostModel[]>(`${this.apiURL}/SearchPost/getPublics`,{observe: 'response'})
  }

}
