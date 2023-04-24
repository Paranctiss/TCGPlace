import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonItemReferenceModel} from "../../models/pokemon-item-reference.model";
import {API_URL} from "../../../../../config";

@Injectable({
  providedIn: 'root'
})

export class PokemonService{
  constructor(private http: HttpClient) {}

  private apiURL = API_URL;

  GetAllReference():Observable<PokemonItemReferenceModel[]>{
      return this.http.get<PokemonItemReferenceModel[]>(`${this.apiURL}/api/Pokemon`)
  }

  GetReferenceById(id:string):Observable<PokemonItemReferenceModel>{
    return this.http.get<PokemonItemReferenceModel>(`${this.apiURL}/api/Pokemon/${id}`)
  }
}
