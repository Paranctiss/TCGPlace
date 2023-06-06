import {Injectable} from "@angular/core";
import {SearchPostModel} from "../../../core/models/search-post.model";
import {Observable, map} from "rxjs";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {POST_URL} from "../../../../../config";
import {ExtensionModel} from "../../../home/components/extension-card-slider/models/extension.model";
import {GradingModel} from "../../../core/models/grading.model";

@Injectable()

export class SearchPostService{
  constructor(private http: HttpClient) {}
  private apiURL = POST_URL;

  getPublicSearchPosts(idReference:string | undefined,
                       extensions:ExtensionModel[] | undefined,
                       gradings:GradingModel[] | undefined): Observable<HttpResponse<SearchPostModel[]>>{

    let idExtensions = extensions?.map(extension => extension.id)
    let stringExtensions = idExtensions?.toString()
    stringExtensions == '' ? stringExtensions = undefined : stringExtensions;

    let idGradings = gradings?.map(grading => grading.id)
    let stringGradings = idGradings?.toString()
    stringGradings == '' ? stringGradings = undefined : stringGradings;

    return this.http.get<SearchPostModel[]>(`${this.apiURL}/SearchPost/public?idReference=${idReference}&idExtensions=${stringExtensions}&idGradings=${stringGradings}`,{observe: 'response'})
  }

  getSingleSearchPost(id:any): Observable<HttpResponse<SearchPostModel>>{
    return this.http.get<SearchPostModel>(`${this.apiURL}/SearchPost/${id}`,{observe: 'response'})
  }

  getSomeSearchPostForUser(userId:number, nbMax:number): Observable<HttpResponse<SearchPostModel[]>>{
    return this.http.get<SearchPostModel[]>(`${this.apiURL}/SearchPost/user/${userId}/${nbMax}`,{observe: 'response'})
  }

}
