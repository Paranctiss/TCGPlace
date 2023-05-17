import {Component, EventEmitter, Output} from '@angular/core';
import {SearchService} from "../../../core/services/SearchService/search.service";
import {debounceTime, distinctUntilChanged, Observable, startWith, Subject, switchMap, tap} from "rxjs";
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
  results$: Observable<PokemonItemReferenceModel[]>;

  constructor(private searchService:SearchService) {
    this.results$ = this.valueSubject.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => this.searchService.SearchReference(value).pipe(
      ))
    );
  }

  onValueChanged(value:any) {
    this.valueSubject.next(value.detail.value);
  }
}
