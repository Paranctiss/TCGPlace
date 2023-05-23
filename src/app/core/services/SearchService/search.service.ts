import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {CATALOG_URL, POST_URL} from "../../../../../config";
import {ItemSearchResponseModel} from "../../models/item-search-response.model";
import {PokemonItemReferenceModel} from "../../models/pokemon-item-reference.model";

@Injectable({
  providedIn: 'root'
})

export class SearchService{
  constructor(private http: HttpClient) {

  }

  private apiURL = CATALOG_URL;
  SearchReference(query:string):Observable<PokemonItemReferenceModel[]>{
    return this.http.get<PokemonItemReferenceModel[]>(`${this.apiURL}/Search/${query}`);
  }
}
