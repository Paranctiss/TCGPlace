import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchService} from "../../../core/services/SearchService/search.service";
import {debounceTime, distinctUntilChanged, filter, Observable, startWith, Subject, switchMap, tap} from "rxjs";
import {ItemSearchResponseModel} from "../../../core/models/item-search-response.model";
import {PokemonItemReferenceModel} from "../../../core/models/pokemon-item-reference.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-reference',
  templateUrl: './search-reference.component.html',
  styleUrls: ['./search-reference.component.scss']
})
export class SearchReferenceComponent {
  public valueSubject = new Subject<string>();
  public searchValue: string = ""
  @Input() DefaultResults:boolean = false;
  //results$: Observable<PokemonItemReferenceModel[]>;

  constructor(private searchService:SearchService) {
    /*this.results$ = this.valueSubject.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => this.DefaultResults || value != ""),
      switchMap(value => this.searchService.SearchReference(value).pipe(
      ))
    ); */
  }

  onValueChanged(value:any) {
    //Si pas de resultat par defaut et que rien n'est recherché on fait rien =>
    //Si on demande des résultat par défaut = on rentre tout le temps
    //Dans le cas contraire, on vérifie si la valeur est bien non vide

    if(this.DefaultResults || value != ""){
      this.valueSubject.next(value.detail.value);
    }
  }
}
