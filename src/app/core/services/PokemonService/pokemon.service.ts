import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonItemReferenceModel} from "../../models/pokemon-item-reference.model";

@Injectable({
  providedIn: 'root'
})

export class PokemonService{
  constructor(private http: HttpClient) {}

  GetAllReference():Observable<PokemonItemReferenceModel[]>{
      return this.http.get<PokemonItemReferenceModel[]>(`https://localhost:7033/api/Pokemon`)
  }

  GetReferenceById(id:string):Observable<PokemonItemReferenceModel>{
    return this.http.get<PokemonItemReferenceModel>(`https://localhost:7033/api/Pokemon/${id}`)
  }
}
