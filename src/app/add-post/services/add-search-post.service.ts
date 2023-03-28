import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonItemReferenceModel} from "../../core/models/pokemon-item-reference.model";
import {SalePostModel} from "../../core/models/sale-post.model";
import {SearchPostModel} from "../../core/models/search-post.model";

@Injectable({
  providedIn: 'root'
})

export class AddSearchPostService{
  constructor(private http: HttpClient) {}

  PostSalePost(searchPost: SearchPostModel):Observable<HttpResponse<SearchPostModel>>{
    return this.http.post<SearchPostModel>('https://localhost:7033/SearchPost/add', searchPost, {observe: 'response'})
  }
}
