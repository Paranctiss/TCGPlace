import {Injectable} from "@angular/core";
import {SearchPostModel} from "../../../core/models/search-post.model";
import {Observable, map} from "rxjs";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {POST_URL} from "../../../../../config";

@Injectable({
  providedIn: 'root'
})

export class SearchPostService{
  constructor(private http: HttpClient) {}
  private apiURL = POST_URL;

  getPublicSearchPosts(idReference:string | undefined): Observable<HttpResponse<SearchPostModel[]>>{
    return this.http.get<SearchPostModel[]>(`${this.apiURL}/SearchPost/public?idReference=${idReference}`,{observe: 'response'})
  }

  getSingleSearchPost(id:any): Observable<HttpResponse<SearchPostModel>>{
    return this.http.get<SearchPostModel>(`${this.apiURL}/SearchPost/${id}`,{observe: 'response'})
  }

  getSomeSearchPostForUser(userId:number, nbMax:number): Observable<HttpResponse<SearchPostModel[]>>{
    return this.http.get<SearchPostModel[]>(`${this.apiURL}/SearchPost/user/${userId}/${nbMax}`,{observe: 'response'})
  }

}
