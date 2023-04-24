import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchPostModel} from "../../core/models/search-post.model";
import {API_URL} from "../../../../config";

@Injectable({
  providedIn: 'root'
})

export class AddSearchPostService{
  constructor(private http: HttpClient) {}

  private apiURL = API_URL;

  PostSearchPost(searchPost: SearchPostModel):Observable<HttpResponse<SearchPostModel>>{
    return this.http.post<SearchPostModel>(`${this.apiURL}/SearchPost/add`, searchPost, {observe: 'response'})
  }
}
