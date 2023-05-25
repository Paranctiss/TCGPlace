import {Injectable} from "@angular/core";
import {Observable, map} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {POST_URL} from "../../../../../config";
import { SalePostModel } from "src/app/core/models/sale-post.model";

@Injectable({
  providedIn: 'root'
})

export class SalePostService{
  constructor(private http: HttpClient) {}
  private apiURL = POST_URL;

  getPublicSalePosts(): Observable<HttpResponse<SalePostModel[]>>{
    return this.http.get<SalePostModel[]>(`${this.apiURL}/SalePost/public`,{observe: 'response'})
  }

  getSingleSalePost(id:any): Observable<HttpResponse<SalePostModel>>{
    return this.http.get<SalePostModel>(`${this.apiURL}/SalePost/${id}`,{observe: 'response'})
  }

  getSomeSalePostForUser(userId:number, pageSize:number): Observable<HttpResponse<SalePostModel[]>>{
    return this.http.get<SalePostModel[]>(`${this.apiURL}/SalePost/user/${userId}/${pageSize}`,{observe: 'response'})
  }
}
