import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {POST_URL} from "../../../../../config";
import {Observable} from "rxjs";
import {SearchPostModel} from "../../../core/models/search-post.model";
import {SalePostModel} from "../../../core/models/sale-post.model";

@Injectable({
  providedIn: 'root'
})
export class SalePostService {
  constructor(private http: HttpClient) {}
  private apiURL = POST_URL;

  getPublicSalePosts(pageNumber : number = 1,pageSize : number = 10): Observable<HttpResponse<SalePostModel[]>>{
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
    return this.http.get<SalePostModel[]>(`${this.apiURL}/SalePost/public`,{params : params, observe: 'response'})
  }
}
